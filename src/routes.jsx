import { createBrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import ListUsers from './pages/ListUsers'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/lista-de-usuarios',
      element: <ListUsers />,
    },
  ],
  {
    basename: '/userflow-dashboard',
  }
)

export default router