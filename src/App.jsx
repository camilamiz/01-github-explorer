import { Counter } from "./components/Counter.jsx";
import { RepositoryList } from "./components/RepositoryList.jsx";
import './styles/global.css';

export function App() {
  return(
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
