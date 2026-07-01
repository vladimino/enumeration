import {describe, expect, it, vi} from 'vitest'
import {publicUrl} from './publicUrl'

describe('publicUrl', () => {
  it('joins paths when base has a trailing slash', () => {
    vi.stubEnv('BASE_URL', '/enumeration/')

    expect(publicUrl('logo.png')).toBe('/enumeration/logo.png')
    expect(publicUrl('data/catalog.json')).toBe(
      '/enumeration/data/catalog.json'
    )
  })

  it('joins paths when base has no trailing slash', () => {
    vi.stubEnv('BASE_URL', '/enumeration')

    expect(publicUrl('logo.png')).toBe('/enumeration/logo.png')
  })
})
