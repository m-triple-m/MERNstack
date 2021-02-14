import { useContext } from "react";
import { UserContext } from "../Context/usercontext";

const Register = () => {

    const userService = useContext(UserContext);

    console.log(userService.users);

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

    const handleSubmit = () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        console.log(name, email, password);

        userService.setUser([...users, {name, email, password}]);
    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card shadow-lg" style={cssStyles.card}>
                <div className="row">
                    <div className="col-md-6">
                        <div style={cssStyles.myCardBody}>
                            <h1 className="text-center">SIGN UP</h1>

                            <form>

                                <label>Name</label>
                                <input type="text" className="form-control" id="name" />

                                <label className="mt-3">Email</label>
                                <input type="email" className="form-control" id="email" />

                                <label className="mt-3">Password</label>
                                <input type="password" className="form-control" id="password" />

                                <button type="button" className="btn btn-warning mt-5" style={cssStyles.button} onClick={handleSubmit}>Submit</button>

                                <p className="text-center mt-5 text-muted">Already have an Account? Sign In</p>
                            </form>

                        </div>
                    </div>
                    <div className="col-md right-half my-card-body">
                        <h1 className="text-white">Digipodium</h1>
                        <p className="text-white">Signature to Success</p>
                    </div>
                </div>

            </div>

            <div className="list-group">
                {userService.users.map((user, index) => {
                    return (
                        <div className="list-group-item" key={index}>
                            {user.name} {user.email} {user.password}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Register;