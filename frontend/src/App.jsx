import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Create from './pages/Create.jsx';
import Show from './pages/Show.jsx';
import Delete from './pages/Delete.jsx';
import Edit from './pages/Edit.jsx';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<Create/>}/>
      <Route path="/books/delete/:id" element={<Delete/>}/>
      <Route path="/books/edit/:id" element={<Show/>}/>
      <Route path="/books/details/:id" element={<Edit/>}/>
    </Routes>
  )
}


export default App