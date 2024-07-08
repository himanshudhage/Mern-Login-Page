import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register', { name, email, password })
            .then(result => {
                console.log(result.data); // Log the response data to the console
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return ( 
        <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <form onSubmit={handlesubmit}>
                                        <div className="form-outline mb-4">
                                            <input type="text" onChange={(e) => setName(e.target.value)} id="form3Example1cg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="email" onChange={(e) => setEmail(e.target.value)} id="form3Example3cg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} id="form3Example4cg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>
                                        <p className="text-center text-muted mt-5 mb-0">Have already an account?</p> 
                                        <Link to="/login" className="fw-bold text-body">Login here</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
