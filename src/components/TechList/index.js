import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'


// import { Container } from './styles';

export default function TechList() {
  const [newTech, setNewTech] = useState('');

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);
  

  function handleAddTech() {
    dispatch({ type: 'ADD_TECH', payload: { tech: newTech } });
    
    setNewTech('');
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
