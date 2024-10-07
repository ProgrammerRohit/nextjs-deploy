import { DayCounter } from '@/shared/data/authentication/undermaintenancedata'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Undermaintanance = () => {

    return (
        <Fragment>
            <Seo title="Under-Maintanance" />
            <Row className='authentication coming-soon mx-0 justify-content-center'>
                <Col xxl={8} xl={8} lg={8} className="col-12">
                    <div className="authentication-cover">
                        <div className="aunthentication-cover-content text-center">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="mb-2">
                                        <Link href="/components/dashboard/dashboard">
                                            <Image src="../../../assets/images/brand-logos/toggle-white.png" alt="" className="authentication-brand" />
                                        </Link>
                                    </div>
                                    <p className="fw-semibold fs-12 mb-1 op-4 text-fixed-white">STAY TUNED</p>
                                    <h1 className="fw-bold mb-3 text-fixed-white">Under Maintenance</h1>
                                    <DayCounter />
                                    <p className="mb-4 text-fixed-white">Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience!</p>
                                    <div className="">
                                        <div className="btn-list">
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-facebook-line fw-bold"></i>
                                            </Button>
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-twitter-x-line fw-bold"></i>
                                            </Button>
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-instagram-line fw-bold"></i>
                                            </Button>
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-github-line fw-bold"></i>
                                            </Button>
                                            <Button variant='' className="btn btn-icon btn-wave">
                                                <i className="ri-youtube-line fw-bold"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Fragment>
    )
}

Undermaintanance.layout = "ErrorPagesLayout"

export default Undermaintanance;