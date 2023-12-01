import { useState } from 'react';
import { ServiceProps } from './Type';

function Register(
  { name, login, URL, password, id }: ServiceProps,
  services: ServiceProps[],
) {
//   function removeCard() {
// //     services.splice(services.indexOf(id), 1);
//   }
  return (
    <div className="card-service">
      <a href={ URL }>{name}</a>
      <p>{login}</p>
      <p>{password}</p>
      <button data-testid="remove-btn">Apagar</button>
    </div>
  );
}

export default Register;
