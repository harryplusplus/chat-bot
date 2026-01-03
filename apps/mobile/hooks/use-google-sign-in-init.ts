import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useEffect } from 'react'

export function useGoogleSignInInit() {
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId:
        '740994650756-5ln02nagof20qhifra4ps2p1lbimshh3.apps.googleusercontent.com',
    })
  }, [])
}
