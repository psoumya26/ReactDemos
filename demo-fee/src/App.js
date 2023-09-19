import React, { Component } from 'react';
import { BrowserRouter,Routes, Router, Route, Link } from 'react-router-dom';
import Form from './Component/Form'
import About from './Component/About'
import Car from './Component/Car'
//npm i react-router-dom
import './App.css';
import PersonList from './Component/PersonList';

class App extends Component {
render() {
	return (

    <BrowserRouter>
    <PersonList></PersonList>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/">Form</Link>
			</li>
			<li>
				<Link to="/about">About Us</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/' element={< Form />}></Route>
				<Route exact path='/about' element={< About />}></Route>
				
		</Routes>
		</div>

</BrowserRouter>
);
}
}

export default App;





















/*
//import logo from './logo.svg';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import './App.css';
//import PersonList from './components/PersonList';
import About from './Component/About';
//import EffectsDemoNoDependency from './Component/EffectsDemoNoDependency';
//import HookCounterOne from './Component/HookCounterOne';
//import AddPost from "./Component/AddPost";
//import PersonList from "./Component/PersonList";
//import Product from "./Component/Product";
//import { Routes,Route,Link,Router } from 'react-router-dom';
import { BrowserRouter, Routes, Route,Router,Link } from "react-router-dom";
//import CardImg from "./Component/CardImg";
//import { CardImg } from "react-bootstrap";
//import Car from './Component/Car';
import Form from "./Component/Form";
//import About from './Component/About'
//import {useState} from 'react'
function App() {
return(
     <Router>
      <div className="App">
        <ul className="App-header">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
                </ul>
      <Routes>
          <Route exact path='/' element={<About/>}></Route>
          <Route exact path='/form' element={<Form/>}></Route>
          
      </Routes>
      </div>
    </Router>
  );
}

export default App;

*/