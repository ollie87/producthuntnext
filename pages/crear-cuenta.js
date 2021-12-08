import React, { useState } from 'react';
import Layout from "../components/layout/Layout";
import { Campo, Error, Formulario, InputSubmit } from '../components/ui/Forumulario';
import { css } from '@emotion/react'
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';
import firebase from '../firebase';
import { useRouter } from 'next/router'

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

export default function CrearCuenta() {
  const [error, guardarError] = useState(false)
  const { valores, errores, submitForm, handleSubmit, handleChange, handlerBlur} = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);
  const { nombre, email, password } = valores;
  const router = useRouter()
  async function crearCuenta () {
    try {
      await firebase.registrar(nombre, email, password);
      router.push('/')
    } catch(error) {
      console.log('ERROR al crear el usuario: ', error);
      guardarError(error.message);
    }
    
  }
  return (
    <div>
      <Layout>
        <>
          <h1 css={css`text-align: center; margin-top: 5rem;`}>Crear Cuenta</h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <Campo>
              <label htmlFor='nombre'>Nombre</label>
              <input 
                type='text'
                id='nombre'
                name="nombre"
                placeholder="Tu Nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handlerBlur}
              />
            </Campo>
            { errores.nombre && <Error>{ errores.nombre }</Error> }
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
            <InputSubmit type='submit' value='Crear cuenta' />
          </Formulario>
        </>
      </Layout>
    </div>
  )
}
