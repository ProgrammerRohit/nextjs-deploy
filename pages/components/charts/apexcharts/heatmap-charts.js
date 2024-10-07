import { Colorrange, HeatMapChart, MultiSeriesHeatMap, Shadesheatmap } from '@/shared/data/charts/apexcharts/heatmapdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Heatmapcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Heatmap Chart"} />
            <Pageheader title="Apex Heatmap Chart" heading="Apex Charts" active="Apex Heatmap Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-basic">
                                <HeatMapChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multi Series Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-multiseries"><MultiSeriesHeatMap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Color Range Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-colorrange"><Colorrange /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Heatmap Range Without Shades</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-range"><Shadesheatmap /></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Heatmapcharts.layout = "Contentlayout"

export default Heatmapcharts;