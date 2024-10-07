

import LabeledTwoThumbs1 from '@/shared/data/pages/ecommerce/productsdata1'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Card, Col, Collapse, Form, Pagination, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import { AddToCart } from "@/shared/redux/action";
import { Itemsdata } from '@/shared/data/pages/ecommerce/productdata';
import Image from 'next/image'


const Products = ({ local_varaiable, AddToCart }) => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


    return (
        <Fragment>
            <Seo title="Products" />
            <Pageheader title="Products" heading="Ecommerce" active="Products" />
            <Row>
                <Col xxl={3} xl={4} lg={5} md={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                CATEGORIES
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="">
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" value="" id="electronics" />
                                    <Form.Label className="form-check-label" htmlFor="electronics">
                                        Electronics
                                    </Form.Label>
                                    <span className="badge bg-light text-muted float-end">2,712</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" defaultValue="" id="Accesories" />
                                    <Form.Label className="form-check-label" htmlFor="Accesories">
                                        Accesories
                                    </Form.Label>
                                    <span className="badge bg-light text-muted float-end">536</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" defaultValue="" id="clothing" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="clothing">
                                        Clothing
                                    </Form.Label>
                                    <span className="badge bg-light text-muted float-end">18,289</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" defaultValue="" id="fashion" />
                                    <Form.Label className="form-check-label" htmlFor="fashion">
                                        Fashion
                                    </Form.Label>
                                    <span className="badge bg-light text-muted float-end">3,453</span>
                                </div>
                                <Collapse in={open}>
                                    <div id="category-more">
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="furniture" />
                                            <Form.Label className="form-check-label" htmlFor="furniture">
                                                Furniture
                                            </Form.Label>
                                            <span className="badge bg-light text-muted float-end">7,165</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="footwear" />
                                            <Form.Label className="form-check-label" htmlFor="footwear">
                                                Footwear
                                            </Form.Label>
                                            <span className="badge bg-light text-muted float-end">5,964</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check className="" type="checkbox" defaultValue="" id="mobiles" />
                                            <Form.Label className="form-check-label" htmlFor="mobiles">
                                                Mobiles
                                            </Form.Label>
                                            <span className="badge bg-light text-muted float-end">2,123</span>
                                        </div>
                                    </div>
                                </Collapse>
                                <Link className="ecommerce-more-link" data-bs-toggle="collapse" href="#!" onClick={() => setOpen(!open)} aria-expanded={open}
                                    role="button" aria-controls="category-more">MORE</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                BRANDS
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="">
                                <p className="fw-semibold mb-0 text-muted">BRANDS</p>
                                <div className="">
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" defaultValue="" id="Jimmy-Lolfiger" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="Jimmy-Lolfiger">
                                            Jimmy Lolfiger
                                        </Form.Label>
                                        <span className="badge bg-light text-muted float-end">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" defaultValue="" id="dapzem1" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="dapzem1">
                                            Dapzem & Co
                                        </Form.Label>
                                        <span className="badge bg-light text-muted float-end">2,186</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" defaultValue="" id="denim-winjo1" defaultChecked />
                                        <Form.Label className="form-check-label" htmlFor="denim-winjo1">
                                            Denim Winjo
                                        </Form.Label>
                                        <span className="badge bg-light text-muted float-end">734</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" defaultValue="" id="Louie-Phillippe" />
                                        <Form.Label className="form-check-label" htmlFor="Louie-Phillippe">
                                            Louie Phillippe
                                        </Form.Label>
                                        <span className="badge bg-light text-muted float-end">16</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check className="" type="checkbox" defaultValue="" id="garage-clothing" />
                                        <Form.Label className="form-check-label" htmlFor="garage-clothing">
                                            Garage & Co
                                        </Form.Label>
                                        <span className="badge bg-light text-muted float-end">1,432</span>
                                    </div>
                                    <Collapse in={open1}>
                                        <div className="" id="brands-more">
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" defaultValue="" id="blueberry" defaultChecked />
                                                <Form.Label className="form-check-label" htmlFor="blueberry">
                                                    Blueberry & Co
                                                </Form.Label>
                                                <span className="badge bg-light text-muted float-end">257</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" defaultValue="" id="aus-polo-assn" defaultChecked />
                                                <Form.Label className="form-check-label" htmlFor="aus-polo-assn">
                                                    Aus Polo Assn
                                                </Form.Label>
                                                <span className="badge bg-light text-muted float-end">1,845</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check className="" type="checkbox" defaultValue="" id="denim-corp" defaultChecked />
                                                <Form.Label className="form-check-label" htmlFor="denim-corp">
                                                    Denim Corp
                                                </Form.Label>
                                                <span className="badge bg-light text-muted float-end">5,893</span>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link" data-bs-toggle="collapse" onClick={() => setOpen1(!open1)} aria-expanded={open1}
                                        href="#!" role="button" aria-controls="brands-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                PRICE
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="low" />
                                <Form.Label className="form-check-label" htmlFor="low">
                                    $0 - $599
                                </Form.Label>
                                <span className="badge bg-light text-muted float-end">22,873</span>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="low1" defaultChecked />
                                <Form.Label className="form-check-label" htmlFor="low1">
                                    $599 - $1299
                                </Form.Label>
                                <span className="badge bg-light text-muted float-end">11,345</span>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="medium" />
                                <Form.Label className="form-check-label" htmlFor="medium">
                                    $1,299 - $2,199
                                </Form.Label>
                                <span className="badge bg-light text-muted float-end">6,987</span>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="high" />
                                <Form.Label className="form-check-label" htmlFor="high">
                                    $2,199 - $3,499
                                </Form.Label>
                                <span className="badge bg-light text-muted float-end">5,236</span>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" type="checkbox" value="" id="high1" />
                                <Form.Label className="form-check-label" htmlFor="high1">
                                    $3,499 & Above
                                </Form.Label>
                                <span className="badge bg-light text-muted float-end">3,735</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title"> DISCOUNT </div>
                        </div> <div className="card-body">
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="Jimmy-Lolfiger1" />
                                <label className="form-check-label" htmlFor="Jimmy-Lolfiger1"> 0% - 20% </label>
                                <span className="badge bg-light text-muted float-end">16,563</span>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="dapzem2" />
                                <label className="form-check-label" htmlFor="dapzem2"> 20% - 40% </label>
                                <span className="badge bg-light text-muted float-end">15,234</span>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="denim-winjo" />
                                <label className="form-check-label" htmlFor="denim-winjo"> 40% - 60% </label>
                                <span className="badge bg-light text-muted float-end">6,278</span> </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="Louie-Phillippe1" defaultChecked />
                                <label className="form-check-label" htmlFor="Louie-Phillippe1"> 60% - 80% </label>
                                <span className="badge bg-light text-muted float-end">4,531</span>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="garage-clothing1" />
                                <label className="form-check-label" htmlFor="garage-clothing1"> 80% - 90% </label>
                                <span className="badge bg-light text-muted float-end">2,405</span>
                            </div>
                        </div>
                    </div>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                DISCOUNT
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="">
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" defaultValue="" id="extra-small" />
                                    <Form.Label className="form-check-label" htmlFor="extra-small">
                                        Extra Small (XS)
                                    </Form.Label>
                                    <span className="badge bg-light text-muted float-end">23,156</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" defaultValue="" id="small" />
                                    <Form.Label className="form-check-label" htmlFor="small">
                                        Small (SM)
                                    </Form.Label>
                                    <span className="badge bg-light text-muted float-end">15,632</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" defaultValue="" id="medium1" />
                                    <Form.Label className="form-check-label" htmlFor="medium1">
                                        Medium (MD)
                                    </Form.Label>
                                    <span className="badge bg-light text-muted float-end">15,032</span>
                                </div>
                                <div className="form-check mb-2">
                                    <Form.Check className="" type="checkbox" defaultValue="" id="large" defaultChecked />
                                    <Form.Label className="form-check-label" htmlFor="large">
                                        Large (L)
                                    </Form.Label>
                                    <span className="badge bg-light text-muted float-end">7,154</span>
                                </div>
                                <Collapse in={open2}>
                                    <div className="" id="sizes-more">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="extra-large" />
                                            <label className="form-check-label" htmlFor="extra-large">
                                                Extra Large (XL)
                                            </label>
                                            <span className="badge bg-light text-muted float-end">5,946</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="double-extralarge" />
                                            <label className="form-check-label" htmlFor="double-extralarge">
                                                XXL
                                            </label>
                                            <span className="badge bg-light text-muted float-end">3,267</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="triple-extralarge" />
                                            <label className="form-check-label" htmlFor="triple-extralarge">
                                                XXL
                                            </label>
                                            <span className="badge bg-light text-muted float-end">578</span>
                                        </div>
                                    </div>
                                </Collapse>
                                <Link className="ecommerce-more-link" data-bs-toggle="collapse" onClick={() => setOpen2(!open2)} aria-expanded={open2}
                                    href="#!" role="button" aria-controls="sizes-more">MORE</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="col-xxl-9 col-xl-8 col-lg-7 col-md-12">
                    <Row>
                        {Itemsdata.map((idx) => (
                            <Col xxl={4} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                                <Card className=" custom-card product-card">
                                    <Card.Body>
                                        <Link href="#!" className="product-image">
                                            <Image  src={idx.preview} className="card-img mb-3" alt="..." />
                                        </Link>
                                        <div className="product-icons">
                                            <Link href="/components/pages/ecommerce/wishlist" className="wishlist"><i className="ri-heart-line"></i></Link>
                                            <Link href="/components/pages/ecommerce/cart" className="cart" onClick={() => { AddToCart(idx.id); }}><i className="ri-shopping-cart-line"></i></Link>
                                            <Link href="/components/pages/ecommerce/product-details" className="view"><i className="ri-eye-line"></i></Link>
                                        </div>
                                        <p className="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">{idx.title}<span className="float-end text-warning fs-12">{idx.rating}<i className="ri-star-s-fill align-middle ms-1"></i></span></p>
                                        <p className="product-description fs-11 text-muted mb-2">{idx.description}</p>
                                        <p className="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>{idx.newpr}<span className="text-muted text-decoration-line-through ms-1 op-6 d-inline-block">{idx.oldpr}</span></span><span className={`badge bg-${idx.color} float-end fs-10`}>{idx.off}</span></p>
                                        <p className="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i className="ti ti-discount-2 fs-16 me-1"></i>{idx.Offerprice}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Row>
            <Pagination className="pagination justify-content-end">
                <Pagination.Item className="page-item disabled">
                    Previous
                </Pagination.Item>
                <Pagination.Item className="page-item">1</Pagination.Item>
                <Pagination.Item className="page-item">2</Pagination.Item>
                <Pagination.Item className="page-item">3</Pagination.Item>
                <Pagination.Item className="page-item">
                    Next
                </Pagination.Item>
            </Pagination>
        </Fragment>
    )
}
Products.layout = "Contentlayout"

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Products);