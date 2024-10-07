import { MapAnnotation, Shapeworldmap, USState, WorldMap } from '@/shared/data/maps/vectordata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment, useState } from 'react';
import { Card, Col, Row } from "react-bootstrap";

const Vectormaps = () => {

	const [content, setContent] = useState("");

	return (
		<Fragment>
			<Seo title={"Vector-Maps"} />
			<Pageheader title="Vector Maps" heading="Maps" active="Vector Maps" />
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Basic Vector Map</Card.Title>
						</Card.Header>
						<Card.Body  >
							<div id="vector-map">
								<WorldMap setTooltipContent={setContent} />
								{content}
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Map With Markers</Card.Title>
						</Card.Header>
						<Card.Body  >
							<div id="marker-map">
								<Shapeworldmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Map With Image Markers</Card.Title>
						</Card.Header>
						<Card.Body  >
							<div id="marker-image-map">
								<MapAnnotation />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Map With Lines</Card.Title>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<USState />
							</div>
						</Card.Body>
					</Card>
				</Col>

			</Row>
		</Fragment>
	)
}

Vectormaps.layout = "Contentlayout"

export default Vectormaps