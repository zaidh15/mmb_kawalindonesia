import React, { useState, useEffect } from "react"
import axios from "axios"

import { 
    CForm,
    CCol,
    CFormInput,
    CFormLabel,
    CRow,
    CFormSelect,
    CFormTextarea,
    CButton,
    CFormCheck
 } from '@coreui/react'


 const defaultData = {
    nama_form: "",
    kode_form: "",
    deskripsi: "",
    pembuat_form: "",
    status: "",
    tanggal_berlaku: "",
  }

const FormListForm = (props) => {
  const [data, setData] = useState([])
    const [dataForm, setDataForm] = useState(defaultData)

    const inputChangedHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      setDataForm({ ...dataForm, [name]: value })
    }
    
    const btnSimpanHandler = (event) => {
        event.preventDefault()
        // simpan ke database
        // lepas ID
        const { ...dataSiapDisimpan } = dataForm
    
        // kirim ke parent untuk di simpan ke DB
        props.onSimpanClick(dataSiapDisimpan)
  
        console.log(dataSiapDisimpan)
        // reset form
        setDataForm(defaultData)
    }

    const cancelHandler = (event) => {
        event.preventDefault()
        // reset form
        setDataForm(defaultData)
        props.onCancelClick() // untuk meng-close modal
    }

    const getAllForm = () => {
    axios.get("http://localhost:5005/api/forms").then((response) => {
      setData(response.data.data)
    })
    }

    useEffect(() => {
      return getAllForm()
    },[])

    return (
      


        <CForm>
          <CRow className="mb-3">
            <CFormLabel htmlFor="nama_form" className="col-sm-2 col-form-label">Nama Form</CFormLabel>
            <CCol sm={10} >
              <CFormInput  
              name="nama_form"
              id="nama_form" 
              onChange={inputChangedHandler}/>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="kode_form" className="col-sm-2 col-form-label">Kode Form</CFormLabel>
            <CCol sm={10} >
              <CFormInput  
              name="kode_form"
              id="kode_form" 
              onChange={inputChangedHandler}/>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="deskripsi" className="col-sm-2 col-form-label">Deskripsi</CFormLabel>
            <CCol>
                <CFormTextarea
                  name="deskripsi"
                  id="deskripsi"
                  rows={3}
                  onChange={inputChangedHandler}
                ></CFormTextarea>
                </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="tanggal_berlaku" className="col-sm-2 col-form-label">Berlaku Sampai</CFormLabel>
            <CCol sm={10} >
              {/* <CFormInput  
              name="tanggal_berlaku"
              id="tanggal_berlaku" 
            onChange={inputChangedHandler}/> */}
              <div>
                <input className="form-control" name="tanggal_berlaku" id="tanggal_berlaku" type="date" onChange={inputChangedHandler} />
              </div>
            </CCol>
          </CRow>

            <CRow className="mb-3">
              <CFormLabel htmlFor="status" className="col-sm-2 col-form-label">Status</CFormLabel>
              <CCol sm={10} >
              <div>
                <input className="form-check-input" type="radio" id="status1" name="status" value="aktif" onChange={inputChangedHandler} />
                <label className="form-check-label mx-2" for="status1" >Aktif</label>

                <input className="form-check-input" type="radio" id="status2" name="status" value="non-aktif" onChange={inputChangedHandler} />
                <label className="form-check-label mx-2" for="status2" >Non-Aktif</label>
              </div>

              {/* <CFormCheck inline type="radio" name="status" id="inlineCheckbox1" value="aktif" label="Aktif" onChange={inputChangedHandler} />
              <CFormCheck inline type="radio" name="status" id="inlineCheckbox2" value="non-aktif" label="Non-Aktif" onChange={inputChangedHandler} /> */}
              </CCol>
            </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="form_json" className="col-sm-2 col-form-label">JSON</CFormLabel>
            <CCol>
                <CFormTextarea
                  name="form_json"
                  id="form_json"
                  rows={3}
                  onChange={inputChangedHandler}
                ></CFormTextarea>
                </CCol>
          </CRow>

          <CButton color="secondary" onClick={cancelHandler}>
            Close
            </CButton>
          <CButton className="mx-3" color="primary" onClick={btnSimpanHandler}>Save</CButton>

        </CForm>
    )
}

export default FormListForm
            