import { Link } from "react-router-dom"
import "./NotFound.css"
export default function NotFound () {
    return (
            <div id="wrapper" className="container">
        
              <section className="main-content">
              <div className="error-container">
  <div className="lottie-animation" />
  <div className="error-content">
    <h1>404</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" className="btn btn-primary">
      Go to Homepage
    </Link>
  </div>
</div>

</section>
</div>

    )
}