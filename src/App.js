import "./styles.css";
import peli from "./api/peliculas";
import styled from "styled-components";
import { useState } from "react";

const Boton = styled.button`
  padding: 1rem;
  margin: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: purple;
  background-color: #cccffc;
  border-color: #ccc;
`;
const Botones = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Pelicula = ({ nombre }) => {
  return (
    <div>
      <img
        src="https://i.pinimg.com/236x/42/da/a1/42daa197410abf74de2ef8bf853a9c30--driver-film-style-movie.jpg"
        alt=""
      />
      <h2>{nombre}</h2>
    </div>
  );
};

export default function App() {
  const [movies, setMovies] = useState(peli);
  function filtro(value) {
    const moviesFiltrada = peli.filter((movie) =>
      movie.genero.toLowerCase().includes(value)
    );
    setMovies(moviesFiltrada);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Botones>
        <Boton onClick={() => filtro("action")}>Accion</Boton>
        <Boton onClick={() => filtro("fantasy")}>Fantasia</Boton>
        <Boton onClick={() => filtro("horror")}>Terror</Boton>
        <Boton onClick={() => filtro("adventure")}>Aventura</Boton>
      </Botones>
      {movies.map((peliculas) => {
        return <Pelicula {...peliculas} />;
      })}
    </div>
  );
}
