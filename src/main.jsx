import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CountAnimate from './components/CountAnimate.jsx'
import Variants from './Variants.jsx'
import Basic from './components/Basic.jsx'
import ButtonTap from './components/ButtonTap.jsx'
import Keyframe from './components/Keyframe.jsx'
import TextMotion from './components/TextMotion.jsx'
import TransitionType from './components/TransitionType.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index: true, element:<Home/>},
      {path:"basic", element: <Basic/>},
      {path:"count-animate", element: <CountAnimate/>},
      {path:"variants", element: <Variants/>},
      {path:"button-tap", element: <ButtonTap/>},
      {path:"keyframe", element: <Keyframe/>},
      {path:"text-motion", element: <TextMotion/>},
      {path:"transition-type", element: <TransitionType/>},
      {path:"scroll-reveal", element: <ScrollReveal/>},
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
