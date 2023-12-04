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


import axios from 'axios'
import FormListForm from "./FormListForm";
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const FormKawal = () => {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)

  const closeModal = () => {
    setVisible(false)
  }

  const openModal = () => {
    setVisible(true)
  }

  const getAllForm = () => {
    axios.get("http://localhost:5005/api/forms").then((response) => {
      setData(response.data.data)
    })
  }

  const saveNewForm = (newData) => {
    axios.post("http://localhost:5005/api/form", newData).then((response) => {
      console.log(response)
      setVisible(false)
      getAllForm()
    })
  }

  useEffect(() => {
    return getAllForm()
  },[])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd MMMM yyyy', { locale: id });
};


  const columns = [
    {
      key: 'id',
      label: 'No',
      _props: { scope: 'col' },
    },
    {
      key: 'nama_form',
      label: 'Nama Form',
      _props: { scope: 'col' },
    },
    {
      key: 'kode_form',
      label: 'Kode Form',
      _props: { scope: 'col' },
    },
    {
      key: 'deskripsi',
      label: 'Deskripsi',
      _props: { scope: 'col' },
    },
    {
      key: 'pembuat_form',
      label: 'Pembuat Form',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: 'Status',
      _props: { scope: 'col' },
    },
    {
      key: 'tanggal_buat',
      label: 'Tanggal Pembuatan',
      _props: { scope: 'col' },
    },
    {
      key: 'tanggal_berlaku',
      label: 'Berlaku Sampai',
      _props: { scope: 'col' },
    },
  ]

  const items = data.map((item, index) => ({
    id: index+1, 
    nama_form: (
      <CLink href={`../kawalindonesia/tipe-user/${item.id}`}>{item.nama_form}</CLink>
    ),
    kode_form: item.kode_form,
    deskripsi: item.deskripsi,
    pembuat_form: item.pembuat_form,
    status: (
        item.status === 'aktif' ? 'Aktif' : 'Non-aktif'
      ),
    tanggal_buat: formatDate(item.tanggal_buat),
    tanggal_berlaku: formatDate(item.tanggal_berlaku),
  }))

  return (
    <>
    <h2>List Form</h2>
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
        <CButton color="primary" onClick={openModal}>+ Tambah Form</CButton>
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
            <CModalTitle id="VerticallyCenteredExample">Tambah Form</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FormListForm 
          onSimpanClick={saveNewForm} 
          onCancelClick={() => setVisible(false)}
          />
        </CModalBody>
        </CModal>
    </>
  )
}


export default FormKawal