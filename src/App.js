// API BREAKING BAD
// http://breaking-bad-quotes.herokuapp.com/v1/quotes

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Frase from './components/frase';


const ContenedorBoton = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  margin-top: 5rem;
`;

const BotonAPI = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  /* margin-top: 3rem; */
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  const [frase, guardarFrase] = useState({});

    // FORMA 1
  //   const consultarAPI = () => {
  //   const api = fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const fraseAPI = api.then(respuesta => respuesta.json());
  //   fraseAPI.then(api => console.log(api));
  // }

  // FORMA 2
  const consultarAPI = async () => {
  const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const fraseAPI = await api.json();
  guardarFrase(fraseAPI[0]);
  }

  //  Cargar una frase
  useEffect(() => {
    consultarAPI()
  }, []);

  return (
    <ContenedorBoton>
      <Frase frase={frase} />

      <BotonAPI onClick={consultarAPI}>Obtener Frase</BotonAPI>
    </ContenedorBoton>
  );
}

export default App;

// API BREAKING BAD
// http://breaking-bad-quotes.herokuapp.com/v1/quotes
