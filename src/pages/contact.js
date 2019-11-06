import React from 'react'
import PrimaryLayout from '../layouts/PrimaryLayout'
import { Form, Button } from 'react-bootstrap'

const Contact = () => (
        <PrimaryLayout column='col-10'>
            <div className="pt-5">
                <Form>
                    <Form.Group controlId="controlForm.Email">
                        <Form.Label>Email Address: </Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="controlForm.Subject">
                        <Form.Label>Subject: </Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group controlId="controlForm.Message">
                        <Form.Label>Message: </Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="controlForm.Submit">
                        <Button>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        </PrimaryLayout>
)


export default Contact;