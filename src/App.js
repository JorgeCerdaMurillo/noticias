
import Noticias from './componentes/Noticias';
import Header from './componentes/Header';
import './App.css';
import React, { Component } from 'react';
import Categorias from './componentes/Categorias';
import { useState, useEffect } from 'react';

const App = () =>{

  const [noticias, setNoticias] = useState([]);

  const [categoria, setCategoria] = useState("general");

  useEffect(()=>{
    consultarNoticias();
  }, [categoria]);

  const consultarNoticias = () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=d1866c1b2a6e44ef8f1b4ef376be42cb` ;
    fetch(url).then(res => {
      return res.json();
    }).then(noticias => {
      setNoticias(noticias.articles);
    })
  }

  return (
    <div>
        <Header />
        <div className="container">

          <Categorias setCategoria={setCategoria} />
          <Noticias noticias={noticias} />
          {console.log(categoria)}
        </div>
    </div>
  )


}
export default App;