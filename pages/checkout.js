/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import CartCheckout from "../components/cartcheckout";

function Checkout() {
  // get app context
  const {isAuthenticated} = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;
  
  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51NFmJNItS1j6Xv3xh4J4b0jtCJpw1jgAOZl5aZRcaj3EFvdVaE3fo9cxQPCOAdMStc0cF9XUAHyr8DhI9jirVFKS00wRbnx7HJ"
  );

  // return (
  //   <Row>
  //     <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
  //       <h1 style={{ margin: 20 }}>Checkout</h1>
  //       <Cart isAuthenticated={isAuthenticated} />
  //     </Col>
  //     <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
  //       <Elements stripe={stripePromise}>
  //         <CheckoutForm />
  //       </Elements>
  //     </Col>
  //   </Row>
  // );

  return (

<div>
        <center><h1 style={{ margin: 20 }}>Checkout</h1></center>
        <CartCheckout isAuthenticated={isAuthenticated} />
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
</div>
  );

}
export default Checkout;
