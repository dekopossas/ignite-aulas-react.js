import React from 'react';
import RepositoryItem from './RepositoryItem';
import Counter from './Counter';

function RepositoryList() {
  return (
    <div className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={'Unform2'} />
        <RepositoryItem repository={'Unform3'} />
        <RepositoryItem repository={'Unform5'} />
        <RepositoryItem repository={'Unform6'} />
        <RepositoryItem repository={'Unform7'} />
        <Counter />
      </ul>
    </div>
  );
}

export default RepositoryList;
