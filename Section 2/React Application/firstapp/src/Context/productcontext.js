import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [product, setProduct] = useState([
        { name: 'Mi Notebook 14', reviews: 1426, ratings: 244, price: 44999, discount: 20, specs: ['i5 Processor', '8GB RAM', '512GB SSD'] },
        { name: 'Asus Vivobook 14', reviews: 8124, ratings: 634, price: 44999, discount: 15, specs: ['i5 Processor', '16GB RAM', '1TB SSD', '4GB Graphic Card',] },
    ]);

    return (
        <ProductContext.Provider value={[product, setProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}