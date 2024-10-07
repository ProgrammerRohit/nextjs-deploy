import { DateTimeScatter, ImageFillScatter, ScatterChat } from '@/shared/data/charts/apexcharts/scatterchartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Scattercharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex scatter Chart"} />
            <Pageheader title="Apex Scatter Chart" heading="Apex Charts" active="Apex Scatter Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-basic"><ScatterChat />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Datetime Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-datetime"><DateTimeScatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Image Fill Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-image"><ImageFillScatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Scattercharts.layout = "Contentlayout"

export default Scattercharts;