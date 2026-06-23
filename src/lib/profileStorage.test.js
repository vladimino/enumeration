import {describe, expect, it, beforeEach} from 'vitest'
import {
  completeIntroduction,
  createEmptyProfile,
  hasIntroduced,
  loadProfile,
  saveProfile,
} from './profileStorage'

describe('profile introduction', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with introduced false', () => {
    const profile = createEmptyProfile('swiftbadger47')

    expect(profile.introduced).toBe(false)
    expect(hasIntroduced(profile)).toBe(false)
  })

  it('marks introduction complete and keeps username', () => {
    saveProfile(createEmptyProfile('swiftbadger47'))

    const profile = completeIntroduction('swiftbadger47')

    expect(profile.introduced).toBe(true)
    expect(profile.username).toBe('swiftbadger47')
    expect(hasIntroduced(loadProfile())).toBe(true)
  })

  it('saves a changed username on introduction', () => {
    saveProfile(createEmptyProfile('swiftbadger47'))

    const profile = completeIntroduction('  myname  ')

    expect(profile.username).toBe('myname')
    expect(profile.introduced).toBe(true)
  })
})
