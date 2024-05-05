import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import appConfig from '../config/app.config';

const REACT_APP_API_URL = appConfig.url

const Register = () => {
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        tgl_lahir:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        try {
            const response = await axios.post(REACT_APP_API_URL+ 'api/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', response.data);
            setError(response.data.message);
            window.location.href = "/";
    
        } catch (error) {
            console.error('Error:', error);
            setError(error.response.data.message);
        }
    };

    return (
        <>
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="username">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form my-3">
    <label htmlFor="tgl_lahir">Tanggal Lahir</label>
    <input
        type="date"
        className="form-control"
        id="tgl_lahir"
        name="tgl_lahir"
        value={formData.tgl_lahir}
        onChange={handleChange}
    />
</div>
                           
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            {error && <p className="text-danger mt-2">{error}</p>}

                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
