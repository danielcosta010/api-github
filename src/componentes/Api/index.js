import React, { useEffect, useState } from 'react';
import './Api.css'

function ListaDeRepositorios() {
  const [repositorio, setRepositorio] = useState([]);
  const [pagina, setPagina] = useState(1); // começa na primeira página

  useEffect(() => {
    async function carregaRepositorios () {
      const response = await fetch(`https://api.github.com/users/danielcosta010/repos?page=${pagina}`);
      const repositorios = await response.json();

      setRepositorio([...repositorio, ...repositorios]); // adiciona os resultados da nova página aos resultados existentes
    }
    carregaRepositorios();
  }, [pagina]);

  function carregaMais() {
    setPagina(pagina + 1); // carrega a próxima página quando o botão "carregar mais" é clicado
  }

  return (
    <main>
      <h2>Lista de meus repositorios no Github</h2>
      <ul className='lista'>
        {repositorio.map((repositorio, index) => (
          <li key={`repo-${index}`} className='lista__item'>
           <a href={repositorio.html_url} target='_blank' rel="noreferrer" className='lista__link'>{repositorio.name}</a>
          </li>
        ))}
      </ul>
      <button onClick={carregaMais} className='botao'>Carregar mais</button> 
      
    </main>
  );
}

export default ListaDeRepositorios;
