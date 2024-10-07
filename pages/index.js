
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Form, Button, Tab, Card, Nav, Alert, Row, Col } from 'react-bootstrap';
import { SetStateAction, useState } from 'react';
import { basePath } from '@/next.config';
import { auth } from '@/shared/firebase/firebaseapi';
import { fetchData } from '@/redux/thunk/dataThunk';
import { baseUrl } from '@/baseurl/baseUrl';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    // const [passwordshow1, setpasswordshow1] = useState(false);
    // const [err, setError] = useState("");
    // const [data, setData] = useState({
    //     "email": "adminnextjs@gmail.com",
    //     "password": "1234567890",
    // });
    // const { email, password } = data;
    // const changeHandler = (e) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    //     setError("");
    // };
    // const navigate = useRouter();
    // const routeChange = () => {
    //     const path = "/components/dashboard/dashboard/";
    //     navigate.push(path);
    // };
    const [passwordshow1, setpasswordshow1] = useState(false);


    const [err, setError] = useState("");
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = data;

    const changeHandler = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setError("Invalid email format");
            } else {
                setError("");
            }
        }

        setData({ ...data, [name]: value });
    };
    console.log(data)

    const navigate = useRouter();
    const dispatch = useDispatch()
    const apiErr = useSelector((state) => state.apiData.error)

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //       dispatch(fetchData({
    //         method: 'POST',
    //         endpoint: `${baseUrl.allBase}login`,
    //         data: formData,
    //       }))
    //         .then((response) => {
    //             if (response?.payload?.status === true) {
    //             localStorage.setItem("token", response?.payload?.token)
    //             localStorage.setItem("role_id", response?.payload?.data?.role_id)
    //             localStorage.setItem('logInSuccess', response?.payload?.message)
    //             // setTimeout(() => router.push("/"), 500)
    //           }
    //         //   else if (apiErr) {
    //         //     toast.error(apiErr?.message)
    //         //   }
    //         })
    //   };


    const Login1 = (e) => {
        e.preventDefault();
        dispatch(fetchData({
            method: 'POST',
            endpoint: `${baseUrl.allBase}login`,
            data: data,
        }))
            .then((response) => {
                if (response?.payload?.status === true) {
                    routeChange();
                    localStorage.setItem("token", response?.payload?.token)
                    localStorage.setItem("role_id", response?.payload?.data?.role_id)
                    localStorage.setItem('logInSuccess', response?.payload?.message)
                    // setTimeout(() => router.push("/"), 500)
                }
                else if (apiErr) {
                    toast.error(apiErr?.message)
                }
            })

    };

    const routeChange = () => {
        const path = "/components/dashboard/dashboard/";
        navigate.push(path);
    };
    const Login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                routeChange();
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            });
    };
    // const Login1 = () => {
    //     if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
    //         routeChange();
    //     }
    //     else {
    //         setError("The Auction details did not Match");
    //         setData({
    //             "email": "adminnextjs@gmail.com",
    //             "password": "1234567890",
    //         });
    //     }
    // };
    return (
        <div className='autentication-bg'>
            <div className="container-lg">
                <Row className="justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <div className="my-4 d-flex justify-content-center">
                            <Link href="/components/dashboard/dashboard">
                                <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/desktop-white.png`} alt="logo" />
                            </Link>
                        </div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="nextjs">
                            <Card>
                                <Nav variant="pills" className="justify-content-center authentication-tabs pt-5">
                                    <Nav.Item>
                                        <Nav.Link eventKey="nextjs">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/nextjs.png`}
                                                alt="logo" className="desktop-logo" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="firebase">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/firebase.png`}
                                                alt="logo" />
                                        </Nav.Link>
                                    </Nav.Item>

                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="nextjs" className='border-0'>
                                        <div className="card-body p-5 pt-1">
                                            <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                            <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Jhon!</p>
                                            <div className="row gy-3">
                                                {err && <Alert variant="danger">{err}</Alert>}
                                                <Col xl={12} className="">
                                                    <Form.Label htmlFor="signin-username" className="text-default">Email</Form.Label>
                                                    <Form.Control type="text" className="form-control-lg" id="signin-username"
                                                        placeholder="Enter your email"
                                                        name="email"
                                                        value={email}
                                                        onChange={changeHandler}
                                                        required />
                                                </Col>
                                                <Col xl={12} className="mb-2">
                                                    <Form.Label htmlFor="signin-password" className="text-default d-block">Password<Link href="/components/authentication/reset-password" className="float-end text-danger">Forget password?</Link></Form.Label>
                                                    <div className="input-group">
                                                        <Form.Control className="form-control-lg" id="signin-password"
                                                            placeholder="password"
                                                            name="password"
                                                            type={(passwordshow1) ? "text" : "password"}
                                                            value={password}
                                                            onChange={changeHandler}
                                                            required />
                                                        <Button variant='' onClick={() => setpasswordshow1(!passwordshow1)} className="btn btn-light" type="button" id="button-addon2">
                                                            <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i>
                                                        </Button>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="form-check">
                                                            <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                            <Form.Label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                                Remember password?
                                                            </Form.Label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={12} className="d-grid mt-2">
                                                    <Button className="btn btn-lg btn-primary" onClick={Login1}>Sign In</Button>
                                                </Col>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-muted mt-3">Don't have an account? <Link href="/components/authentication/signup" className="text-primary">Sign Up</Link></p>
                                            </div>
                                            <div className="text-center my-3 authentication-barrier">
                                                <span>OR</span>
                                            </div>
                                            <div className="btn-list text-center">
                                                <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                    <i className="ri-facebook-fill"></i>
                                                </Button>
                                                <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                    <i className="ri-google-fill"></i>
                                                </Button>
                                                <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                    <i className="ri-twitter-x-line"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="firebase" className='border-0'>
                                        <div className="card-body p-5 pt-1">
                                            <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                            <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Jhon !</p>
                                            <div className="row gy-3">
                                                {err && <Alert variant="danger">{err}</Alert>}
                                                <Col xl={12} className="">
                                                    <Form.Label htmlFor="signin-username" className="text-default">User Name</Form.Label>
                                                    <Form.Control
                                                        type="text" className="form-control-lg" id="signin-username" placeholder="Enter your email"
                                                        name="email"
                                                        value={email}
                                                        onChange={changeHandler}
                                                        required />
                                                </Col>
                                                <Col xl={12} className="mb-2">
                                                    <Form.Label htmlFor="signin-password" className="text-default d-block">Password<Link href="/components/authentication/reset-password" className="float-end text-danger">Forget password ?</Link></Form.Label>
                                                    <div className="input-group">
                                                        <Form.Control className="form-control-lg" id="signin-password"
                                                            placeholder="Enter your password"
                                                            name="password"
                                                            type={(passwordshow1) ? "text" : "password"}
                                                            value={password}
                                                            onChange={changeHandler}
                                                            required />
                                                        <Button variant='' className="btn btn-light bg-transparent" type="button"
                                                            onClick={() => setpasswordshow1(!passwordshow1)} id="button-addon2">
                                                            <i className={`${passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i></Button>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="form-check">
                                                            <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                            <Form.Label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                                Remember password ?
                                                            </Form.Label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={12} className="d-grid mt-2">
                                                    <Link href="/components/dashboard/dashboard" className="btn btn-lg btn-primary" onClick={Login}>Sign In</Link>
                                                </Col>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-muted mt-3">Dont have an account? <Link href="/components/authentication/signup" className="text-primary">Sign Up</Link></p>
                                            </div>
                                            <div className="text-center my-3 authentication-barrier">
                                                <span>OR</span>
                                            </div>
                                            <div className="btn-list text-center">
                                                <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                    <i className="ri-facebook-fill"></i>
                                                </Button>
                                                <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                    <i className="ri-google-fill"></i>
                                                </Button>
                                                <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-primary-transparent">
                                                    <i className="ri-twitter-x-line"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Card>
                        </Tab.Container>
                    </Col>
                    {/* <ToastContainer /> */}
                </Row>
            </div>
        </div>

    );
}
export default Home;
