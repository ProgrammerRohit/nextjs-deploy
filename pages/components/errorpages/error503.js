import React from 'react';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { Col, Row } from 'react-bootstrap';

const Error503 = () => {

    return (

        <div >
            <Seo title="error-503" />
            <Row className="authentication coming-soon mx-0 justify-content-center">
                <Col xxl={8} xl={8} lg={8} className="col-12">
                    <div className="authentication-cover text-fixed-white">
                        <div className="aunthentication-cover-content text-center py-5 px-sm-5 px-0">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <h1 className="display-1 text-fixed-white">5<span className="text-center custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a2a1ff"></circle><path fill="#6563ff" d="M12 17.0918a5.68094 5.68094 0 0 1-3.64258-1.3252 1.00029 1.00029 0 1 1 1.28516-1.5332 3.76085 3.76085 0 0 0 4.71484 0 1.00029 1.00029 0 0 1 1.28516 1.5332A5.68094 5.68094 0 0 1 12 17.0918zM16.91406 10.83594a.99676.99676 0 0 1-.707-.293 1.03323 1.03323 0 0 0-1.41406 0 .99989.99989 0 0 1-1.41406-1.41406 3.07249 3.07249 0 0 1 4.24218 0 1 1 0 0 1-.707 1.707z"></path><circle cx="9" cy="10" r="1" fill="#6563ff"></circle></svg></span>3
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
Error503.layout = "ErrorPagesLayout";

export default Error503;
