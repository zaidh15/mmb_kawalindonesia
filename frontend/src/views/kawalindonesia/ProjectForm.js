import React, { useState } from "react"

import { 
    CForm,
    CCol,
    CFormInput,
    CFormLabel,
    CRow,
    CFormSelect,
    CFormTextarea,
    CButton,
 } from '@coreui/react'


 const defaultData = {
    nama_project: "",
    id_project_owner: "",
    deskripsi: "",
  }

const ProjectForm = (props) => {
    const [dataProject, setDataProject] = useState(defaultData)

    const inputChangedHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setDataProject({ ...dataProject, [name]: value })
    }
    
    const btnSimpanHandler = (event) => {
        event.preventDefault()
        // simpan ke database
        // lepas ID
        const { nama_project, ...dataSiapDisimpan } = dataProject
    
        // kirim ke parent untuk di simpan ke DB
        props.onSimpanClick(dataSiapDisimpan)
  
        console.log(dataSiapDisimpan)
        // reset form
        setDataProject(defaultData)
    }

    const cancelHandler = (event) => {
        event.preventDefault()
        // reset form
        setDataProject(defaultData)
        props.onCancelClick() // untuk meng-close modal
      }

    return (
        <CForm>
          <CRow className="mb-3">
            <CFormLabel htmlFor="namaproject" className="col-sm-2 col-form-label">Nama Project</CFormLabel>
            <CCol sm={10} >
              <CFormInput id="nama_project"/>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="projectowner" className="col-sm-2 col-form-label">Project Owner</CFormLabel>
            <CCol sm={10} >
              <CFormSelect aria-label="Default select example" onChange={inputChangedHandler}>
                <option value='dataProject.id'>{dataProject.id}</option>
              </CFormSelect >
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="deskripsi" className="col-sm-2 col-form-label">Deskripsi</CFormLabel>
            <CCol>
                <CFormTextarea
                  id="deskripsi"
                  rows={3}
                ></CFormTextarea>
                </CCol>
          </CRow>
          <CButton color="secondary" onClick={cancelHandler}>
            Close
            </CButton>
            <CButton color="primary" onClick={btnSimpanHandler}>Save changes</CButton>
        </CForm>
    )
}

export default ProjectForm
            