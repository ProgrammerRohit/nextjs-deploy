import React from 'react';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { Col, Row } from 'react-bootstrap';

const Error403 = () => {

    return (
        <div >
            <Seo title="error-403" />
            <Row className="authentication coming-soon mx-0 justify-content-center">
                <Col xxl={8} xl={8} lg={8} className="col-12">
                    <div className="authentication-cover text-fixed-white">
                        <div className="aunthentication-cover-content text-center py-5 px-sm-5 px-0">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <h1 className="display-1 text-fixed-white">4<span className="text-center custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a2a1ff"></circle><path fill="#6563ff" d="M14.99951 17.0918a.99473.99473 0 0 1-.64209-.23438 3.766 3.766 0 0 0-4.71484 0 .99955.99955 0 1 1-1.28516-1.53125 5.81162 5.81162 0 0 1 7.28516 0 .99974.99974 0 0 1-.64307 1.76563zM8.25 12a1 1 0 0 1-.707-1.707l.293-.293-.293-.293A.99989.99989 0 0 1 8.957 8.293l1 1a.99962.99962 0 0 1 0 1.41406l-1 1A.99676.99676 0 0 1 8.25 12z"></path><path fill="#6563ff" d="M10.25 12a.99676.99676 0 0 1-.707-.293l-1-1a.99962.99962 0 0 1 0-1.41406l1-1A.99989.99989 0 0 1 10.957 9.707l-.293.293.293.293A1 1 0 0 1 10.25 12zM14.25 12a1 1 0 0 1-.707-1.707l.293-.293-.293-.293A.99989.99989 0 0 1 14.957 8.293l1 1a.99962.99962 0 0 1 0 1.41406l-1 1A.99676.99676 0 0 1 14.25 12z"></path><path fill="#6563ff" d="M16.25,12a.99676.99676,0,0,1-.707-.293l-1-1a.99962.99962,0,0,1,0-1.41406l1-1A.99989.99989,0,0,1,16.957,9.707l-.293.293.293.293A1,1,0,0,1,16.25,12Z"></path></svg></span>3
                                    </h1>
                                    <div className="m-4">
                                        <p className="fs-16">Sorry, an error has occured, Requested page not found!</p>
                                    </div>
                                    <div className="text-center">
                                        <Link className="btn btn-secondary d-inline-flex gap-1" href="/components/dashboard/dashboard"> <i className="ri-arrow-left-line my-auto "></i> Back to Home </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    );
};
Error403.layout = "ErrorPagesLayout";

export default Error403;
