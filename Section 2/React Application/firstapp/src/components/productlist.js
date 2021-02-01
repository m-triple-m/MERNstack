const Product = props => {

    console.log(props);

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-fluid" src="https://rukminim1.flixcart.com/image/312/312/kgtqhe80/computer/h/y/b/mi-na-thin-and-light-laptop-original-imafwz89mf2typdu.jpeg?q=70" />
                        </div>
                        <div className="col-md-6">
                            <h2>{props.data.name}</h2>
                            <h6 className="text-muted">{props.data.reviews} Reviews & {props.data.ratings} Ratings</h6>
                            {
                                props.data.specs.map()
                            }
                        </div>
                        <div className="col-md-3">
                            <h1>₹44,999</h1>
                            <p><del className="text-muted">₹52,999</del>&nbsp;<span className="text-success">15% off</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductList = () => {

    const productData = [
        { name: 'Mi Notebook 14', reviews: 1426, ratings: 244, price: 44999, discount: 15, specs: ['Intel i5', '4GB DDR4 RAM'] },
        { name: 'Asus Vivobook 14', reviews: 8124, ratings: 634, price: 44999, discount: 15 },
    ]

    return (
        <div>
            {
                productData.map(product => {
                    return (
                        <Product data={product} key={product.name}></Product>
                    )
                })
            }
        </div>
    )
}


export default ProductList;