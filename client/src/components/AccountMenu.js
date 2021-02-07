import { SignInButton, SignOutButton } from 'components'
import { useAuthState } from 'helpers/firebase'

const AccountMenu = () => {
  const [user, isLoading] = useAuthState()

  if (isLoading) return null
  if (user) return <SignOutButton />

  return <SignInButton />
}

export default AccountMenu
