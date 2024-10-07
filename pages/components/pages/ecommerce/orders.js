
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button, Card, Col, Dropdown, Form, Nav, Pagination, Row } from 'react-bootstrap'

const Orders = () => {
    return (
        <Fragment>
            <Seo title="Orders" />
            <Pageheader title="Orders" heading="Ecommerce" active="Orders" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className=" d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                            <div className="flex-fill">
                                <span className="mb-0 fs-14 text-muted">Total number of orders placed upto now : <span className="fw-semibold text-success">28</span></span>
                            </div>
                            <Dropdown className="dropdown my-sm-0 my-2">
                                <Dropdown.Toggle className="btn btn-light dropdown-toggle mx-sm-1 mx-0 my-0" variant="light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="dropdown-menu">
                                    <Dropdown.Item><Link className="" href="#!">Date</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="" href="#!">Price</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="" href="#!">Category</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="d-flex" role="search">
                                <Form.Control className="" type="search" placeholder="Search" aria-label="Search" />
                                <Button variant='' className="btn btn-sm btn-light mx-1 my-0" type="submit">Search</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-12031</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-success fs-11 rounded-1">Confirmed</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/1.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Black Digital Camera</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            2nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            20-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$1,229</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$1,799</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div><Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-info-light">Shop Similar</Link></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' type="button" className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-1233</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-danger fs-11 rounded-1">Cancelled</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/2.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Red &amp; Blue Formal Shoes for men</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            3nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            24-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$3,229</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$1,799</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div className="mt-sm-0 mt-2">
                                <Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-primary-light">Back to Shop</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-1235</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-warning fs-11 rounded-1">Shipped</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/11.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Green color money plant</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            3nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            24-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$2,800</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$1,098</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div><Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-info-light">Shop Similar</Link></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' type="button" className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-1236</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-warning fs-11 rounded-1">Shipped</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/4.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Digital Smart Watch</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            3nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            25-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$8,800</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$6,098</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div><Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-info-light">Shop Similar</Link></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' type="button" className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-12036</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-success fs-11 rounded-1">Confirmed</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/12.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Women Party Wear Dress</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            2nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            28-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$1,234</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$880</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div><Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-info-light">Shop Similar</Link></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' type="button" className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-12038</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-primary fs-11 rounded-1">Out For Delivery</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/10.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Stylish Rockerz 255 Ear Pods</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            2nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            30-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$5,234</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$580</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div><Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-info-light">Shop Similar</Link></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' type="button" className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-1239</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-danger fs-11 rounded-1">Cancelled</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/13.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Omega Running Shoes for men</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            3nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            24-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$4,229</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$2,799</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div className="mt-sm-0 mt-2">
                                <Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-primary-light">Back to Shop</Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-120348</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-primary fs-11 rounded-1">Out For Delivery</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/16.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Candy Pure Rose Water</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            2nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            31-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$4,234</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$280</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div><Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-info-light">Shop Similar</Link></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' type="button" className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header d-block">
                            <div className="d-sm-flex d-block justify-content-between">
                                <div className="">
                                    <span className="fs-14 fw-semibold">Order Id</span>
                                    <span className="d-sm-block text-primary">#SPK-12043</span>
                                </div>
                                <div className="text-sm-end">
                                    <p className="fs-14 fw-semibold mb-0">Ordered Status</p>
                                    <span className="badge bg-success fs-11 rounded-1">Confirmed</span>
                                </div>
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="d-flex align-items-center  flex-xxl-nowrap flex-wrap">
                                <div className="me-3">
                                    <span className="avatar avatar-xxl bd-gray-200">
                                        <Image  src="../../../../assets/images/ecommerce/orders/14.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-1 fs-14 fw-semibold">
                                        <Link href="#!">Light pink nail polish</Link>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Address : <span className="text-muted fs-13">
                                            2nd street,houston texas,united states.</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="fw-semibold mb-0">Delivery Date : <span className="text-muted fs-13">
                                            31-Jan-2023</span>
                                        </p>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <h5 className="mb-1">$9,229</h5>
                                        <p className="mt-1 text-muted text-decoration-line-through ms-1 op-6 fs-15 mb-0">$4,799</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-sm-flex d-block align-items-center justify-content-between">
                            <div><Link href="/components/pages/ecommerce/products" className="btn btn-sm btn-info-light">Shop Similar</Link></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' type="button" className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <div className="float-end mb-4">
            <Nav aria-label="Page navigation" className="pagination-style-4">
                <Pagination as="ul" className="mb-0 gap-1">
                    <Pagination as="li" className=" disabled">
                        <Link className="page-link" href="#!"> Prev </Link>
                    </Pagination>
                    <Pagination as="li" className=" active">
                        <Link className="page-link" href="#!">1</Link>
                    </Pagination>
                    <Pagination as="li" className="">
                        <Link className="page-link" href="#!">2</Link>
                    </Pagination>
                    <Pagination as="li" className="">
                        <Link aria-label="anchor" className="page-link" href="#!">
                            <i className="bi bi-three-dots"></i>
                        </Link>
                    </Pagination>
                    <Pagination as="li" className="">
                        <Link className="page-link" href="#!">16</Link>
                    </Pagination>
                    <Pagination as="li" className="">
                        <Link className="page-link text-primary" href="#!"> next </Link>
                    </Pagination>
                </Pagination>
            </Nav>
        </div>
        </Fragment>
    )
}
Orders.layout = "Contentlayout"

export default Orders;