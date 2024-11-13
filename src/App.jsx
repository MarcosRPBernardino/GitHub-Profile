import { useState } from "react";


import Perfil from "./components/Perfil/Index";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  // const nome = "Marcos";

  // function retornaNome(){
  //   return nome;
  // }

  // const pessoa = {
  //   nome: "Maria"
  // }

  // let estaDeDia = true;

  const [formularioEstaVisivel, setFormularioEstaVisisel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value) } />

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario/>
    )}
    <button onClick={() => setFormularioEstaVisisel(!formularioEstaVisivel)} type="button">toggle form</button> */}

    {/* <h1>Olá, {pessoa.nome}</h1>
    <h2>Subtitulo</h2>
    {estaDeDia ? "Bom dia!" : "Boa tarde!"} */}
    </>
  )
}

export default App
