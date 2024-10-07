import { Alltasksdata, Assigndata, Priority } from '@/shared/data/pages/todolistdata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Nav, Row, Tab } from 'react-bootstrap';
const Select = dynamic(() => import('react-select'), { ssr: false });
import DatePicker from "react-datepicker";

const Todolist = () => {
    const [show, setshow] = useState(false);
    const handleClose = () => setshow(false)
    const handleShow = () => setshow(true)

    const [show1, setshow1] = useState(false);
    const handleClose1 = () => setshow1(false)
    const handleShow1 = () => setshow1(true)

    const [show2, setshow2] = useState(false);
    const handleClose2 = () => setshow2(false)
    const handleShow2 = () => setshow2(true)

    const [show3, setshow3] = useState(false);
    const handleClose3 = () => setshow3(false)
    const handleShow3 = () => setshow3(true)

    const [show4, setshow4] = useState(false);
    const handleClose4 = () => setshow4(false)
    const handleShow4 = () => setshow4(true)

    const [startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };
    const [startDate2, setStartDate2] = useState(new Date());
    const handleDateChange2 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate2(date);
        }
    };

    return (
        <Fragment>
            <Seo title="Todolist" />
            <Pageheader title="To Do List" heading="Pages" active="To Do List" />
            <Row>
                <div className="col-xl-3">
                    <Card className="custom-card">
                        <Card.Body className=" p-0">
                            <div className="p-3 d-grid border-bottom border-block-end-dashed">
                                <Button variant='primary' type="button" onClick={handleShow} className="btn d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#addtask">
                                    <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
                                </Button>
                                <Modal className="fade" id="addtask" tabIndex={-1} aria-hidden="true" show={show} onHide={handleClose}>
                                    <div className="modal-content">
                                        <Modal.Header className="">
                                            <Modal.Title as="h6" className="" id="mail-ComposeLabel">Create Task</Modal.Title>
                                            <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleClose}
                                                aria-label="Close"></Button>
                                        </Modal.Header>
                                        <Modal.Body className="px-4">
                                            <div className="row gy-2">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="task-name" className="">Task Name</Form.Label>
                                                    <Form.Control type="text" className="" id="task-name" placeholder="Task Name" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label className="">Assigned To</Form.Label>
                                                    <Select name="colors" isMulti options={Assigndata} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label className="">Assigned Date</Form.Label>
                                                    <DatePicker selected={startDate2} onChange={handleDateChange2} />

                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label className="form-label">Target Date</Form.Label>
                                                    <DatePicker selected={startDate1} onChange={handleDateChange1} />

                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label className="">Priority</Form.Label>
                                                    <Select name="colors" options={Priority} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                                    />
                                                </Col>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer className="">
                                            <Button type="button" className="btn btn-light" onClick={handleClose}
                                                data-bs-dismiss="modal">Cancel</Button>
                                            <Button type="button" className="btn btn-primary">Create</Button>
                                        </Modal.Footer>
                                    </div>
                                </Modal>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <InputGroup>
                                    <Form.Control type="text" className="" placeholder="Search Task Here" aria-describedby="button-addon2" />
                                    <Button variant='' aria-label="button" className="btn btn-light" type="button" id="button-addon2"><i className="ri-search-line text-primary"></i></Button>
                                </InputGroup>
                            </div>
                            <div className="p-3 task-navigation border-bottom border-block-end-dashed">
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-0">
                                        <span className="fs-11 text-muted op-7 fw-semibold">TASKS</span>
                                    </li>
                                    <li className="active bg-light">
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-task-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    All Tasks
                                                </span>
                                                <span className="badge bg-success-transparent rounded-pill">167</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-star-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Starred
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-delete-bin-5-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Trash
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="px-0 pt-2">
                                        <span className="fs-11 text-muted op-7 fw-semibold">CATEGORIES</span>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-primary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Personal
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-success"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Daily Goals
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-secondary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Work
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-warning"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Health &amp; Fitness
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-danger"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Financial Management
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-3 text-center">
                                <Image  src="../../../assets/images/media/media-65.png" alt="img" className="wd-150" />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Col xl={9}>
                    <Row>
                        <Tab.Container defaultActiveKey="all tasks">
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Body className=" p-0">
                                        <div className="d-flex p-3 align-items-center justify-content-between">
                                            <div>
                                                <h6 className="fw-semibold mb-0">Tasks</h6>
                                            </div>

                                            <Nav className="nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
                                                <Nav.Item className="m-1">
                                                    <Nav.Link className="" eventKey="all tasks"
                                                        href="#all-tasks" aria-selected="true">All Tasks</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="m-1">
                                                    <Nav.Link className="" eventKey="pending"
                                                        href="#pending" aria-selected="true">Pending</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="m-1">
                                                    <Nav.Link className="" eventKey="inprogress"
                                                        href="#in-progress" aria-selected="true">In Progress</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item className="m-1">
                                                    <Nav.Link className="" eventKey="completed"
                                                        href="#completed" aria-selected="true">Completed</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <div>
                                                <Dropdown className="">
                                                    <Dropdown.Toggle as="a" aria-label="button" className="btn btn-sm btn-light btn-wave waves-light waves-effect no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-end-menu" align="end" as="ul">
                                                        <li className='dropdown-item'><Link className="" href="#!">Select All</Link></li>
                                                        <li className='dropdown-item'><Link className="" href="#!">Share All</Link></li>
                                                        <li className='dropdown-item'><Link className="" href="#!">Delete All</Link></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Tab.Content className="task-tabs-container">
                                <Tab.Pane className="p-0" id="all-tasks" eventKey="all tasks"
                                    role="tabpanel">
                                    <Row id="tasks-container">
                                        {Alltasksdata.map((idx) => (
                                            <Col xxl={4} md={6} className=" task-card" key={Math.random()}>
                                                <Card className="custom-card task-inprogress-card">
                                                    <Card.Body className="">
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">{idx.class}</Link>
                                                                <p className="mb-3">Status : <span className={`badge bg-${idx.color1}`}>{idx.status}</span></p>
                                                                <p className="mb-0">Assigned To : </p>
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                    </span>
                                                                </span>
                                                                <span className="me-2">
                                                                    <Button variant='' aria-label="button" onClick={handleShow1} type="button" className="btn btn-sm btn-icon btn-wave btn-primary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal"><i className="ri-add-fill"></i></Button></span>
                                                                <Modal show={show1} onHide={handleClose1} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                    <div className="modal-content">
                                                                        <Modal.Header className="">
                                                                            <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                            <Button variant='' onClick={handleClose1} type="button" className="btn-close" data-bs-dismiss="modal"
                                                                                aria-label="Close"></Button>
                                                                        </Modal.Header>
                                                                        <Modal.Body className="">
                                                                            <Row>
                                                                                <div className="col-12">
                                                                                    <div className="mb-3">
                                                                                        <label
                                                                                            className="col-form-label">Assigne To:</label>
                                                                                        <Form.Control type="text" className="" />
                                                                                    </div>
                                                                                </div>
                                                                            </Row>
                                                                        </Modal.Body>
                                                                        <Modal.Footer className="modal-footer">
                                                                            <Button variant='' type="button" className="btn btn-secondary"
                                                                                data-bs-dismiss="modal">Save</Button>
                                                                            <Button variant='' type="button" className="btn btn-primary" onClick={handleClose1}>Cancel</Button>
                                                                        </Modal.Footer>
                                                                    </div>
                                                                </Modal>
                                                            </div>
                                                            <div>
                                                                <div className="btn-list">
                                                                    <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                    <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                                </div>
                                                                <span className={`footer-badge badge bg-${idx.color}-transparent d-block`}>{idx.data}</span>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="pending" eventKey="pending"
                                    role="tabpanel">
                                    <Row>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Testing</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-danger">pending</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow2} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show2} onHide={handleClose2} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose2}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-warning-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Testing</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-danger">pending</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow2} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show2} onHide={handleClose2} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose2}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-warning-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Testing</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-danger">Pending</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow2} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show2} onHide={handleClose2} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose2}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-warning-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="in-progress" eventKey="inprogress"
                                    role="tabpanel">
                                    <Row>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Home page design</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-secondary">Inprogress</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow3} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show3} onHide={handleClose3} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose3}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix  Header issue</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-secondary">Inprogress</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow3} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show3} onHide={handleClose3} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose3}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Data table Design</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-secondary">Inprogress</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow3} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show3} onHide={handleClose3} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose3}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix the Data Table Issue</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-secondary">Inprogress</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow3} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show3} onHide={handleClose3} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose3}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-success-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Design Authentication pages</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-secondary">Inprogress</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow3} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show3} onHide={handleClose3} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose3}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-success-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="completed" eventKey="completed"
                                    role="tabpanel">
                                    <Row>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Home page design</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-success">Completed</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow4} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show4} onHide={handleClose4} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose4}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix  Header issue</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-success">Completed</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow4} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show4} onHide={handleClose4} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose4}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Data table Design</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-success">Completed</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow4} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show4} onHide={handleClose4} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose4}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-danger-transparent d-block">Heigh</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix the Data Table Issue</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-success">Completed</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow4} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show4} onHide={handleClose4} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose4}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-success-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Fix the Data Table Issue</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-success">Completed</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow4} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show4} onHide={handleClose4} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose4}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-success-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xxl={4} md={6} className=" task-card">
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body className="">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <Link href="#!" className="fs-14 fw-semibold mb-3 d-flex align-items-center">Design Authentication pages</Link>
                                                            <p className="mb-3">Status : <span className="badge bg-success">Completed</span></p>
                                                            <p className="mb-0">Assigned To :</p>
                                                            <span className="avatar-list-stacked ms-1">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/8.jpg" alt="user-img" />
                                                                </span>
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <Image  src="../../../assets/images/faces/2.jpg" alt="user-img" />
                                                                </span>
                                                            </span>
                                                            <span className="me-2"><Button variant='' type="button" aria-label="button" onClick={handleShow4} className="btn btn-sm btn-icon btn-wave btn-secondary-light waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addpromodal12"><i className="ri-add-fill"></i></Button></span>
                                                            <Modal show={show4} onHide={handleClose4} className="modal fade" id="addpromodal" tabIndex={-1} aria-labelledby="AddModalLabel" aria-hidden="true">

                                                                <div className="modal-content">
                                                                    <Modal.Header className="">
                                                                        <Modal.Title className="mb-0" id="AddModalLabel">Edit Assigne</Modal.Title>
                                                                        <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                                                                            aria-label="Close"></Button>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="">
                                                                        <Row>
                                                                            <div className="col-12">
                                                                                <div className="mb-3">
                                                                                    <label
                                                                                        className="col-form-label">Assigne To:</label>
                                                                                    <Form.Control type="text" className="" />
                                                                                </div>
                                                                            </div>
                                                                        </Row>
                                                                    </Modal.Body>
                                                                    <Modal.Footer className="modal-footer">
                                                                        <Button variant='' type="button" className="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Save</Button>
                                                                        <Button variant='' type="button" className="btn btn-primary" onClick={handleClose4}>Cancel</Button>
                                                                    </Modal.Footer>
                                                                </div>
                                                            </Modal>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-eye-line"></i></Button>
                                                                <Button variant='' type="button" aria-label="button" className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="footer-badge badge bg-success-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Row>
                    <div className="float-end mb-4">
                        <nav aria-label="Page navigation" className="pagination-style-4">
                            <ul className="pagination mb-0  gap-2">
                                <li className="page-item disabled">
                                    <Link className="page-link" href="#!">
                                        Prev
                                    </Link>
                                </li>
                                <li className="page-item active"><Link className="page-link" href="#!">1</Link></li>
                                <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                <li className="page-item">
                                    <Link aria-label="anchor" className="page-link" href="#!">
                                        <i className="bi bi-three-dots"></i>
                                    </Link>
                                </li>
                                <li className="page-item d-none d-sm-flex"><Link className="page-link" href="#!">16</Link></li>
                                <li className="page-item"><Link className="page-link" href="#!">17</Link></li>
                                <li className="page-item">
                                    <Link className="page-link text-primary" href="#!">
                                        next
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}
Todolist.layout = "Contentlayout";

export default Todolist;