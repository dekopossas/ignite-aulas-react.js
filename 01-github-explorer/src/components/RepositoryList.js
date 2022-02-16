import React from 'react';
import RepositoryItem from './RepositoryItem';

function RepositoryList() {
  return (
    <div className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={"Unform2"} />
        <RepositoryItem repository={"Unform3"}/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </div>
  );
}

export default RepositoryList;
