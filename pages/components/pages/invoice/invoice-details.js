
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { Button, Card, Col, Form, Table } from 'react-bootstrap'

const Invoicedetails = () => {
    const print = () => {
        window.print();
    };
    return (
        <Fragment>
            <Seo title="Invoice Details" />
            <Pageheader title="Invoice Details" heading="Invoice" active="Invoice Details" />
            <div className="row">
                <div className="col-xl-9">
                    <Card className="custom-card">
                        <div className="card-header d-md-flex d-block">
                            <div className="h5 mb-0 d-sm-flex d-bllock align-items-center">
                                <div className="avatar avatar-sm">
                                    <Image  src="../../../../assets/images/brand-logos/toggle-logo.png" alt="" />
                                </div>
                                <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                                    <div className="h6 fw-semibold mb-0">SHOPPING INVOICE : <span className="text-primary">#8140-2099</span></div>
                                </div>
                            </div>
                            <div className="ms-auto mt-md-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-secondary me-1" onClick={() => print()}>Print<i className="ri-printer-line ms-1 align-middle d-inline-block"></i></Button>
                                <Button variant='' className="btn btn-sm btn-primary">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i></Button>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <div className="row">
                                        <Col xl={4} lg={4} md={6} sm={6}>
                                            <p className="text-muted mb-2">
                                                Billing From :
                                            </p>
                                            <p className="fw-bold mb-1">
                                                SPRUKO TECHNOLOGIES
                                            </p>
                                            <p className="mb-1 text-muted">
                                                Mig-1-11,Manroe street
                                            </p>
                                            <p className="mb-1 text-muted">
                                                Georgetown,Washington D.C,USA,200071
                                            </p>
                                            <p className="mb-1 text-muted">
                                                sprukotrust.sash@gmail.com
                                            </p>
                                            <p className="mb-1 text-muted">
                                                (555) 555-1234
                                            </p>
                                            <p className="text-muted">For more information check for <a href="#!" className="text-primary fw-semibold"><u>GSTIN</u></a> Details.</p>
                                        </Col>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ms-auto mt-sm-0 mt-3">
                                            <p className="text-muted mb-2">
                                                Billing To :
                                            </p>
                                            <p className="fw-bold mb-1">
                                                Json Taylor
                                            </p>
                                            <p className="text-muted mb-1">
                                                Lig-22-1,20 Covington Place
                                            </p>
                                            <p className="text-muted mb-1">
                                                New Castle,de, United States,19320
                                            </p>
                                            <p className="text-muted mb-1">
                                                jsontaylor2134@gmail.com
                                            </p>
                                            <p className="text-muted">
                                                +1 202-918-2132
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-semibold text-muted mb-1">Invoice ID :</p>
                                    <p className="fs-15 mb-1">#SPK120219890</p>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-semibold text-muted mb-1">Date Issued :</p>
                                    <p className="fs-15 mb-1">29,Nov 2022 - <span className="text-muted fs-12">12:42PM</span></p>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-semibold text-muted mb-1">Due Date :</p>
                                    <p className="fs-15 mb-1">29,Dec 2022</p>
                                </Col>
                                <Col xl={3}>
                                    <p className="fw-semibold text-muted mb-1">Due Amount :</p>
                                    <p className="fs-16 mb-1 fw-semibold">$2,570.42</p>
                                </Col>
                                <Col xl={12}>
                                    <div className="table-responsive">
                                        <Table className="table nowrap text-nowrap border mt-4">
                                            <thead>
                                                <tr>
                                                    <th>BRAND NAME</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>QUANTITY</th>
                                                    <th>PRICE PER UNIT</th>
                                                    <th>TOTAL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Dapzem & Co (Sweatshirt)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Branded hoodie ethnic style
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        2
                                                    </td>
                                                    <td>
                                                        $60
                                                    </td>
                                                    <td>
                                                        $120
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Denim Winjo (Jacket)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Vintage pure leather Jacket
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        1
                                                    </td>
                                                    <td>
                                                        $249
                                                    </td>
                                                    <td>
                                                        $249
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Jimmy Lolfiger (Winter Coat)
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Unisex jacket for men & women
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        1
                                                    </td>
                                                    <td>
                                                        $499
                                                    </td>
                                                    <td>
                                                        $499
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Blueberry & Co
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Light colored sweater form blueberry
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        3
                                                    </td>
                                                    <td>
                                                        $299
                                                    </td>
                                                    <td>
                                                        $897
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="fw-semibold">
                                                            Denim Corporation
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="text-muted">
                                                            Flap pockets denim jackets for men
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity-container">
                                                        1
                                                    </td>
                                                    <td>
                                                        $599
                                                    </td>
                                                    <td>
                                                        $599
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}></td>
                                                    <td colSpan={2}>
                                                        <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Sub Total :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$2,364</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Avail Discount :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$29.98</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Coupon Discount <span className="text-success">(10%)</span> :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$236.40</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Vat <span className="text-danger">(20%)</span> :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$472.80</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0">Due Till Date :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-15">$0</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <p className="mb-0 fs-14">Total :</p>
                                                                    </th>
                                                                    <td>
                                                                        <p className="mb-0 fw-semibold fs-16 text-success">$2,570.42</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div>
                                        <Form.Label htmlFor="invoice-note" className="">Note:</Form.Label>
                                        <Form.Control as="textarea" className="form-control form-control-light" id="invoice-note" rows={3} defaultValue="Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment" />
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <div className="card-footer text-end">
                            <Button variant='success' className="btn">Download <i className="ri-download-2-line ms-1 align-middle"></i></Button>
                        </div>
                    </Card>
                </div>
                <Col xl={3}>
                    <Card className="custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Mode Of Payment
                            </div>
                        </div>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <p className="fs-14 fw-semibold">
                                        Credit/Debit Card
                                    </p>
                                    <p>
                                        <span className="fw-semibold text-muted fs-12">Name On Card :</span> Json Taylor
                                    </p>
                                    <p>
                                        <span className="fw-semibold text-muted fs-12">Card Number :</span> 1234 5678 9087 XXXX
                                    </p>
                                    <p>
                                        <span className="fw-semibold text-muted fs-12">Total Amount :</span> <span className="text-success fw-semibold fs-14">$2570.42</span>
                                    </p>
                                    <p>
                                        <span className="fw-semibold text-muted fs-12">Due Date :</span> 29,Dec 2022 - <span className="text-danger fs-12 fw-semibold">30 days due</span>
                                    </p>
                                    <p>
                                        <span className="fw-semibold text-muted fs-12">Invoice Status : <span className="badge bg-warning-transparent">Pending</span></span>
                                    </p>
                                    <div className="alert alert-success" role="alert">
                                        Please Make sure to pay the invoice bill within 30 days.
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </Fragment>
    )
}

Invoicedetails.layout = "Contentlayout";

export default Invoicedetails;