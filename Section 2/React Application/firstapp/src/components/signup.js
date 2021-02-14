import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import { useContext } from 'react';
import { UserContext } from "../Context/usercontext";

const SignUp = () => {

    const userService = useContext(UserContext);

    const signupForm = {
        username: '',
        email: '',
        password: '',
        admin: false
    }

    const onSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting = true;

        userService.addUser(values);
    }

    const cssStyles = {
        card: {
            marginTop: '20%',
        },
        button: {
            width: '100%'
        },
        myCardBody: {
            padding: '3rem'
        }
    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card shadow-lg" style={cssStyles.card}>
                <div className="row">
                    <div className="col-md-6">
                        <div style={cssStyles.myCardBody}>
                            <h1 className="text-center">SIGN UP</h1>

                            <Formik initialValues={signupForm} onSubmit={onSubmit}>
                                {({
                                    values, isSubmitting, handleSubmit, handleChange
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <TextField className="w-100" label="Username" variant="filled" name="username" onChange={handleChange} value={values.username} />

                                        <label className="mt-3">Email</label>
                                        <input name="email" onChange={handleChange} className="form-control" id="email" value={values.email} />

                                        <label className="mt-3">Password</label>
                                        <input name="password" onChange={handleChange} type="password" className="form-control" id="password" value={values.password} />

                                        <Button variant="outlined" className="mt-5" color="primary">Submit</Button>

                                        <p className="text-center mt-5 text-muted">Already have an Account? Sign In</p>
                                    </form>
                                )}
                            </Formik>

                        </div>
                    </div>
                    <div className="col-md right-half my-card-body">
                        <h1 className="text-white">Digipodium</h1>
                        <p className="text-white">Signature to Success</p>
                    </div>
                </div>

            </div>
        </div>

    )
}


export default SignUp;