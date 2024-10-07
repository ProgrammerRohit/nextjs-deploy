
import { Reviewstyle, Reviewstyle2 } from '@/shared/data/pages/reviewsdata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Reviews = () => {
    return (
        <Fragment>
            <Seo title="Reviews" />
            <Pageheader title="Reviews" heading="Pages" active="Reviews" />
            <div className="container-lg">
                <Row className=" justify-content-center ">
                    <h5 className="mb-5 fw-semibold text-center">Reviews Style-1</h5>
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12}>
                        <Row className=" gy-4">
                            {Reviewstyle.map((idx) => (
                                <Col xxl={4} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3" key={Math.random()}>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <div className="">
                                                <div className="d-sm-flex d-block align-items-top mb-3">
                                                    <div className="d-flex flex-fill align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <Image  src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="lh-1 me-2">
                                                            <p className="mb-1 fw-semibold fs-14">{idx.heading}</p>
                                                            <div className="mb-1">
                                                                <i className="ri-star-s-fill text-warning align-middle fs-13"></i>
                                                                <i className="ri-star-s-fill text-warning align-middle fs-13"></i>
                                                                <i className="ri-star-s-fill text-warning align-middle fs-13"></i>
                                                                <i className="ri-star-s-fill text-warning align-middle fs-13"></i>
                                                                <i className="ri-star-s-line text-warning align-middle fs-12"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ps-sm-0 mt-sm-0 mt-3 ps-sm-0 ps-2">
                                                        <span className="badge border bd-gray-200 rounded-1 text-muted">{idx.hrs}</span>
                                                    </div>
                                                </div>
                                                <div className="mb-3 ps-2">
                                                    <span className="text-muted"><i className="ri-double-quotes-l"></i> Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit. Earum autem  adipisicing elit. quaerat distinctio  --<i className="ri-double-quotes-r"></i></span>
                                                </div>
                                                <div className="ps-2">
                                                    <Link href="#!" className="badge border bg-primary-transparent rounded-1  me-2">
                                                        <i className="ri-thumb-up-line align-bottom me-1 d-inline-flex"></i><span className=""> {idx.like} </span>
                                                    </Link>
                                                    <Link href="#!" className="badge border bg-danger-transparent rounded-1 ">
                                                        <i className="ri-thumb-down-line align-bottom me-1 d-inline-flex"></i><span className=""> {idx.dislike} </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <h5 className="mb-5 mt-3 fw-semibold text-center">Reviews Style-2</h5>
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12}>
                        <Row className=" gy-4  reviews-container">
                            {Reviewstyle2.map((idx) => (
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="avatar avatar-md avatar-rounded me-3">
                                                    <Image  src={idx.src1} alt="" />
                                                </span>
                                                <div>
                                                    <p className="mb-0 fw-semibold fs-14 text-primary">{idx.heading}</p>
                                                    <p className="mb-0 fs-10 fw-semibold text-muted">{idx.data}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <Link href="#!" className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</Link></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <span className="text-muted">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className="ri-star-fill me-1"></i>
                                                        <i className={`ri-star-${idx.rating}`}></i>
                                                    </span>
                                                </div>
                                                <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                    <span>{idx.month}</span>
                                                    <span className="d-block fw-normal fs-12 text-success"><i>{idx.heading}</i></span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
Reviews.layout = "Contentlayout"

export default Reviews;