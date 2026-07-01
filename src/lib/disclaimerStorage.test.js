import {describe, expect, it, beforeEach} from 'vitest'
import {
  dismissDisclaimer,
  isDisclaimerDismissed,
  migrateDisclaimerFromCookie,
} from './disclaimerStorage'

describe('disclaimerStorage', () => {
  beforeEach(() => {
    localStorage.clear()
    document.cookie =
      'hide_disclaimer=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
  })

  it('starts with disclaimer visible', () => {
    expect(isDisclaimerDismissed()).toBe(false)
  })

  it('persists dismissal in localStorage', () => {
    dismissDisclaimer()

    expect(isDisclaimerDismissed()).toBe(true)
    expect(localStorage.getItem('enumeration.disclaimerDismissed')).toBe('true')
  })

  it('migrates legacy cookie flag into localStorage', () => {
    document.cookie = 'hide_disclaimer=true; path=/'

    migrateDisclaimerFromCookie()

    expect(isDisclaimerDismissed()).toBe(true)
    expect(document.cookie.includes('hide_disclaimer')).toBe(false)
  })
})
