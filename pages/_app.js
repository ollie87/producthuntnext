import { FirebaseContext } from '../firebase';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  
  return (
    <FirebaseContext.Provider
      value={{
        
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
    
  )
}

export default MyApp
