import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilLayers,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Manajemen',
  },
  {
    component: CNavGroup,
    name: 'Manajemen',
    to: '/kawalindonesia',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Kawal Indonesia',
        to: '/kawalindonesia/project',
      },
      {
        component: CNavItem,
        name: 'Form',
        to: '/kawalindonesia/form',
      },
      {
        component: CNavItem,
        name: 'Tipe User (testing)',
        to: '/kawalindonesia/tipeuser',
      },
    ],
  },
]

export default _nav
