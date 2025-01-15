import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import { createContext, useContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext(null);

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/book/:bedType" element={<Book />} />
          </Route>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
      </UserContext.Provider>
  )
}

export default App
