
import { ItemData1 } from '@/shared/data/pages/ecommerce/productdata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import { AddToCart } from '@/shared/redux/action'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap'
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const Cart = ({ local_varaiable }) => {

    const [cart, setCart] = useState(ItemData1);

    const [Price, setPrice] = useState(0);

    useEffect(() => {
        if (local_varaiable.ecommercedata == undefined) {
            setCart(ItemData1);
            ItemData1.filter((ele) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }
        else if (local_varaiable.ecommercedata.length == 0) {
            setCart(ItemData1);
            ItemData1.filter((ele) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }
        else {
            setCart(local_varaiable.ecommercedata);
            local_varaiable.ecommercedata.filter((ele) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }

    }, [local_varaiable.ecommercedata]);

    const handleClick = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id) => {
        const updatedData = cart.filter((idx) => idx.id !== id);
        setCart(updatedData);

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };
    //value add and remove function

    function dec(el) {
        let unit = el.currentTarget.parentElement.querySelector("input").value;

        if (Number(unit) === 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value--;
        }
    }
    function inc(el) {
        el.currentTarget.parentElement.querySelector("input").value++;

    }

    return (
        <Fragment>
            <Seo title="Cart" />
            <Pageheader title="Cart" heading="Ecommerce" active="Cart" />
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card" id="cart-container-delete">
                        <Card.Header>
                            <div className="card-title">
                                Cart Items
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table table-bordered text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                Product Name
                                            </th>
                                            <th scope="col">
                                                Price
                                            </th>
                                            <th scope="col">
                                                Quantity
                                            </th>
                                            <th scope="col">
                                                Total
                                            </th>
                                            <th scope="col">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    {cart.map((idx) => (
                                        <tbody key={Math.random()}>
                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-xxl bg-light">
                                                                <Image  src={idx.preview} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div className="mb-1 fs-14 fw-semibold">
                                                                <Link href="#!">laborum et dolorum fuga</Link>
                                                            </div>
                                                            <div className="mb-1">
                                                                <span className="me-1 d-inline-flex align-items-center">Size:</span><span className="fw-semibold text-muted">Large</span>
                                                            </div>
                                                            <div className="mb-1">
                                                                <span className="me-1 d-inline-flex align-items-center">Color:</span><span className="fw-semibold text-muted">orange<span className="badge bg-success-transparent ms-3">In Offer</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fw-semibold fs-14">
                                                        $459
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    <div className="input-group border rounded flex-nowrap">
                                                        <Button variant='' onClick={dec} className="btn btn-icon btn-light input-group-text flex-fill product-quantity-minus border-0" ><i className="ri-subtract-line"></i></Button>
                                                        <Form.Control type="text" className="form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity" defaultValue="2" />
                                                        <Button variant='' onClick={inc} className="btn btn-icon btn-light input-group-text flex-fill product-quantity-plus border-0" ><i className="ri-add-line"></i></Button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fs-14 fw-semibold">
                                                        $918
                                                    </div>
                                                </td>
                                                <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add To Wishlist</Tooltip>}>
                                                        <Link href="/components/pages/ecommerce/wishlist" className="btn btn-icon btn-success me-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Wishlist"><i className="ri-heart-line"></i></Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Remove From Cart</Tooltip>}>
                                                    <Button onClick={() => handleClick(idx.id)} variant='' className="btn btn-icon btn-danger btn-delete" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Remove From cart">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Button>
                                                    </OverlayTrigger>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="card custom-card d-none" id="cart-empty-cart">
                        <Card.Header>
                            <div className="card-title">
                                Empty Cart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="cart-empty text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-muted" width="24" height="24"><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
                                <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                                <h5 className="mb-3">Add some items to make me happy :)</h5>
                                <Link href="#!" className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
                <div className="col-xxl-3">
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Have a coupon..?
                            </div>
                        </div>
                        <Card.Body>
                            <div className="">
                                <div className="input-group">
                                    <Form.Control type="text" className="form-control-sm" placeholder="Coupon Code" aria-label="coupon-code" aria-describedby="coupons" />
                                    <Button variant='' type="button" className="btn btn-primary input-group-text" id="coupons">Apply</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Price Details
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="p-4 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted ">Sub Total</div>
                                    <div className="fw-semibold fs-14">$1,299</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted ">Discount</div>
                                    <div className="fw-semibold fs-14 text-success">10% - $129</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted ">Delivery Charges</div>
                                    <div className="fw-semibold fs-14 text-danger">- $49</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-muted ">Service Tax (18%)</div>
                                    <div className="fw-semibold fs-14">- $169</div>
                                </div>
                            </div>
                            <div className=" py-3 px-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fw-semibold fs-18 ">Total :</div>
                                    <div className="fw-semibold fs-18"> $1,387</div>
                                </div>

                            </div>
                            <div className="p-3 border-top text-center">
                                <Link href="/components/pages/ecommerce/checkout" className="btn btn-primary m-1">Proceed To Checkout</Link>
                                <Link href="/components/pages/ecommerce/products" className="btn btn-light m-1 ">Continue Shopping</Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </Row>
        </Fragment>
    )
}
Cart.layout = "Contentlayout"

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Cart);