import { Creativedata, Servicedata } from '@/shared/data/pages/aboutusdata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Aboutus = () => {

    return (
        <Fragment>
            <Seo title="About Us" />
            <Pageheader title="About Us" heading="Pages" active="About Us" />
            <Row>
                <Col lg={12}>
                    <div className="py-4">
                        <div className="text-center">
                            <h4 className="display-5 fw-semibold">Our mission is to make Work Meaningful.</h4>
                            <p className="">If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over repeat Various versions have evolved over.</p>
                        </div>
                    </div>
                    <div className="card overflow-hidden">
                        <Image src="../../../assets/images/media/media-67.jpg" alt="" className="br-5 w-100" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body className="p-5">
                            <Row>
                                <Col xl={6} className="my-auto">
                                    <h2 className="fw-bold">We Help to <span className="text-primary">Build</span> Your Dream Project.</h2>
                                    <h5 className="lh-base fw-normal">majority have suffered alteration in some form, by injected humour</h5>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.</p>
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                    <p className="mb-0"> If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by
                                        accident, sometimes on purpose (injected humour and the like).</p>
                                </Col>
                                <Col xl={6} className="mt-xl-0 mt-5">
                                    <div className="text-center">
                                        <Image src="../../../assets/images/media/media-68.png" alt="" className="about-Image" />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Body className="">
                            <h2 className="mb-4 fw-semibold">Why Sash ?</h2>
                            <h5 className="lh-base fw-normal">majority have suffered alteration in some form, by injected humour</h5>
                            <p className="lh-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                                of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                                and the like).</p>
                            <Link href="#!" className="btn btn-primary  mt-2">View More</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Body className="">
                            <h2 className="mb-4 fw-semibold">What is Our Services?</h2>
                            <h5 className="lh-base fw-normal">majority have suffered alteration in some form, by injected humour</h5>
                            <p className="lh-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage
                                of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
                                and the like).</p>
                            <Link href="#!" className="btn btn-primary mt-2">View More</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="text-center">
                    <h2 className="fw-semibold mb-2">Meet our creative minds</h2>
                    <h6 className="fw-normal">Our Leadership</h6>
                </div>
                {Creativedata.map((idx) => (
                    <Col xl={3} md={6} lg={6} className='mt-3' key={Math.random()}>
                        <Card>
                            <Card.Body className="text-center">
                                <span className="avatar avatar-xxl bradius cover-image">
                                    <Image src={idx.src1} alt=""/>
                                </span>
                                <h4 className="h4 mb-0 mt-3">{idx.class}</h4>
                                <p className="card-text">{idx.role}</p>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                                <div className="user-social-detail text-center">
                                    <Link href="https://www.google.com/" target="_blank" className="social-profile me-3 bg-secondary-transparent">
                                        <i className="ri-google-fill text-secondary"></i>
                                    </Link>
                                    <Link href="https://www.facebook.com/" target="_blank" className="social-profile me-3 bg-danger-transparent">
                                        <i className="ri-facebook-fill text-danger"></i>
                                    </Link>
                                    <Link href="https://www.twitter.com/" target="_blank" className="social-profile bg-success-transparent">
                                        <i className="ri-twitter-x-line text-success"></i>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <h2 className="text-center fw-semibold mb-4">Our Services</h2>

                <Col lg={12}>
                    <Row className='text-center'>
                        {Servicedata.map((idx) => (
                            <Col xl={3} md={6} lg={6} key={Math.random()}>
                                <Card>
                                    <Card.Body className="">
                                        <div className={`counter-icon bg-${idx.color}-gradient`}>
                                            <i className={`ti ti-${idx.icon} text-fixed-white`}></i>
                                        </div>
                                        <h4 className="mb-2 fw-semibold">{idx.class}</h4>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}
Aboutus.layout = "Customlayout"

export default Aboutus;