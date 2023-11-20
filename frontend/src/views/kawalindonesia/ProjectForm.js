import React from "react"

import { 
    CForm,
    CCol,
    CFormInput,
 } from '@coreui/react'

const ProjectForm = () => {
    return (
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
    )
}

export default ProjectForm
            