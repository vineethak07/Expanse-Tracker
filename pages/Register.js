import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs'; // Import bcrypt library
import Spinner from '../components/Spinner';

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const submitHandler = async (values) => {
        try {
            setLoading(true);
            const encryptedPassword = encryptPassword(values.password); // Encrypt the password
            await axios.post('/users/register', { ...values, password: encryptedPassword });
            message.success('Registration Successful!');
            setLoading(false);

            navigate('/login');
        } catch (error) {
            setLoading(false);
            message.error('Invalid Username or Password');
        }
    };

    // Function to encrypt the password
    const encryptPassword = (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    // prevent for login user
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
          
            <div className="register-page">
                <div className="page">
                    <Form layout="vertical" onFinish={submitHandler}>
                        <h1>Register Form</h1>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input type="email" />
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
                            <Input type="password" />
                        </Form.Item>
                        <div className="d-flex justify-content-center text-decoration-none">
                            <Link to="/login">Already Register? Login Here</Link>
                            <Button type="primary" htmlType="submit" className="mx-2">
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Register;
