import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/Utils";

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail, jumlah, keterangan, tambah, kurang, changeHandler, handleSubmit, totalHarga, handleDelete, data }) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama}
            <strong> ({keranjangDetail.product.kode})</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga:</Form.Label>
              <p>
                <strong>Rp. {numberWithCommas(totalHarga)}</strong>
              </p>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah: </Form.Label>
              <br />
              <Button variant="primary" size="sm" className="mr-2" onClick={() => kurang()}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <strong> {jumlah} </strong>
              <Button variant="primary" size="sm" className="ml-2" onClick={() => tambah()}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1" className="mb-3 mt-2">
              <Form.Label>Keterangan: </Form.Label>
              <Form.Control as="textarea" rows="3" name="keterangan" placeholder="Contoh: Pedas" value={keterangan} onChange={(event) => changeHandler(event)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-1">
              Simpan
            </Button>
            <br />
            <Button variant="danger" className="mt-1" onClick={() => handleDelete(keranjangDetail.id)}>
              Hapus Pesanan
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="danger" onClick={() => handleDelete(keranjangDetail.id)}>
            Hapus Pesanan
          </Button>
          <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            Simpan
          </Button>
        </Modal.Footer> */}
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>KOSONG</Modal.Title>
        </Modal.Header>
        <Modal.Body> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
