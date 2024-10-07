
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button, Card, Col, Dropdown, Form, Nav, OverlayTrigger, Pagination, Row, Tooltip } from 'react-bootstrap'

const Contacts = () => {
    return (
        <Fragment>
            <Seo title="Contacts" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card mt-4">
                        <Card.Body>
                            <div className="contact-header">
                                <div className="d-sm-flex d-block align-items-center justify-content-between">
                                    <div className="h5 fw-semibold mb-0">Contacts</div>
                                    <div className="d-flex mt-sm-0 mt-2 align-items-center">
                                        <div className="input-group">
                                            <Form.Control type="text" className="form-control bg-light border-0" placeholder="Search Contact" aria-describedby="search-contact-member" />
                                            <Button variant='' className="btn btn-light" type="button" id="search-contact-member"><i className="ri-search-line text-muted"></i></Button>
                                        </div>
                                        <Dropdown className="ms-2">
                                            <Dropdown.Toggle as="a" className="btn btn-icon btn-primary-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end" className="dropdown-menu-end">
                                                <Dropdown.Item><Link className="" href="#!">Delete All</Link></Dropdown.Item>
                                                <Dropdown.Item><Link className="" href="#!">Copy All</Link></Dropdown.Item>
                                                <Dropdown.Item><Link className="" href="#!">Move To</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add Contacts</Tooltip>}>
                                            <Button variant='' className="btn btn-icon btn-secondary-light ms-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Contact"><i className="ri-add-line"></i></Button>
                                        </OverlayTrigger>

                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top ">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/4.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Melissa Jane
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">melissajane2134@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 354 2345
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-fill fs-16 text-danger"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                                <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top ">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/15.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Simon Cowall
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">simoncowal111@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 873 8923
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/2.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Susana Sane
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">susanasane@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 347 0923
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-fill fs-16 text-danger"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/13.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Sahne Watson
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">shanewatson@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 674 7824
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/media/media-39.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Dwayne Happy
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">dwaynehappy235@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 985 2893
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/5.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Meisha Tite
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">meishatite456@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 675 4680
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/10.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Andrew Gerfield
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">andrewgerfield00@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 765 8937
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/21.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Samantha Melon
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">samanthamelon@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 890 5687
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/11.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Elisha Smith
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">elishasmith@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 972 9883
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/media/media-63.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Devon Convoy
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">devonconvoy65@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 693 7836
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-fill fs-16 text-danger"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3 bg-primary">
                                        SJ
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Shensovic Jeremy
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">shensovicjeremy@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 238 2342
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/12.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Jason Mama
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">jasonmama96@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 875 6789
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Monika Karen
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">monikakaren@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 568 9234
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/media/media-13.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Tom Holland
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">tomholland98@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 892 4334
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/media/media-36.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Anelica Julie
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">angelicajulie@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 882 3445
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/8.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Aneera Khan
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">aneerakhan@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 973 8734
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/21.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Linda Simson
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">lindasimson@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 234 9345
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-fill fs-16 text-danger"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/14.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Umaga Nigel
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">umaganigel89@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 783 0213
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/media/media-8.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Json Taylor
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">jsontaylor@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 234 2452
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-fill fs-16 text-danger"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/7.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Karizma Tope
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">Karizmatope@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 890 2455
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/media/media-34.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Gahaskar Shaik
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">gahaskarshaik@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 982 7648
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/media/media-21.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Balvinder Singh
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">balvindersingh@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 002 1239
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">
                                    <div className="avatar avatar-xl avatar-rounded me-3">
                                        <Image  src="../../../assets/images/faces/6.jpg" alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Ramika Missi
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">ramikamissi@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 982 4834
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <button type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </button>
                               <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle as="a" className="btn btn-sm btn-light btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="">
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                        <li><Dropdown.Item className="" href="#!"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Nav aria-label="Page navigation">
                    <Pagination className="ms-auto ps-3">
                        <Pagination.Item className=" disabled">Previous</Pagination.Item>
                        <Pagination.Item className="">1</Pagination.Item>
                        <Pagination.Item className="">2</Pagination.Item>
                        <Pagination.Item className="">Next</Pagination.Item>
                    </Pagination>
                </Nav>
            </Row>
        </Fragment>
    )
}
Contacts.layout = "Contentlayout"

export default Contacts;