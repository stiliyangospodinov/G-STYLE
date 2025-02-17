import { useDispatch, useSelector } from "react-redux";
import PageBanner from "../Shared/PageBanner";
import { useState } from "react";
import LoginForm from "../Shared/LoginForm";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/cartSlice";

export default function Checkout() {
  const { username, isLoggedIn } = useSelector((state) => state.user);
  const [checkoutType, setCheckoutType] = useState(isLoggedIn ? "profile" : "guest");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleContinue = () => {
    if (checkoutType === "profile" && !isLoggedIn) {
      return; 
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleConfirm = () => {
    alert('The Order was successfully confirmed')
    navigate('/');
    dispatch(clearCart());
  }

  return (
    <div id="wrapper" className="container">
      <PageBanner pageName="Checkout" />
      <section className="main-content">
        <div className="row">
          <div className="span12">
            <div className="accordion" id="accordion2">

              {/* Стъпка 1: Checkout Options */}
              {step === 1 && (
                <div className="accordion-group">
                  <div className="accordion-heading">
                    <a className="accordion-toggle">
                      Checkout Options
                    </a>
                  </div>
                  <div className="accordion-body in collapse">
                    <div className="accordion-inner">
                      <div className="row-fluid">
                        <div className="span6">
                          <h4>New Customer</h4>
                          <p>
                            By creating an account you will be able to shop faster and track orders.
                          </p>
                          <label>
                            <input
                              type="radio"
                              name="checkoutType"
                              value="profile"
                              checked={checkoutType === "profile"}
                              onChange={() => setCheckoutType("profile")}
                            />
                            Checkout as <strong>{isLoggedIn ? username : "Logged in user (Login Required)"}</strong>
                          </label>
                          <br />
                          <label>
                            <input
                              type="radio"
                              name="checkoutType"
                              value="guest"
                              checked={checkoutType === "guest"}
                              onChange={() => setCheckoutType("guest")}
                            />
                            Checkout as Guest
                          </label>
                          <br />
                          <button className="btn btn-inverse" onClick={handleContinue}>
                            Continue
                          </button>
                        </div>

                        {!isLoggedIn && checkoutType === "profile" && (
                          <div className="span6">
                            <h4>Login Required</h4>
                            <LoginForm navigateTo={"/checkout"} />
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && checkoutType === "guest" && (
                <div className="accordion-group">
                  <div className="accordion-heading">
                    <a className="accordion-toggle">
                      Account & Billing Details
                    </a>
                  </div>
                  <div className="accordion-body in collapse">
                    <div className="accordion-inner">
                      <div className="row-fluid">
                        <div className="span6">
                          <h4>Your Personal Details</h4>
                          <label>First Name:</label>
                          <input type="text" required />
                          <label>Last Name:</label>
                          <input type="text" required />
                          <label>Email:</label>
                          <input type="email" required />
                          <label>Phone Number:</label>
                          <input type="tel" required />
                        </div>
                        <div className="span6">
                          <h4>Your Address</h4>
                          <label>Address:</label>
                          <input type="text" required />
                          <label>City:</label>
                          <input type="text" required />
                          <label>Post Code:</label>
                          <input type="text" required />
                          <label>Country:</label>
                          <select>
                            <option>Choose...</option>
                            <option>Bulgaria</option>
                            <option>USA</option>
                          </select>
                        </div>
                      </div>
                      <button className="btn" onClick={handleBack}>
                        Back
                      </button>
                      <button className="btn btn-inverse" onClick={handleContinue}>
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && checkoutType === "profile" && isLoggedIn && (
                <div className="accordion-group">
                  <div className="accordion-heading">
                    <a className="accordion-toggle">
                      Confirm Order
                    </a>
                  </div>
                  <div className="accordion-body in collapse">
                    <div className="accordion-inner">
                      <button className="btn" onClick={handleBack}>
                        Back
                      </button>
                      <button className="btn btn-inverse" onClick={handleConfirm}>Confirm Order</button>
                    </div>
                  </div>
                </div>
              )}


              {step === 3 && (
                <div className="accordion-group">
                  <div className="accordion-heading">
                    <a className="accordion-toggle">
                      Confirm Order
                    </a>
                  </div>
                  <div className="accordion-body in collapse">
                    <div className="accordion-inner">
                      <h4>Review Your Order</h4>
                      <p>All details are correct. Click "Confirm Order" to finish.</p>
                      <button className="btn" onClick={handleBack}>
                        Back
                      </button>
                      <button onClick={handleConfirm} className="btn btn-inverse">Confirm Order</button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
