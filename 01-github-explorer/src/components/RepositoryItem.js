import React from 'react';

function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository}</strong>
      <p>Forms in React</p>

      <a href="">Acessar Repositórios</a>
    </li>
  );
}

export default RepositoryItem;
