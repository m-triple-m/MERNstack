import { Button, TextField } from "@material-ui/core";
import { Formik } from "formik";
import { useContext } from "react";
import { UserContext } from "../Context/usercontext";

const Signin = () => {

    const userService = useContext(UserContext);

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

    const onSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting = true;

        userService.getUserByUsername(values.username)
            .then(data => {
                if (data) {
                    if (data.password == values.password) {
                        console.log('login sucess');
                    } else {
                        console.log('password incorrect');
                    }
                } else {
                    console.log('username not found');
                }
            })

        // userService.addUser(values);
    }

    const loginForm = {
        username: '',
        password: ''
    }

    return (
        <div className="col-md-3 mx-auto">
            <div className="card shadow-lg" style={cssStyles.card}>
                <div style={cssStyles.myCardBody}>
                    <h1 className="text-center">SIGN IN</h1>

                    <Formik initialValues={loginForm} onSubmit={onSubmit}>
                        {({
                            values, isSubmitting, handleSubmit, handleChange
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField className="w-100 mt-5" label="Username" variant="filled" name="username" onChange={handleChange} value={values.username} />

                                <TextField className="w-100 mt-4" label="Password" type="password" variant="filled" name="password" onChange={handleChange} value={values.password} />

                                <Button type="submit" variant="outlined" className="w-100 mt-5" color="primary">Submit</Button>

                                <p className="text-center mt-5 text-muted">Already have an Account? Sign In</p>
                            </form>
                        )}
                    </Formik>

                </div>

            </div>
        </div>
    )
}

export default Signin;