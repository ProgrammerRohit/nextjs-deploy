
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Ribbons = () => {
    return (
        <Fragment>
            <Seo title={"Ribbons"} />
			<Pageheader title="Ribbons" heading="Advanced Ui" active="Ribbons" />
            <Row>
                <h5 className="fw-semibold mb-4">Ribbon Style 1</h5>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="power-ribbone power-ribbone-top-left text-warning"><span className="bg-warning"><i className="ri-flashlight-fill"></i></span></div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="power-ribbone power-ribbone-bottom-left text-primary"><span className="bg-primary"><i className="ri-flashlight-fill"></i></span></div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title.  some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="power-ribbone power-ribbone-top-right text-danger"><span className="bg-danger"><i className="ri-flashlight-fill"></i></span></div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="power-ribbone power-ribbone-bottom-right text-success"><span className="bg-success"><i className="ri-flashlight-fill"></i></span></div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <h5 className="fw-semibold mb-4">Ribbon Style 2</h5>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="ribbone ribbone-top-left text-primary"><span className="bg-primary">sold out</span></div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <div className="card ribbone-card  sold-out">
                        <div className="ribbone ribbone-top-right text-danger"><span className="bg-danger">Offer</span></div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="ribbone ribbone-top-left text-success"><span className="bg-success">Update</span></div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <div className="card ribbone-card  sold-out">
                        <div className="ribbone ribbone-top-right text-warning"><span className="bg-warning">Open</span></div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
            <Row>
                <h5 className="fw-semibold mb-4">Ribbon Style 3</h5>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="arrow-ribbone-left bg-secondary">Sale</div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="arrow-ribbone-right bg-info">Price</div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="arrow-ribbone-left bg-warning">Service</div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className="ribbone-card">
                        <div className="arrow-ribbone-right bg-teal">Offer</div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <h5 className="fw-semibold mb-4">Ribbon Style 4</h5>
                <Col xl={3} md={6}>
                    <div className="card">
                        <span className="ribbone-success-left">
                            <span><i className="fe fe-zap"></i></span>
                        </span>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="card">
                        <span className="ribbone-warning-right">
                            <span><i className="fe fe-zap"></i></span>
                        </span>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="card">
                        <span className="ribbone-info-left">
                            <span><i className="fe fe-zap"></i></span>
                        </span>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="card">
                        <span className="ribbone-danger-right">
                            <span><i className="fe fe-zap"></i></span>
                        </span>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
            <Row>
                <h5 className="fw-semibold mb-4">Ribbon Style 5</h5>
                <Col xl={3} md={6}>
                    <div className="card">
                        <span className="bookmark-ribbone-danger-left">
                            <span>Jul</span>
                        </span>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="card">
                        <span className="bookmark-ribbone-secondary-right">
                            <span>Aug</span>
                        </span>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="card">
                        <span className="bookmark-sideleft-ribbone-success-left">
                            <span>Sept</span>
                        </span>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold text-end">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3} md={6}>
                    <div className="card">
                        <span className="bookmark-sideright-ribbone-primary-right">
                            <span>Oct</span>
                        </span>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
            <div className="row justify-content-center">
                <h5 className="fw-semibold mb-4">Ribbon Style 6</h5>
                <div className="col-xxl-2 col-lg-4 col-md-4 col-10 mx-0 mx-sm-7">
                    <div className="card br-0">
                        <div className="fullwidth-secondary-ribbons">

                            <div className="bar">
                                CSS Ribbon
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </div>
                <div className="col-xxl-2 col-lg-4 col-md-4 col-10 mx-0 mx-sm-7">
                    <div className="card br-0">
                        <div className="fullwidth-primary-ribbons">

                            <div className="bar">
                                CSS Ribbon
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </div>
                <div className="col-xxl-2 col-lg-4 col-md-4 col-10 mx-0 mx-sm-7">
                    <div className="card br-0">
                        <div className="fullwidth-arrow-warning-ribbons">

                            <div className="bar">
                                CSS Ribbon
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </div>
                <div className="col-xxl-2 col-lg-4 col-md-4 col-10 mx-0 mx-sm-7">
                    <div className="card br-0">
                        <div className="fullwidth-arrow-danger-ribbons-right">

                            <div className="bar">
                                CSS Ribbon
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Card.Body className=" p-6">
                            <h6 className="card-subtitle mb-2 text-dark fw-bold">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title. Some quick example text to build on the card title</p>
                        </Card.Body>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Ribbons.layout = "Contentlayout"

export default Ribbons;