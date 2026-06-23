import {generateUsername} from './generateUsername'

const STORAGE_KEY = 'enumeration.profile'

export const createEmptyProfile = (username = generateUsername()) => ({
  username,
  introduced: false,
  totalScore: 0,
  scoresByCategory: {},
  gameHistory: [],
})

export const loadProfile = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return null
    }

    return JSON.parse(raw)
  } catch {
    return null
  }
}

export const saveProfile = (profile) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
}

export const ensureProfile = () => {
  const existing = loadProfile()

  if (existing?.username) {
    return existing
  }

  const profile = createEmptyProfile()
  saveProfile(profile)
  return profile
}

export const updateUsername = (username) => {
  const profile = loadProfile() ?? createEmptyProfile()
  const trimmed = username.trim()

  if (!trimmed) {
    return profile
  }

  const nextProfile = {...profile, username: trimmed}
  saveProfile(nextProfile)
  return nextProfile
}

export const hasIntroduced = (profile) => profile?.introduced === true

export const completeIntroduction = (username) => {
  const profile = loadProfile() ?? createEmptyProfile()
  const trimmed = username.trim()
  const nextProfile = {
    ...profile,
    username: trimmed || profile.username,
    introduced: true,
  }
  saveProfile(nextProfile)
  return nextProfile
}
