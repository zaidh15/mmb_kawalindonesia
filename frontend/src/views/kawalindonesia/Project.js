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
} from '@coreui/react'

import axios from 'axios'

const Project = () => {


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

  const items = [
    {
      id: 1, 
      nama: 'John Pasti Menang',
      nama_owner: 'John',
      username: '@john123',
      email: 'john@example.com',
      no_hp: '08123123123',
      action: '...',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2, 
      nama: 'Gerakan Mamat Bersatu',
      nama_owner: 'Mamat',
      username: '@mamatmamat',
      email: 'mamat@example.com',
      no_hp: '08111111111',
      action: '...',
      _cellProps: { id: { scope: 'row' } },
    }
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
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
        >
        <CModalHeader>
            <CModalTitle id="VerticallyCenteredExample">Tambah Project</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <CForm className="row g-3">
                <CCol md={6}>
                    <CFormInput id="namaproject" label="Nama Project" />
                </CCol>
                <CCol md={6}>
                    <CFormInput id="namaprojectowner" label="Nama Project Owner" />
                </CCol>
                <CCol md={6}>
                    <CFormInput id="usernameprojectowner" label="Username Project Owner" />
                </CCol>
                <CCol md={6}>
                    <CFormInput type="email" id="projectowneremail" label="Project Owner Email" />
                </CCol>
                <CCol md={6}>
                    <CFormInput id="no_hp" label="No HP" />
                </CCol>
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
