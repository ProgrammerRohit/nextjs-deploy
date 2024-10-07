import React, { useState } from 'react';
import Link from 'next/link';
import { Col, Form, Modal, Button, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Seo from '@/shared/layout-components/seo/seo';
import SimpleBar from 'simplebar-react';
import { Mails, Selectdata } from '@/shared/data/pages/email/mailinboxdata';
import dynamic from 'next/dynamic';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Image from 'next/image';
const Select = dynamic(() => import('react-select'), { ssr: false });
const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false });

const MailInbox = () => {

    const [value, setValue] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div >
            <Seo title="Mail Inbox" />
            <Pageheader title="Mail Inbox" heading="Email" active="Mail Inbox" />
            <div className="main-mail-container gap-4 mb-5 d-lg-flex">
                <div className="mail-navigation">
                    <div className="d-grid align-items-top p-3 border-bottom">
                        <Button variant='primary' type="button" className="btn d-flex align-items-center justify-content-center" data-bs-toggle="modal" onClick={handleShow}
                            data-bs-target="#mail-Compose">
                            <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Compose Mail
                        </Button>
                        <Modal className="modal modal-lg fade" id="mail-Compose" tabIndex={-1} aria-labelledby="mail-ComposeLabel" aria-hidden="true" show={show} onHide={handleClose}>
                            <div className="modal-content">
                                <Modal.Header className="modal-header">
                                    <h6 className="modal-title" id="mail-ComposeLabel">Compose Mail</h6>
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleClose}
                                        aria-label="Close"></Button>
                                </Modal.Header>
                                <Modal.Body className="modal-body px-4">
                                    <div className="row">
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="fromMail" className="">From<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <Form.Control type="email" className="" id="fromMail" value="jsontaylor2345@gmail.com" />
                                        </Col>
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="toMail" className="">To<sup><i className="ri-star-s-fill text-success fs-8"></i></sup></Form.Label>
                                            <Select isMulti name="colors" options={Selectdata} defaultValue={[Selectdata[0]]}
                                                className="basic-multi-select" isSearchable
                                                menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                            />
                                        </Col>
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="mailCC" className=" text-dark fw-semibold">Cc</Form.Label>
                                            <Form.Control type="email" className="" id="mailCC" />
                                        </Col>
                                        <Col xl={6} className="mb-2">
                                            <Form.Label htmlFor="mailBcc" className=" text-dark fw-semibold">Bcc</Form.Label>
                                            <Form.Control type="email" className="" id="mailBcc" />
                                        </Col>
                                        <Col xl={12} className=" mb-2">
                                            <Form.Label htmlFor="Subject" className="">Subject</Form.Label>
                                            <Form.Control type="text" className="" id="Subject" placeholder="Subject" />
                                        </Col>
                                        <Col xl={12} className="">
                                            <Form.Label className="col-form-label">Content :</Form.Label>
                                            <div className="mail-compose">
                                                <div id="mail-compose-editor">
                                                    <SunEditor />
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="modal-footer">
                                    <Button variant='' type="button" className="btn btn-light" onClick={handleClose}
                                        data-bs-dismiss="modal">Cancel</Button>
                                    <Button variant='' type="button" className="btn btn-primary">Send</Button>
                                </Modal.Footer>
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <SimpleBar>
                            <ul className="list-unstyled mail-main-nav" id="mail-main-nav">

                                <li className="px-0 pt-0">
                                    <span className="fs-11 text-muted op-7 fw-semibold">MAILS</span>
                                </li>
                                {Mails.map((idx) => (
                                    <li className={`mail-type ${idx.class1}`} key={Math.random()}>
                                        <Link href="#!">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className={`ri-${idx.icon} align-middle text-[.875rem]`}></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    {idx.text1}
                                                </span>
                                                <span className={idx.class}>{idx.text2}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                                <li className="px-0 mail-nav-heading">
                                    <span className="fs-11 text-muted op-7 fw-semibold">SETTINGS</span>
                                </li>
                                <li>
                                    <Link href="/components/pages/email/mail-settings">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i className="ri-settings-3-line align-middle fs-14"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Settings
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0 mail-nav-heading">
                                    <span className="fs-11 text-muted op-7 fw-semibold">LABELS</span>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i
                                                    className="bx bx-bookmark align-middle fs-14 fw-semibold text-secondary"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Mail
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i
                                                    className="bx bx-bookmark align-middle fs-14 fw-semibold text-danger"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Home
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 lh-1">
                                                <i
                                                    className="bx bx-bookmark align-middle fs-14 fw-semibold text-success"></i>
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
                                                <i
                                                    className="bx bx-bookmark align-middle fs-14 fw-semibold text-info"></i>
                                            </span>
                                            <span className="flex-fill text-nowrap">
                                                Friends
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="px-0 mail-nav-heading">
                                    <span className="fs-11 text-muted op-7 fw-semibold">ONLINE USERS</span>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <Image  src="../../../../assets/images/faces/4.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-semibold mb-1">Angelica</p>
                                                <p className="fs-12 text-muted mb-0">Hello this is angelica.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <Image  src="../../../../assets/images/faces/6.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-semibold mb-1">Rexha</p>
                                                <p className="fs-12 text-muted mb-0">Thanks for sharing file &#128512;.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">
                                        <div className="d-flex align-items-top lh-1">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm online avatar-rounded">
                                                    <Image  src="../../../../assets/images/faces/5.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-default fw-semibold mb-1">Alirodse</p>
                                                <p className="fs-12 text-muted mb-0">Hello Hiii.... &#129306;&#128525;.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>

                            </ul>
                        </SimpleBar>

                    </div>
                </div>
                <div className="total-mails mt-5 mt-lg-0">
                    <div className="p-3 d-flex align-items-center border-bottom">
                        <div className="me-3">
                            <Form.Check className="" type="checkbox" id="checkAll" value="" aria-label="..." />
                        </div>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Refresh</Tooltip>}>
                            <Link aria-label="anchor" href="#!" className="  fs-14" data-bs-toggle="tooltip" title="" data-bs-original-title="refresh">
                                <i className="fe fe-rotate-cw text-muted"></i>
                            </Link>
                        </OverlayTrigger>
                        <Dropdown className="ms-3">

                            <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className=" no-caret  text-muted border-0 fs-14" data-bs-toggle="dropdown" title="more">
                                <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="">
                                <Dropdown.Item><Link className="" href="#!">Read</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="" href="#!">Unread</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="" href="#!">Mark As Read</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="" href="#!">Spam</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="" href="#!">Delete</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="unstyled inbox-pagination ms-auto mb-0 ps-3">
                            <span>
                                <Link href="#!" className="text-muted d-inline-flex">1-50 of 234</Link>
                                <Link aria-label="anchor" href="#!" className="fs-18  op-6">
                                    <i className="fe fe-chevron-left text-muted"></i>
                                </Link>
                                <Link aria-label="anchor" href="#!" className=" fs-18">
                                    <i className="fe fe-chevron-right text-muted"></i>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="mail-messages overflow-scroll" id="mail-messages">
                        <ul className="list-unstyled mb-0">
                            <li className="active">
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">New Project details</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                <span className="badge bg-danger rounded-1 me-1">mail</span>
                                                &#128525;Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor&#128077; cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">Most Probable date of project completion</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="active">
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">Personal Mail</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper  nisi enean vulputat enean commodo &#128522;&#128525;li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="active">
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">Applying for bank loan?</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                <span className="badge bg-success rounded-1 me-1">Friends</span>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">
                                                Life Insurance Corparation</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum &#129306;semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">
                                                Life Insurance Corparation</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                <span className="badge bg-danger rounded-1 me-1">mail</span>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="active">
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">
                                                &#128522;History of planets are discovered yesterday.....</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">
                                                New Project details</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                <span className="badge bg-info rounded-1 me-1">Home</span>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="active">
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">
                                                Life Insurance Corparation</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo &#128525;li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">
                                                Life Insurance Corparation</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                <span className="badge bg-danger rounded-1 me-1">mail</span>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit-&#127881;&#127874; viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-top">
                                    <div className="me-3 mt-1">
                                        <Form.Check className="" type="checkbox" value="" aria-label="..." />
                                    </div>
                                    <div className="me-2 lh-1">
                                        <Link aria-label="anchor" href="#!" className="main-mail-star  d-inline-block">
                                            <i className="bx bx-star"></i>
                                        </Link>
                                    </div>
                                    <div className="me-1 lh-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                            <Link aria-label="anchor" href="#!" className="main-mail-star d-inline-block">
                                                <i className="bx bx-bookmark"></i>
                                            </Link>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="flex-fill ms-2 subject-container">
                                        <Link aria-label="anchor" href="/components/pages/email/mail-read" className="stretched-link"></Link>
                                        <p className="mb-0  main-mail-subject">
                                            <span className="d-block mb-0 fw-semibold fs-14">
                                                New Project details</span>
                                            <span className="fs-12 text-muted text-truncate">
                                                <span className="badge bg-info rounded-1 me-1">Home</span>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit- viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor  gula eget dolor
                                            </span>
                                        </p>
                                    </div>
                                    <div className="icons-mail">
                                        <div className="mail-date float-end text-muted fw-normal fs-11"><span className="me-2 d-inline-flex align-items-center"><i className="ri-attachment-2 align-middle fs-12"></i></span>1:32PM</div>
                                        <div className="mail-hover-icons">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <OverlayTrigger placement="top" overlay={<Tooltip >mark as read</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-mail"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >delete</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-trash"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >snooze</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-clock"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                                <OverlayTrigger placement="top" overlay={<Tooltip >archive</Tooltip>}>
                                                    <Link href="#!">
                                                        <i className="fe fe-download"></i>
                                                    </Link>
                                                </OverlayTrigger>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="mail-recepients d-none d-lg-block">
                    <div className="p-3 border-bottom">
                        <OverlayTrigger placement="top" overlay={<Tooltip >Add Recipent</Tooltip>}>
                            <Button variant='' aria-label="button" type="button" className="btn btn-light btn-icon rounded-pill"><i className="ri-add-line"></i></Button>
                        </OverlayTrigger>
                    </div>
                    <div className="p-3 d-flex flex-column align-items-center total-mail-recepients" id="mail-recepients">
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar online avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Sujika</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/5.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar online avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Samantha May</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/7.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar offline avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Brenda</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/4.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar offline online avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Monika</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/8.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar offline avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Kiara jah</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/3.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar offline avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Sujika</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/11.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar online avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Kim Noah</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/16.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar offline avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Proffesor</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/10.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                        <Link aria-label="anchor" href="#!" className="mail-recepeint-person">
                            <span className="avatar offline avatar-rounded">
                                <OverlayTrigger placement="top" overlay={<Tooltip >Alex Carey</Tooltip>}>
                                    <Image  src="../../../../assets/images/faces/15.jpg" alt="" />
                                </OverlayTrigger>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

MailInbox.layout = "Contentlayout";

export default MailInbox;
