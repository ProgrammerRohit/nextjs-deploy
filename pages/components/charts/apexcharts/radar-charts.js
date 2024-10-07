import { RadarChartPoygon, RadarChat, RadarChatMulti } from '@/shared/data/charts/apexcharts/piechartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Radarcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Radar Chart"} />
            <Pageheader title="Apex Radar Chart" heading="Apex Charts" active="Apex Radar Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Radar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-basic"><RadarChat />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Radar Chart-Multiple Series</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-multiple"><RadarChatMulti />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Radar Chart Polygon Fill</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-polygon"><RadarChartPoygon />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Radarcharts.layout = "Contentlayout"

export default Radarcharts;