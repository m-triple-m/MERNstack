const Login = () => {

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

    let today = new Date();
    let name = 'Mubassir';

    return (
        <div className="col-md-6 mx-auto">
            <div className="card shadow-lg" style={cssStyles.card}>
                <div className="row">
                    <div className="col-md-5">
                        <div style={cssStyles.myCardBody}>
                            <h1 className="text-center">SIGN UP</h1>

                            <form>

                                <label>Name</label>
                                <input type="text" className="form-control" />

                                <label className="mt-3">Email</label>
                                <input type="email" className="form-control" />

                                <label className="mt-3">Password</label>
                                <input type="password" className="form-control" />

                                <button className="btn btn-warning mt-5" style={cssStyles.button}>Submit</button>

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
        </div>
    )
}

export default Login;