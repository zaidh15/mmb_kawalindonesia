import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react'


import {
    CButton,
    CCol,
    CListGroupItem,
    CRow,
    CTable,
    CForm, 
    CFormInput, 
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
    CTableHeaderCell,
    CTableRow,
    CFormSwitch
} from '@coreui/react';

import CIcon from '@coreui/icons-react'
import {
  cilPencil,
  cilTrash,
} from '@coreui/icons'
import TipeUserForm from './TipeUserForm';


const TipeUser = () => {
  const { id } = useParams();

  const [data, setData] = useState([])
  const [dataList, setDataList] = useState([])
  const [visible, setVisible] = useState(false)

  const [dataTipeUser, setDataTipeUser] = useState(null)
  const [modeEdit, setModeEdit] = useState(false)

  const openModal = () => {
    setVisible(true)
    setModeEdit(false)
  }

  const getAllTipeUser = () => {
    axios.get("http://localhost:5005/api/tipe-user").then((response) => {
      setData(response.data.data)
    })
  }

  useEffect(() => {
    return getAllTipeUser()
  },[])

  const saveNewData = (newData) => {
    axios.post("http://localhost:5005/api/tipe-user", newData).then((response) => {
      console.log(response)
      setVisible(false)
      getAllTipeUser()
    })
  }

  const btnEdit = (id) =>{
    axios.get(`http://localhost:5005/api/tipe-user/${id}`).then((response) => {
      console.log(response.data.data[0]);
      setDataTipeUser(response.data.data[0]);

      setVisible(true)
      setModeEdit(true)
    })
  }

  const simpanDataEdit = (id, dataEdit) => {
    axios.put(`http://localhost:5005/api/tipe-user/${id}`, dataEdit)
    .then((response) => {
      console.log(response)
      setVisible(false)
      getAllTipeUser()
    })
  }

  const btnDelete = (id) => {
    axios.delete(`http://localhost:5005/api/tipe-user/${id}`)
    .then((response) => {
    console.log(response.data.data);
    getAllTipeUser()
  })
  }

  const columns = [
    {
      key: 'id',
      label: 'No',
      _props: { scope: 'col' },
    },
    {
      key: 'nama_tipe_user',
      label: 'Nama Tipe User',
      _props: { scope: 'col' },
    },
    {
      key: 'tipe_wilayah',
      label: 'Tipe Wilayah',
      _props: { scope: 'col' },
    },
    {
      key: 'order',
      label: 'Order',
      _props: { scope: 'col' },
    },
    {
      key: 'jumlah_user_terdaftar',
      label: 'Jumlah user terdaftar',
      _props: { scope: 'col' },
    },
    {
      key: 'akses_terhadap_modul_kawal',
      label: 'Akses terhadap modul kawal',
      _props: { scope: 'col' },
    },
    {
      key: 'action',
      label: 'Action',
      _props: { scope: 'col' },
    },
  ]

  const items = data.map((item, index) => ({
    id: index+1, 
    nama: (
      <CLink href={item.nama_project}>{item.nama_project}</CLink>
    ),
    nama_tipe_user: item.nama,
    tipe_wilayah: item.tipe_wilayah,
    order: item.orderan,
    jumlah_user_terdaftar: item.user_terdaftar,
    akses_terhadap_modul_kawal: (
      item.akses === 1 ? 'Memiliki Akses' : 'Akses ditutup'
    ),
    action: (
      <CDropdown direction='center'>
        <CDropdownToggle color="warning"></CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={() => btnEdit(item.id)}>
            <CIcon icon={cilPencil}/> Edit
          </CDropdownItem>
          <CDropdownItem onClick={() => btnDelete(item.id)}><CIcon icon={cilTrash}/> Delete</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    ),
  }))

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
    <>
    <CRow>
        <CCol>
        <h5>Project Detail Page</h5>
        </CCol>
        <CCol xs lg={3}>
            <CButton color="primary" onClick={openModal}>Tambah Tipe User</CButton>
        </CCol>
    </CRow>
    <br/>
    <CRow>
      <CCol>
        
        <div class='col-sm-6 col-md-8ow g-2'>
        <CTable borderless>
          <CTableRow>
            <CTableHeaderCell scope="col">
                <CListGroupItem>Nama Project</CListGroupItem>
                <CListGroupItem>Project Owner</CListGroupItem>
                <CListGroupItem>Deskripsi</CListGroupItem>
                <CListGroupItem className='pb-3'>Cakupan Wilayah</CListGroupItem>
                <CListGroupItem className='pb-3'>Form yang digunakan</CListGroupItem>
                <CListGroupItem>Status</CListGroupItem>
            </CTableHeaderCell>

            {dataList.map((itemsTable) => (
            <CTableHeaderCell scope="col">
                <CListGroupItem>{itemsTable.nama_project}</CListGroupItem>
                <CListGroupItem>{itemsTable.nama_depan + ' ' + itemsTable.nama_belakang}</CListGroupItem>
                <CListGroupItem>{itemsTable.deskripsi}</CListGroupItem>
                <CListGroupItem><CButton color="info" variant="outline" size='sm'>Edit</CButton></CListGroupItem>
                <CListGroupItem><CButton color="info" variant="outline" size='sm'>Lihat Form</CButton></CListGroupItem>
                <CListGroupItem><CFormSwitch label="" id="formSwitchCheckChecked" defaultChecked/></CListGroupItem>
            </CTableHeaderCell>

            ))}
          </CTableRow>
        </CTable>

        </div>

        {/* {dataList.map((itemsTable) => (
        <div>
                <CListGroupItem className='py-1'>Nama Project   : {itemsTable.nama_project}</CListGroupItem>
                <CListGroupItem className='py-1'>Project Owner   : {itemsTable.nama_depan + ' ' + itemsTable.nama_belakang}</CListGroupItem>
                <CListGroupItem className='py-1'>Deskripsi     : {itemsTable.deskripsi}</CListGroupItem>
                <CListGroupItem className='py-1'>Cakupan Wilayah   : <CButton color="info" variant="outline" size='sm'>Edit</CButton></CListGroupItem>
                <CListGroupItem className='py-1'>Form yang digunakan   : <CButton color="info" variant="outline" size='sm'>Lihat Form</CButton></CListGroupItem>
                <CListGroupItem className='py-1'>Status      : <CFormSwitch label="" id="formSwitchCheckChecked" defaultChecked/></CListGroupItem>
        </div>
            ))} */}

      </CCol>
    </CRow>
    <br/>
    <CRow>
    <CTable columns={columns} items={items} striped/>
    </CRow>

    <CModal
        size='lg'
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
        >
        <CModalHeader>
            <CModalTitle id="VerticallyCenteredExample">Tambah Tipe User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <TipeUserForm
          onSimpanClick={saveNewData} 
          onCancelClick={() => setVisible(false)}
          modeEdit={modeEdit}
          dataTipeUser={dataTipeUser}
          onSimpanEdit={simpanDataEdit}
          />
        </CModalBody>
        </CModal>
    </>
  );
};

export default TipeUser;