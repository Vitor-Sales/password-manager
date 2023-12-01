import { useState } from 'react';

function Form() {
  const [isShown, setIsShown] = useState(true);
  const [nameValue, setNameValue] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [URLValue, setURLValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function handleLoginChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginValue(event.target.value.trim());
  }
  function handlePasswordChange(event: any) {
    setPasswordValue(event.target.value.trim());
  }
  function handleURLChange(event: any) {
    setURLValue(event.target.value.trim());
  }
  function validatePassword() {
    const result = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).*/.test(passwordValue);
    return passwordValue.length < 8 || passwordValue.length > 16 || !result;
    //
  }

  return (
    <div>
      {!isShown && (
        <div className="form-container">
          <div>
            <p>A senha deve:</p>
            <ul className="password-requirements">
              <li
                className={ passwordValue.length < 8 ? 'invalid-password-check'
                  : 'valid-password-check' }
              >
                Possuir 8 ou mais caracteres
              </li>
              <li
                className={ passwordValue.length > 16 ? 'invalid-password-check'
                  : 'valid-password-check' }
              >
                Possuir até 16 caracteres

              </li>
              <li
                className={ !/(?=.*[a-zA-Z])(?=.*\d)/.test(passwordValue) ? 'invalid-password-check'
                  : 'valid-password-check' }
              >
                Possuir letras e números

              </li>
              <li
                className={ !/(?=.*[\W_])/.test(passwordValue) ? 'invalid-password-check'
                  : 'valid-password-check' }
              >
                Possuir algum caractere especial

              </li>
            </ul>
          </div>
          <form className="form">
            <label htmlFor="nome-servico">Nome do serviço</label>
            <input
              type="text"
              id="nome-servico"
              onChange={ (e) => setNameValue(e.target.value) }
              value={ nameValue }
            />
            <label htmlFor="login">Login</label>
            <input
              type="text"
              id="login"
              onChange={ handleLoginChange }
              value={ loginValue }
            />
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              onChange={ handlePasswordChange }
              value={ passwordValue }
            />
            <label htmlFor="url">URL</label>
            <input type="text" id="url" onChange={ handleURLChange } value={ URLValue } />
            <div>
              <button
                className="btn-register"
                type="button"
                disabled={ validatePassword()
                    || loginValue.length === 0
                    || nameValue.length === 0 }
              >
                Cadastrar
              </button>
              <button
                className="btn-cancel"
                type="button"
                onClick={ () => setIsShown(true) }
              >
                Cancelar

              </button>
            </div>
          </form>
        </div>
      )}
      {isShown && (
        <button onClick={ () => setIsShown(false) }>Cadastrar nova senha</button>
      )}
    </div>

  );
}

export default Form;
