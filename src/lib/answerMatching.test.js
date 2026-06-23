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
})
