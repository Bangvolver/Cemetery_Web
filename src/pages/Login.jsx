// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/usercontent';

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
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.6 1.768-1.582 3.38-2.92 4.59M15 12a9 9 0 01-3 5" />
  </svg>
);

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
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A8.962 8.962 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.836 9.836 0 012.162-3.54M3 3l18 18M13.875 5.175A8.96 8.96 0 0112 5c-4.477 0-8.268 2.943-9.542 7a9.835 9.835 0 002.162 3.54M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email === 'cementerioecos@gmail.com' && password === 'password') {
        setUser({ email });
        alert('Inicio de sesión exitoso. Bienvenido EcosFamily!');
        navigate('/home');
      } else {
        throw new Error('Credenciales inválidas');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert('Error de inicio de sesión: Email o contraseña inválidos.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginSection>
      <div className="page-container">
      <div className="form-container">
          <div className="form-header">
            <h2 className="form-title">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span>Iniciando sesión...</span>
                ) : (
                  <>
                    Iniciar Sesión
                  </>
                )}
              </button>
            </form>
          </div>
          <div className="form-footer">
            <p className="footer-text">
              ¿No tienes una cuenta?{' '}
              <Link to={"/register"} className='ButtonTxt'>Registro</Link>
            </p>
          </div>
        </div>
      </div>
    </LoginSection>
  );
}

export default Login;


const LoginSection = styled.section`
  .page-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: linear-gradient(to bottom right, #fbffe6, #ffe6b7);
  }

  .form-container {
    width: 100%;
    max-width: 400px;
    padding-right: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .form-header {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.875rem;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin-bottom: 1.5rem;
  }

  .error-message {
    color: red;
    font-size: 0.875rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .input-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #4B5563;
  }

  .input-field {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1px solid #D1D5DB;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: border-color 0.15s ease-in-out;

    &:focus {
      outline: none;
      border-color: #3B82F6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  .password-input-wrapper {
    position: relative;
  }

  .password-toggle-button {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #6B7280;

    &:hover {
      color: #4B5563;
    }
  }

  .submit-button {
    width: 100%;
    padding: 0.625rem 1.25rem;
    background-color: #3B82F6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #2563EB;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .form-footer {
    padding: 1rem 1.5rem;
    background-color: #F9FAFB;
    border-top: 1px solid #E5E7EB;
  }

  .footer-text {
    text-align: center;
    font-size: 0.875rem;
    color: #6B7280;
  }

  .footer-link {
    color: #3B82F6;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
