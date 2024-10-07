import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

const Resetpassword = () => {

    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <Fragment>
            <Seo title="Reset-Password" />
            <div className="container-lg">
                <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <div className="my-4 d-flex justify-content-center">
                            <Link href="/components/dashboard/dashboard">
                                <Image src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" />
                            </Link>
                        </div>
                        <Card className="custom-card">
                            <Card.Body className="p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Reset Password</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                                <div className="row gy-3">
                                    <div className="col-xl-12">
                                        <Form.Label htmlFor="reset-password" className="text-default">Current Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow) ? "text" : "password"} className="form-control-lg" id="create-password" placeholder="current password" />
                                            <Button variant='' aria-label="button" className="btn btn-light" type="button" onClick={() => setpasswordshow(!passwordshow)}><i className={`${passwordshow ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
                                        </InputGroup>
                                    </div>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="create-password" className="text-default">New Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control-lg" id="create-password" placeholder="new password" />
                                            <Button variant='' aria-label="button" className="btn btn-light" type="button" onClick={() => setpasswordshow2(!passwordshow2)}><i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
                                        </InputGroup>
                                    </Col>
                                    <div className="col-xl-12 mb-2">
                                        <Form.Label htmlFor="create-confirmpassword" className="text-default">Confirm Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control-lg" id="create-confirmpassword" placeholder="confirm password" />
                                            <Button variant='' aria-label="button" className="btn btn-light" type="button" onClick={() => setpasswordshow1(!passwordshow1)}><i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
                                        </InputGroup>
                                        <div className="mt-3">
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                <Form.Label className="text-muted fw-normal" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </Form.Label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 d-grid mt-2">
                                        <Link href="/components/authentication/signin" className="btn btn-lg btn-primary">Create</Link>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-muted mt-3">Already have an account? <Link href="/components/authentication/signin" className="text-primary">Sign In</Link></p>
                                </div>
                                <div className="text-center my-3 authentication-barrier">
                                    <span>OR</span>
                                </div>
                                <div className="btn-list text-center">
                                    <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                        <i className="ri-facebook-fill"></i>
                                    </Button>
                                    <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                        <i className="ri-google-fill"></i>
                                    </Button>
                                    <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                        <i className="ri-twitter-x-line"></i>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
Resetpassword.layout = "Authenticationlayout"

export default Resetpassword;