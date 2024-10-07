
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { AddToCart, ProductReduxData } from '@/shared/redux/action';
import { Itemsdata } from '@/shared/data/pages/ecommerce/productdata';
import Image from 'next/image';

const Wishlist = ({ AddToCart }) => {

    const [Data, setData] = useState(Itemsdata);

    function handleDelete(id) {
        // Display a confirmation popup
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // User clicked "Yes, delete it!" button
                const updatedInvoiceData = Data.filter((idx) => idx.id.toString() !== id);
                setData(updatedInvoiceData);
                Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
            }
        });
    }

    //search function
    const [allData, setAllData] = useState(Itemsdata);

    function handleRemove(id) {
        const newList = allData.filter((idx) => idx.id !== id);
        setAllData(newList);
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
    }
    const allElement2 = [];
    const myfunction = (InputData) => {
        let allElement;
        for (allElement of allData) {
            if (allElement.title[0] == " ") {
                allElement.title = allElement.title.trim();
            }
            if (allElement.title.toLowerCase().includes(InputData.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(InputData.toLowerCase())) {
                    allElement2.push(allElement);
                }
            }

        }
        setAllData(allElement2);
    };
    return (
        <Fragment>
            <Seo title="Wishlist" />
            <Pageheader title="Wishlist" heading="Ecommerce" active="Wishlist" />
            <Row>
                <Col xl={12}>
                    <div className="card custom-card">
                        <div className="card-body d-flex align-items-center justify-content-between">
                            <div className="fs-15 mb-0">Total <span className="badge bg-success">08</span> products are wishlisted</div>
                            <div className="d-flex" role="search">
                                <Form.Control className="form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" onChange={(ele) => { myfunction(ele.target.value); }} />
                                <Button variant='light' className="btn btn-sm" type="submit">Search</Button>
                            </div>
                        </div>
                    </div>
                </Col>
                {Data.map((idx) => (
                    <Col xxl={3} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                        <Card className=" custom-card product-card">
                            <Card.Body>
                                <Link href="#!" className="product-image">
                                    <Image  src={idx.preview} className="card-img mb-3" alt="..." />
                                </Link>
                                <div className="product-icons">
                                    <Link href="#!" className="wishlist btn-delete"><i className="ri-close-line" onClick={() => { handleDelete(idx.id.toString()) }}></i></Link>
                                </div>
                                <p className="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">{idx.title}<span className="float-end text-warning fs-12">{idx.rating}<i className="ri-star-s-fill align-middle ms-1"></i></span></p>
                                <p className="product-description fs-11 text-muted mb-2">{idx.description}</p>
                                <p className="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>{idx.newpr}<span className="text-muted text-decoration-line-through ms-1 op-6 d-inline-block">{idx.oldpr}</span></span><span className={`badge bg-${idx.color} float-end fs-10`}>{idx.off}</span></p>
                                <p className="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                    <i className="ti ti-discount-2 fs-16 me-1"></i>{idx.Offerprice}</p>
                            </Card.Body>
                            <Card.Footer className=" text-center">
                                <Link href="/components/pages/ecommerce/cart" className="btn btn-primary-light m-1" onClick={() => { AddToCart(idx.id); }}><i className="ri-shopping-cart-2-line me-2 lh-1 align-middle d-inline-block"></i>Move To Cart</Link>
                                <Link href="/components/pages/ecommerce/product-details" className="btn btn-success-light m-1"><i className="ri-eye-line me-2 align-middle d-inline-block"></i>View Product</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                    <Link href="#!" className="page-link">Previous</Link>
                </li>
                <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#!">3</Link></li>
                <li className="page-item">
                    <Link className="page-link" href="#!">Next</Link>
                </li>
            </ul>
        </Fragment>
    )
}
Wishlist.layout = "Contentlayout";
const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);