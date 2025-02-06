import { useEffect, useState } from "react";
import { getLatestProducts, getRandomProducts } from "../../service/service"
import ProductCard from "../Cards/ProductCard/ProductCard";
import useGroupProducts from "../../hooks/useGroupProducts";
import ProductCarousel from "../Shared/ProductCarousel";

export default function Home () {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
    useEffect (() =>{
      fetchRandomProducts();
      fetchLatestProducts();
    },[]);
 
    const fetchRandomProducts = async () => {
      try{
        const data = await getRandomProducts(8);
        setFeaturedProducts(data);
      }catch(error){
        console.error("Error fetching products");
      }
    };
    const fetchLatestProducts = async () => {
      try{
        const data = await getLatestProducts(8);
        setLatestProducts(data);
      }catch(error){
        console.error("Error fetching products");
      }
    };
  
    const groupedFeaturedProducts = useGroupProducts(featuredProducts, 4);
    const groupedLatestProducts = useGroupProducts(latestProducts, 4);

    return (
        <>
        <div id="top-bar" className="container">
        <section className="homepage-slider" id="home-slider">
  <div className="flexslider">
    <ul className="slides">
      <li>
        <img src="themes/images/carousel/banner-12.jpg" alt="" />
      </li>
      <li>
        <img src="themes/images/carousel/banner-2.jpg" alt="" />
        <div className="intro">
          <h1>Monthly Boxing Deals</h1>
          <p>
            <span>Up to 30% Off</span>
          </p>
          <p>
            <span>On all boxing gear this month!</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>
<section className="header_text">
  Premium quality, cutting-edge design, and unmatched comfort – we bring you the best sports apparel for every occasion, whether it's training, competition, or everyday wear
</section>
<section className="main-content">
  <div className="row">
    <div className="span12">
      <div className="row">
        <div className="span12">
          <ProductCarousel title="Feature" products={groupedFeaturedProducts} carouselId="featureCarousel" />
        </div>
        </div>
      <br />
      <div className="row">
        <div className="span12">
            <ProductCarousel title="Latest" products={groupedLatestProducts} carouselId="latestCarousel" />
          </div>
        </div>
      <div className="row feature_box">
        <div className="span4">
          <div className="service">
            <div className="responsive">
              <img src="themes/images/feature_img_2.png" alt="" />
              <h4>
                MODERN <strong>DESIGN</strong>
              </h4>
              <p>
                Get the latest trends in sportswear, designed for
                 ultimate comfort and performance.
              </p>
            </div>
          </div>
        </div>
        <div className="span4">
          <div className="service">
            <div className="customize">
              <img src="themes/images/feature_img_1.png" alt="" />
              <h4>
                FREE <strong>SHIPPING</strong>
              </h4>
              <p>
                Enjoy free shipping on all orders above $50. Fast and
                 reliable delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="span4">
          <div className="service">
            <div className="support">
              <img src="themes/images/feature_img_3.png" alt="" />
              <h4>
                24/7 LIVE <strong>SUPPORT</strong>
              </h4>
              <p>
                Have questions? Our team is available 24/7 to assist you 
                with your orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="our_client">
  <h4 className="title">
    <span className="text">Manufactures</span>
  </h4>
  <div className="row">
    <div className="span2">
      <a href="#">
        <img alt="" src="themes/images/clients/14.jpg" />
      </a>
    </div>
    <div className="span2">
      <a href="#">
        <img alt="" src="themes/images/clients/35.jpg" />
      </a>
    </div>
    <div className="span2">
      <a href="#">
        <img alt="" src="themes/images/clients/1.png" />
      </a>
    </div>
    <div className="span2">
      <a href="#">
        <img alt="" src="themes/images/clients/2.png" />
      </a>
    </div>
    <div className="span2">
      <a href="#">
        <img alt="" src="themes/images/clients/3.png" />
      </a>
    </div>
    <div className="span2">
      <a href="#">
        <img alt="" src="themes/images/clients/4.png" />
      </a>
    </div>
  </div>
</section>

</div>


</>

    )
}