import React from 'react';
import Layout from "../components/layout/Layout";
import { Campo, Formulario, InputSubmit } from '../components/ui/Forumulario';
import { css } from '@emotion/react'

export default function CrearCuenta() {
  return (
    <div>
      <Layout>
        <>
          <h1 css={css`text-align: center; margin-top: 5rem;`}>Crear Cuenta</h1>
          <Formulario>
            <Campo>
              <label htmlFor='nombre'>Nombre</label>
              <input type='text' id='nombre' name="nombre" placeholder="Tu Nombre" />
            </Campo>
            <Campo>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' placeholder="Tu Email" />
            </Campo>
            <Campo>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' placeholder="Tu Password" />
            </Campo>
            <InputSubmit type='submit' value='Crear cuenta' />
          </Formulario>
        </>
      </Layout>
    </div>
  )
}
