import React from 'react';
import Link from 'next/link';
import { Button, Card, Col, Dropdown, Row, Table } from 'react-bootstrap';
import Seo from '@/shared/layout-components/seo/seo';
import { Gallerylist1 } from '@/shared/data/pages/filemanager/filedetailsdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Image from 'next/image';

const FileDetails = () => {
    return (
        <div >
            <Seo title="File Details" />
            <Pageheader title="File Details" heading="File Manager" active="File Details" />
            <div className="row">
                <div className="col-xl-8">
                    <div className="row">
                        <Col xl={12}>
                            <div className="card custom-card">
                                <div className="card-body">
                                    <a href="#!">
                                        <Image  src="../../../../assets/images/media/files/08.jpg" className="br-7 w-100" alt="..." />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Related Files
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <Col xxl={3} xl={6} lg={6} md={6}>
                                            <div className="card border custom-card shadow-none">
                                                <div className="card-body ">
                                                    <div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
                                                        <div>
                                                            <span className="avatar avatar-xl">
                                                                <Image  src="../../../../assets/images/media/files/documents/5.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Dropdown className="">
                                                                <Dropdown.Toggle as="a" className="btn btn-sm btn-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu align="end" className="">
                                                                    <Dropdown.Item><Link className="" href="#!">Delete</Link></Dropdown.Item>
                                                                    <Dropdown.Item><Link className="" href="#!">Rename</Link></Dropdown.Item>
                                                                    <Dropdown.Item><Link className="" href="#!">Hide Folder</Link></Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <p className="fs-14 fw-semibold mb-1 lh-1">
                                                        <a href="#!">Images</a>
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                        <div>
                                                            <span className="text-muted fs-12">
                                                                246 Files
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-default fw-semibold">
                                                                214.32MB
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={3} xl={6} lg={6} md={6}>
                                            <div className="card border custom-card shadow-none">
                                                <div className="card-body">
                                                    <div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
                                                        <div>
                                                            <span className="avatar avatar-xl">
                                                                <Image  src="../../../../assets/images/media/files/documents/8.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Dropdown className="">
                                                                <Dropdown.Toggle as="a" className="btn btn-sm btn-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu align="end" className="">
                                                                    <Dropdown.Item><Link className="" href="#!">Delete</Link></Dropdown.Item>
                                                                    <Dropdown.Item><Link className="" href="#!">Rename</Link></Dropdown.Item>
                                                                    <Dropdown.Item><Link className="" href="#!">Hide Folder</Link></Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <p className="fs-14 fw-semibold mb-1 lh-1">
                                                        <a href="#!">Docs</a>
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                        <div>
                                                            <span className="text-muted fs-12">
                                                                17 Files
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-default fw-semibold">
                                                                432.39KB
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={3} xl={6} lg={6} md={6}>
                                            <div className="card border custom-card shadow-none">
                                                <div className="card-body">
                                                    <div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
                                                        <div>
                                                            <span className="avatar avatar-xl">
                                                                <Image  src="../../../../assets/images/media/files/documents/9.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Dropdown className="">
                                                                <Dropdown.Toggle as="a" className="btn btn-sm btn-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu align="end" className="">
                                                                    <Dropdown.Item><Link className="" href="#!">Delete</Link></Dropdown.Item>
                                                                    <Dropdown.Item><Link className="" href="#!">Rename</Link></Dropdown.Item>
                                                                    <Dropdown.Item><Link className="" href="#!">Hide Folder</Link></Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <p className="fs-14 fw-semibold mb-1 lh-1">
                                                        <a href="#!">Downloads</a>
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                        <div>
                                                            <span className="text-muted fs-12">
                                                                437 Files
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-default fw-semibold">
                                                                3.12GB
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={3} xl={6} lg={6} md={6}>
                                            <div className="card border custom-card shadow-none">
                                                <div className="card-body">
                                                    <div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
                                                        <div>
                                                            <span className="avatar avatar-xl">
                                                                <Image  src="../../../../assets/images/media/files/documents/11.png" alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <Dropdown className="">
                                                                <Dropdown.Toggle as="a" className="btn btn-sm btn-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="ri-more-2-fill"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu align="end" className="">
                                                                    <Dropdown.Item><Link className="" href="#!">Delete</Link></Dropdown.Item>
                                                                    <Dropdown.Item><Link className="" href="#!">Rename</Link></Dropdown.Item>
                                                                    <Dropdown.Item><Link className="" href="#!">Hide Folder</Link></Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <p className="fs-14 fw-semibold mb-1 lh-1">
                                                        <a href="#!">Apps</a>
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                        <div>
                                                            <span className="text-muted fs-12">
                                                                165 Files
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-default fw-semibold">
                                                                12.56GB
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
                <Col xl={4}>
                    <div className="row">
                        <Col xl={12}>
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        File Information
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="table-responsive">
                                        <Table className="table table-bordered text-nowrap mb-0">
                                            <tbody className="top-selling">
                                                <tr>
                                                    <th className="">
                                                        <span className="fw-semibold fs-13">File Name</span>
                                                    </th>
                                                    <td><span className=" text-muted fs-13 fw-normal">Nature.jpg</span></td>
                                                </tr>
                                                <tr>
                                                    <th className="">
                                                        <span className="fw-semibold fs-13">File Size</span>
                                                    </th>
                                                    <td><span className=" text-muted fs-13 fw-normal">799KB</span></td>
                                                </tr>
                                                <tr>
                                                    <th className="">
                                                        <span className="fw-semibold fs-13">Created Date</span>
                                                    </th>
                                                    <td><span className=" text-muted fs-13 fw-normal">1-10-2023</span></td>
                                                </tr>
                                                <tr>
                                                    <th className="">
                                                        <span className="fw-semibold fs-13">Modified Date</span>
                                                    </th>
                                                    <td><span className=" text-muted fs-13 fw-normal">10-10-2023</span></td>
                                                </tr>
                                                <tr>
                                                    <th className="">
                                                        <span className="fw-semibold fs-13">File Location</span>
                                                    </th>
                                                    <td><span className=" text-muted fs-13 fw-normal">Location/file/Images/Nature.jpg</span></td>
                                                </tr>
                                                <tr>
                                                    <th className="">
                                                        <span className="fw-semibold fs-13">Height</span>
                                                    </th>
                                                    <td><span className=" text-muted fs-13 fw-normal">500px</span></td>
                                                </tr>
                                                <tr>
                                                    <th className="">
                                                        <span className="fw-semibold fs-13">Width</span>
                                                    </th>
                                                    <td><span className=" text-muted fs-13 fw-normal">750px</span></td>
                                                </tr>
                                                <tr>
                                                    <th className=" ">
                                                        <span className="fw-semibold fs-13">Uploaded by</span>
                                                    </th>
                                                    <td><span className=" text-muted fs-13 fw-normal">Ali AronJohn</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <Button variant='' type="button" className="btn btn-icon  btn-info-light me-2 bradius"><i className="fe fe-edit"></i></Button>
                                        <Button variant='' type="button" className="btn btn-icon  btn-danger-light me-2 bradius"><i className="fe fe-trash"></i></Button>
                                        <Button variant='' type="button" className="btn btn-icon  btn-success-light me-2 bradius"><i className="fe fe-download fs-14"></i></Button>
                                        <Button variant='' type="button" className="btn btn-icon  btn-warning-light bradius"><i className="fe fe-share-2 fs-14"></i></Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Recent Files
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="text-center demo-gallery">
                                        <div className="">
                                            <Gallerylist1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Col>
            </div>
        </div>
    );
};
FileDetails.layout = "Contentlayout";

export default FileDetails;
