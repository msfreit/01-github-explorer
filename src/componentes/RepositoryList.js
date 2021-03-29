import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "./../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  },[]); 
  //segundo parâmetro é chamado de dependência. se o array é vazio, ela executará apenas 1x.
  // CUIDADO PARA NÃO DEIXAR O useEffect sem o segundo parametro, o useEffect fica em loop


  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository} />
          })
        }

      </ul>
    </section>
  );
}
