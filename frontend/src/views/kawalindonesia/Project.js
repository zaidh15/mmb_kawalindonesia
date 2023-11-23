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
  CFormTextarea,
  CFormSelect,
  CFormLabel,
  CLink,
} from '@coreui/react'

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
    })
  }

  useEffect(() => {
    return getAllProject()
  },[])

  const items = data.map((item) => ({
    id: item.id, 
    nama: item.nama_project,
    nama_owner: item.nama_depan + ' ' + item.nama_belakang,
    username: item.username,
    email: item.email,
    no_hp: item.no_hp,
    action: '...',
  }))
  

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
          <ProjectForm onSimpanClick={saveNewProject}/>
        </CModalBody>
        </CModal>
    </>
  )
}

export default Project
