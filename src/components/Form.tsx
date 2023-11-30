import { useState } from 'react';

function Form() {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {!isShown && (
        <form>
          <label htmlFor="nome-servico">Nome do serviço</label>
          <input type="text" id="nome-servico" />
          <label htmlFor="login">Login</label>
          <input type="text" id="login" />
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" />
          <label htmlFor="url">URL</label>
          <input type="text" id="url" />
          <button>Cadastrar</button>
          <button onClick={ () => setIsShown(true) }>Cancelar</button>
        </form>)}
      {isShown && (
        <button onClick={ () => setIsShown(false) }>Cadastrar nova senha</button>
      )}
    </>

  );
}

export default Form;
