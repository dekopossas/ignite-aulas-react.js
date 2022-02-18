import React from 'react';
import RepositoryItem from './RepositoryItem';

function RepositoryList() {
  return (
    <div className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={"Unform2"} />
        <RepositoryItem repository={"Unform3"}/>
        <RepositoryItem repository={"Unform5"} />
        <RepositoryItem repository={"Unform6"} />
        <RepositoryItem repository={"Unform7"} />
      </ul>
    </div>
  );
}

export default RepositoryList;
