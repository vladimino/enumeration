import {it, vi, expect} from 'vitest'
import {createRoot} from 'react-dom/client'
import {act} from 'react'
import App from './App'

vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({data: []})),
  },
}))

it('renders menu content at the enumeration base path', async () => {
  window.history.pushState({}, '', '/enumeration/')

  const div = document.createElement('div')
  document.body.appendChild(div)
  const root = createRoot(div)

  await act(async () => {
    root.render(<App />)
  })

  expect(div.textContent).toContain('Правила')
  root.unmount()
  div.remove()
})
