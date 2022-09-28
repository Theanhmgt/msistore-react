import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";

import FormInput from "./Input";
import Pageing from "~/components/Pageing";
import Button from "~/components/Button";
import style from './Register.module.scss'
import { useState, useRef } from "react";
const cx = classNames.bind(style)
function Login() {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Your email",
            lable: "Email",
            errormessage: "It should be a valid email address",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "text",
            placeholder: "Your password",
            lable: "Password",
            errormessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 3,
            name: "confirmPassword",
            type: "text",
            placeholder: "Confirm password",
            lable: "Confirm password",
            errormessage: "Passwords don't match!",
            pattern: values.password,
            required: true,
        }
    ]

    const onChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSumit = e => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }
    return (
        <Container>
            <Pageing pages={["Login"]} />
            <h1 className={cx("heading")}>Login</h1>
            <Row className="justify-content-around">
                <Col md={5} sm={12} className={cx("box")}>
                    <h1 className={cx("head")}>Registered Customers</h1>
                    <p className={cx("desc")}>If you have an account, sign in with your email address.</p>
                    <form onSubmit={handleSumit}>
                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <div>
                            <Button primary>Sign In</Button>
                            <p className={cx("left-foot")}>Forgot Your Password?</p>
                        </div>
                    </form>
                </Col>
                <Col md={5} sm={12} className={cx("box")}>
                    <h1 className={cx("head")}>New Customer?</h1>
                    <p className={cx("desc")}>If you have an account, sign in with your email address.</p>
                    <ul className={cx("desc-list")}>
                        <li>Check out faster </li>
                        <li>Keep more than one address</li>
                        <li>Track orders and more</li>
                    </ul>
                    <Button to={"/register"} primary>Create An Account</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;