import React from 'react'
import { 
    CCol,
    CRow,
    CButton,
    CLink,
    CTable,
 } from '@coreui/react'

const ListForm = () => {
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
          key: 'aktif_nonaktif',
          label: 'Aktif/Non Aktif',
          _props: { scope: 'col' },
        },
        {
          key: 'tanggal_pembuatan',
          label: 'Tanggal Pembuatan',
          _props: { scope: 'col' },
        },
        {
          key: 'masa_berlaku',
          label: 'Masa berlaku sampai dengan',
          _props: { scope: 'col' },
        },
    ]

    const items = [
        {
          id: 1,
          nama_form: (
            <CLink href='#'>Form Data Saksi</CLink>
          ),
          kode_form: 'DS',
          deskripsi: 'Pendataan saksi',
          pembuat_form: 'superadmin',
          aktif_nonaktif: 'aktif',
          tanggal_pembuatan: '23 September 2022',
          masa_berlaku: '23 September 2022',
          _cellProps: { id: { scope: 'row' } },
        },
        {
          id: 2,
          nama_form: (
            <CLink href='#'>Form kanvasing</CLink>
          ),
          kode_form: 'Kanvasing-1',
          deskripsi: 'Kanvasing 1',
          pembuat_form: 'superadmin',
          aktif_nonaktif: 'aktif',
          tanggal_pembuatan: '23 Desember 2022',
          masa_berlaku: '23 Desember 2022',
          _cellProps: { id: { scope: 'row' } },
        },
      ]


    return (
    <>
        <CRow>
            <CCol>
            <h5>List Form</h5>
            </CCol>
            <CCol xs lg={3}>
                <CButton color="primary">Tambah Tipe User</CButton>
            </CCol>
        </CRow>
        <br/>
        <CTable columns={columns} items={items} striped/>
    </>
    )
}

export default ListForm