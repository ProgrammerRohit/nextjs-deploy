import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar9, avatar8, avatar7 } from '@/shared/data/prismdata/utilities-prism'
import { Avatarstacked, Numbersdata, Statusdata, sizesdata } from '@/shared/data/utilities/avatarsdata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import ShowCode from '@/shared/layout-components/showcode/showcode'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Avatars = () => {
	return (
		<Fragment>
			<Seo title="Avatars" />
			<Pageheader title="Avatars" heading="Utilities" active="Avatars" />
			<Row>
				<Col xxl={4} lg={6} md={12} sm={12}>
					<ShowCode title="Avatars" code={avatar1} customCardBodyClass="">
						<span className="avatar me-2 avatar-radius-0">
							<img src="../../../assets/images/faces/1.jpg" alt="img" />
						</span>
						<span className="avatar me-2">
							<img src="../../../assets/images/faces/2.jpg" alt="img" />
						</span>
						<span className="avatar me-2 avatar-rounded">
							<img src="../../../assets/images/faces/3.jpg" alt="img" />
						</span>
					</ShowCode>
				</Col>
				<Col xxl={4} lg={6} md={12} sm={12}>
					<ShowCode title="Avatar Sizes <p class='subtitle text-muted fs-12'> Avatars of different sizes</p>" code={avatar2}>
						{sizesdata.map((idx) => (
							<span className={`avatar avatar-${idx.sizes} me-2`} key={Math.random()}>
								<img src={idx.src1} alt="img" />
							</span>
						))}
					</ShowCode>
				</Col>
				<Col xxl={4} lg={12} md={12} sm={12}>
					<ShowCode title="Avatar With Icons <p class='subtitle text-muted fs-12'> Avatar contains icons to perform respective action.s</p>" code={avatar3}>
						<span className="avatar avatar-xs me-2 avatar-rounded">
							<img src="../../../assets/images/faces/2.jpg" alt="img" />
							<Link aria-label="anchor" href="#!" className="badge bg-success rounded-pill avatar-badge"><i className="fe fe-camera"></i></Link>
						</span>
						<span className="avatar avatar-sm me-2 avatar-rounded">
							<img src="../../../assets/images/faces/3.jpg" alt="img" />
							<Link aria-label="anchor" href="#!" className="badge rounded-pill bg-secondary avatar-badge"><i className="fe fe-edit"></i></Link>
						</span>
						<span className="avatar avatar-md me-2 avatar-rounded">
							<img src="../../../assets/images/faces/14.jpg" alt="img" />
							<Link aria-label="anchor" href="#!" className="badge rounded-pill bg-warning avatar-badge"><i className="fe fe-plus"></i></Link>
						</span>
						<span className="avatar avatar-lg me-2 avatar-rounded">
							<img src="../../../assets/images/faces/13.jpg" alt="img" />
							<Link aria-label="anchor" href="#!" className="badge rounded-pill bg-info avatar-badge"><i className="fe fe-edit"></i></Link>
						</span>
						<span className="avatar avatar-xl me-2 avatar-rounded">
							<img src="../../../assets/images/faces/15.jpg" alt="img" />
							<Link aria-label="anchor" href="#!" className="badge rounded-pill bg-success avatar-badge"><i className="fe fe-camera"></i></Link>
						</span>
						<span className="avatar avatar-xxl me-2 avatar-rounded">
							<img src="../../../assets/images/faces/9.jpg" alt="img" />
							<Link aria-label="anchor" href="#!" className="badge rounded-pill bg-danger avatar-badge"><i className="fe fe-plus"></i></Link>
						</span>
					</ShowCode>
				</Col>
			</Row>
			<div className="row">
				<Col xxl={4} lg={6} md={12} sm={12}>
					<ShowCode title="Avatar With Online Status Indicators <p class='subtitle text-muted fs-12'> avatars having online status indicator.</p>" code={avatar4}>

						{Statusdata.map((idx) => (
							<span className={`avatar avatar-${idx.sizes} me-2 online avatar-rounded`} key={Math.random()}>
								<img src={idx.src1} alt="img" />
							</span>
						))}
					</ShowCode>
				</Col>
				<Col xxl={4} lg={6} md={12} sm={12}>
					<ShowCode title="Avatar With Ofline Status Indicators <p class='subtitle text-muted fs-12'> avatars having a offline status indicator.</p>" code={avatar5}>

						{Statusdata.map((idx) => (
							<span className={`avatar avatar-${idx.sizes} me-2 offline avatar-rounded`} key={Math.random()}>
								<img src={idx.src1} alt="img" />
							</span>
						))}

					</ShowCode>
				</Col>
				<Col xxl={4} lg={12} md={12} sm={12}>
					<ShowCode title="Avatars With Number Badges <p class='subtitle text-muted fs-12'>Avatar numbers indicates the no. of unread notififactions/messages.</p>" code={avatar6}>

						{Numbersdata.map((idx) => (
							<span className={`avatar avatar-${idx.sizes} me-2 avatar-rounded`} key={Math.random()}>
								<img src={idx.src1} alt="img" />
								<span className={`badge rounded-pill bg-${idx.color} avatar-badge`}>{idx.badge}</span>
							</span>
						))}

					</ShowCode>
				</Col>
			</div>
			<div className="row">
				<Col xxl={4} xl={6} lg={6} md={12} sm={12}>
					<ShowCode title="Avatar With Initials <p class='subtitle text-muted fs-12'>Avatar contains intials when user profile doesn't exist.</p>" code={avatar7}>

						<span className="mb-1 avatar avatar-xs me-2 bg-primary">
							xs
						</span>
						<span className="mb-1 avatar avatar-sm me-2 bg-secondary">
							SM
						</span>
						<span className="mb-1 avatar avatar-md me-2 bg-warning">
							MD
						</span>
						<span className="mb-1 avatar avatar-lg me-2 bg-danger">
							LG
						</span>
						<span className="mb-1 avatar avatar-xl me-2 bg-success">
							XL
						</span>
						<span className="mb-1 avatar avatar-xxl me-2 bg-info">
							XXL
						</span>

					</ShowCode>
				</Col>
				<Col xl={4} lg={6} md={12} sm={12}>
					<ShowCode title="Stacked Avatars <p class='subtitle text-muted fs-12'> Group of avatars stacked together.</p>" code={avatar8}>
						<div className="avatar-list-stacked">
							{Avatarstacked.map((idx) => (
								<span className="avatar" key={Math.random()}>
									<img src={idx.src1} alt="img" />
								</span>
							))}
							<Link className="avatar bg-primary text-fixed-white" href="#!">
								+8
							</Link>
						</div>
					</ShowCode>
				</Col>
				<Col xl={4} lg={6} md={12} sm={12}>
					<ShowCode title="Rounded Stacked Avatars <p class='subtitle text-muted fs-12'> Group of avatars stacked together.</p>" code={avatar9}>
						<div className="avatar-list-stacked">
							{Avatarstacked.map((idx) => (
								<span className="avatar avatar-rounded" key={Math.random()}>
									<img src={idx.src1} alt="img" />
								</span>
							))}
							<Link className="avatar bg-primary avatar-rounded text-fixed-white" href="#!">
								+8
							</Link>
						</div>
					</ShowCode>
				</Col>
			</div>
		</Fragment>
	)
}

Avatars.layout = "Contentlayout"

export default Avatars;