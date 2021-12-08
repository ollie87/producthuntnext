import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import firebaseConfig from "./config";

class Firebase {
    constructor () {
        initializeApp(firebaseConfig);
        this.auth = getAuth()
    }

    async registrar(nombre, email, password) {
        const nuevoUsuario = await createUserWithEmailAndPassword(this.auth, email, password)
        return await updateProfile(nuevoUsuario.user, {
            displayName: nombre
        })
    }

    async login (email, password) {
        return signInWithEmailAndPassword(this.auth, email, password)
    }

    async cerrarSesion () {
        await signOut(this.auth)
    }
}

const firebase = new Firebase();
export default firebase;