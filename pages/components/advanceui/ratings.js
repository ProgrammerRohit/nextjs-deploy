
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import StarsIcon from '@mui/icons-material/Stars';
import Rating from "@mui/material/Rating";
import Pageheader from '@/shared/layout-components/pageheader/pageheader';

const Ratings = () => {


	const [ratingValue, setRatingValue] = useState(null);
	const handleRatingChange = (_event, newValue) => {
		setRatingValue(newValue); // Update the rating value when the user clicks
	};

	const handleResetRating = () => {
		setRatingValue(null); // Clear the rating when the button is clicked
	};

    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    const labels = ['Poor', 'Fair', 'Good', 'Excellent', 'Perfect', "Excellent"];
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
        <Fragment>
            <Seo title={"Ratings"} />
			<Pageheader title="Ratings" heading="Advanced Ui" active="Ratings" />
            <Row>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Rater
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Show Some <span className="text-danger">&#10084;</span> with rating :</p>
                                <Rating max={5} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                5 star rater with steps
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Dont forget to rate the product :</p>
                                <Rating name="half-rating" precision={0.5} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Custom messages
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Your rating is much appreciated&#128079; :</p>
                                    <Rating name="no-value"  precision={1} value={4}/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Unlimited number of stars readOnly
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                                <Rating name="read-only" value={5} max={10} readOnly />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                5 Star rater with custom isBusyText and simulated backend
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                                <Rating name="no-value" precision={1} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                On hover event
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Please give your valuable rating :</p>
                                <div className="d-flex flex-wrap align-items-center">
                                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                        <Rating
                                            name="hover-feedback"
                                            value={value}
                                            precision={0.5}
                                            getLabelText={getLabelText}
                                            onChange={(_event, newValue) => {
                                                setValue(newValue);
                                            }}
                                            onChangeActive={(_event, newHover) => {
                                                setHover(newHover);
                                            }}
                                            emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {value !== null && (
                                            <Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>
                                                <span className="live-rating badge bg-success-transparent ms-3">
                                                    {labels[hover !== -1 ? hover : value]}
                                                </span>
                                            </Box>
                                        )}
                                    </Box>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Clear/reset rater
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
                                <div className="d-flex flex-wrap align-items-center justify-content-center">
                                <Rating
										name="clickable-rating"
										value={ratingValue}
										onChange={handleRatingChange} // Handle rating change when the user clicks
									/>
									<Button
										variant='danger-light'
										className="btn btn-icon btn-sm ms-3"
										id="rater-reset-button"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-title="Reset"
										onClick={handleResetRating}
									>
										<i className="ri-restart-line"></i>
									</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Ratings.layout = "Contentlayout"

export default Ratings;