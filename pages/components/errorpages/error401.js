import React from 'react';
import Link from 'next/link';
import Seo from '@/shared/layout-components/seo/seo';
import { Col, Row } from 'react-bootstrap';

const Error401 = () => {

    return (

        <div >
            <Seo title="error-401" />
            <Row className="authentication coming-soon mx-0 justify-content-center">
                <Col xxl={8} xl={8} lg={8} className="col-12">
                    <div className="authentication-cover text-fixed-white">
                        <div className="aunthentication-cover-content text-center py-5 px-sm-5 px-0">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <h1 className="display-1 text-fixed-white">4<span className="text-center custom-emoji"><svg xmlns="http://www.w3.org/2000/svg" height="140" width="140" data-name="Layer 1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a2a1ff"></circle><path fill="#6563ff" d="M14.99951,17.0918a.99473.99473,0,0,1-.64209-.23438,3.766,3.766,0,0,0-4.71484,0,.99955.99955,0,1,1-1.28516-1.53125,5.81162,5.81162,0,0,1,7.28516,0,.99974.99974,0,0,1-.64307,1.76563Z"></path><circle cx="15" cy="10" r="1" fill="#6563ff"></circle><circle cx="9" cy="10" r="1" fill="#6563ff"></circle></svg></span>1
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
Error401.layout = "ErrorPagesLayout";

export default Error401;
