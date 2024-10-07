import { data } from '@/shared/data/pages/ecommerce/addproductsdata'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
const Select = dynamic(() => import("react-select"), { ssr: false });
const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import DatePicker from 'react-datepicker';
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Productoptions2, Productoptions3, Productoptions4, Productoptions5, Productoptions6, Productoptions7, Productoptions8 } from '@/shared/data/pages/ecommerce/editproductsdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);


const Editproducts = () => {

    const [files, setFiles] = useState([]);
    const [files1, setFiles1] = useState([]);

    //date pickers
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

    const defaultContent = `
<ul>
<li>Care Instructions: Machine Wash</li>
<li>Neckline: The pullover is framed with a Crew Neck</li>
<li>Fit Type: Regular Fit</li>
<li>Long Sleeves: The pullover is designed with Long Sleeves.</li>
<li>Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours.</li>
<li>Solid: The pullover is available in solid pattern.</li>
</ul>`;
    return (
        <Fragment>
            <Seo title="Edit Products" />
            <Pageheader title="Edit Products" heading="Ecommerce" active="Edit Products" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className=" add-products p-0">
                            <div className="p-4">
                                <div className="row gx-5">
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <div className="card custom-card shadow-none mb-0">
                                            <Card.Body className=" p-0">
                                                <div className="row gy-3">
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-name-add" className="form-label">Product Name</Form.Label>
                                                        <Form.Control type="text" className="" id="product-name-add" placeholder="Name" defaultValue="Light Blue Sweat Shirt" />
                                                        <Form.Label htmlFor="product-name-add" className="mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</Form.Label>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-category-add" className="form-label">Category</Form.Label>
                                                        <Select name="colors" options={data} className="basic-multi-select" isSearchable defaultValue={[data[8]]}
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Category"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-gender-add" >Gender</Form.Label>
                                                        <Select name="colors" options={Productoptions2} className="basic-multi-select" isSearchable defaultValue={[Productoptions2[1]]}
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-size-add" >Size</Form.Label>
                                                        <Select name="colors" options={Productoptions3} className="basic-multi-select" isSearchable defaultValue={[Productoptions3[3]]}
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-brand-add" className="form-label">Brand</Form.Label>
                                                        <Select name="colors" options={Productoptions4} className="basic-multi-select" isSearchable defaultValue={[Productoptions4[5]]}
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <div className="col-xl-6 color-selection">
                                                        <Form.Label htmlFor="product-brand-add" className="form-label">Color</Form.Label>
                                                        <Select isMulti name="colors" options={Productoptions5} className="basic-multi-select" isSearchable defaultValue={[Productoptions5[6]]}
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </div>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-cost-add" >Enter Cost</Form.Label>
                                                        <Form.Control type="text" className="" id="product-cost-add" placeholder="Cost" defaultValue="$1299.99" />
                                                        <Form.Label htmlFor="product-cost-add" className="mt-1 fs-12 op-5 text-muted mb-0">*Mention final price of the product</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-description-add" >Product Description</Form.Label>
                                                        <Form.Control as="textarea" className="" id="product-description-add" rows={2} defaultValue="Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours">
                                                        </Form.Control>
                                                        <Form.Label htmlFor="product-description-add" className="mt-1 fs-12 op-5 text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label className="form-label">Product Features</Form.Label>
                                                        <div id="product-features">
                                                            <SunEditor defaultValue={defaultContent} />
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <div className="card custom-card shadow-none mb-0">
                                            <Card.Body className=" p-0">
                                                <div className="row gy-4">
                                                    <div className="col-xl-4">
                                                        <Form.Label htmlFor="product-actual-price" className="form-label">Actual Price</Form.Label>
                                                        <Form.Control type="text" className="" id="product-actual-price" placeholder="Actual Price" defaultValue="$1,499.90" />
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Form.Label htmlFor="product-dealer-price" className="form-label">Dealer Price</Form.Label>
                                                        <Form.Control type="text" className="" id="product-dealer-price" placeholder="Dealer Price" defaultValue="$1,299.99" />
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Form.Label htmlFor="product-discount" className="form-label">Discount</Form.Label>
                                                        <Form.Control type="text" className="" id="product-discount" placeholder="Discount in %" defaultValue="0.75%" />
                                                    </div>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-type" className="form-label">Product Type</Form.Label>
                                                        <Form.Control type="text" className="" id="product-type" placeholder="Type" defaultValue="Watch" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-weight" className="form-label">Item Weight</Form.Label>
                                                        <Form.Control type="text" className="" id="product-weight" placeholder="Weight in gms" defaultValue="180gms" />
                                                    </Col>
                                                    <div className="col-xl-12 product-documents-container">
                                                        <p className="fw-semibold mb-2 fs-14">Product Images :</p>
                                                        <FilePond className="multiple-filepond"
                                                            files={files}
                                                            onupdatefiles={setFiles}
                                                            allowMultiple={true}
                                                            maxFiles={6}
                                                            server="/api"
                                                            name="files" /* sets the file input name, it's filepond by default */
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                    </div>
                                                    <Form.Label className="op-5 mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </Form.Label>
                                                    <div className="col-xl-12 product-documents-container">
                                                        <p className="fw-semibold mb-2 fs-14">Warrenty Documents :</p>
                                                        <FilePond className="multiple-filepond"
                                                            files={files1}
                                                            onupdatefiles={setFiles1}
                                                            allowMultiple={true}
                                                            maxFiles={6}
                                                            server="/api"
                                                            name="files" /* sets the file input name, it's filepond by default */
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                    </div>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-date" className="form-label">Publish Date</Form.Label>
                                                        <DatePicker className=" form-control form-control-light flatpickr-input" onChange={handleDateChange} showIcon selected={startDate} />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-time" className="form-label">Publish Time</Form.Label>
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
                                                        <Form.Label htmlFor="product-status-add" className="form-label">Published Status</Form.Label>
                                                        <Select name="colors" options={Productoptions6} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-tags" className="form-label">Product Tags</Form.Label>
                                                        <Select isMulti name="colors" options={Productoptions7} defaultValue={[Productoptions7[0], Productoptions7[3]]}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-availability" className="form-label">Availability</Form.Label>
                                                        <Select name="colors" options={Productoptions8}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                <Button variant='' className="btn btn-primary-light m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></Button >
                                <Button variant='' className="btn btn-success-light m-1">Save Product<i className="bi bi-download ms-2"></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Editproducts.layout = "Contentlayout"

export default Editproducts;