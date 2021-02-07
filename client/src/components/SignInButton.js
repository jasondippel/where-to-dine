import { GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import { auth } from 'helpers/firebase'

const SignInButton = (props) => {
  const history = useHistory()

  const handleClick = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await auth.signInWithPopup(provider)
      history.push('/my-places')
    } catch (e) {
      if (!e.code || e.code !== 'auth/popup-closed-by-user') {
        console.error('Error during signin', e)
      }
    }
  }

  return (
    <Button
      type="primary"
      onClick={handleClick}
      icon={<GoogleOutlined />}
      {...props}
    >
      Sign In with Google
    </Button>
  )
}

export default SignInButton
