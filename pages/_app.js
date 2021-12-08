import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const usuario = useAutenticacion();
  console.log(usuario)
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
    
  )
}

export default MyApp
