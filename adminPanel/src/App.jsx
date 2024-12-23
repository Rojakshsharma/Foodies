import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Add from './pages/add/Add'
import Orders from './pages/orders/Orders'
import List from './pages/list/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Route, Routes} from 'react-router-dom'
function App() {
  const url="http://localhost:4000"
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr />
      <div className="app-content">
        <Sidebar></Sidebar>

        <Routes>
          <Route path={"/add"} element={<Add url={url}></Add>}></Route>
          <Route path={"/list"} element={<List url={url}></List>}></Route>
          <Route path={"/orders"} element={<Orders url={url}></Orders>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App