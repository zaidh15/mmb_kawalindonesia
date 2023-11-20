import React, { useState } from 'react';
import {
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CForm,
    CFormInput,
    CCol,
    CButton,
} from '@coreui/react';

const Modal = (props) => {
    const [visible, setVisible] = useState(false)
    return (
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
    )
}

export default Modal