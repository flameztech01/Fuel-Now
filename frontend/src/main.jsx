import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Homepage from './screens/Homepage.jsx'
import OrderScreen from './screens/OrderScreen.jsx'
import TrackDeliveryScreen from './screens/TrackDeliveryScreen.jsx'

import Login from './screens/Login.jsx'
import Signup from './screens/Signup.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {index: true, element: <Homepage />},
    {path: 'login', element: <Login />},
    {path: 'signup', element: <Signup />},

    {path: 'order', element: <OrderScreen />},
    {path: 'track', element: <TrackDeliveryScreen />},
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
