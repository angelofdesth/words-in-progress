import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
createBrowserRouter,
 createRoutesFromElements,
 Route,
 RouterProvider,
} from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import BlogPost from './pages/BlogPost.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />}/> 
      <Route path="/about" element={<About />}/> 
      <Route path="/login" element={<Login />}/> 
      <Route path="/register" element={<Register />}/> 
      <Route path="/testblog" element={<BlogPost />}/> 
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	  <RouterProvider router={router} />
  </StrictMode>,
)
