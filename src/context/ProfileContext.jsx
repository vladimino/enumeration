import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  ensureProfile,
  saveProfile,
  updateUsername as persistUsername,
} from '../lib/profileStorage'

const ProfileContext = createContext(null)

export const ProfileProvider = ({children}) => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    setProfile(ensureProfile())
  }, [])

  const setUsername = useCallback((username) => {
    setProfile(persistUsername(username))
  }, [])

  const refreshProfile = useCallback(() => {
    setProfile(ensureProfile())
  }, [])

  const patchProfile = useCallback((patch) => {
    setProfile((current) => {
      const base = current ?? ensureProfile()
      const nextProfile = {...base, ...patch}
      saveProfile(nextProfile)
      return nextProfile
    })
  }, [])

  return (
    <ProfileContext.Provider
      value={{profile, setUsername, refreshProfile, patchProfile}}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)

  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider')
  }

  return context
}
