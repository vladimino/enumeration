import {describe, expect, it} from 'vitest'
import {createEmptyProfile} from './profileStorage'
import {
  getListRecord,
  recordGameResult,
  recomputeAggregates,
} from './profileProgress'

const catalog = {
  lists: [
    {
      slug: 'olympic-capitals',
      categories: ['geo', 'sport', 'history'],
    },
    {slug: 'us-states', categories: ['geo']},
  ],
}

describe('recordGameResult', () => {
  it('appends session to history with category from play context', () => {
    const profile = createEmptyProfile()

    const next = recordGameResult(
      profile,
      {
        categorySlug: 'geo',
        categoryName: 'География',
        listSlug: 'olympic-capitals',
        listName: 'Олимпийские города',
        score: 10,
        total: 43,
      },
      catalog
    )

    expect(next.gameHistory).toHaveLength(1)
    expect(next.gameHistory[0]).toMatchObject({
      categorySlug: 'geo',
      categoryName: 'География',
      listSlug: 'olympic-capitals',
      listName: 'Олимпийские города',
      score: 10,
      total: 43,
    })
    expect(next.gameHistory[0].playedAt).toBeTruthy()
  })

  it('keeps per-list record at the best score only', () => {
    let profile = createEmptyProfile()
    const session = {
      categorySlug: 'geo',
      categoryName: 'География',
      listSlug: 'olympic-capitals',
      listName: 'Олимпийские города',
      score: 10,
      total: 43,
    }

    profile = recordGameResult(profile, session, catalog)
    profile = recordGameResult(profile, {...session, score: 15}, catalog)
    profile = recordGameResult(profile, {...session, score: 12}, catalog)

    expect(getListRecord(profile, 'olympic-capitals')).toBe(15)
    expect(profile.gameHistory).toHaveLength(3)
  })
})

describe('recomputeAggregates', () => {
  it('sums record scores into total and categories', () => {
    const profile = {
      listRecords: {
        'olympic-capitals': {score: 20, total: 43},
        'us-states': {score: 30, total: 50},
      },
    }

    const {totalScore, scoresByCategory} = recomputeAggregates(profile, catalog)

    expect(totalScore).toBe(50)
    expect(scoresByCategory).toEqual({
      geo: 50,
      sport: 20,
      history: 20,
    })
  })
})
