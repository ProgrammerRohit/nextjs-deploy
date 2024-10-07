
import { Postdata, Profblog, Tagsdata } from '@/shared/data/pages/blog/blogdata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button, Card, Col, Dropdown, Form, InputGroup, ListGroup, Nav, Row } from 'react-bootstrap'

const Blogdetails = () => {
    return (
        <Fragment>
            <Seo title="Blog Details" />
            <Pageheader title="Blog Details" heading="Blog" active="Blog Details" />
            <Row>
                <Col xl={8}>
                    <Card>
                        <Image className="card-Image-top " src="../../../../assets/images/media/photos/8.jpg" alt="Card image cap" />
                        <Card.Body className="border-bottom">
                            <div className="d-md-flex">
                                <Link href="#!" className="d-flex me-4 mb-sm-0 mb-2">
                                    <span className=" bg-secondary-transparent text-secondary avatar">
                                        <i className="fe fe-calendar"></i>
                                    </span>
                                    <span className="my-auto ms-2 text-muted fw-semibold">Sep-25-2021</span>
                                </Link>
                                <Link href="/components/pages/profile" className="d-flex mb-sm-0 mb-2">
                                    <span className=" bg-primary-transparent text-primary avatar">
                                        <i className="fe fe-user"></i>
                                    </span>
                                    <span className="my-auto ms-2 text-muted fw-semibold">Harry Fisher</span>
                                </Link>
                                <div className="ms-auto">
                                    <Link href="#!" className="d-flex mb-sm-0 mb-2">
                                        <span className=" bg-success-transparent text-success avatar">
                                            <i className="fe fe-message-square"></i>
                                        </span>
                                        <span className="my-auto ms-2 text-muted fw-semibold">13 Comments</span>
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <h4 className="fw-normal"><Link href="#!"> Voluptatem quia voluptas</Link></h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p> Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry
                                you’re working in, as a blogger, you should live and die by this statement.</p>
                            <p className="mb-0">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
                                truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>Comments</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <div className="media mb-4 overflow-visible d-block d-sm-flex">
                                <div className="me-3 mb-2 mb-sm-0">
                                    <Link href="/components/pages/profile">
                                        <Image className="media-object avatar avatar-rounded" alt="64x64" src="../../../../assets/images/faces/5.jpg" /> </Link>
                                </div>
                                <div className="media-body overflow-visible">
                                    <div className="border mb-4 p-3 br-7">
                                        <Nav className="nav float-end">
                                            <Dropdown className="">
                                                <Dropdown.Toggle as="a" aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" ><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-start">
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-corner-up-left me-2"></i> Reply</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-flag me-2"></i> Report Abuse</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Nav>
                                        <h6 className="mt-0 fw-normal">Gavin Murray</h6>
                                        <span><i className="fe fe-thumb-up text-danger"></i></span>
                                        <p className="font-13 text-muted">Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter
                                            what industry you’re working in, as a blogger, you should live and die by this statement.</p>
                                        <Link className="like me-2" href="#!">
                                            <span className="badge bg-danger-transparent rounded-pill py-2 px-3 d-inline-flex">
                                                <i className="fe fe-heart me-1"></i>56</span>
                                        </Link>
                                        <span className="reply">
                                            <Link href="#!"><span className="badge bg-primary-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                                        </span>
                                    </div>
                                    <div className="media mb-4 overflow-visible d-block d-sm-flex">
                                        <div className="me-3 mb-2 mb-sm-0">
                                            <Link href="/components/pages/profile">
                                                <Image className="media-object avatar avatar-rounded" alt="64x64" src="../../../../assets/images/faces/2.jpg" /> </Link>
                                        </div>
                                        <div className="media-body border p-3 overflow-visible br-7">
                                            <nav className="nav float-end">
                                                <Dropdown className="">
                                                    <Dropdown.Toggle as="a" aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" ><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-start">
                                                        <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                                        <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-corner-up-left me-2"></i> Reply</Dropdown.Item>
                                                        <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-flag me-2"></i> Report Abuse</Dropdown.Item>
                                                        <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </nav>
                                            <h6 className="mt-0 fw-normal">Mozelle Belt</h6>
                                            <span><i className="fe fe-thumb-up text-danger"></i></span>
                                            <p className="font-13 text-muted">Nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry you’re working in, as a blogger, you should
                                                live and die by this statement.</p>
                                            <Link className="like me-2" href="#!"><span className="badge bg-danger-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-heart me-1"></i>56</span></Link>
                                            <span className="reply">
                                                <Link href="#!"><span className="badge bg-primary-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media mb-4 overflow-visible d-block d-sm-flex">
                                <div className="me-3 mb-2 mb-sm-0">
                                    <Link href="/components/pages/profile">
                                        <Image className="media-object avatar avatar-rounded" alt="64x64" src="../../../../assets/images/faces/15.jpg" /> </Link>
                                </div>
                                <div className="media-body overflow-visible">
                                    <div className="border p-3 br-7">
                                        <nav className="nav float-end">
                                            <Dropdown className="">
                                                <Dropdown.Toggle as="a" aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" ><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-start">
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-corner-up-left me-2"></i> Reply</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-flag me-2"></i> Report Abuse</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </nav>
                                        <h6 className="mt-0 fw-normal">Paul Smith</h6>
                                        <p className="font-13 text-muted">Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the “No fun for the writer, no fun for the reader.” </p>
                                        <Link className="like me-2" href="#!"><span className="badge bg-danger-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-heart me-1"></i>56</span></Link>
                                        <span className="reply">
                                            <Link href="#!"><span className="badge bg-primary-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="media mb-4 overflow-visible d-block d-sm-flex">
                                <div className="me-3 mb-1">
                                    <Link href="/components/pages/profile">
                                        <Image className="media-object avatar avatar-rounded" alt="64x64" src="../../../../assets/images/faces/5.jpg" /> </Link>
                                </div>
                                <div className="media-body overflow-visible">
                                    <div className="border mb-4 p-3 br-7">
                                        <nav className="nav float-end">
                                            <Dropdown className="">
                                                <Dropdown.Toggle as="a" aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" ><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-start">
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-corner-up-left me-2"></i> Reply</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-flag me-2"></i> Report Abuse</Dropdown.Item>
                                                    <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </nav>
                                        <h6 className="mt-0 fw-normal">Gavin Murray</h6>
                                        <span><i className="fe fe-thumb-up text-danger"></i></span>
                                        <p className="font-13 text-muted">Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter
                                            what industry you’re working in, as a blogger, you should live and die by this statement.</p>
                                        <Link className="like me-2" href="#!"><span className="badge bg-danger-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-heart me-1"></i>56</span></Link>
                                        <span className="reply">
                                            <Link href="#!"><span className="badge bg-primary-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                                        </span>
                                    </div>
                                    <div className="media mb-4 overflow-visible d-block d-sm-flex">
                                        <div className="me-3 mb-1">
                                            <Link href="/components/pages/profile">
                                                <Image className="media-object avatar avatar-rounded" alt="64x64" src="../../../../assets/images/faces/2.jpg" /> </Link>
                                        </div>
                                        <div className="media-body overflow-visible">
                                            <div className="border mb-4 p-3 br-7">
                                                <nav className="nav float-end">
                                                    <Dropdown className="">
                                                        <Dropdown.Toggle as="a" aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" ><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-start">
                                                            <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                                            <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-corner-up-left me-2"></i> Reply</Dropdown.Item>
                                                            <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-flag me-2"></i> Report Abuse</Dropdown.Item>
                                                            <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </nav>
                                                <h6 className="mt-0 fw-normal">Mozelle Belt</h6>
                                                <span><i className="fe fe-thumb-up text-danger"></i></span>
                                                <p className="font-13 text-muted">Nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry you’re working in, as a blogger, you
                                                    should live and die by this statement.</p>
                                                <Link className="like me-2" href="#!"><span className="badge bg-danger-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-heart me-1"></i>56</span></Link>
                                                <span className="reply">
                                                    <Link href="#!"><span className="badge bg-primary-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                                                </span>
                                            </div>
                                            <div className="media overflow-visible d-block d-sm-flex">
                                                <div className="me-3 mb-2 mb-sm-0">
                                                    <Link href="/components/pages/profile">
                                                        <Image className="media-object avatar avatar-rounded" alt="64x64" src="../../../../assets/images/faces/9.jpg" /> </Link>
                                                </div>
                                                <div className="media-body border p-3 overflow-visible br-7">
                                                    <nav className="nav float-end">
                                                        <Dropdown className="">
                                                            <Dropdown.Toggle as="a" aria-label="anchor" className="nav-link text-muted fs-16 p-0 ps-4 no-caret" ><i className="fe fe-more-vertical"></i></Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu-start">
                                                                <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                                                <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-corner-up-left me-2"></i> Reply</Dropdown.Item>
                                                                <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-flag me-2"></i> Report Abuse</Dropdown.Item>
                                                                <Dropdown.Item className="d-inline-flex align-items-center" href="#!"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </nav>
                                                    <h6 className="mt-0 fw-normal">Paul Smith</h6>
                                                    <span><i className="fe fe-thumb-up text-danger"></i></span>
                                                    <p className="font-13 text-muted">Nostrud exercitation ullamco laboris commodo consequat. There’s an old maxim that states, “No fun for the writer, no fun for the reader.”No matter what industry you’re working in, as a blogger,
                                                        you should live and die by this statement.</p>
                                                    <Link className="like me-2" href="#!"><span className="badge bg-danger-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-heart me-1"></i>56</span></Link>
                                                    <span className="reply">
                                                        <Link href="#!"><span className="badge bg-primary-transparent rounded-pill py-2 px-3 d-inline-flex"><i className="fe fe-corner-up-left mx-1"></i>Reply</span></Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>Add a Comments</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <form className="form-horizontal  m-t-20">
                                <div className="form-group mb-3">
                                    <div className="col-xs-12">
                                        <Form.Control className="" type="text" required placeholder="Username*" />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="col-xs-12">
                                        <Form.Control className="" type="email" required placeholder="Email*" />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="col-xs-12">
                                        <Form.Control as="textarea" className="" rows={5} defaultValue="Your Comment*" />
                                    </div>
                                </div>
                                <Button variant='' type="submit" className="btn btn-primary btn-rounded  waves-effect waves-light">Submit</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Body>
                            <InputGroup>
                                <Form.Control type="text" className="border-end-0" placeholder="Search ..." />
                                <Button variant='' aria-label="button" type="button" className="btn input-group-text bg-transparent border-start-0 text-muted">
                                    <i className="fe fe-search" aria-hidden="true"></i>
                                </Button>
                            </InputGroup>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>Categories</Card.Title>
                        </Card.Header>
                        <Card.Body className="px-0 py-2">
                            <div className='list-group'>
                                <ListGroup.Item className=" border-0 py-2"><span><i className="fe fe-chevron-right transform-arrow d-inline-flex lh-sm"></i> Development</span><span className="badge float-end bg-light text-dark">22</span></ListGroup.Item>
                                <ListGroup.Item className=" border-0 py-2"><span><i className="fe fe-chevron-right transform-arrow d-inline-flex lh-sm"></i> Web Design</span><span className="badge float-end bg-light text-dark">15</span></ListGroup.Item>
                                <ListGroup.Item className=" border-0 py-2"><span><i className="fe fe-chevron-right transform-arrow d-inline-flex lh-sm"></i> Technology</span><span className="badge float-end bg-light text-dark">10</span></ListGroup.Item>
                                <ListGroup.Item className=" border-0 py-2"><span><i className="fe fe-chevron-right transform-arrow d-inline-flex lh-sm"></i>Sports</span><span className="badge float-end bg-light text-dark">88</span></ListGroup.Item>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title>Professional Blog Writers</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {Profblog.map((idx) => (
                                <div className={`d-flex overflow-visible ${idx.data}`} key={Math.random()}>
                                    <Image className="avatar bradius avatar-xl me-3" src={idx.src} alt="avatar-Image" />
                                    <div className="media-body valign-middle">
                                        <Link href="/components/pages/profile" className="fw-semibold text-dark">{idx.heading}</Link>
                                        <p className="text-muted mb-0">There are many variations of passages of Lorem Ipsum available ...</p>
                                    </div>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Title>Recent Posts</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {Postdata.map((idx) => (
                                <div className={`d-flex overflow-visible ${idx.data1}`} key={Math.random()}>
                                    <Link aria-label="anchor" href="/components/pages/blog/blog-details" className="card-aside-column br-7  cover-image" >
                                        <Image src={idx.src} className='w-100' alt="" /></Link>
                                    <div className="ps-3 flex-column">
                                        <span className={`badge bg-${idx.color} me-1 mb-1 mt-1`}>{idx.heading}</span>
                                        <h6 className="fw-normal"><Link href="/components/pages/blog/blog-details">{idx.data}</Link></h6>
                                        <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                                    </div>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Title>Tags</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {Tagsdata.map((idx) => (
                                <Link href="#!" className="tag" key={Math.random()}>{idx.data}</Link>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Blogdetails.layout = "Contentlayout"

export default Blogdetails;