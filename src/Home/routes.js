import { lazy } from 'react'

const routes = [
  {
    path: '/login',
    component: lazy(() => import('./views/Login')),
    name: 'login',
    exact: true,
    isPrivate: false
  },
  {
    path: '/cadastro',
    component: lazy(() => import('./views/Register')),
    name: 'register',
    exact: true,
    isPrivate: false
  },
  {
    path: '/profile',
    component: lazy(() => import('./views/Profile')),
    name: 'profile',
    exact: true,
    isPrivate: true
  },
  {
    path: '/',
    component: lazy(() => import('./views/ToDos')),
    name: 'toDos',
    exact: true,
    isPrivate: true
  }
]

export default routes
