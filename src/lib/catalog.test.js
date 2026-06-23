import {describe, expect, it, vi} from 'vitest'
import {
  getCategoriesWithLists,
  getListInCategory,
  getListsForCategory,
  loadFullList,
} from './catalog'

vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}))

import axios from 'axios'

const catalog = {
  categories: [
    {slug: 'geo', name: 'География'},
    {slug: 'sport', name: 'Спорт'},
    {slug: 'science', name: 'Наука'},
  ],
  lists: [
    {
      slug: 'olympic-capitals',
      name: 'Олимпийские столицы',
      categories: ['geo', 'sport'],
    },
    {slug: 'us-states', name: 'Штаты США', categories: ['geo']},
    {slug: 'constellations', name: 'Созвездия', categories: ['science']},
  ],
}

describe('getCategoriesWithLists', () => {
  it('assigns lists to categories and counts them correctly', () => {
    const categories = getCategoriesWithLists(catalog)

    expect(categories[0].lists.map((list) => list.slug)).toEqual([
      'olympic-capitals',
      'us-states',
    ])
    expect(categories[1].lists.map((list) => list.slug)).toEqual([
      'olympic-capitals',
    ])
    expect(categories[2].lists.map((list) => list.slug)).toEqual([
      'constellations',
    ])
    expect(categories.map((category) => category.lists.length)).toEqual([
      2, 1, 1,
    ])
  })
})

describe('getListsForCategory', () => {
  it('returns lists in catalog order', () => {
    expect(
      getListsForCategory(catalog, 'geo').map((list) => list.slug)
    ).toEqual(['olympic-capitals', 'us-states'])
  })
})

describe('getListInCategory', () => {
  it('returns list only when assigned to category', () => {
    expect(getListInCategory(catalog, 'sport', 'olympic-capitals')?.slug).toBe(
      'olympic-capitals'
    )
    expect(getListInCategory(catalog, 'sport', 'us-states')).toBeNull()
  })
})

describe('loadFullList', () => {
  it('merges catalog stub with answers from list file', async () => {
    axios.get.mockResolvedValueOnce({
      data: {answers: [{text: 'Афины'}]},
    })

    const list = await loadFullList(catalog, 'olympic-capitals')

    expect(list).toEqual({
      slug: 'olympic-capitals',
      name: 'Олимпийские столицы',
      categories: ['geo', 'sport'],
      answers: [{text: 'Афины'}],
    })
  })
})
