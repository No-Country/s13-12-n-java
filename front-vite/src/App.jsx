import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './components/Navbar';
import Activity from './pages/activity/Activity';


function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='/activity' component={<Activity/>} />
        </Route>
        <Route path='*' element={<h1>Error 404. Page not found</h1>}></Route>
      </Routes>
      
    </Router>
  )
}

export default App