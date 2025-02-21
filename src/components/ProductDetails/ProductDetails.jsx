import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getDocumentByName, getDocumentData, getRelatedProducts } from "../../service/service";
import PageBanner from "../Shared/PageBanner";
import useGroupProducts from "../../hooks/useGroupProducts";
import ProductCarousel from "../Shared/ProductCarousel";
import RandomizeProducts from "../Shared/RandomizeProducts";
import BestProducts from "../Shared/BestProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import SuccessModal from "../Shared/Modals/SuccessModal";

export default function ProductDetails() {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, [name]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      photoURL: product.photoURL,
      price: product.price,
      quantity: parseInt(quantity),
    }));
    setSuccessModalOpen(true)
    setQuantity(1)
  };

  const fetchProduct = async () => {
    try {
      const collections = ["woman", "man", "fitness", "boxing"];
      let foundProduct = null;
  
      for (const collection of collections) {
        const data = await getDocumentByName(collection, name);
        if (data) {
          foundProduct = data;
          break;
        }
      }
  
      setProduct(foundProduct);
  
      if (foundProduct) {
        const related = await getRelatedProducts(foundProduct.category, foundProduct.id);
        setRelatedProducts(related);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleSuccessClose = () => {
    setSuccessModalOpen(false);
  }
  const groupedRelatedProducts = useGroupProducts(relatedProducts, 3);
  if (!product) return <p>Loading...</p>;

    return (
<div id="wrapper" className="container">
<PageBanner pageName={product.name} />
  <section className="main-content">
    <div className="row">
      <div className="span9">
        <div className="row">
          <div className="span4">
            <a
              href={`/${product.photoURL}`}
              className="thumbnail"
              data-fancybox-group="group1"
              title="Description 1"
            >
              <img alt="" src={`/${product.photoURL}`} />
            </a>
            <ul className="thumbnails small">
              <li className="span1">
                <a
                  href={`/${product.photoURL}`}
                  className="thumbnail"
                  data-fancybox-group="group1"
                  title="Description 2"
                >
                  <img src={`/${product.photoURL}`}  alt="" />
                </a>
              </li>
              <li className="span1">
                <a
                  href={`/${product.photoURL}`}
                  className="thumbnail"
                  data-fancybox-group="group1"
                  title="Description 3"
                >
                  <img src={`/${product.photoURL}`} alt="" />
                </a>
              </li>
              <li className="span1">
                <a
                  href={`/${product.photoURL}`}
                  className="thumbnail"
                  data-fancybox-group="group1"
                  title="Description 4"
                >
                  <img src={`/${product.photoURL}`} alt="" />
                </a>
              </li>
              <li className="span1">
                <a
                  href={`/${product.photoURL}`}
                  className="thumbnail"
                  data-fancybox-group="group1"
                  title="Description 5"
                >
                  <img src={`/${product.photoURL}`} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="span5">
            <address>
              <strong>Brand:</strong> <span>{product.brand}</span>
              <br />
              <strong>Product Code:</strong> <span>{product.id}</span>
              <br />
              <strong>Reward Points:</strong> <span>0</span>
              <br />
              <strong>Availability:</strong> <span>Out Of Stock</span>
              <br />
            </address>
            <h4>
              <strong>Price: {product.price} lv</strong>
            </h4>
          </div>
          <div className="span5">
            <form className="form-inline">
              <label className="checkbox">
                <input type="checkbox" defaultValue="" /> Option one is this and
                that
              </label>
              <br />
              <label className="checkbox">
                <input type="checkbox" defaultValue="" /> Be sure to include why
                it's great
              </label>
              <p>&nbsp;</p>
              <label>Quantity: </label>
              <input 
                  type="number" 
                  value={quantity} 
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)} 
              />
              <button className="btn btn-inverse" onClick={handleAddToCart}>
                Add to cart
              </button>
              <SuccessModal isOpen={isSuccessModalOpen} onClose={handleSuccessClose} text='Product added successfully!' title="Add to cart" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="span9">
            <ul className="nav nav-tabs" id="myTab">
              <li className="active">
                <a href="#home">Description</a>
              </li>
              <li className="">
                <a href="#profile">Additional Information</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                {product.description}
              </div>
              <div className="tab-pane" id="profile">
                <table className="table table-striped shop_attributes">
                  <tbody>
                    <tr className="">
                      <th>Size</th>
                      <td>Large, Medium, Small, X-Large</td>
                    </tr>
                    <tr className="alt">
                      <th>Colour</th>
                      <td>Orange, Yellow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="span9">
            <br />
              <ProductCarousel title="Related" products={groupedRelatedProducts} carouselId="myCarousel-1" />
          </div>
        </div>
      </div>
      <div className="span3 col">
            <RandomizeProducts/>
            <BestProducts/>
      </div>
    </div>
  </section>
</div>

    )
    
}