import React from 'react';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { Col, Row } from 'react-bootstrap';

const Error500 = () => {

    return (

        <div >
            <Seo title="error-500" />
            <Row className="authentication coming-soon mx-0 justify-content-center">
                <Col xxl={8} xl={8} lg={8} className="col-12">
                    <div className="authentication-cover text-fixed-white">
                        <div className="aunthentication-cover-content text-center py-5 px-sm-5 px-0">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <h1 className="display-1 text-fixed-white">5<span className="text-center custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a2a1ff"></circle><circle cx="15" cy="10" r="1" fill="#6563ff"></circle><circle cx="9" cy="10" r="1" fill="#6563ff"></circle><path fill="#6563ff" d="M11.499,17.05957a1,1,0,0,1-.87109-1.48926A5.02491,5.02491,0,0,1,15,13a1,1,0,0,1,0,2,3.02357,3.02357,0,0,0-2.62793,1.54883A.99968.99968,0,0,1,11.499,17.05957Z"></path></svg></span>0
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
Error500.layout = "ErrorPagesLayout";

export default Error500;
