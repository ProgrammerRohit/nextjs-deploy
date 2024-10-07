import { chatData } from '@/shared/data/pages/chatdata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Button, Col, Dropdown, Form, Nav, Offcanvas, Tab } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

const Chat = () => {

    const [activeUser, setActiveUser] = useState({ name: "Emiley Jackson", image: "../../../assets/images/faces/2.jpg" });

    const handleUserClick = (name, image) => {
        setActiveUser({ name, image });
    };
    const mainChartWrapper = () => (
        document.querySelector(".main-chart-wrapper")?.classList.add("responsive-chat-open")
    )
    const mainChartWrapper1 = () => (
        document.querySelector(".main-chart-wrapper")?.classList.remove("responsive-chat-open")
    )

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Fragment>
            <Seo title="Chat" />
            <Pageheader title="Chat" heading="Pages" active="Chat" />
            <div className="main-chart-wrapper gap-4 mb-5 d-xl-flex">
                <div className="chat-info border">
                    <Link aria-label="anchor" href="#!" className="btn btn-secondary btn-icon rounded-circle chat-add-icon">
                        <i className="ri-add-line"></i>
                    </Link>
                    <div className="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
                        <h6 className="fw-semibold mb-0">Messages</h6>
                        <div className="dropdown">
                            <ul className="dropdown-menu" role="menu" data-bs-toggle="dropdown" >
                                <li className="border-bottom"><Link className="dropdown-item" href="#!;">Today</Link></li>
                                <li className="border-bottom"><Link className="dropdown-item" href="#!;">This Week</Link></li>
                                <li><Link className="dropdown-item" href="#!;">Last Week</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat-search p-3 border-bottom">
                        <div className="input-group">
                            <Form.Control type="text" className="" placeholder="Search Chat"
                                aria-describedby="button-addon2" />
                            <Button aria-label="button" type="button" className="btn btn-primary" id="button-addon2"><i
                                className="ri-search-line"></i></Button>
                        </div>
                    </div>

                    <div className="align-items-center justify-content-between w-100 p-3 border-bottom">
                        <div>
                            <h6 className="fw-semibold mb-0">Online</h6>
                        </div>
                        <div className="mt-3">
                            <span className="avatar avatar-md me-2 online avatar-rounded">
                                <Image src="../../../assets/images/faces/8.jpg" alt="Image" />
                            </span>
                            <span className="avatar avatar-md me-2 online avatar-rounded">
                                <Image src="../../../assets/images/faces/10.jpg" alt="Image" />
                            </span>
                            <span className="avatar avatar-md me-2 online avatar-rounded">
                                <Image src="../../../assets/images/faces/12.jpg" alt="Image" />
                            </span>
                            <span className="avatar avatar-md me-2 online avatar-rounded">
                                <Image src="../../../assets/images/faces/13.jpg" alt="Image" />
                            </span>
                            <span className="avatar avatar-md me-2 online avatar-rounded">
                                <Image src="../../../assets/images/faces/14.jpg" alt="Image" />
                            </span>
                            <span className="avatar avatar-md me-2 online avatar-rounded d-sm-inline-flex d-none">
                                <Image src="../../../assets/images/faces/15.jpg" alt="Image" />
                            </span>
                        </div>
                    </div>
                    <Tab.Container defaultActiveKey="chats">
                        <Nav className="nav-tabs tab-style-6 p-0 nav-justified mb-0 border-bottom d-block d-sm-flex rounded-0" defaultActiveKey="chats"
                            id="myTab1" role="tablist">
                            <Nav.Item className=" border-end me-0" role="presentation">
                                <Nav.Link className="fs-14" id="users-tab" eventKey="chats"
                                    data-bs-target="#users-tab-pane" type="button" role="tab"
                                    aria-controls="users-tab-pane" aria-selected="true"><i
                                        className="fe fe-mail me-1 align-middle d-inline-block"></i>Chats</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className=" border-end me-0" role="presentation">
                                <Nav.Link className="fs-14" id="groups-tab" eventKey="group"
                                    data-bs-target="#groups-tab-pane" type="button" role="tab"
                                    aria-controls="groups-tab-pane" aria-selected="false"><i
                                        className="fe fe-users me-1 align-middle d-inline-block"></i>Groups</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="" role="presentation">
                                <Nav.Link className="fs-14" id="calls-tab" eventKey="calls"
                                    data-bs-target="#calls-tab-pane" type="button" role="tab"
                                    aria-controls="calls-tab-pane" aria-selected="false"><i
                                        className="fe fe-phone me-1 align-middle d-inline-block"></i>Calls</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="" id="myTabContent">
                            <Tab.Pane className="fade show border-0 chat-users-tab" id="users-tab-pane" eventKey="chats"
                                role="tabpanel" aria-labelledby="users-tab" tabIndex={0}>
                                <SimpleBar id="chat-msg-scroll" className="chat-users-tab">
                                    {chatData.map((section, index) => (
                                        <ul className="list-unstyled mb-0 mt-2 chat-users-tab" key={index}>
                                            <li className="pb-0" >
                                                <p className="text-muted fs-11 fw-semibold mb-2 op-7">{section.heading}</p>
                                            </li>
                                            {section.users.map((chatUser, userIndex) => (
                                                <li className={chatUser.class} key={userIndex}>
                                                    <a href="#!" onClick={() => { handleUserClick(chatUser.name, chatUser.image); mainChartWrapper(); }}>
                                                        <div className="d-flex align-items-top">
                                                            <div className="me-1 lh-1">
                                                                <span className={`avatar avatar-md ${chatUser.online} me-2 avatar-rounded`}>
                                                                    <Image src={chatUser.image} alt="Image" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <p className="mb-0 fw-semibold">
                                                                    {chatUser.name} <span
                                                                        className="float-end text-muted fw-normal fs-11">{chatUser.time}</span>
                                                                </p>
                                                                <p className="fs-12 mb-0">
                                                                    <span className="chat-msg text-truncate">{chatUser.message}</span>
                                                                    {chatUser.icon}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </SimpleBar>

                            </Tab.Pane>
                            <Tab.Pane className="fade border-0 chat-groups-tab" id="groups-tab-pane" eventKey="group"
                                role="tabpanel" aria-labelledby="groups-tab" tabIndex={0}>
                                <SimpleBar style={{ height: "350px" }}>
                                    <ul className="list-unstyled mb-0 mt-2 ">
                                        <li className="pb-0">
                                            <p className="text-muted fs-11 fw-semibold mb-1 op-7">GROUP CHATS</p>
                                        </li>
                                        <li className="checkforactive">
                                            <Link href="#!;">
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <Image src={"../../../assets/images/faces/17.jpg"} alt="Image" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold" >
                                                            Family Together &#128525; <span
                                                                className="float-end text-muted fw-normal fs-11">12:24PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0 chat-msg-typing ">
                                                            <span className="chat-msg text-truncate">Hira Typing...</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                            <span
                                                                className="badge bg-success-transparent rounded-circle float-end">2</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-msg-unread checkforactive" >
                                            <Link href="#!;">
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <Image src="../../../assets/images/faces/18.jpg" alt="Image" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold" >
                                                            Work Buddies <span
                                                                className="float-end text-muted fw-normal fs-11">1:16PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate"><span
                                                                className="group-indivudial">Rams:</span>Happy to be part of
                                                                this group</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link href="#!;" >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <Image src="../../../assets/images/faces/19.jpg" alt="Image" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Friends Forever &#128526; <span
                                                                className="float-end text-muted fw-normal fs-11">3 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Simon,Melissa,Amanda,Patrick,Siddique</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link href="#!;">
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <Image src="../../../assets/images/faces/20.jpg" alt="Image" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Social Media Deals <span
                                                                className="float-end text-muted fw-normal fs-11">5 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Kamalan,Subha,Ambrose,Kiara,Jackson</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link href="#!;">
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <Image src="../../../assets/images/faces/21.jpg" alt="Image" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Apartment Group <span
                                                                className="float-end text-muted fw-normal fs-11">12 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Subman,Rajen,Kairo,Dibasha,Alexa</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled mb-0 mt-2 ">
                                        <li className="pb-0">
                                            <p className="text-muted fs-11 fw-semibold mb-1 op-7">MY CHAT GROUPS</p>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">1) Family Together</p>
                                                    <p className="mb-0"><span className="badge bg-success-transparent">4
                                                        Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/2.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/8.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/2.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/10.jpg" alt="Image" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded fs-10"
                                                        href="#!;">
                                                        +19
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">2) Work Buddies </p>
                                                    <p className="mb-0"><span className="badge bg-secondary-transparent">32
                                                        Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/1.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/7.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/3.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/9.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/12.jpg" alt="Image" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded fs-10"
                                                        href="#!;">
                                                        +12
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">3) Friends Forever</p>
                                                    <p className="mb-0"><span className="badge bg-warning-transparent">3
                                                        Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/4.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/8.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/13.jpg" alt="Image" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded fs-10"
                                                        href="#!;">
                                                        +15
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">4) Social Media Deals</p>
                                                    <p className="mb-0"><span className="badge bg-danger-transparent">5
                                                        Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/1.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/7.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/14.jpg" alt="Image" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded fs-10"
                                                        href="#!;">
                                                        +28
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">4) Apartment Group</p>
                                                    <p className="mb-0"><span className="badge bg-light text-dark">0 Online</span>
                                                    </p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/5.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/6.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/12.jpg" alt="Image" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <Image src="../../../assets/images/faces/3.jpg" alt="Image" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded fs-10"
                                                        href="#!;">
                                                        +53
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </SimpleBar>
                            </Tab.Pane>
                            <Tab.Pane className="fade border-0 chat-calls-tab" id="calls-tab-pane" role="tabpanel" eventKey="calls"
                                aria-labelledby="calls-tab" tabIndex={0}>
                                <SimpleBar style={{ height: "300px" }}>
                                    <ul className="list-unstyled mb-0 mt-2 chat-calls-tab">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md online me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/5.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Sujika
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">Today,12:47PM</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-success-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li >
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md online me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/7.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Melissa
                                                        <span className="ms-1 outgoing-call-failed"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">Today,10:27AM</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-danger-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/21.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Sharukh Sam
                                                        <span className="ms-1 outgoing-call-success"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">Yesterday,12:45PM</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <a aria-label="anchor" className="btn btn-sm  btn-success-light">
                                                        <i className="ti ti-video"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/15.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Kiram Kumal
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">3 Days ago</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-success-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/4.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Amanda Sams
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">22, Oct 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-success-light">
                                                        <i className="ti ti-video"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/16.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Azimo Peter
                                                        <span className="ms-1 incoming-call-failed"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">24, Oct 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-danger-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/8.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Sierra Adams
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">22, Oct 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-success-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md online me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/3.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Dimple Kanns
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">13, Oct 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-success-light">
                                                        <i className="ti ti-video"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md online me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/9.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Adrea Jaremiah
                                                        <span className="ms-1 outgoing-call-failed"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">13, Sep 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-danger-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/21.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Anjaneliyu
                                                        <span className="ms-1 outgoing-call-success"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">10, July 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-success-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <Image src="../../../assets/images/faces/14.jpg" alt="Image" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Jason Steph
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">1, Apr 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Link aria-label="anchor" href="#!" className="btn btn-sm  btn-success-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </SimpleBar>

                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                </div>
                <div className="main-chat-area border">
                    <div className="d-flex align-items-center p-3 border-bottom">
                        <div className="me-2 lh-1">
                            <span className="avatar avatar-lg online me-2 avatar-rounded chatstatusperson">
                                <Image className="chatimageperson" src={activeUser.image} alt="Image" />
                            </span>
                        </div>
                        <div className="flex-fill" onClick={handleShow}>
                            <Link href="#!;" className="chatnameperson responsive-userinfo-open" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{activeUser.name}</Link>
                            <p className="text-muted mb-0 chatpersonstatus">online</p>
                        </div>
                        <div className="d-flex">
                            <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light ms-2 d-none d-sm-block">
                                <i className="bx bx-phone"></i>
                            </Button>
                            <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light ms-2 d-none d-sm-block">
                                <i className="bx bx-video"></i>
                            </Button>
                            <Button variant='' onClick={handleShow} aria-label="button" type="button" className="btn btn-icon btn-light ms-2 responsive-userinfo-open" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className="bx bx-user-circle" id="responsive-chat-close"></i>
                            </Button>
                            <Dropdown className="dropdown ms-2">
                                <Dropdown.Toggle variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-wave waves-light no-caret"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="ti ti-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item><Link className="" href="#!">Profile</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="" href="#!">Clear Chat</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="" href="#!">Delete User</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="" href="#!">Block User</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="" href="#!">Report</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant='' onClick={mainChartWrapper1} aria-label="button" type="button" className="btn btn-icon btn-outline-light ms-2 responsive-chat-close">
                                <i className="ri-close-line"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="chat-content overflow-scroll" id="main-chat-content">
                        <ul className="list-unstyled">
                            <li className="chat-day-label">
                                <span>Today</span>
                            </li>
                            <li className="chat-item-start">
                                <div className="chat-list-inner">
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                            <Image className="chatimageperson" src={activeUser.image} alt="Image" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <span className="chatting-user-info d-inline-flex align-items-center">
                                            <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:48PM</span>
                                        </span>
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">Nice to meet you &#128512;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-end">
                                <div className="chat-list-inner">
                                    <div className="me-3">
                                        <span className="chatting-user-info d-inline-flex align-items-center">
                                            <span className="msg-sent-time"><span className="chat-read-mark align-middle"><i
                                                className="ri-check-double-line"></i></span>11:50PM</span> You
                                        </span>
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">It is a long established fact that a reader will be
                                                    distracted by the readable content of a page when looking at its
                                                    layout</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded">
                                            <Image src="../../../assets/images/faces/15.jpg" alt="Image" />
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-start">
                                <div className="chat-list-inner">
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                            <Image className="chatimageperson" src={activeUser.image} alt="Image" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <span className="chatting-user-info d-inline-flex align-items-center">
                                            <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:51PM</span>
                                        </span>
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">Who are you ?</p>
                                            </div>
                                            <div>
                                                <p className="mb-0">I don't know anyone named jeremiah.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-end">
                                <div className="chat-list-inner">
                                    <div className="me-3">
                                        <span className="chatting-user-info d-inline-flex align-items-center">
                                            <span className="msg-sent-time"><span className="chat-read-mark align-middle"><i
                                                className="ri-check-double-line"></i></span>11:52PM</span> You
                                        </span>
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">Some of the recent images taken are nice &#128076;</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded">
                                            <Image src="../../../assets/images/faces/15.jpg" alt="Image" />
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-start">
                                <div className="chat-list-inner">
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                            <Image className="chatimageperson" src={activeUser.image} alt="Image" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <span className="chatting-user-info d-inline-flex align-items-center">
                                            <span className="chatnameperson">{activeUser.name}</span> <span className="msg-sent-time">11:55PM</span>
                                        </span>
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">Here are some of them have a look</p>
                                            </div>
                                            <div>
                                                <p className="mb-0 d-sm-flex d-block">
                                                    <Link aria-label="anchor" href="/components/apps/gallery" className="avatar avatar-xl m-1"><Image src="../../../assets/images/media/media-64.jpg" alt="" /></Link>
                                                    <Link aria-label="anchor" href="/components/apps/gallery" className="avatar avatar-xl m-1"><Image src="../../../assets/images/media/media-63.jpg" alt="" /></Link>
                                                    <Link aria-label="anchor" href="/components/apps/gallery" className="avatar avatar-xl m-1"><Image src="../../../assets/images/media/media-62.jpg" alt="" /></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-end">
                                <div className="chat-list-inner">
                                    <div className="me-3">
                                        <span className="chatting-user-info d-inline-flex align-items-center">
                                            <span className="msg-sent-time"><span className="chat-read-mark align-middle"><i
                                                className="ri-check-double-line"></i></span>11:52PM</span> You
                                        </span>
                                        <div className="main-chat-msg">
                                            <div className="">
                                                <Link aria-label="anchor" href="#!" className="text-fixed-white"><i
                                                    className="ri-play-circle-line align-middle"></i></Link>
                                                <span className="mx-1">
                                                    <svg width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                    <svg className="chat_audio" width="20" height="20">
                                                        <defs></defs>
                                                        <g transform="matrix(1,0,0,1,0,0)"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                            height="20">
                                                            <path
                                                                d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                fill="rgba(255, 255, 255, 0.5)"
                                                                className="fill-primary"></path>
                                                        </svg></g>
                                                    </svg>
                                                </span>
                                                <Link aria-label="anchor" href="#!" className="text-fixed-white"><i
                                                    className="ri-download-2-line align-middle"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded">
                                            <Image src="../../../assets/images/faces/15.jpg" alt="Image" />
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="chat-item-start">
                                <div className="chat-list-inner">
                                    <div className="chat-user-profile">
                                        <span className="avatar avatar-md online avatar-rounded">
                                            <Image className="chatimageperson" src={activeUser.image} alt="Image" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <span className="chatting-user-info chatnameperson">
                                            {activeUser.name} <span className="msg-sent-time">11:45PM</span>
                                        </span>
                                        <div className="main-chat-msg">
                                            <div>
                                                <p className="mb-0">Happy to talk with you,chat you later &#128075;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="chat-footer">
                        <Link aria-label="anchor" className="btn btn-icon me-2 btn-warning-light" href="#!">
                            <i className="ri-emotion-line"></i>
                        </Link>
                        <Form.Control className="" placeholder="Type your message here..." type="text" />
                        <Link aria-label="anchor" className="btn btn-icon mx-2 btn-primary-light" href="#!">
                            <i className="ri-attachment-2"></i>
                        </Link>
                        <Link aria-label="anchor" className="btn btn-icon me-2 btn-success-light" href="#!">
                            <i className="ri-mic-line"></i>
                        </Link>
                        <Link className="btn btn-primary d-inline-flex" href="#!">
                            <i className="ri-send-plane-2-line me-2"></i>Send
                        </Link>
                    </div>
                </div>
                <Offcanvas placement='end' show={show} onHide={handleClose} className="offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <Offcanvas.Header className="">
                        <Button variant='' onClick={handleClose} type="button" className="btn-close ms-auto p-3" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                    </Offcanvas.Header>
                    <div className="chat-user-details pt-0 offcanvas-body" id="chat-user-details">
                        <SimpleBar>
                            <div className="text-center mb-5">
                                <span className="avatar avatar-rounded online avatar-xxl me-2 mb-3 chatstatusperson">
                                    <Image className="chatimageperson" src="../../../assets/images/faces/10.jpg" alt="Image" />
                                </span>
                                <p className="mb-1 fs-15 fw-semibold text-dark lh-1 chatnameperson"></p>
                                <p className="fs-12 text-muted  mb-0"><span className="chatnameperson">+12(987-987-670)</span></p>
                                <p className="fs-12 text-muted"><span className="chatnameperson">emaileyjackson2134</span>@gmail.com</p>
                                <p className="text-center mb-0">
                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm rounded-2 btn-primary-light fw-semibold"><i
                                        className="ri-phone-line"></i></Button>
                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm rounded-2 btn-primary-light fw-semibold ms-2"><i
                                        className="ri-video-add-line"></i></Button>
                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm rounded-2 btn-primary-light fw-semibold ms-2"><i
                                        className="ri-chat-1-line"></i></Button>
                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm rounded-2 btn-primary-light fw-semibold ms-2"><i
                                        className="ri-search-line"></i></Button>
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="fw-semibold mb-4">Shared Files
                                    <span className="badge bg-success-transparent rounded-circle ms-1">5</span>
                                    <span className="float-end fs-11"><Link href="#!" className="link-primary text-underline"><u>View All</u></Link></span>
                                </div>
                                <ul className="shared-files list-unstyled">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="shared-file-icon">
                                                    <i className="ri-image-line bg-warning-transparent"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-semibold mb-0">Image_15.Jpg</p>
                                                <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link aria-label="anchor" href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="shared-file-icon">
                                                    <i className="ri-image-line bg-info-transparent"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-semibold mb-0">Image_02.Jpg</p>
                                                <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:19AM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link aria-label="anchor" href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="shared-file-icon">
                                                    <i className="ri-video-line bg-danger-transparent"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-semibold mb-0">Movie_13_02_2023.MP4</p>
                                                <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link aria-label="anchor" href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="shared-file-icon">
                                                    <i className="ti ti-file-text bg-success-transparent"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-semibold mb-0">Project Details.pdf</p>
                                                <p className="mb-0 text-muted fs-11">24,Oct 2022 - 14:24PM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link aria-label="anchor" href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="shared-file-icon">
                                                    <i className="ri-video-line bg-pink-transparent"></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fs-12 fw-semibold mb-0">Video_15_02_2022.MP4</p>
                                                <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                                            </div>
                                            <div className="fs-18">
                                                <Link aria-label="anchor" href="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-0">
                                <div className="fw-semibold mb-4">Photos &amp; Media
                                    <span className="badge bg-primary-transparent rounded-circle ms-1">22</span>
                                    <span className="float-end fs-11"><Link href="#!" className="link-primary text-underline"><u>View All</u></Link></span>
                                </div>
                                <div className="row">
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-56.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-52.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-53.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-62.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-63.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-64.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-13.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-19.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-20.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-56.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-52.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-53.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-56.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-52.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-53.jpg" alt="" />
                                        </Link>
                                    </Col>
                                    <Col xl={3} lg={4} md={4} sm={4} className="col-4">
                                        <Link aria-label="anchor" href="/components/apps/gallery" className="chat-media">
                                            <Image src="../../../assets/images/media/media-20.jpg" alt="" />
                                        </Link>
                                    </Col>
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                </Offcanvas>
            </div>
        </Fragment>
    )
}
Chat.layout = "Contentlayout"

export default Chat;