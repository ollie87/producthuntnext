import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import { Campo, Error, Formulario, InputSubmit } from '../components/ui/Forumulario';
import { css } from '@emotion/react'
import useValidacion from '../hooks/useValidacion';
import validarInicioSesion from '../validacion/validarInicioSesion';
import firebase from '../firebase';
import { useRouter } from 'next/router'

const STATE_INICIAL = {
  email: '',
  password: ''
}

export default function Login() {
  const [error, guardarError] = useState(false)
  const { valores, errores, submitForm, handleSubmit, handleChange, handlerBlur} = useValidacion(STATE_INICIAL, validarInicioSesion, iniciarSesion);
  const { email, password } = valores;
  const router = useRouter()
  async function iniciarSesion () {
    try {
      await firebase.login(email, password);
      router.push('/')
    } catch (error) {
      console.log('ERROR al iniciar sesión: ', error);
      guardarError(error.message);
    }
  }
  return (
    <div>
      <Layout>
        <>
          <h1 css={css`text-align: center; margin-top: 5rem;`}>Iniciar Sesión</h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <Campo>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder="Tu Email"
                value={email}
                onChange={handleChange}
                onBlur={handlerBlur}
              />
            </Campo>
            { errores.email && <Error>{ errores.email }</Error> }
            <Campo>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder="Tu Password" 
                value={password}
                onChange={handleChange}
                onBlur={handlerBlur}
              />
            </Campo>
            { errores.password && <Error>{ errores.password }</Error> }
            {error && <Error>{error}</Error>}
            <InputSubmit type='submit' value='Iniciar Sesión' />
          </Formulario>
        </>
      </Layout>
    </div>
  )
}
