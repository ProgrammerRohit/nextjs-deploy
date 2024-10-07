import { DayCounter } from '@/shared/data/authentication/undermaintenancedata'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'

const Comingsoon = () => {
    return (
        <Fragment>
            <Seo title="comingsoon" />
            <Row className="authentication coming-soon mx-0 justify-content-center">
                <Col xxl={8} xl={8} lg={8} className="col-12">
                    <div className="authentication-cover">
                        <div className="aunthentication-cover-content text-center">
                            <div className="row justify-content-center align-items-center h-100">
                                <Col xxl={6} xl={8} lg={8} md={12} sm={12} className="col-12">
                                    <div className="mb-2">
                                        <Link href="/components/dashboard/dashboard">
                                            <Image src="../../../assets/images/brand-logos/toggle-white.png" alt="" className="authentication-brand" />
                                        </Link>
                                    </div>
                                    <p className="fw-semibold fs-12 mb-1 op-4 text-fixed-white">STAY TUNED</p>
                                    <h1 className="fw-bold mb-3 text-fixed-white">Coming Soon</h1>
                                    <DayCounter />
                                    <InputGroup className="mb-4">
                                        <Form.Control type="email" className="form-control-lg" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                        <Button variant='' className="btn btn-danger" type="button" id="button-addon2">Subscribe</Button>
                                    </InputGroup>
                                    <p className="mb-4 text-fixed-white">Our website is currently under construction, enter your email id to get latest updates and notifications about the website.</p>
                                    <h5 className="fw-normal text-fixed-white"><strong>Contact:</strong> sash@demo.com</h5>
                                    <div className="mt-3">
                                        <div className="btn-list">
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-facebook-line fw-bold"></i>
                                            </Button>
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-twitter-x-line fw-bold"></i>
                                            </Button>
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-instagram-line fw-bold"></i>
                                            </Button>
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-github-line fw-bold"></i>
                                            </Button>
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-youtube-line fw-bold"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </Fragment>

    )
}
Comingsoon.layout = "ErrorPagesLayout"

export default Comingsoon;