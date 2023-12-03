import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Manajemen
const KawalIndonesia = React.lazy(() => import('./views/kawalindonesia/Project'))
const ListForm= React.lazy(() => import('./views/kawalindonesia/ListForm'))
const TipeUser= React.lazy(() => import('./views/kawalindonesia/TipeUser'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/manajemen', name: 'Manajemen', element: KawalIndonesia, exact: true },
  { path: '/kawalindonesia/project', name: 'Kawal Indonesia', element: KawalIndonesia },
  { path: '/kawalindonesia/form', name: 'Form', element: ListForm },
  { path: '/kawalindonesia/tipeuser', name: 'Tipe User', element: TipeUser },
  { path: '/kawalindonesia/project/tipe-user/:id', name: 'Tipe User', element: TipeUser },
]

export default routes
