import { Basicpiechart, DonutChatrsWithPatterns, DonutUpdate, GradientDonut, ImageFilledChart, MonoChromePie, SimpleDonut } from '@/shared/data/charts/apexcharts/piechartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap'

const Piecharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Pie Chart"} />
            <Pageheader title="Apex Pie Chart" heading="Apex Charts" active="Apex Pie Chart" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="pie-basic">
                                <Basicpiechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Simple Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="donut-simple"><SimpleDonut />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Updating Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="donut-update"><DonutUpdate />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Monochrome Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="pie-monochrome"><MonoChromePie />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Gradient Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className='fs-13'>
                                Gradient Donut with custom Start-angle
                            </p>
                            <div id="donut-gradient"><GradientDonut />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Donut Chart With Patterns</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className='fs-13'>
                                Favourite Movie Type
                            </p>
                            <div id="donut-pattern"><DonutChatrsWithPatterns />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Image Filled Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="pie-image"><ImageFilledChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Piecharts.layout = "Contentlayout"

export default Piecharts;