import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { updateProductSuccess } from './productsSlice';

const EditProductModal = ({ productId, initialProductName }) => {
  const [productName, setProductName] = useState(initialProductName);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleUpdate = () => {
    dispatch(updateProductSuccess({ id: productId, name: productName }));
    setModalOpen(false);
  };

  return (
    <>
      <Button color="primary" onClick={toggleModal}>Edit</Button>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Edit Product</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="productName">Product Name</Label>
              <Input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Save</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditProductModal;
