import logo from './logo.svg';
import './App.css';

function App() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5];

  const arr3 = [...arr1, ...arr2];
  console.log(arr3);
  const { nome, id } = { id: 1, nome: 'Marcelo', curso: 'react' };
  const aluno = { id: 1, nome: 'Marcelo', curso: 'react' };
  //console.log(id, aluno.id);

  const meuArray = [1, 2, 3, 4, 5];
  const meuArray2 = [
    { id: 1, nome: 'Marcelo' },
    { id: 2, nome: 'Rafaela' },
    { id: 3, nome: 'Mike' },
    { id: 4, nome: 'Mario' },
    { id: 5, nome: 'Ana' },
  ];
  let total = 0;

  meuArray.forEach((element, i) => {
    total += element;
    //console.log(`Elemento [${i}] = ${element}`);
  });

  const filter = meuArray2.filter((el) => el.id > 2);
  const find = meuArray2.find((el) => el.id === 4);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {filter.map((objeto) => (
          <ul>
            <li key={objeto.id}>
              ID:{objeto.id} Nome: {objeto.nome}
            </li>
          </ul>
        ))}
        {find.nome}
      </header>
    </div>
  );
}

export default App;
