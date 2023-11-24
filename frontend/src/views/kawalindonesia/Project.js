import React, { useState, useEffect } from 'react'
import { 
  CTable, 
  CForm, 
  CFormInput, 
  CButton, 
  CRow,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLink,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cilPencil,
  cilTrash,
} from '@coreui/icons'

import axios from 'axios'
import ProjectForm from './ProjectForm'

const Project = () => {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)

  const getAllProject = () => {
    axios.get("http://localhost:5005/api/projects").then((response) => {
      setData(response.data.data)
    })
  }

  const saveNewProject = (newData) => {
    axios.post("http://localhost:5005/api/project", newData).then((response) => {
      console.log(response)
      setVisible(false)
      getAllProject()
      console.error("Error fetching project details:", error)
    })
  }

  useEffect(() => {
    return getAllProject()
  },[])

  const columns = [
    {
      key: 'id',
      label: 'No',
      _props: { scope: 'col' },
    },
    {
      key: 'nama',
      label: 'Nama Project',
      _props: { scope: 'col' },
    },
    {
      key: 'nama_owner',
      label: 'Project Owner',
      _props: { scope: 'col' },
    },
    {
      key: 'username',
      label: 'Username Project Owner',
      _props: { scope: 'col' },
    },
    {
      key: 'email',
      label: 'Project Owner Email',
      _props: { scope: 'col' },
    },
    {
      key: 'no_hp',
      label: 'No HP',
      _props: { scope: 'col' },
    },
    {
      key: 'action',
      label: 'Action',
      _props: { scope: 'col' },
    },
  ]

  const items = data.map((item) => ({
    id: item.id, 
    nama: (
      <CLink href={item.nama_project}>{item.nama_project}</CLink>
    ),
    nama_owner: item.nama_depan + ' ' + item.nama_belakang,
    username: item.username,
    email: item.email,
    no_hp: item.no_hp,
    action: (
      <CDropdown direction='center'>
        <CDropdownToggle color="warning"></CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={() => showDetails(item.id)}>
            <CIcon icon={cilPencil}/> Edit Project
          </CDropdownItem>
          <CDropdownItem href="#"><CIcon icon={cilTrash}/> Delete Project</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    ),
  }))

  return (
    <>
    <h2>Project</h2>
    <CRow>
      <CCol>
        <CForm>
          <CFormInput
            type="email"
            id="exampleFormControlInput1"
            placeholder="Search"
            aria-describedby="exampleFormControlInputHelpInline"
          />
        </CForm>
      </CCol>
      <CCol s lg={3}>
        <CButton color="primary" onClick={() => setVisible(!visible)}>+ Tambah Project</CButton>
      </CCol>
    </CRow>
    <br/>
    <CTable columns={columns} items={items} striped/>

    <CModal
        size='lg'
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
        >
        <CModalHeader>
            <CModalTitle id="VerticallyCenteredExample">Tambah Project</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ProjectForm onSimpanClick={saveNewProject} onCancelClick={() => setVisible(false)}/>
        </CModalBody>
        </CModal>
    </>
  )
}

export default Project
