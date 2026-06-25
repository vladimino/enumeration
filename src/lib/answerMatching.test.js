import {describe, expect, it} from 'vitest'
import {reviewAnswers} from './answerMatching'

const reference = [
  {text: 'Нью-Йорк', aliases: ['New York', 'Нью Йорк']},
  {text: 'Париж', aliases: ['Paris']},
]

describe('reviewAnswers', () => {
  it('marks matching answers green and tracks missed items', () => {
    const result = reviewAnswers(['нью йорк', 'Лондон', 'Paris'], reference)

    expect(result.reviewed).toEqual([
      {text: 'нью йорк', status: 'correct', canonical: 'Нью-Йорк'},
      {text: 'Лондон', status: 'incorrect'},
      {text: 'Paris', status: 'correct', canonical: 'Париж'},
    ])
    expect(result.missed).toEqual([])
    expect(result.score).toBe(2)
    expect(result.total).toBe(2)
  })

  it('lists reference answers the player did not name', () => {
    const result = reviewAnswers(['Париж'], reference)

    expect(result.missed).toEqual(['Нью-Йорк'])
    expect(result.score).toBe(1)
  })

  it('accepts small typos in long answers', () => {
    const cities = [
      {text: 'Лос-Анджелес'},
      {text: 'Кеннеди'},
      {text: 'Йоханнесбург'},
    ]
    const result = reviewAnswers(
      ['Лос-Анжелес', 'Кенеди', 'Йоханесбург'],
      cities
    )

    expect(result.reviewed.map((item) => item.status)).toEqual([
      'correct',
      'correct',
      'correct',
    ])
    expect(result.score).toBe(3)
  })

  it('does not fuzzy-match short strings', () => {
    const acronyms = [{text: 'MCP'}, {text: 'API'}]
    const result = reviewAnswers(['MVP'], acronyms)

    expect(result.reviewed[0].status).toBe('incorrect')
    expect(result.score).toBe(0)
  })

  it('prefers exact matches over fuzzy ones for the same slot', () => {
    const items = [{text: 'Кеннеди'}]
    const result = reviewAnswers(['Кенеди', 'Кеннеди'], items)

    expect(result.reviewed[1]).toEqual({
      text: 'Кеннеди',
      status: 'correct',
      canonical: 'Кеннеди',
    })
    expect(result.reviewed[0].status).toBe('incorrect')
    expect(result.score).toBe(1)
  })
})
