import Seo from '@/shared/layout-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';

const Login = () => {

    const [passwordshow, setpasswordshow] = useState(false);

    return (
        <Fragment>
            <Seo title="Sign-In" />
            <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                    <div className="my-4 d-flex justify-content-center">
                        <Link href="/components/dashboard/dashboard">
                            <Image src="../../../assets/images/brand-logos/desktop-white.png" alt="logo" />
                        </Link>
                    </div>
                    <Card className="custom-card">
                        <Card.Body className="p-5">
                            <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                            <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Jhon !</p>
                            <div className="row gy-3">
                                <div className="col-xl-12">
                                    <Form.Label htmlFor="signin-username" className="text-default">User Name</Form.Label>
                                    <Form.Control type="text" className="form-control form-control-lg" id="signin-username" placeholder="user name" />
                                </div>
                                <div className="col-xl-12 mb-2">
                                    <Form.Label htmlFor="create-confirmpassword" className="text-default">Password</Form.Label>
                                    <Link href="/components/authentication/reset-password" className="float-end text-danger">Forget password ?</Link>
                                    <InputGroup>
                                        <Form.Control type={(passwordshow) ? "text" : "password"} className="form-control-lg" id="create-confirmpassword" placeholder="password" />
                                        <Button variant='' aria-label="button" className="btn btn-light" type="button" onClick={() => setpasswordshow(!passwordshow)}><i className={`${passwordshow ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
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
                                <Col xl={12} className="d-grid mt-1">
                                    <Link href="/components/dashboard/dashboard" className="btn btn-lg btn-primary">Sign In</Link>
                                </Col>
                            </div>
                            <div className="text-center">
                                <p className="text-muted mt-3">Dont have an account? <Link href="/components/authentication/signup" className="text-primary">Sign Up</Link></p>
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

Login.layout = "Authenticationlayout";

export default Login;

