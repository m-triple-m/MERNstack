import { useEffect, useContext } from "react";
import { ProductContext } from "../Context/productcontext";

const Product = props => {

    console.log(props);

    const handleCardClick = (product) => {
        console.log(product);
        console.log('Card was Clicked!!');
    }

    return (
        <div className="container">
            <div className="card" onClick={e => { handleCardClick(props.data); }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3 my-auto">
                            <img className="img-fluid" src="https://rukminim1.flixcart.com/image/312/312/kgtqhe80/computer/h/y/b/mi-na-thin-and-light-laptop-original-imafwz89mf2typdu.jpeg?q=70" />
                        </div>
                        <div className="col-md-6">
                            <h2>{props.data.name}</h2>
                            <h6 className="text-muted">{props.data.reviews} Reviews & {props.data.ratings} Ratings</h6>

                            <ul>
                                {
                                    props.data.specs.map((spec, index) => {
                                        return (<li key={index}>{spec}</li>)
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h1>₹44,999</h1>
                            <p><del className="text-muted">₹52,999</del>&nbsp;<span className="text-success">{props.data.discount}% off</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductList = () => {

    useEffect(() => {
        console.log("Data Fetched");
    }, [])

    const [products, setProduct] = useContext(ProductContext);

    return (
        <div>
            {
                products.map(product => {
                    return (
                        <Product data={product} key={product.name}></Product>
                    )
                })
            }
        </div>
    )
}


export default ProductList;