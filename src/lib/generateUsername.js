import {USERNAME_ADJECTIVES, USERNAME_NOUNS} from './usernameWords'

const pick = (words) => words[Math.floor(Math.random() * words.length)]

export const generateUsername = () => {
  const adjective = pick(USERNAME_ADJECTIVES)
  const noun = pick(USERNAME_NOUNS)
  const suffix = String(Math.floor(Math.random() * 90) + 10)

  return `${adjective}${noun}${suffix}`
}
