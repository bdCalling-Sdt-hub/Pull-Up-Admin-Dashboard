import { Col, ConfigProvider, Form, Input, Row } from 'antd';
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg.png'
import { inputThemes } from '../../themes';
import { useSignInMutation } from '../../Redux/api/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/features/auth/authSlice';
import Swal from 'sweetalert2';



const Signin = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const [signInUser] = useSignInMutation();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        // navigate("/")
        try {
            const response = await signInUser(values).unwrap();
            console.log("response", response)

            if (response) {
                const userInfo = {
                    ...response.data.user,
                };
                delete userInfo.password;

                dispatch(
                    setUser({ token: response?.data?.accessToken, user: userInfo })
                );
            }

            Swal.fire(response?.message, "", "success");

            navigate(
                location?.state?.from?.pathname || "/",
                {
                    replace: true,
                }
            );

        } catch (err) {
            console.log(err);
            Swal.fire(err?.data?.message, "", "error");
        }
    };

    const handleForget = () => {
        navigate("/email")
    }


    return (
        <ConfigProvider theme={inputThemes}>
            <div>

                <Row
                    justify="center"
                    align='middle'

                    style={{ minHeight: "100vh", backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                    <Col lg={6}
                        style={{ backgroundColor: "white", padding: "20px", borderRadius: "20px" }}>
                        <Col align='middle'>
                            {/* <img src={logo} alt="" /> */}
                            <p style={{ fontSize: "30px", fontWeight: "bold", color: "#D0A65A" }}>Welcome</p>
                            <p style={{ fontSize: "20px", fontWeight: "normal", color: "#1E1E1E" }}>Please sign in for better experience</p>
                        </Col>

                        <Col style={{ marginTop: "40px" }}>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[
                                        // {
                                        //     required: true,
                                        //     message: 'Please input your Username!',
                                        // },
                                    ]}
                                >
                                    <Input style={{ padding: "10px 10px" }} prefix={<MdEmail className="site-form-item-icon" />} placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        // {
                                        //     required: true,
                                        //     message: 'Please input your Password!',
                                        // },
                                    ]}
                                >
                                    <Input.Password
                                        style={{ padding: "10px 10px" }}
                                        prefix={<IoMdLock className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <Form.Item>


                                    <div
                                        className="login-form-forgot"
                                        style={{ color: "red", cursor: "pointer", fontStyle: "bold" }}
                                        onClick={handleForget}
                                    >
                                        Forgot password
                                    </div>

                                </Form.Item>

                                <Form.Item>
                                    <button style={{ width: "100%", backgroundColor: "#D0A65A", color: "white", padding: "10px", fontSize: "20px", borderRadius: "10px" }} type="submit" className="login-form-button">
                                        Sign in
                                    </button>
                                </Form.Item>
                            </Form>
                        </Col>

                    </Col>


                </Row>
            </div >
        </ConfigProvider>
    );
};

export default Signin;