import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Register = () => {
    const [errorSignup,setErrorSignup] = useState('')
    const {signInWithGoogle,handlerEmailSignUp} =useAuth();
    const { register, handleSubmit, formState: { errors} } = useForm();
    const regularExpression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const onSubmit =( {name,email,password,rePassword} )=> {
       if(password==rePassword){
        setErrorSignup('')
        if(regularExpression.test(password)){
            handlerEmailSignUp(name,email,password);
        }
        else{
            setErrorSignup('Minimum eight characters, at least one letter and one number')
        }
       }
       else{
        setErrorSignup('password not match...try again')
       }
    }


    return (
        <div className="login-div " style={{ height: "100vh"}}>
            <div className="text-center login-container py-5 shadow p-3 mb-5 rounded">
                <h1 className="pb-3">Sign Up</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="input-icons">
                        <i className="fa fa-user icon"></i>
                        <input className="input-field w-100 h-50 mb-2" type="text" placeholder="Full Name"  {...register("name")} />
                        <br />
                        <i className="far fa-envelope icon"></i>
                        <input className="input-field w-100 h-50 mb-2" type="text" placeholder="Enter Email"  {...register("email")} />
                        <br />
                        <i className="fas fa-lock icon"></i>
                        <input className="input-field w-100 h-50" type="password" placeholder="Enter Password" {...register("password", { required: true })} />
                        <br />
                        <i className="fas fa-lock icon"></i>
                        <input className="input-field w-100 h-50" type="password" placeholder="Re-Enter Password" {...register("rePassword", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        {errorSignup && <span>{errorSignup}</span>}
                        <p>Forget Password ?</p>
                        <input className="w-100 button-login" type="submit" />
                    </form>
                    <p className="pt-3">Or Login With</p>
                    <Row>
                        <Col xs={6} className="mb-2"><Button className="button-login" onClick={()=>signInWithGoogle()}> <i class="fab fa-google me-2"></i>Google</Button>
                        </Col>
                        <Col xs={6} ><Button className="button-login "><i class="fab fa-github me-2"></i>Github</Button>
                        </Col>
                    </Row>
                    <p className="pt-3">Already have account ? <Nav.Link as={Link} to={'/login'} className="Services-nav ps-0" style={{display:"inline"}}>Login</Nav.Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;