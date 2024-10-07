
import { Postdata } from '@/shared/data/pages/blog/blogdata'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button, Card, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap'

const Blog = () => {
    return (
        <Fragment>
            <Seo title="Blog" />
            <div className="page-header">
                <h1 className="page-title my-auto">Blog</h1>
                <div>
                    <div className="breadcrumb mb-0">
                        <Link aria-label="anchor" href="/components/pages/blog/create-blog" className="btn btn-primary mt-2 mt-sm-0"><i className="ti ti-circle-plus me-2 d-inline-flex"></i>Add Post</Link>
                    </div>
                </div>
            </div>
            <Row>
                <Col sm={6} md={12} lg={6} xl={4}>
                    <Card>
                        <Link href="/components/pages/blog/blog-details">
                            <Image className="card-Image-top" src="../../../../assets/images/media/photos/2.jpg" alt="And this isn&#39;t my nose. This is a false one." /></Link>
                        <Card.Body className="d-flex flex-column">
                            <h4 className="fw-normal"><Link href="/components/pages/blog/blog-details">Voluptatem quia voluptas.</Link></h4>
                            <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...</div>
                            <div className="d-flex align-items-center pt-4 mt-auto">
                                <div className="avatar avatar-rounded avatar-md me-3 cover-image" >
                                    <Image alt="" src="../../../../assets/images/faces/18.jpg" />
                                </div>
                                <div>
                                    <Link href="/components/pages/profile" className="text-default">Megan Peters</Link>
                                    <small className="d-block text-muted">1 days ago</small>
                                </div>
                                <div className="ms-auto my-auto">
                                    <Link aria-label="anchor" href="#!" className="d-none d-md-inline-block text-muted"><i className="ti ti-heart me-1 border p-2 rounded-circle"></i></Link>
                                    <Link aria-label="anchor" href="#!" className="d-none d-md-inline-block text-muted"><i className="ti ti-thumb-up border p-2 rounded-circle"></i></Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Link href="/components/pages/blog/blog-details"><Image className="card-Image-top" src="../../../../assets/images/media/photos/4.jpg" alt="How do you know she is a witch?" /></Link>
                        <Card.Body className="d-flex flex-column">
                            <h4 className="fw-normal"><Link href="/components/pages/blog/blog-details"> Voluptatem quia voluptas </Link></h4>
                            <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</div>
                            <div className="d-flex align-items-center pt-4 mt-auto">
                                <div className="avatar avatar-rounded avatar-md me-3 cover-image">
                                    <Image src="../../../../assets/images/faces/6.jpg" alt=""/>
                                </div>
                                <div>
                                    <Link href="/components/pages/profile" className="text-default">Carol Paige</Link>
                                    <small className="d-block text-muted">2 days ago</small>
                                </div>
                                <div className="ms-auto my-auto">
                                    <Link aria-label="anchor" href="#!" className="d-none d-md-inline-block text-muted"><i className="ti ti-heart me-1 border p-2 rounded-circle"></i></Link>
                                    <Link aria-label="anchor" href="#!" className="d-none d-md-inline-block text-muted"><i className="ti ti-thumb-up border p-2 rounded-circle"></i></Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={12} lg={6} xl={4}>
                    <Card>
                        <Link href="/components/pages/blog/blog-details"><Image className="card-Image-top" src="../../../../assets/images/media/photos/3.jpg" alt="Well, I didn&#39;t vote for you." /></Link>
                        <Card.Body className="d-flex flex-column">
                            <h4 className="fw-normal"><Link href="/components/pages/blog/blog-details"> Voluptatem quia voluptas </Link></h4>
                            <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.</div>
                            <div className="d-flex align-items-center pt-4 mt-auto">
                                <div className="avatar avatar-rounded avatar-md me-3 cover-image">
                                    <Image src="../../../../assets/images/faces/16.jpg" alt=""/>
                                </div>
                                <div>
                                    <Link href="/components/pages/profile" className="text-default">Anna Ogden</Link>
                                    <small className="d-block text-muted">2 days ago</small>
                                </div>
                                <div className="ms-auto my-auto">
                                    <Link aria-label="anchor" href="#!" className="d-none d-md-inline-block text-muted"><i className="ti ti-heart me-1 border p-2 rounded-circle"></i></Link>
                                    <Link aria-label="anchor" href="#!" className="d-none d-md-inline-block text-muted"><i className="ti ti-thumb-up border p-2 rounded-circle"></i></Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Link href="/components/pages/blog/blog-details"><Image className="card-Image-top" src="../../../../assets/images/media/photos/5.jpg" alt="Shut up!" /></Link>
                        <Card.Body className="d-flex flex-column">
                            <h4 className="fw-normal"><Link href="/components/pages/blog/blog-details"> Voluptatem quia voluptas </Link></h4>
                            <div className="text-muted">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut ..</div>
                            <div className="d-flex align-items-center pt-4 mt-auto">
                                <div className="avatar avatar-rounded avatar-md me-3 cover-image">
                                    <Image src="../../../../assets/images/faces/7.jpg" alt=""/>
                                </div>
                                <div>
                                    <Link href="/components/pages/profile" className="text-default">Fiona Hodges</Link>
                                    <small className="d-block text-muted">5 days ago</small>
                                </div>
                                <div className="ms-auto my-auto">
                                    <Link aria-label="anchor" href="#!" className="d-none d-md-inline-block text-muted"><i className="ti ti-heart me-1 border p-2 rounded-circle"></i></Link>
                                    <Link aria-label="anchor" href="#!" className="d-none d-md-inline-block text-muted"><i className="ti ti-thumb-up border p-2 rounded-circle"></i></Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Pagination className="justify-content-end">
                        <Pagination.Prev disabled className="page-prev">
                            <Link href="#!">Prev</Link>
                        </Pagination.Prev>
                        <Pagination.Item active>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Item>4</Pagination.Item>
                        <Pagination.Item>5</Pagination.Item>
                        <Pagination.Next className="page-next">Next</Pagination.Next>
                    </Pagination>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Body className="">
                            <InputGroup className="">
                                <Form.Control type="text" className="border-end-0" placeholder="Search ..." />
                                <Button variant='' aria-label="anchor" type="button" className="btn input-group-text bg-transparent border-start-0 text-muted">
                                    <i className="fe fe-search" aria-hidden="true"></i>
                                </Button>
                            </InputGroup>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <div className="card-title">Recent Posts</div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="">
                                {Postdata.map((idx) => (
                                    <div className={`d-flex overflow-visible ${idx.data1}`} key={Math.random()}>
                                        <Link aria-label="anchor" href="/components/pages/blog/blog-details" className="card-aside-column post-image avatar br-5 cover-image" >
                                            <Image src={idx.src} className='w-100' alt=""/></Link>
                                        <div className="ps-3 flex-column">
                                            <span className={`badge bg-${idx.color} me-1 mb-1 mt-1`}>{idx.heading}</span>
                                            <h6 className="fw-normal"><Link href="/components/pages/blog/blog-details">{idx.data}</Link></h6>
                                            <div className="text-muted">Excepteur sint occaecat cupidatat non proident, accusantium sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <h5 className="fw-bold">NEVER MISS A POST !</h5>
                            <p>Signup for free to get the latest posts.</p>
                            <Form.Control className="" placeholder="Enter your name *" type="text" />
                            <Link href="#!" className="btn btn-danger mt-3">Subscribe</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Blog.layout = "Contentlayout"

export default Blog;