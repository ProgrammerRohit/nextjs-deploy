
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { Filesdata1 } from '@/shared/data/pages/filemanager/filemanagerdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Image from 'next/image';

const FileManagerList = () => {
    return (
        <div >
            <Seo title="File Manager List" />
            <Pageheader title="File Manager List" heading="File Manager" active="File Manager List" />
            <div className="row row-sm">

                <Col lg={12} xl={12}>
                    <div className="row row-sm">
                        {Filesdata1.map((idx) => (
                            <Col xl={3} lg={4} md={4} sm={4} xxl={2} key={Math.random()}>
                                <div className="card custom-card overflow-hidden">
                                    <Link href="/components/pages/filemanager/file-details" className={idx.text1}><Image  src={idx.src} alt="img" className={idx.text} /></Link>
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


            </div>
        </div>
    );
};
FileManagerList.layout = "Contentlayout";

export default FileManagerList;
