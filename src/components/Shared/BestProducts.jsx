import { useEffect, useState } from "react";
import { getTopOrBestSellers } from "../../service/service";
import useRandomProducts from "../../hooks/useRandomProucts";
import { Link } from "react-router-dom";

export default function BestProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getTopOrBestSellers(12);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const randomProducts = useRandomProducts(products, 3);
    return (
        <div className="block">
            <h4 className="title">
                <strong>Best</strong> Seller
            </h4>
            <ul className="small-product">
            {randomProducts.map((product, index) => (
                <li key={product.id} className={`item ${index === 0 ? "active" : ""}`}>
                    <Link to={`/product/${product.name}`} title="Praesent tempor sem sodales">
                        <img
                            src={`/${product.photoURL}`}
                            alt="Praesent tempor sem sodales"
                        />
                    </Link>
                    <Link to={`/product/${product.name}`}>{product.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}