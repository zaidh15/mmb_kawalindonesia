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
} from '@coreui/react'

import axios from 'axios'

const Project = () => {
  const [data, setData] = useState([])

  const getAllBarang = () => {
    axios.get("http://localhost:5005/api/projects").then((response) => {
      setData(response.data.data)
    })
  }

  useEffect(() => {
    return getAllBarang()
  },[])

  const items = data.map((item) => ({
    id: item.id, 
    nama: item.nama_project,
    nama_owner: item.nama_project_owner,
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

  const [visible, setVisible] = useState(false)

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
        <CForm>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">Nama Project</CFormLabel>
            <CCol sm={10} >
              <CFormInput id="nama_project"/>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">Project Owner</CFormLabel>
            <CCol sm={10} >
              <CFormSelect 
                  aria-label="Default select example"
                  options={[
                    ' ',
                    { label: 'John', value: '1' },
                    { label: 'Mamat', value: '2' },
                    { label: 'User3', value: '3', disabled: true }
                  ]}
                />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">Deskripsi</CFormLabel>
            <CCol>
                <CFormTextarea
                  id="deskripsi"
                  rows={3}
                ></CFormTextarea>
                </CCol>
          </CRow>
        </CForm>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
        </CModalFooter>
        </CModal>
    </>
  )
}

export default Project
