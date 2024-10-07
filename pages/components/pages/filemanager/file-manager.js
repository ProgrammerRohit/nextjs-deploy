
import { Filesdata, Folderdata } from '@/shared/data/pages/filemanager/filemanagerdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Card, Col, Dropdown, Form, Modal, ProgressBar, Row } from 'react-bootstrap';

const FileManagers = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div >
            <Seo title="File Manager" />
            <Pageheader title="Filemanager" heading="File Manager" active="Filemanager" />
            <Row>
                <Col md={5} lg={5} xl={3}>
                    <Card>
                        <Card.Body className="text-center border-bottom">
                            <Button variant='primary' type="button" onClick={handleShow} className="btn w-100" data-bs-target="#createfile" data-bs-toggle="modal"><i className="fe fe-plus me-1"></i> Create New File</Button>
                        </Card.Body>
                        <Modal className="fade" id="createfile" show={show} onHide={handleClose} tabIndex="-1" aria-labelledby="createfile" data-bs-keyboard="false" aria-hidden="true">
                            <div className="modal-content">
                                <Modal.Header className="">
                                    <div className="modal-title" id="staticBackdropLabel">Create File
                                    </div>
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="modal" onClick={handleClose}
                                        aria-label="Close"></Button>
                                </Modal.Header>
                                <Modal.Body className="modal-body">
                                    <Form.Label htmlFor="createfile1" className="">Folder Name</Form.Label>
                                    <Form.Control type="text" className="" id="createfile1" placeholder="Folder Name" />
                                </Modal.Body>
                                <Modal.Footer className="">
                                    <Button variant='' type="button" className="btn btn-sm btn-icon btn-light" onClick={handleClose}
                                        data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
                                    <Button variant='' type="button" className="btn btn-sm btn-success">Create</Button>
                                </Modal.Footer>
                            </div>
                        </Modal>
                        <div className="card-body pt-2 pb-2 border-bottom">
                            <div className="list-group list-group-transparent mb-0 file-manager">
                                <div>
                                    <div className="d-flex">
                                        <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                            <i className="fe fe-image fs-18 me-2 text-success p-2"></i>Images
                                        </Link>
                                        <div className="text-end ms-auto mt-3">
                                            <span className="fs-11  text-dark">20 MB</span>
                                        </div>
                                    </div>
                                    <ProgressBar variant='green' className="mb-3 ms-2 progress-xs" now={30} />
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                            <i className="fe fe-video fs-18 me-2 text-secondary p-2"></i>Videos
                                        </Link>
                                        <div className="text-end ms-auto mt-3">
                                            <span className="fs-11  text-dark">32.5 MB</span>
                                        </div>
                                    </div>
                                    <ProgressBar variant='secondary' className="mb-3 ms-2 progress-xs" now={40} />
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div>
                                            <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                                <i className="fe fe-file-text fs-18 me-2 text-primary p-2"></i> Docs
                                            </Link>
                                        </div>
                                        <div className="text-end ms-auto mt-3">
                                            <span className="fs-11  text-dark">14.2 MB</span>
                                        </div>
                                    </div>
                                    <ProgressBar variant='primary' className="mb-3 ms-2 progress-xs" now={25} />
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div>
                                            <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                                <i className="fe fe-music fs-18 me-2 text-warning p-2"></i> Music
                                            </Link>
                                        </div>
                                        <div className="text-end ms-auto mt-3">
                                            <span className="fs-11  text-dark">13 MB</span>
                                        </div>
                                    </div>
                                    <ProgressBar variant='warning' className="mb-3 ms-2 progress-xs" now={30} />
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div>
                                            <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                                <i className="fe fe-download fs-18 me-2 text-info p-2"></i> Downloads
                                            </Link>
                                        </div>
                                        <div className="text-end ms-auto mt-3">
                                            <span className="fs-11  text-dark">19.3 MB</span>
                                        </div>
                                    </div>
                                    <ProgressBar variant='info' className="mb-3 ms-2 progress-xs" now={40} />
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div>
                                            <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                                <i className="fe fe-grid fs-18 me-2 text-danger p-2"></i> More
                                            </Link>
                                        </div>
                                        <div className="text-end ms-auto mt-3">
                                            <span className="fs-11  text-dark">23 MB</span>
                                        </div>
                                    </div>
                                    <ProgressBar variant='danger' className="mb-3 ms-2 progress-xs" now={45} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="list-group list-group-transparent mb-0">
                                <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                    <span className="text-primary me-2 fs-12"><i className="fe fe-circle"></i></span>Remote Control
                                </Link>
                                <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                    <span className="text-secondary me-2 fs-12"><i className="fe fe-circle"></i></span>Google Drive
                                </Link>
                                <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                    <span className="text-danger me-2 fs-12"><i className="fe fe-circle"></i></span>FTP Files
                                </Link>
                                <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                    <span className="text-warning me-2 fs-12"><i className="fe fe-circle"></i></span>Transfer files
                                </Link>
                                <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                    <span className="text-success me-2 fs-12"><i className="fe fe-circle"></i></span>Deep Clean
                                </Link>
                                <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                    <span className="text-info me-2 fs-12"><i className="fe fe-circle"></i></span>Favourities
                                </Link>
                                <Link href="#!" className="list-group-item d-flex align-items-center px-0 py-2 border-0">
                                    <span className="text-pink me-2 fs-12"><i className="fe fe-circle"></i></span>Settings
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="card-body">
                            <div className="d-flex mb-4">
                                <Link href="#!" className="file-manager-image"><Image  src="../../../../assets/images/media/files/documents/11.png" alt="img" /></Link>
                                <h4 className="ms-3 my-auto fw-semibold">467 Files</h4>
                                <Dropdown className="ms-5 ms-auto">
                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe fe-more-vertical fs-18"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="" role="menu" align="end">
                                        <Dropdown.Item className=""><Link href="#!">Internal Storage</Link></Dropdown.Item>
                                        <Dropdown.Item className=""><Link href="#!">External Storage</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <ProgressBar variant='warning' className="mb-3 progress-xs" now={60} />
                            <div className="">
                                <div className="d-flex">
                                    <div className="d-flex">
                                        <div>
                                            <h6 className="fw-normal"><i className="fe fe-circle text-success fs-12"></i> Total Storage</h6>
                                            <span className="text-muted">128 GB</span>
                                        </div>
                                    </div>
                                    <div className="ms-auto my-auto">
                                        <h6 className="fw-normal"><i className="fe fe-circle text-danger fs-12"></i> Used</h6>
                                        <span className="text-muted">100 GB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={7} lg={7} xl={9}>
                    <Row className="row-sm">
                        <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">All Folders</div>
                        {Folderdata.map((idx) => (
                            <Col xl={3} md={6} sm={6} key={Math.random()}>
                                <Card className="custom-card pos-relative">
                                    <Link aria-label="anchor" href="/components/pages/filemanager/file-manager-list" className="open-file"></Link>
                                    <Card.Body className="px-4 pt-4 pb-0">
                                        <div className="d-flex">
                                            <span className={`file-img bg-${idx.color}-transparent border border-${idx.color}`}>
                                                {idx.icon}
                                            </span>
                                            <Dropdown className="ms-auto mt-1 file-dropdown">
                                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" className="text-muted no-caret" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-vertical fs-18"></i></Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-start" align="end">
                                                    <Dropdown.Item className="dropdown-item d-inline-flex align-items-center" href="#!"><i className="fe fe-edit me-2"></i> Edit</Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item d-inline-flex align-items-center" href="#!"><i className="fe fe-share me-2"></i> Share</Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item d-inline-flex align-items-center" href="#!"><i className="fe fe-download me-2"></i> Download</Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item d-inline-flex align-items-center" href="#!"><i className="fe fe-trash me-2"></i> Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="border-top-0">
                                        <div className="d-flex">
                                            <div>
                                                <h6 className={`text-${idx.color} fw-normal`}>{idx.class}</h6>
                                                <p className="text-muted fs-13 mb-0">{idx.files}</p>
                                            </div>
                                            <div className="ms-auto mt-4">
                                                <h6 className="text-muted fw-normal fs-14">{idx.data}</h6>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                    <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">Files</div>
                    <div className="row row-sm">
                        {Filesdata.map((idx) => (
                            <Col xl={4} xxl={3} lg={6} md={6} sm={6} key={Math.random()}>
                                <div className="card custom-card overflow-hidden">
                                    <Link href="/components/pages/filemanager/file-details" className={idx.text1}><Image  src={idx.src} className={idx.text} alt="img" /></Link>
                                    <div className="card-footer">
                                        <div className="d-flex">
                                            <div className="">
                                                <h6 className="mb-0 fw-semibold text-break">{idx.class}</h6>
                                            </div>
                                            <div className="ms-auto my-auto">
                                                <span className="text-muted mb-0">{idx.data}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};
FileManagers.layout = "Contentlayout";

export default FileManagers;
