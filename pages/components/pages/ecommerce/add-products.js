
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
const Select = dynamic(() => import('react-select'), { ssr: false });
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import { FilePond } from 'react-filepond';
import { Productoptions2, Productoptions3, Productoptions4, Productoptions5, Productoptions6, Productoptions7, Productoptions8, data } from "../../../../shared/data/pages/ecommerce/addproductsdata";
import DatePicker from 'react-datepicker';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';

const Addproducts = () => {
    const [files, setFiles] = useState([]);
    const [files1, setFiles1] = useState([]);

    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [startDate1, setStartDate1] = useState(new Date());

    const handleDateChange1 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };

    return (
        <Fragment>
            <Seo title="Add Products" />
            <Pageheader title="Add Products" heading="Ecommerce" active="Add Products" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className=" add-products p-0">
                            <div className="p-4">
                                <div className="row gx-5">
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <Card className="custom-card shadow-none mb-0 border-0">
                                            <Card.Body className=" p-0">
                                                <div className="row gy-3">
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-name-add">Product Name</Form.Label>
                                                        <Form.Control type="text" id="product-name-add" placeholder="Name" />
                                                        <Form.Label htmlFor="product-name-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</Form.Label>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-category-add">Category</Form.Label>
                                                        <Select name="colors" options={data} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Category"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-gender-add">Gender</Form.Label>
                                                        <Select name="colors" options={Productoptions2} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-size-add">Size</Form.Label>
                                                        <Select name="colors" options={Productoptions3} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-brand-add">Brand</Form.Label>
                                                        <Select name="colors" options={Productoptions4} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <div className="col-xl-6 color-selection">
                                                        <Form.Label htmlFor="product-color-add">Colors</Form.Label>
                                                        <Select isMulti name="colors" options={Productoptions5} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </div>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-cost-add">Enter Cost</Form.Label>
                                                        <Form.Control type="text" id="product-cost-add" placeholder="Cost" />
                                                        <Form.Label htmlFor="product-cost-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final price of the product</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-description-add">Product Description</Form.Label>
                                                        <Form.Control as="textarea" id="product-description-add" rows={2} />
                                                        <Form.Label htmlFor="product-description-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label>Product Features</Form.Label>
                                                        <div id="product-features">
                                                            <SunEditor />
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <Card className="custom-card shadow-none mb-0 border-0">
                                            <Card.Body className=" p-0">
                                                <div className="row gy-4">
                                                    <div className="col-xl-4">
                                                        <Form.Label htmlFor="product-actual-price">Actual Price</Form.Label>
                                                        <Form.Control type="text" id="product-actual-price" placeholder="Actual Price" />
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Form.Label htmlFor="product-dealer-price">Dealer Price</Form.Label>
                                                        <Form.Control type="text" id="product-dealer-price" placeholder="Dealer Price" />
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Form.Label htmlFor="product-discount">Discount</Form.Label>
                                                        <Form.Control type="text" id="product-discount" placeholder="Discount in %" />
                                                    </div>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-type">Product Type</Form.Label>
                                                        <Form.Control type="text" id="product-type" placeholder="Type" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-discount">Item Weight</Form.Label>
                                                        <Form.Control type="text" id="product-discount1" placeholder="Weight in gms" />
                                                    </Col>
                                                    <div className="col-xl-12 product-documents-container">
                                                        <p className="fw-semibold mb-2 fs-14">Product Images :</p>
                                                        <FilePond
                                                            files={files}
                                                            onupdatefiles={setFiles}
                                                            allowMultiple={true}
                                                            maxFiles={3}
                                                            server="/api"
                                                            name="files"
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                    </div>
                                                    <Form.Label className="form-label op-5 mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </Form.Label>
                                                    <div className="col-xl-12 product-documents-container">
                                                        <p className="fw-semibold mb-2 fs-14">Warrenty Documents :</p>
                                                        <FilePond
                                                            files={files1}
                                                            onupdatefiles={setFiles1}
                                                            allowMultiple={true}
                                                            maxFiles={3}
                                                            server="/api"
                                                            name="files"
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                    </div>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-date">Publish Date</Form.Label>
                                                        <DatePicker className=" form-control form-control-light flatpickr-input" onChange={handleDateChange} showIcon selected={startDate} />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-time">Publish Time</Form.Label>
                                                        <DatePicker
                                                            selected={startDate1}
                                                            onChange={handleDateChange1}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            timeCaption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-status-add">Published Status</Form.Label>
                                                        <Select name="colors" options={Productoptions6} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-tags">Product Tags</Form.Label>
                                                        <Select isMulti name="colors" options={Productoptions7} defaultValue={[Productoptions7[0], Productoptions7[3]]}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-status-add1">Availability</Form.Label>
                                                        <Select name="colors" options={Productoptions8}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                <Button variant='' className="btn btn-primary-light m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></Button>
                                <Button variant='' className="btn btn-success-light m-1">Save Product<i className="bi bi-download ms-2"></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Addproducts.layout = "Contentlayout"

export default Addproducts;