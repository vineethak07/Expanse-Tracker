
import React, { useState, useEffect } from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    

    const submitHandler = async (values) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/users/login', values)
            setLoading(false)
            message.success('Login Success')
            localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }))
            navigate('/home')
        } catch (error) {
            setLoading(false)
            message.error('Something went wrong')
        }
    }

    // Prevent login for already logged-in users
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/')
        }
    }, [navigate])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#"><span className="text-warning">FixFinance</span></a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
            <div className="login-page">
                <div className="cover">
                    <Form layout="vertical" onFinish={submitHandler} >
                        <h2 className="title">Login Form</h2>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please enter a valid email address',
                                },
                            ]}
                        >
                            <Input placeholder="Enter Email" />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input type="password" placeholder="Enter Password" />
                        </Form.Item>
                        <div className="d-flex justify-content-center text-decoration-none">
                            <Link to="/register">
                                Not a user? <button className="btn btn-danger btn-sm mx-2">Register</button>
                            </Link>
                            <button className="btn btn-danger btn-sm mx-2">Login</button>
                        </div>
                        <p className="text">Or Login Using</p>
                        <div className="alt-login">
                            <div className="facebook"><a href="https://www.facebook.com" >Facebook</a></div>
                            <div className="google"><a href="https://www.google.com">Google</a></div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login
