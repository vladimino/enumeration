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

export const reviewAnswers = (userAnswers, referenceAnswers) => {
  const reference = referenceAnswers.map((answer, index) => ({
    index,
    text: typeof answer === 'string' ? answer : answer.text,
    forms: new Set(getAnswerForms(answer).map(normalizeAnswer)),
  }))

  const foundIndices = new Set()

  const reviewed = userAnswers.map((userText) => {
    const normalized = normalizeAnswer(userText)
    const match = reference.find(
      (item) => !foundIndices.has(item.index) && item.forms.has(normalized)
    )

    if (match) {
      foundIndices.add(match.index)
      return {
        text: userText,
        status: 'correct',
        canonical: match.text,
      }
    }

    return {
      text: userText,
      status: 'incorrect',
    }
  })

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
