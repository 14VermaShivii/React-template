import React from "react";
import { NavLink } from "react-router-dom"
import loginpageimage from "/images/loginpageimage.jpg"
import logo from "/images/logo.jpg"
import { useFormik } from "formik"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { loginschema } from ".";

export const Forgotpassword = () => {
    const initialValues = {
        email: "",
        password: ""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =

        useFormik({
            initialValues: initialValues,
            validationSchema: loginschema,
        })
    return (
        <div className="container-fluid">
            <div className="container ">
                <div className="row">
                    {/* <form> */}
                    <form onSubmit={handleSubmit} className="col-md-6 form ">
                        <div className="logo">
                            <img src={logo} width={300} height={180} />
                            <b>Network</b>
                        </div>

                        {/* Email */}
                        <div className="justify-content-center ">
                            <label className="py-2"><b>Email address</b></label>


                            <input className="input-box py-2"
                                name="email"
                                type="Email"
                                id="Email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
                            {/* <i class="fa-solid fa-envelope"></i> */}
                            <FontAwesomeIcon icon={faEnvelope} />
                            {errors.email && touched.email ? (
                                <p className="form-error">{errors.email}</p>
                            ) : null}
                            {/* <FontAwesomeIcon icon={faUser} /> */}
                            <label className="py-2"><b>Password</b></label>

                            <input className="input-box py-2"
                                type="Password"
                                id="Password"
                                placeholder=" Enter Password"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <FontAwesomeIcon icon={faLock} />
                            {errors.password && touched.password ? (
                                <p className="form-error">{errors.password}</p>
                            ) : null}
                            <div className="forgot py-4 justify-content-end d-flex">
                                {/* <label><input type="checkbox" />Remember me</label> */}
                                <NavLink to="/Forgotpassword">Forgot Password ?</NavLink>
                            </div>
                            <div className=" py-2">
                                <button className="input-box py-3 buttons" type="submit">Login now</button>
                            </div>
                            <hr/>
                            {/* <div class="hr"><hr or /></div> */}
                            <div className=" py-2">
                              <button className="input-box py-3 buttons" type="submit">Signup now</button>
                            </div>
                        </div>
                    </form>

                    {/* </form> */}
                    <div className="col-md-6  ">
                        <img src={loginpageimage} width={600} height={600} />

                    </div>

                </div>
            </div>
        </div>

    )
}
