import { Button, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'; // Ensure you have router if needed

export default function GeneralCard(props) {
    const router = useRouter();

    const cardVariants = {
        hidden: { y: 20 },
        visible: { y: 0 },
        hover: { scale: 1.05, cursor: "pointer" },
    };

    return (
        <div>
            <Row className="d-flex justify-content-center mb-0 align-items-stretch">
                <Col lg={5} md={5} className="d-flex">
                    <motion.div
                        className="motion-div"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                        style={{ transformOrigin: 'top center', transform: 'translateZ(0)' }}
                    >
                        <Card className="p-4 rounded shadow mt-3 w-100" style={{ maxHeight: "205px" }}>
                            <div className="card-content">
                                <div className="info-section">
                                    <p style={{ color: '#333' }}><strong>Language:</strong> English</p>
                                    <p style={{ color: '#333' }}><strong>Allergies:</strong> fever</p>
                                    <p style={{ color: '#333' }}><strong>Important Notes:</strong> Important Notes</p>
                                </div>
                                <div className="child-info" style={{ marginLeft: "5rem" }}>
                                    <img alt="Child Picture" src="https://t4.ftcdn.net/jpg/07/11/42/37/360_F_711423781_XdjsUQPB2HwBd54Ot7XsrTanuXYUD5r9.jpg" style={{ objectFit: "cover" }} />
                                    <p style={{ color: '#333' }}>Child 1</p>
                                </div>
                            </div>
                            {props?.btnInfo !== false && (
                                <Button
                                    variant="primary"
                                    className="mt-1"
                                    onClick={() => router.push("/components/documentation/generalInfo")}
                                >
                                    General Information
                                </Button>
                            )}
                        </Card>
                    </motion.div>
                </Col>
                <Col lg={5} md={5} className="d-flex">
                    <motion.div
                        className="motion-div"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                        style={{ transformOrigin: 'top center', transform: 'translateZ(0)' }}
                    >
                        <Card className="p-4 rounded shadow mt-3 w-100" style={{ maxHeight: "205px" }}>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p style={{ color: '#333' }}><strong>Parent/CLG:</strong> rahil1</p>
                                    <p style={{ color: '#333' }}><strong>Name:</strong> rahil1</p>
                                    <p style={{ color: '#333' }}><strong>Contact No.:</strong> 9809090</p>
                                </div>
                                <div style={{ marginLeft: "5rem" }}>
                                    <p style={{ color: '#333' }}><strong>Comment:</strong> call nanny</p>
                                    <p style={{ color: '#333' }}><strong>Current Location:</strong> New Delhi</p>
                                    <p style={{ color: '#333' }}><strong>Caretaker:</strong> login user</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
        </div>
    );
}
