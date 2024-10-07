
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button, Card, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap'
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import { Teamsdata } from '@/shared/data/pages/teamdata';
import Image from 'next/image';

const Team = () => {
    return (
        <Fragment>
            <Seo title="Team" />
            <Pageheader title="Team" heading="Pages" active="Team" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="team-header">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="h5 fw-semibold mb-sm-0">Team Ui</div>
                                    <div className="d-flex align-items-center">
                                        <InputGroup>
                                            <Form.Control type="text" className="" placeholder="Search Person Name" aria-describedby="search-team-member" />
                                            <Button variant='' aria-label="button" className="btn btn-light  btn-primary" type="button" id="search-team-member"><i className="ri-search-line"></i></Button>
                                        </InputGroup>
                                        <Dropdown className="dropdown ms-2">
                                            <Dropdown.Toggle variant='' aria-label="button" className="btn btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu">
                                                <Dropdown.Item className="border-bottom" ><Link href="#!">Delete Team</Link></Dropdown.Item>
                                                <Dropdown.Item className="border-bottom" ><Link href="#!">Edit</Link></Dropdown.Item>
                                                <Dropdown.Item><Link href="#!">Add Member</Link></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {Teamsdata.map((idx) => (
                <Col xxl={3} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                    <Card className="custom-card ">
                        <Card.Body>
                            <div className="text-center">
                                <span className="avatar avatar-xxl rounded">
                                    <Image  src={idx.src1} alt="" className="rounded-circle" />
                                </span>
                            </div>
                            <div className="d-flex  text-center justify-content-between mt-1 mb-3">
                                <div className="flex-fill">
                                    <p className="mb-0 fw-semibold fs-16 text-truncate max-w-150 mx-auto">
                                        <Link href="#!">{idx.heading}</Link>
                                    </p>
                                    <p className="mb-0 fs-12 text-muted text-truncate max-w-150 mx-auto">{idx.mail}</p>
                                </div>
                            </div>
                            <div className="btn-list text-center">
                                <div className="btn-list">
                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light">
                                        <i className="ri-facebook-line fw-bold"></i>
                                    </Button>
                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                        <i className="ri-twitter-x-line fw-bold"></i>
                                    </Button>
                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                        <i className="ri-github-line fw-bold"></i>
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className=" border-block-start-dashed text-center p-0">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="d-flex p-3 w-100 justify-content-center border-end">
                                    <div className="text-center ">
                                        <p className="fw-semibold mb-0">Projects</p>
                                        <span className="text-muted fs-12">{idx.projects}</span>
                                    </div>
                                </div>
                                <div className="d-flex p-3 w-100 justify-content-center">
                                    <div className="text-center">
                                        <p className="fw-semibold mb-0">Position</p>
                                        <span className="text-muted fs-12">{idx.position}</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                ))}
            </Row>
            <div className="float-end mb-4 ms-auto">
                <nav aria-label="Page navigation" className="pagination-style-4">
                    <ul className="pagination mb-0 gap-2">
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
        </Fragment>
    )
}
Team.layout = "Contentlayout"

export default Team;