import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Col } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';


const OpenCaseForm = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button outline color='secondary' className='me-3' onClick={() => setModalOpen(true)}>Open a Case</Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Open a Case
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            company: '',
                            salesforceId: ''
                    }}
                    >
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='name' md='2'>
                                    Name
                                </Label>
                                <Col md='10'>
                                    <Field
                                        name='name'
                                        placeholder='Name'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md='2'>
                                    Email
                                </Label>
                                <Col md='10'>
                                    <Field
                                        name='email'
                                        placeholder='Email'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='company' md='4'>
                                    Company Name
                                </Label>
                                <Col md='8'>
                                    <Field
                                        name='company'
                                        placeholder='Company Name'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='salesforceId' md='4'>
                                    Salesforce Org Id
                                </Label>
                                <Col md='8'>
                                    <Field
                                        name='salesforceId'
                                        placeholder='Salesforce Org Id'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2}}>
                                    <Button type='submit' color='secondary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
};

export default OpenCaseForm;