import { RepositoryItem } from "./RepositoryItem.jsx";

const repository = {
  name: 'unform',
  descriptiom: 'Forms in react',
  html_url: 'http://www.github.com/unform/unform'
}

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem
          repository={repository}
        />
      </ul>
    </section>
  );
}
