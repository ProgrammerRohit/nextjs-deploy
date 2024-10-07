import { Publishdata, Selectdata3, blogdata } from '@/shared/data/pages/blog/creatblogdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import DatePicker from 'react-datepicker';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FilePond, registerPlugin } from 'react-filepond';
import { Postdata, Profblog } from '@/shared/data/pages/blog/blogdata';
import Image from 'next/image';
const Select = dynamic(() => import('react-select'), { ssr: false });
const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false });

const Createblog = () => {

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

    const [files, setFiles] = useState([]);

    return (
        <Fragment>
            <Seo title="Create Blog" />
            <Pageheader title="Create Blog" heading="Blog" active="Create Blog" />
            <Row>
                <Col xxl={8} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">New Blog</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-title" className="">Blog Title</Form.Label>
                                    <Form.Control type="text" className="" id="blog-title" placeholder="Blog Title" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-category" className="">Blog Category</Form.Label>
                                    <Select name="colors" options={blogdata} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author" className="">Blog Author</Form.Label>
                                    <Form.Control type="text" className="" id="blog-author" placeholder="Enter Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author-email" className="">Email</Form.Label>
                                    <Form.Control type="text" className="" id="blog-author-email" placeholder="Enter Email" />
                                </Col>
                                <Col xl={6}  className="publish-date-data">
                                    <Form.Label htmlFor="publish-date" className="">Publish Date</Form.Label>
                                    <DatePicker className=" form-control form-control-light flatpickr-input" onChange={handleDateChange} showIcon selected={startDate} />
                                </Col>
                                <Col xl={6}  className="publish-time-data">
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
                                    <Form.Label htmlFor="product-status-add" className="">Published Status</Form.Label>

                                    <Select name="colors" options={Publishdata} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-tags" className="">Blog Tags</Form.Label>
                                    <Select isMulti name="colors" options={Selectdata3} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category" defaultValue={[Selectdata3[0], Selectdata3[3]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Blog Content</Form.Label>
                                    <div id="blog-content">
                                        <SunEditor />
                                    </div>
                                </Col>
                                <div className="col-xl-12 blog-images-container">
                                    <Form.Label htmlFor="blog-author-email" className="">Blog Images</Form.Label>
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
                                <Col xl={12}>
                                    <Form.Label className="">Blog Type</Form.Label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check me-3">
                                            <Form.Check className="" type="radio" name="blog-type" id="blog-free1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="blog-free1">
                                                Free
                                            </Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" type="radio" name="blog-type" id="blog-paid1" />
                                            <Form.Label className="form-check-label" htmlFor="blog-paid1">
                                                Paid
                                            </Form.Label>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <div className="card-footer">
                            <div className="btn-list text-end">
                                <Button variant='light' type="button" className="btn">Save As Draft</Button>
                                <Button variant='primary' type="button" className="btn">Post Blog</Button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <Card>
                        <Card.Header>
                            <div className="card-title">Recent Posts</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="">
                                {Postdata.map((idx) => (
                                    <div className={`d-flex overflow-visible ${idx.data1}`} key={Math.random()}>
                                        <Link aria-label="anchor" href="/components/pages/blog/blog-details" className="card-aside-column  cover-image" >
                                            <Image src={idx.src} className='w-100  br-7' alt=""/></Link>
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
                        <Card.Header>
                            <div className="card-title">Professional Blog Writers</div>
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

                </Col>
            </Row>
        </Fragment>
    )
}
Createblog.layout = "Contentlayout"

export default Createblog;