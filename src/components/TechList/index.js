import React, {useState} from 'react';


// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech(e) {
    e.preventDefault();
    setTechs([...techs, newTech])
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>

      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input id="tech" type="text" value={newTech} onChange={e => 
        setNewTech(e.target.value)
      }/>

      <button type="submit">Adicionar</button>

    </form>
  );
}
