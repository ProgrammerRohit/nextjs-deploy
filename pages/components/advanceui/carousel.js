import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8 } from '@/shared/data/prismdata/advanceui-prism'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import ShowCode from '@/shared/layout-components/showcode/showcode'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'

const carousel = () => {
	
	return (
		<Fragment>
			<Seo title={"Carousel"} />
			<Pageheader title="Carousel" heading="Advanced Ui" active="Carousel" />
			<Row>
				<Col xl={4} md={6}>
					<ShowCode title="Slides Only" customCardClass="" customCardBodyClass="h-100" customCardHeaderClass="" code={carousel1}>
						<Carousel controls={false} indicators={false}>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-26.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-27.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-33.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
						</Carousel>
					</ShowCode>

				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="With controls" customCardClass="custom-card" customCardHeaderClass="" code={carousel2}>
						<Carousel controls={false} id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" indicators={false}>
							<Carousel.Item >
								<Image src="../../../assets/images/media/media-28.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-31.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-29.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
						</Carousel>
					</ShowCode>

				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="With indicators" customCardClass="custom-card" customCardHeaderClass="" code={carousel3}>
						<Carousel controls={false} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
							<Carousel.Item >
								<Image src="../../../assets/images/media/media-25.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-29.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-30.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="With captions" customCardClass="custom-card" customCardHeaderClass="" code={carousel4}>
						<Carousel controls={false} id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
							<Carousel.Item >
								<Image src="../../../assets/images/media/media-59.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-60.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Second slide label</h5>
									<p>Some representative placeholder content for the second slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-61.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Third slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="Crossfade" customCardClass="custom-card" customCardHeaderClass="" code={carousel5}>
						<Carousel controls={false} fade id="carouselExampleFade" className="carousel slide carousel-fade" indicators={false}>
							<Carousel.Item >
								<Image src="../../../assets/images/media/media-43.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-44.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-45.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col xl={4} md={6}>
					<ShowCode title="Individual .carousel-item interval" customCardClass="custom-card" customCardHeaderClass="" code={carousel6}>
						<Carousel controls={false} id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" indicators={false}>
							<Carousel.Item interval={1000}  >
								<Image src="../../../assets/images/media/media-40.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<Image src="../../../assets/images/media/media-41.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item >
								<Image src="../../../assets/images/media/media-42.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col lg={6}>
					<ShowCode title="Disable touch swiping" customCardClass="custom-card" customCardHeaderClass="" code={carousel7}>
						<Carousel controls={false} touch={false} id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" indicators={false}
							data-bs-interval="false">
							<Carousel.Item className="carousel-item active">
								<Image src="../../../assets/images/media/media-13.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-14.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-18.jpg" className="d-block w-100" alt="" data-bs-holder-rendered="true" />
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
				<Col lg={6}>
					<ShowCode title="Dark variant" customCardClass="custom-card" customCardHeaderClass="" code={carousel8}>
						<Carousel controls={false} id="carouselExampleDark" className="carousel slide">
							<Carousel.Item  data-bs-interval="10000">
								<Image src="../../../assets/images/media/media-63.jpg" className="d-block w-100"
									alt="" data-bs-holder-rendered="true" />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>First slide label</h5>
									<p className="op-7">Some representative placeholder content for the first slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item data-bs-interval="2000">
								<Image src="../../../assets/images/media/media-64.jpg" className="d-block w-100"
									alt="" data-bs-holder-rendered="true" />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Second slide label</h5>
									<p className="op-7">Some representative placeholder content for the second slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<Image src="../../../assets/images/media/media-62.jpg" className="d-block w-100"
									alt="" data-bs-holder-rendered="true" />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Third slide label</h5>
									<p className="op-7">Some representative placeholder content for the third slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</ShowCode>
				</Col>
			</Row>
		</Fragment>
	)
}

carousel.layout = "Contentlayout"

export default carousel;