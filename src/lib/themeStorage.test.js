import {describe, expect, it, beforeEach} from 'vitest'
import {loadTheme, saveTheme, THEMES} from './themeStorage'

describe('themeStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('defaults to light theme', () => {
    expect(loadTheme()).toBe(THEMES.light)
  })

  it('persists dark theme preference', () => {
    saveTheme(THEMES.dark)

    expect(loadTheme()).toBe(THEMES.dark)
  })

  it('falls back to light for unknown values', () => {
    localStorage.setItem('enumeration.theme', 'sepia')

    expect(loadTheme()).toBe(THEMES.light)
  })
})
