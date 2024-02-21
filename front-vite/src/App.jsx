import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './components/Navbar';
import Activity from './pages/activity/Activity';
import Header from './components/Header';


function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='activity' element={<Activity/>} />
        </Route>
        <Route path='*' element={<h1>Error 404. Page not found</h1>}></Route>
      </Routes>
      
    </Router>
  )
}

export default App
