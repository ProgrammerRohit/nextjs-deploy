import { placeholder1, placeholder2, placeholder3, placeholder4 } from '@/shared/data/prismdata/advanceui-prism'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import ShowCode from '@/shared/layout-components/showcode/showcode'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const placeholders = () => {
	return (
		<Fragment>
			<Seo title={"Placeholders"} />
			<Pageheader title="Placeholder" heading="Advanced Ui" active="Placeholder" />
			<Row>
				<Col xl={6}>
					<Row>
						<Col xl={6}>
							<Card className="custom-card">
								<Image className="card-Image-top" src="../../../assets/images/media/media-60.jpg" alt="" />
								<Card.Body>
									<Card.Title className='mb-2'>Card title</Card.Title>
									<p className="card-text">Some quick example text to build on the card title and make
										up
										the bulk of the card's content.</p>
									<Link href="#!" className="btn btn-primary">Go somewhere</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={6}>
							<div className="card  custom-card" aria-hidden="true">
								<Image className="card-Image-top" src="../../../assets/images/media/media-61.jpg" alt="" />
								<Card.Body>
									<div className="h5 card-title placeholder-glow">
										<span className="placeholder col-6"></span>
									</div>
									<p className="card-text placeholder-glow">
										<span className="placeholder col-7 me-1"></span>
										<span className="placeholder col-4"></span>
										<span className="placeholder col-4 me-2"></span>
										<span className="placeholder col-6"></span>
									</p>
									<Link href="#!" tabIndex={-1} className="btn btn-primary disabled placeholder col-6"></Link>
								</Card.Body>
							</div>
						</Col>
						<Col xl={12}>
							<ShowCode title="Animation" customCardClass="custom-card" customCardBodyClass="" code={placeholder1}>
								<p className="placeholder-glow mb-0">
									<span className="placeholder col-12"></span>
								</p>
								<p className="placeholder-wave mb-0">
									<span className="placeholder col-12"></span>
								</p>
							</ShowCode>
						</Col>
					</Row>
				</Col>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Row>
								<Col xl={12}>
									<ShowCode title="Sizing" customCardClass="custom-card" customCardBodyClass="" code={placeholder2}>
										<span className="placeholder col-12 placeholder-xl mb-1"></span>
										<span className="placeholder col-12 placeholder-lg"></span>
										<span className="placeholder col-12"></span>
										<span className="placeholder col-12 placeholder-sm"></span>
										<span className="placeholder col-12 placeholder-xs"></span>
									</ShowCode>
								</Col>
							</Row>
						</Col>
						<Col xl={12}>
							<ShowCode title="Colors" customCardClass="custom-card" customCardBodyClass="" code={placeholder3}>
								<span className="placeholder col-12"></span>
								<span className="placeholder col-12 bg-primary"></span>
								<span className="placeholder col-12 bg-secondary"></span>
								<span className="placeholder col-12 bg-success"></span>
								<span className="placeholder col-12 bg-danger"></span>
								<span className="placeholder col-12 bg-warning"></span>
								<span className="placeholder col-12 bg-info"></span>
								<span className="placeholder col-12 bg-light"></span>
								<span className="placeholder col-12 bg-dark"></span>
							</ShowCode>

						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<ShowCode title="Width" customCardClass="custom-card" customCardBodyClass="" code={placeholder4}>
						<span className="placeholder bg-primary col-6"></span>
						<span className="placeholder bg-primary w-75"></span>
						<span className="placeholder bg-primary w-35" style={{ width: "35%" }}></span>
					</ShowCode>
				</Col>
			</Row>
		</Fragment>
	)
}
placeholders.layout = "Contentlayout"

export default placeholders;