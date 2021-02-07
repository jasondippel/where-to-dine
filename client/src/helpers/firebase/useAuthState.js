/**
 * Simplifies using the useAuthState hook. No longer need to pass auth object into it
 */
import { useAuthState as useAuthStateRaw } from 'react-firebase-hooks/auth'
import { auth } from './core'

const useAuthState = () => useAuthStateRaw(auth)

export default useAuthState
