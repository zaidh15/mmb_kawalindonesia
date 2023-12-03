import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom';

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
    nama: "",
    tipe_wilayah: "",
    orderan: "",
    user_terdaftar: "",
    akses: "",
  }

const TipeUserForm = (props) => {
  const {id} = useParams();
  console.log(id)

  const [data, setData] = useState([])
    const [dataTipeUser, setDataTipeUser] = useState(defaultData)
    const [dataList, setDataList] = useState([])

    const inputChangedHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      setDataTipeUser({ ...dataTipeUser, [name]: value })
    }
    
    const btnSimpanHandler = (event) => {
        event.preventDefault()
        // simpan ke database
        // lepas ID
        const { ...dataSiapDisimpan } = dataTipeUser
    
        // kirim ke parent untuk di simpan ke DB
        props.onSimpanClick(dataSiapDisimpan)
  
        console.log(dataSiapDisimpan)
        // reset form
        setDataTipeUser(defaultData)
    }

    const cancelHandler = (event) => {
        event.preventDefault()
        // reset form
        setDataTipeUser(defaultData)
        props.onCancelClick() // untuk meng-close modal
    }

    const getAllTipeUser = () => {
    axios.get("http://localhost:5005/api/tipe-user").then((response) => {
      setData(response.data.data)
    })
    }

    useEffect(() => {
      return getAllTipeUser()
    },[])

    useEffect(() => {
      if(props.modeEdit === false){
        setDataTipeUser(defaultData)
      }else if(props.modeEdit === true){
        setDataTipeUser(props.dataTipeUser)
      }
    }, [props.modeEdit, props.dataTipeUser])

    const btnSimpanEditHandler = (event) =>{
      event.preventDefault()
      const {id, ...dataSiapDisimpan} = dataTipeUser
      console.log(dataSiapDisimpan)
      props.onSimpanEdit(id, dataSiapDisimpan)
    }

    useEffect(() => {
      // Fetch details for the selected project using id
      axios.get(`http://localhost:5005/api/project/${id}`)
        .then((response) => {
          // Handle the response and display details as needed
          console.log(response.data);
          setDataList(response.data.data)
        })
        .catch((error) => {
          console.error("Error fetching project details:", error);
        });
    }, [id]);

    return (

        <CForm>
          {dataList.map((itemsTable) => (
          <><CRow className="mb-3">
              <CFormLabel htmlFor="nama_project" className="col-sm-2 col-form-label">Nama Project</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  name="nama_project"
                  id="nama_project" 
                  value={itemsTable.nama_project} 
                  disabled />
              </CCol>
            </CRow><CRow className="mb-3">
                <CFormLabel htmlFor="project_owner" className="col-sm-2 col-form-label">Project Owner</CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    name="project_owner"
                    id="project_owner"
                    value={itemsTable.nama_depan + ' ' + itemsTable.nama_belakang}
                    disabled />
                </CCol>
              </CRow></>
          ))}




          <CRow className="mb-3">
            <CFormLabel htmlFor="nama" className="col-sm-2 col-form-label">Nama</CFormLabel>
            <CCol sm={10} >
              <CFormInput  
              name="nama"
              id="nama" 
              value={dataTipeUser.nama}
              onChange={inputChangedHandler}/>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="tipe_wilayah" className="col-sm-2 col-form-label">Tipe Wilayah</CFormLabel>
            <CCol sm={10} >
              <CFormInput  
              name="tipe_wilayah"
              id="tipe_wilayah" 
              value={dataTipeUser.tipe_wilayah}
              onChange={inputChangedHandler}/>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="orderan" className="col-sm-2 col-form-label">Order</CFormLabel>
            <CCol sm={10} >
              <CFormInput  
              name="orderan"
              id="orderan" 
              value={dataTipeUser.orderan}
              onChange={inputChangedHandler}/>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="user_terdaftar" className="col-sm-2 col-form-label">Jumlah User Terdaftar</CFormLabel>
            <CCol sm={10} >
              <CFormInput  
              name="user_terdaftar"
              id="user_terdaftar" 
              value={dataTipeUser.user_terdaftar}
              onChange={inputChangedHandler}/>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="akses" className="col-sm-2 col-form-label">Akses Modul</CFormLabel>
            <CCol sm={10} >
              <CFormInput  
              name="akses"
              id="akses" 
              value={dataTipeUser.akses}
              onChange={inputChangedHandler}/>
            </CCol>
          </CRow>



          <CButton color="secondary" onClick={cancelHandler}>
            Close
            </CButton>

              {!props.modeEdit && (
                <CButton className="mx-3" color="primary" onClick={btnSimpanHandler}>Save</CButton>
              )}
              {props.modeEdit && (
                <CButton className="mx-3" color="primary" onClick={btnSimpanEditHandler}>Save changes</CButton>
              )}
        </CForm>
    )
}

export default TipeUserForm
            