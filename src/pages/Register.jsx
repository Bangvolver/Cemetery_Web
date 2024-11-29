// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Iconos personalizados (puedes reutilizar los mismos)
// eslint-disable-next-line react/prop-types
const Eye = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    width={size}
    height={size}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.6 1.768-1.582 3.38-2.92 4.59M15 12a9 9 0 01-3 5"
    />
  </svg>
)

// eslint-disable-next-line react/prop-types
const EyeOff = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    width={size}
    height={size}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.875 18.825A8.962 8.962 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.836 9.836 0 012.162-3.54M3 3l18 18M13.875 5.175A8.96 8.96 0 0112 5c-4.477 0-8.268 2.943-9.542 7a9.835 9.835 0 002.162 3.54M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (formData.password !== formData.confirmPassword) {
        throw new Error('Las contraseñas no coinciden')
      }

      alert('Registro exitoso. ¡Bienvenido a la plataforma!')
    } catch (error) {
      alert(`Error en el registro: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <RegisterSection>
      <div className="page-container">
        <div className="form-container">
          <div className="form-header">
            <h2 className="form-title">Registro</h2>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="input-group">
                <label htmlFor="name" className="input-label">
                  Nombre Completo
                </label>
                <input
                  id="name"
                  type="text"
                  className="input-field"
                  placeholder="Juan Pérez"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  placeholder="correo@ejemplo.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password" className="input-label">
                  Contraseña
                </label>
                <div className="password-input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className="input-field"
                    placeholder="••••••••"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
                    }
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword" className="input-label">
                  Confirmar Contraseña
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="input-field"
                  placeholder="••••••••"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
              </button>
            </form>
          </div>
          <div className="form-footer">
            <p className="footer-text">
              ¿Ya tienes una cuenta?{' '}
              <Link to={"/Login"} className='ButtonTxt'>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </RegisterSection>
  )
}

export default Register

const RegisterSection = styled.section`
  .page-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: linear-gradient(to bottom right, #fdfde7, #ffe0b2);
  }

  .form-container {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  .form-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .input-group {
    margin-bottom: 1.5rem;
    padding-right: 1rem;
  }

  .input-label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .input-field {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  .submit-button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    color: white;
    background: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .submit-button:disabled {
    background: #90caf9;
    cursor: not-allowed;
  }

  .footer-text {
    text-align: center;
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  .footer-link {
    color: #007bff;
    text-decoration: none;
  }
`
