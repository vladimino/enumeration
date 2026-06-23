export const formatPlayedAt = (date) =>
  date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

export const getListRecord = (profile, listSlug) =>
  profile?.listRecords?.[listSlug]?.score ?? null

export const recomputeAggregates = (profile, catalog) => {
  const listRecords = profile.listRecords ?? {}
  let totalScore = 0
  const scoresByCategory = {}

  for (const [listSlug, record] of Object.entries(listRecords)) {
    totalScore += record.score

    const list = catalog?.lists?.find((item) => item.slug === listSlug)
    for (const categorySlug of list?.categories ?? []) {
      scoresByCategory[categorySlug] =
        (scoresByCategory[categorySlug] ?? 0) + record.score
    }
  }

  return {totalScore, scoresByCategory}
}

export const recordGameResult = (profile, session, catalog) => {
  const historyEntry = {
    playedAt: formatPlayedAt(new Date()),
    categorySlug: session.categorySlug,
    categoryName: session.categoryName,
    listSlug: session.listSlug,
    listName: session.listName,
    score: session.score,
    total: session.total,
  }

  const listRecords = {...(profile.listRecords ?? {})}
  const currentRecord = listRecords[session.listSlug]?.score ?? 0

  if (session.score > currentRecord) {
    listRecords[session.listSlug] = {
      score: session.score,
      total: session.total,
    }
  }

  const nextProfile = {
    ...profile,
    gameHistory: [...(profile.gameHistory ?? []), historyEntry],
    listRecords,
  }

  return {
    ...nextProfile,
    ...recomputeAggregates(nextProfile, catalog),
  }
}
