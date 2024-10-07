import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Seo from '@/shared/layout-components/seo/seo';
import Image from 'next/image';

const Register = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <Fragment >
            <Seo title="Sign-Up" />
            <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                <Col xxl={5} xl={5} lg={5} md={6} sm={8} className="col-12">
                    <div className="my-4 d-flex justify-content-center">
                        <Link href="/components/dashboard/dashboard">
                            <Image src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" />
                        </Link>
                    </div>
                    <Card className="custom-card">
                        <Card.Body className="p-5">
                            <p className="h5 fw-semibold mb-2 text-center">Sign Up</p>
                            <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome &amp; Join us by creating a free account !</p>
                            <div className="row gy-3">
                                <div className="col-xl-12">
                                    <Form.Label htmlFor="signup-firstname" className="form-label text-default">First Name</Form.Label>
                                    <Form.Control type="text" className="form-control form-control-lg" id="signup-firstname" placeholder="first name" />
                                </div>
                                <div className="col-xl-12">
                                    <Form.Label htmlFor="signup-lastname" className="form-label text-default">Last Name</Form.Label>
                                    <Form.Control type="text" className="form-control form-control-lg" id="signup-lastname" placeholder="last name" />
                                </div>
                                <Col xl={12}>
                                    <Form.Label htmlFor="create-password" className="text-default">New Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control type={(passwordshow2) ? "text" : "password"} className="form-control-lg" id="create-password" placeholder="password" />
                                        <Button variant='' aria-label="button" className="btn btn-light" type="button" onClick={() => setpasswordshow2(!passwordshow2)}><i className={`${passwordshow2 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
                                    </InputGroup>
                                </Col>
                                <div className="col-xl-12 mb-2">
                                    <Form.Label htmlFor="create-confirmpassword" className="text-default">Confirm Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control type={(passwordshow1) ? "text" : "password"} className="form-control-lg" id="create-confirmpassword" placeholder="password" />
                                        <Button variant='' aria-label="button" className="btn btn-light" type="button" onClick={() => setpasswordshow1(!passwordshow1)}><i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
                                    </InputGroup>
                                    <div className="form-check mt-3 d-flex">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="defaultCheck1" />
                                        <Form.Label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                            By creating a account you agree to our <Link href="/components/pages/terms-conditions" className="text-success"><u>Terms &amp; Conditions</u></Link> and <a className="text-success"><u>Privacy Policy</u></a>
                                        </Form.Label>
                                    </div>
                                </div>
                                <div className="col-xl-12 d-grid mt-1">
                                    <Button variant='' type="button" className="btn btn-lg btn-primary">Create Account</Button>
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
        </Fragment>
    );
};
Register.layout = "Authenticationlayout";

export default Register;
