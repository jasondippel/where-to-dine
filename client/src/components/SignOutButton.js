import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { auth } from 'helpers/firebase'

const SignOutButton = (props) => {
  const history = useHistory()

  const handleClick = async () => {
    await auth.signOut()
    history.push('/')
  }

  return (
    <Button onClick={handleClick} {...props}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
