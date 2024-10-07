import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Card, Col, Dropdown, Row, Form, OverlayTrigger, Tooltip, Nav, Tab, ListGroup, Modal } from 'react-bootstrap';
import Seo from '@/shared/layout-components/seo/seo';
import { Friendsdata, Galleryprofile, Projectsdata, Skilldata } from '@/shared/data/pages/profiledata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Image from 'next/image';

const Profile = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div >
            <Seo title="Profile" />
            <Pageheader title="Profile" heading="Pages" active="Profile" />
            <Row>
                <Col xxl={3} className="">
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="border-bottom">
                            <div className="d-sm-flex  main-profile-cover">
                                <span className="avatar avatar-xxl online me-3">
                                    <Image  src="../../../assets/images/faces/5.jpg" alt="" className="avatar avatar-xxl" />
                                </span>
                                <div className="flex-fill main-profile-info my-auto">
                                    <h5 className="fw-semibold mb-1 ">Json Taylor</h5>
                                    <div>
                                        <p className="mb-1 text-muted">Chief Executive Officer (C.E.O)</p>
                                        <p className="fs-12 op-7 mb-0">
                                            <span className="me-3 d-inline-flex align-items-center"><i className="ri-building-line me-1 align-middle"></i>Georgia</span>
                                            <span className="d-inline-flex align-items-center"><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="p-0 main-profile-info">
                            <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="py-3 border-end w-100 text-center">
                                    <p className="fw-bold fs-20  text-shadow mb-0">113</p>
                                    <p className="mb-0 fs-12 text-muted ">Projects</p>
                                </div>
                                <div className="py-3 border-end w-100 text-center">
                                    <p className="fw-bold fs-20  text-shadow mb-0">12.2k</p>
                                    <p className="mb-0 fs-12 text-muted ">Followers</p>
                                </div>
                                <div className="py-3 w-100 text-center">
                                    <p className="fw-bold fs-20  text-shadow mb-0">128</p>
                                    <p className="mb-0 fs-12 text-muted ">Following</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="p-4  border-bottom border-block-end-dashed">
                            <p className="fs-15 mb-2 me-4 fw-semibold">Personal Info :</p>
                            <ListGroup>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-semibold">
                                            Name :
                                        </div>
                                        <span className="fs-12 text-muted">Sonya Taylor</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-semibold">
                                            Email :
                                        </div>
                                        <span className="fs-12 text-muted">sonyataylor231@gmail.com</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-semibold">
                                            Phone :
                                        </div>
                                        <span className="fs-12 text-muted">+(555) 555-1234</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-semibold">
                                            Designation :
                                        </div>
                                        <span className="fs-12 text-muted">C.E.O</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-semibold">
                                            Age :
                                        </div>
                                        <span className="fs-12 text-muted">28</span>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="me-2 fw-semibold">
                                            Experience :
                                        </div>
                                        <span className="fs-12 text-muted">10 Years</span>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className="p-4 border-bottom border-block-end-dashed">
                            <p className="fs-15 mb-2 me-4 fw-semibold">Contact Information :</p>
                            <div className="text-muted">
                                <p className="mb-3">
                                    <span className="avatar avatar-sm avatar-rounded me-2 bg-info-transparent">
                                        <i className="ri-mail-line align-middle fs-14"></i>
                                    </span>
                                    sonyataylor2531@gmail.com
                                </p>
                                <p className="mb-3">
                                    <span className="avatar avatar-sm avatar-rounded me-2 bg-warning-transparent">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                    +(555) 555-1234
                                </p>
                                <div className="d-flex">
                                    <p className="mb-0">
                                        <span className="avatar avatar-sm avatar-rounded me-2 bg-success-transparent">
                                            <i className="ri-map-pin-line align-middle fs-14"></i>
                                        </span>
                                    </p>
                                    <p className="mb-0">
                                        MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071 </p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-bottom border-block-end-dashed">
                            <p className="fs-15 mb-2 me-4 fw-semibold">Skills :</p>
                            <div>
                                {Skilldata.map((idx) => (
                                    <Link href="#!" key={Math.random()}>
                                        <span className="badge bg-light text-muted m-1">{idx.heading}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
                            <p className="fs-15 mb-2 me-4 fw-semibold">Social Networks :</p>
                            <div className="btn-list mb-0">
                                <Button variant='' className="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light">
                                    <i className="ri-facebook-line"></i>
                                </Button>
                                <Button variant='' className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                    <i className="ri-twitter-x-line"></i>
                                </Button>
                                <Button variant='' className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                    <i className="ri-instagram-line"></i>
                                </Button>
                                <Button variant='' className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                    <i className="ri-github-line"></i>
                                </Button>
                                <Button variant='' className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                    <i className="ri-youtube-line"></i>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Row>
                        <Col xl={12}>
                            <div className=" custom-card">
                                <Card.Body className="p-0">
                                    <Tab.Container defaultActiveKey="activity">
                                        <div className="border-block-end-dashed  bg-white rounded-2 p-2">
                                            <div>
                                                <Nav className="nav-pills nav-justified gx-3 tab-style-6 d-sm-flex d-block " id="myTab" role="tablist">
                                                    <Nav.Item className="rounded" role="presentation">
                                                        <Nav.Link className="" id="activity-tab" data-bs-toggle="tab" eventKey="activity"
                                                            data-bs-target="#activity-tab-pane" type="button" role="tab"
                                                            aria-controls="activity-tab-pane" aria-selected="true"><i
                                                                className="ri-gift-line me-1 align-middle d-inline-block fs-16"></i>Activity</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="rounded" role="presentation">
                                                        <Nav.Link className="" id="gallery-tab" data-bs-toggle="tab" eventKey="gallery"
                                                            data-bs-target="#gallery-tab-pane" type="button" role="tab"
                                                            aria-controls="gallery-tab-pane" aria-selected="false"><i
                                                                className="ri-exchange-box-line me-1 align-middle d-inline-block fs-16"></i>Gallery</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="rounded" role="presentation">
                                                        <Nav.Link className="" id="posts-tab" data-bs-toggle="tab" eventKey="projects"
                                                            data-bs-target="#posts-tab-pane" type="button" role="tab"
                                                            aria-controls="posts-tab-pane" aria-selected="false"><i
                                                                className="ri-bill-line me-1 align-middle d-inline-block fs-16"></i>Projects</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="rounded" role="presentation">
                                                        <Nav.Link className="" id="followers-tab" data-bs-toggle="tab" eventKey="friends"
                                                            data-bs-target="#followers-tab-pane" type="button" role="tab"
                                                            aria-controls="followers-tab-pane" aria-selected="false"><i
                                                                className="ri-money-dollar-box-line me-1 align-middle d-inline-block fs-16"></i>Friends</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                        </div>
                                        <div className="py-4">
                                            <Tab.Content className="" id="myTabContent">
                                                <Tab.Pane eventKey="activity" className="fade p-0 border-0 bg-white p-4 rounded-3" id="activity-tab-pane"
                                                    role="tabpanel" aria-labelledby="activity-tab" tabIndex={0}>
                                                    <ul className="list-unstyled profile-timeline">
                                                        <li>
                                                            <span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">16,Dec 2023</span>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image  src="../../../assets/images/faces/1.jpg" alt="" />
                                                                </span>
                                                                <p className="text-muted mb-2">
                                                                    <span className="text-default"><b>Barnes vare</b> Shared project</span>
                                                                </p>
                                                                <p className="text-muted fs-12 mb-0">Added 1 attachment <strong>docfile.doc</strong></p>
                                                                <div className="btn-group file-attach mt-3" role="group" aria-label="Basic example">
                                                                    <Button variant='' type="button" className="btn btn-sm btn-primary-light">
                                                                        <span className="ri-file-line me-2"></span> Image_file.jpg
                                                                    </Button>
                                                                    <Button variant='' type="button" className="btn btn-sm btn-primary-light" aria-label="Close">
                                                                        <span className="ri-download-2-line"></span>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">18,Dec 2023</span>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image  src="../../../assets/images/faces/3.jpg" alt="" />
                                                                </span>
                                                                <p className="text-muted mb-2">
                                                                    <span className="text-default"><b>Alzbeth Aren</b> Shared project</span>.
                                                                </p>
                                                                <p className="text-muted mb-0">
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                                                    rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="fs-12 text-muted fw-semibold text-end  ">11,Dec 2023</span>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image  src="../../../assets/images/faces/5.jpg" alt="" />
                                                                </span>
                                                                <p className="text-muted mb-1">
                                                                    <span className="text-default"><b>Melissa Blue</b> liked your post <b>travel excites</b></span>.
                                                                </p>
                                                                <p className="text-muted">you are already feeling the tense atmosphere of the video playing in the background</p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-12.jpg" className="m-1" alt="" />
                                                                    </Link>
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-13.jpg" className="m-1" alt="" />
                                                                    </Link>
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-14.jpg" className="m-1" alt="" />
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">18,Dec 2023</span>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image  src="../../../assets/images/faces/11.jpg" alt="" />
                                                                </span>
                                                                <p className="text-muted mb-2">
                                                                    <span className="text-default"><b>Json Smith</b> reacted to the post 👍</span>.
                                                                </p>
                                                                <p className="text-muted mb-0">
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="fs-12 text-muted fw-semibold text-end  profile-timeline-time">21,Dec 2023</span>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image  src="../../../assets/images/faces/4.jpg" alt="" />
                                                                </span>
                                                                <p className="text-muted mb-2">
                                                                    <span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.
                                                                </p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-10.jpg" alt="" />
                                                                    </Link>
                                                                    <span className="fs-11 text-muted">432.87KB</span>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="fs-12 text-muted fw-semibold text-end  profile-timeline-time">24,Dec 2023</span>
                                                                <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                                                    E
                                                                </span>
                                                                <p className="mb-2">
                                                                    <b>You</b> Commented on <b>alexander taylor</b> post <Link className="text-secondary" href="#!"><u>#beautiful day</u></Link>.
                                                                </p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-15.jpg" alt="" />
                                                                    </Link>
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-16.jpg" alt="" />
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">28,Dec 2023</span>
                                                                <span className="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                                                    P
                                                                </span>
                                                                <p className="text-muted mb-2">
                                                                    <span className="text-default"><b>You</b> shared a post with 4 people <b className='text-break'>Simon,Sasha,Anagha,Hishen</b></span>.
                                                                </p>
                                                                <p className="profile-activity-media mb-2">
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-17.jpg" alt="" />
                                                                    </Link>
                                                                </p>
                                                                <div>
                                                                    <div className="avatar-list-stacked">
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <Image  src="../../../assets/images/faces/2.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <Image  src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <Image  src="../../../assets/images/faces/2.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <Image  src="../../../assets/images/faces/10.jpg" alt="img" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="fs-12 text-muted fw-semibold text-end profile-timeline-time">24,Dec 2023 </span>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <Image  src="../../../assets/images/media/media-12.jpg" alt="" />
                                                                </span>
                                                                <p className="mb-1">
                                                                    <b>You</b> Commented on <b>Peter Engola</b> post <Link className="text-secondary" href="#!"><u>#Mother Nature</u></Link>.
                                                                </p>
                                                                <p className="text-muted">Technology id developing rapidly kepp uo your work 👌</p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-18.jpg" alt="" />
                                                                    </Link>
                                                                    <Link href="#!">
                                                                        <Image  src="../../../assets/images/media/media-13.jpg" alt="" />
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="gallery" className="fade p-0 border-0" id="gallery-tab-pane"
                                                    role="tabpanel" aria-labelledby="gallery-tab" tabIndex={0}>
                                                    <Row>
                                                        <Galleryprofile />
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="projects" className="fade p-0 border-0" id="posts-tab-pane"
                                                    role="tabpanel" aria-labelledby="posts-tab" tabIndex={0}>
                                                    <Row>
                                                        {Projectsdata.map((idx) => (
                                                            <Col md={6} className="task-card" key={Math.random()}>
                                                                <Card className="custom-card task-pending-card">
                                                                    <Card.Body>
                                                                        <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">{idx.heading}</Link>
                                                                        <p className="mb-3">Status : <span className={`badge bg-${idx.color}`}>{idx.status}</span></p>
                                                                        <div className="d-flex align-items-center">
                                                                            <p className="mb-0">Assigned To :</p>
                                                                            <span className="avatar-list-stacked ms-1">
                                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="img" />
                                                                                </span>
                                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                                </span>
                                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="img" />
                                                                                </span>
                                                                            </span>
                                                                            <span className="me-2">
                                                                                <button onClick={handleShow} className={`btn btn-sm btn-icon btn-wave btn-${idx.color1}-light waves-effect waves-light`} data-bs-toggle="modal" data-bs-target="#addpromodal1"><i className="ri-add-fill"></i></button></span>
                                                                            <Modal show={show} onHide={handleClose} className="fade" id="addpromodal1" tabIndex={-1} aria-labelledby="AddModalLabel1" aria-hidden="true">
                                                                                <div className="modal-content">
                                                                                    <Modal.Header className="">
                                                                                        <h6 className="modal-title" id="AddModalLabel1">Edit Assigne</h6>
                                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                                            aria-label="Close" onClick={handleClose}></Button>
                                                                                    </Modal.Header>
                                                                                    <Modal.Body>
                                                                                        <form>
                                                                                            <Row>
                                                                                                <div className="col-12">
                                                                                                    <div className="mb-3">
                                                                                                        <Form.Label htmlFor="recipient-name2"
                                                                                                            className="col-form-label">Assigne To:</Form.Label>
                                                                                                        <Form.Control type="text" className="" id="recipient-name2" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </Row>
                                                                                        </form>
                                                                                    </Modal.Body>
                                                                                    <div className="modal-footer">
                                                                                        <Button variant='' type="button" className="btn btn-secondary" 
                                                                                            data-bs-dismiss="modal">Save</Button>
                                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose}>Cancel</Button>
                                                                                    </div>
                                                                                </div>
                                                                            </Modal>
                                                                        </div>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="friends" className="fade p-0 border-0" id="followers-tab-pane"
                                                    role="tabpanel" aria-labelledby="followers-tab" tabIndex={0}>
                                                    <Row>
                                                        {Friendsdata.map((idx) => (
                                                            <Col xxl={4} xl={4} lg={6} md={6} sm={12} key={Math.random()}>
                                                                <Card className="custom-card shadow-none border">
                                                                    <Card.Body className="p-4">
                                                                        <div className="text-center">
                                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                                <Image  src={idx.src1} alt="" />
                                                                            </span>
                                                                            <div className="mt-2">
                                                                                <p className="mb-0 fw-semibold">{idx.heading}</p>
                                                                                <p className="fs-12 op-7 mb-1 text-muted">{idx.mail}</p>
                                                                                <span className={`badge bg-${idx.color}-transparent rounded-pill`}>{idx.postion}</span>
                                                                            </div>
                                                                        </div>
                                                                    </Card.Body>
                                                                    <div className="card-footer text-center">
                                                                        <div className="btn-list">
                                                                            <Button variant='' className="btn btn-sm btn-light btn-wave">Block</Button>
                                                                            <Button variant='' className="btn btn-sm btn-primary btn-wave">Unfollow</Button>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </div>
                                    </Tab.Container>

                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} className="">
                    <Card className="custom-card">
                        <div className="p-4 border-bottom border-block-end-dashed">
                            <p className="fs-15 mb-2 fw-semibold">Profile Status :</p>
                            <p className="fw-semibold mb-2">Profile 60% completed - <Link href="#!" className="text-primary fs-12">Finish now</Link></p>
                            <div className="progress progress-sm progress-animate ">
                                <div className="progress-bar bg-primary  ronded-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: "60%" }}></div>
                            </div>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <div className="card-header">
                            <div className="card-title">Followers</div>
                        </div>
                        <div className="card-body">
                            <ul className="list-group followers-list">
                                <li className="list-group-item">
                                    <div className="d-sm-flex align-items-top">
                                        <span className="avatar avatar-sm">
                                            <Image  src="../../../assets/images/faces/1.jpg" alt="img" />
                                        </span>
                                        <div className="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                            <p className="mb-0 lh-1">Alicia Sierra</p>
                                            <span className="fs-11 text-muted op-7">aliciasierra389@gmail.com</span>
                                        </div>
                                        <Button variant='' className="btn btn-light btn-wave btn-sm ms-auto">Follow</Button>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-sm-flex align-items-top">
                                        <span className="avatar avatar-sm">
                                            <Image  src="../../../assets/images/faces/3.jpg" alt="img" />
                                        </span>
                                        <div className="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                            <p className="mb-0 lh-1">Samantha Mery</p>
                                            <span className="fs-11 text-muted op-7">samanthamery@gmail.com</span>
                                        </div>
                                        <Button variant='' className="btn btn-light btn-wave btn-sm ms-auto">Follow</Button>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-sm-flex align-items-top">
                                        <span className="avatar avatar-sm">
                                            <Image  src="../../../assets/images/faces/6.jpg" alt="img" />
                                        </span>
                                        <div className="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                            <p className="mb-0 lh-1">Juliana Pena</p>
                                            <span className="fs-11 text-muted op-7">juliapena555@gmail.com</span>
                                        </div>
                                        <Button variant='' className="btn btn-light btn-wave btn-sm ms-auto">Follow</Button>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-sm-flex align-items-top">
                                        <span className="avatar avatar-sm">
                                            <Image  src="../../../assets/images/faces/15.jpg" alt="img" />
                                        </span>
                                        <div className="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                            <p className="mb-0 lh-1">Adam Smith</p>
                                            <span className="fs-11 text-muted op-7">adamsmith99@gmail.com</span>
                                        </div>
                                        <Button variant='' className="btn btn-light btn-wave btn-sm ms-auto">Follow</Button>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-sm-flex align-items-top">
                                        <span className="avatar avatar-sm">
                                            <Image  src="../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                        <div className="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                            <p className="mb-0 lh-1">Farhaan Amhed</p>
                                            <span className="fs-11 text-muted op-7">farhaanahmed989@gmail.com</span>
                                        </div>
                                        <Button variant='' className="btn btn-light btn-wave btn-sm ms-auto">Follow</Button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Card>
                    <Card className="custom-card">
                        <div className="card-header">
                            <div className="card-title">Our Latest New</div>
                        </div>
                        <div className="card-body">
                            <div className="media media-xs overflow-visible">
                                <Image  className="avatar bradius avatar-xl me-3" src="../../../assets/images/faces/12.jpg" alt="avatar-img" />
                                <div className="media-body valign-middle">
                                    <Link href="#!" className="fw-semibold text-dark">John Paige</Link>
                                    <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                                </div>
                            </div>
                            <div className="media media-xs overflow-visible mt-4">
                                <Image  className="avatar bradius avatar-xl me-3" src="../../../assets/images/faces/2.jpg" alt="avatar-img" />
                                <div className="media-body valign-middle">
                                    <Link href="#!" className="fw-semibold text-dark">Peter Hill</Link>
                                    <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                                </div>
                            </div>
                            <div className="media media-xs overflow-visible mt-4">
                                <Image  className="avatar bradius avatar-xl me-3" src="../../../assets/images/faces/9.jpg" alt="avatar-img" />
                                <div className="media-body valign-middle">
                                    <Link href="#!" className="fw-semibold text-dark">Irene Harris</Link>
                                    <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                                </div>
                            </div>
                            <div className="media media-xs overflow-visible mt-4">
                                <Image  className="avatar bradius avatar-xl me-3" src="../../../assets/images/faces/4.jpg" alt="avatar-img" />
                                <div className="media-body valign-middle">
                                    <Link href="#!" className="fw-semibold text-dark">Harry Fisher</Link>
                                    <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div >
    );
};
Profile.layout = "Contentlayout";

export default Profile;
