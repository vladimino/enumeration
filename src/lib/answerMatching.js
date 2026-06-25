import {distance} from 'fastest-levenshtein'

const normalizeAnswer = (text) =>
  text
    .trim()
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[-–—]/g, ' ')
    .replace(/\s+/g, ' ')

const getAnswerForms = (answer) => {
  if (typeof answer === 'string') {
    return [answer]
  }

  return [answer.text, ...(answer.aliases ?? [])]
}

const maxEditsForLength = (length) => {
  if (length <= 4) {
    return 0
  }

  if (length <= 8) {
    return 1
  }

  return 2
}

const fuzzyDistance = (normalizedInput, forms) => {
  let best = Infinity

  for (const form of forms) {
    const allowed = maxEditsForLength(
      Math.min(normalizedInput.length, form.length)
    )

    if (allowed === 0) {
      continue
    }

    const dist = distance(normalizedInput, form)
    if (dist <= allowed && dist < best) {
      best = dist
    }
  }

  return best
}

export const reviewAnswers = (userAnswers, referenceAnswers) => {
  const reference = referenceAnswers.map((answer, index) => ({
    index,
    text: typeof answer === 'string' ? answer : answer.text,
    forms: [...new Set(getAnswerForms(answer).map(normalizeAnswer))],
  }))

  const exactForms = reference.map((item) => new Set(item.forms))
  const foundIndices = new Set()
  const reviewed = new Array(userAnswers.length)
  const pendingFuzzy = []

  userAnswers.forEach((userText, position) => {
    const normalized = normalizeAnswer(userText)
    const match = reference.find(
      (item) =>
        !foundIndices.has(item.index) && exactForms[item.index].has(normalized)
    )

    if (match) {
      foundIndices.add(match.index)
      reviewed[position] = {
        text: userText,
        status: 'correct',
        canonical: match.text,
      }
      return
    }

    pendingFuzzy.push({position, userText, normalized})
  })

  for (const {position, userText, normalized} of pendingFuzzy) {
    let bestItem = null
    let bestDistance = Infinity

    for (const item of reference) {
      if (foundIndices.has(item.index)) {
        continue
      }

      const dist = fuzzyDistance(normalized, item.forms)
      if (dist < bestDistance) {
        bestDistance = dist
        bestItem = item
      }
    }

    if (bestItem) {
      foundIndices.add(bestItem.index)
      reviewed[position] = {
        text: userText,
        status: 'correct',
        canonical: bestItem.text,
      }
      continue
    }

    reviewed[position] = {
      text: userText,
      status: 'incorrect',
    }
  }

  const missed = reference
    .filter((item) => !foundIndices.has(item.index))
    .map((item) => item.text)

  return {
    reviewed,
    missed,
    score: foundIndices.size,
    total: reference.length,
  }
}
