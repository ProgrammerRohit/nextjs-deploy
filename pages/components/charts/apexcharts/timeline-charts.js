import { AdvanceTimeLine, CustomColor, GroupedRows, MultiSeriesTimeLine, TimeLine } from '@/shared/data/charts/apexcharts/timelinechartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Timelinecharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Timeline Chart"} />
            <Pageheader title="Apex Timeline Chart" heading="Apex Charts" active="Apex Timeline Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Timeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-basic"><TimeLine />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Colored Timeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-colors"><CustomColor />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multi Series Timeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-multi"><MultiSeriesTimeLine />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Advanced Timeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-advanced"><AdvanceTimeLine />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Timeline-Grouped Rows</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-grouped"><GroupedRows />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Timelinecharts.layout = "Contentlayout"

export default Timelinecharts;