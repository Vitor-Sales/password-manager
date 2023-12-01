import { useState } from 'react';
import { ServiceProps } from './Type';

function Register(
  { service, removeCard }: ServiceProps,
) {
  const { name, login, URL, password } = service;
  const [isHidden, setIsHidden] = useState(false);

  function hidePassword() {
    setIsHidden(!isHidden);
  }
  return (
    <div className="card-service">
      <a href={ URL }>{name}</a>
      <p>{login}</p>
      <p>{isHidden ? '******' : password}</p>
      <label htmlFor="hidden">Esconder senhas</label>
      <input type="checkbox" id="hidden" onChange={ hidePassword } />
      <button data-testid="remove-btn" onClick={ () => removeCard(name) }>Apagar</button>
    </div>
  );
}

export default Register;
