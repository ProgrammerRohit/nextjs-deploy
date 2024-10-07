import Seo from '@/shared/layout-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

const Createpassword = () => {
    const [passwordshow, setpasswordshow] = useState(false);
    const [passwordshow1, setpasswordshow1] = useState(false);
    return (
        <Fragment>
            <Seo title="Create-Password" />
            <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                <Col xxl={4} xl={5} md={6} sm={8} className="col-12">
                    <div className="my-4 d-flex justify-content-center">
                        <Link href="/components/dashboard/dashboard">
                            <Image src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" />
                        </Link>
                    </div>
                    <Card className="custom-card">
                        <div className="card-body p-5">
                            <p className="h5 fw-semibold mb-2 text-center">Create Password</p>
                            <p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="create-password" className="text-default">Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control type={(passwordshow) ? "text" : "password"} className="form-control-lg" id="create-password" placeholder="password" />
                                        <Button variant='' aria-label="button" className="btn btn-light" type="button" onClick={() => setpasswordshow(!passwordshow)}><i className={`${passwordshow ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
                                    </InputGroup>
                                </Col>
                                <Col xl={12} className="mb-2">
                                    <Form.Label htmlFor="create-confirmpassword" className="text-default">Confirm Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control-lg" id="create-confirmpassword" placeholder="password" />
                                        <Button variant='' aria-label="button" className="btn btn-light" type="button" onClick={() => setpasswordshow1(!passwordshow1)}><i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
                                    </InputGroup>
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                Remember password ?
                                            </label>
                                        </div>
                                    </div>
                                </Col>
                                <div className="col-xl-12 d-grid mt-2">
                                    <Button variant='' type="button" className="btn btn-lg btn-primary">Save Password</Button>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-muted mt-3">Back to home ? <Link href="/components/dashboard/dashboard" className="text-primary">Click Here</Link></p>
                            </div>
                            <div className="text-center my-3 authentication-barrier">
                                <span>OR</span>
                            </div>
                            <div className="btn-list text-center">
                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-primary-transparent">
                                    <i className="ri-facebook-fill"></i>
                                </Button>
                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-primary-transparent">
                                    <i className="ri-google-fill"></i>
                                </Button>
                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-primary-transparent">
                                    <i className="ri-twitter-x-line"></i>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Createpassword.layout = "Authenticationlayout"

export default Createpassword;