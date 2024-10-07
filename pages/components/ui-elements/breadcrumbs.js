import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import ShowCode from '@/shared/layout-components/showcode/showcode';
import { breadcrumb1, breadcrumb2, breadcrumb3, breadcrumb4, breadcrumb5, breadcrumb6, breadcrumb7 } from '@/shared/data/prismdata/uielements-prism';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';

const Breadcrumbs = () => {

	return (
		<Fragment >
			<Seo title="Breadcrumbs" />
			<Pageheader title="Breadcrumbs" heading="Ui Elements" active="Breadcrumbs" />
			<Row>
				<Col xl={6}>
					<ShowCode title="Example" customCardClass="custom-card" code={breadcrumb1}>
						<Breadcrumb>
							<Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
						</Breadcrumb>

						<nav aria-label="breadcrumb">
							<Breadcrumb>
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>

						<nav aria-label="breadcrumb" className='custom-breadcrumb'>
							<Breadcrumb className="mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Example1" customCardClass="custom-card" code={breadcrumb2}>
						<nav aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb-example1">
								<Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
							</Breadcrumb>
						</nav>

						<nav aria-label="breadcrumb">
							<Breadcrumb className="breadcrumb-example1">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>

						<nav aria-label="breadcrumb" className='custom-breadcrumb '>
							<Breadcrumb className="breadcrumb-example1 mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
								<Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Dividers" customCardClass="custom-card" code={breadcrumb3}>
						<nav
							aria-label="breadcrumb" className='divider-breadcrumb custom-breadcrumb'>
							<Breadcrumb className="mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active className="divider-breadcrumb-data active" aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Embedded SVG icon" customCardClass="custom-card" code={breadcrumb4}>
						<nav
							aria-label="breadcrumb" className='svg-breadcrumb custom-breadcrumb'>
							<Breadcrumb className=" mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active className="active embedded-breadcrumb-data" aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</ShowCode>

				</Col>
				<Col xl={6}>
					<ShowCode title="Breadcrumb Style-1" customCardClass="custom-card" code={breadcrumb5}>
						<nav aria-label="breadcrumb" className='custom-breadcrumb'>
							<Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</ShowCode>

				</Col>
				<Col xl={6}>
					<ShowCode title="Breadcrumb Style-2" customCardClass="custom-card" code={breadcrumb6}>
						<nav aria-label="breadcrumb" className='custom-breadcrumb'>
							<Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
								<Breadcrumb.Item href="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
								<Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={12}>
					<ShowCode title="Background colors" customCardClass="custom-card" code={breadcrumb7}>
						<nav aria-label="breadcrumb" className="bg-bredcrumb custom-breadcrumb">
							<Breadcrumb className="breadcrumb mb-0">
								<Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
								<Breadcrumb.Item active className="active background-breadcrumb-data" aria-current="page">Library</Breadcrumb.Item>
							</Breadcrumb>
						</nav>
					</ShowCode>

				</Col>
			</Row>
		</Fragment>
	);
};
Breadcrumbs.layout = "Contentlayout";
export default Breadcrumbs;
