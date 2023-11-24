import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
    CButton,
    CCol,
    CListGroupItem,
    CRow,
    CTable,
} from '@coreui/react';

const TipeUser = () => {
  const { id } = useParams();

  const columns = [
    {
      key: 'id',
      label: 'No',
      _props: { scope: 'col' },
    },
    {
      key: 'action',
      label: 'Action',
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
      key: 'jumlah_user_terdaftar',
      label: 'Jumlah user terdaftar',
      _props: { scope: 'col' },
    },
    {
      key: 'akses_terhadap_modul_kawal',
      label: 'AKses terhadap modul kawal',
      _props: { scope: 'col' },
    },
  ]

  const items = [
    {

    }
  ]

  useEffect(() => {
    // Fetch details for the selected project using id
    axios.get(`http://localhost:5005/api/project/${id}`)
      .then((response) => {
        // Handle the response and display details as needed
        console.log(response.data);
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
            <CButton color="primary">Tambah tipe user</CButton>
        </CCol>
    </CRow>
    <br/>
    <CRow>
        <CListGroupItem>Nama Project</CListGroupItem>
        <CListGroupItem>Project Owner</CListGroupItem>
        <CListGroupItem>Deskripsi</CListGroupItem>
        <CListGroupItem>Cakupan Wilayah</CListGroupItem>
        <CListGroupItem>Form yang digunakan</CListGroupItem>
        <CListGroupItem>Status</CListGroupItem>
    </CRow>
    <br/>
    <CRow>
    <CTable columns={columns} items={items} striped/>
    </CRow>

      {/* Display other details here */}
    </>
  );
};

export default TipeUser;