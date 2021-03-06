import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const history = useHistory();
    const location = useLocation();

    const redirect_url = location.state?.from || "/home";

    const { signInWithGoogle, handlerLogin } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ({ email, password }) => {
        handlerLogin(email, password)
            .then((result) => {
                history.push(redirect_url);
            })
    }


    const handlerGoogleLoin = () => {
        signInWithGoogle()
            .then((result) => {
                history.push(redirect_url)
            });

    }

    return (
        <div className="login-div " style={{ height: "100vh" }}>
            <div className="text-center login-container py-5 shadow p-3 mb-5 rounded">
                <h1 className="pb-3">Login</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="input-icons">
                        <i className="far fa-envelope icon"></i>
                        <input className="input-field w-100 h-50 mb-2" type="text" placeholder="Enter Email"  {...register("email")} />
                        <br />
                        <i className="fas fa-lock icon"></i>
                        <input className="input-field w-100 h-50" type="password" placeholder="Enter Password" {...register("password", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <p>Forget Password ?</p>
                        <input className="w-100 button-login" type="submit" />
                    </form>
                    <p className="pt-3">Or Login With</p>
                    <Row>
                        <Col xs={6} className="mb-2"><Button className="button-login " onClick={() => handlerGoogleLoin()}> <i class="fab fa-google me-2"></i>Google</Button>
                        </Col>
                        <Col xs={6} ><Button className="button-login "><i class="fab fa-github me-2"></i>Github</Button>
                        </Col>
                    </Row>
                    <p className="pt-3">Dont't have account ?  <Nav.Link as={Link} to={'/signup'} className="Services-nav ps-0" style={{ display: "inline" }}>Sing Up</Nav.Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;