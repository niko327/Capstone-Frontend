import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardTitle, Badge } from "reactstrap";
import AppContext from "./context"
import Link from "next/link"
// we can pass cart data in via props method 
// the alternative is using useContext as below
function CartCheckout() {
  let isAuthenticated = true;
  let {cart,addItem,removeItem} = useContext(AppContext);
  //const [cartA, setCartA] = useState({cart})
  //cart = value.cart;
  //console.log('props:'+ JSON.stringify(value));
  console.log(`in CART: ${JSON.stringify(cart)}`)
  
  //   problem is that cart may not be set
  const router = useRouter();
  console.log(`Router Path: ${JSON.stringify(router)}`)
  const renderItems = ()=>{
  let {items} = cart;
   console.log(`items: ${JSON.stringify(items)}`)
    if(items && items.length){
      var itemList = cart.items.map((item) => {
          if (item.quantity > 0) {
            return (
              <div
                className="items-one"
                style={{ marginBottom: 15 }}
                key={item.id}
              >
                <div>
                  <span id="item-price">&nbsp; ${item.price}</span>
                  <span id="item-name">&nbsp; {item.name}</span>
                </div>
                <div>
                  <Button
                    style={{
                      height: 25,
                      padding: 0,
                      width: 15,
                      marginRight: 5,
                      marginLeft: 10,
                    }}
                    onClick={() => addItem(item)}
                    color="dark"
                  >
                    +
                  </Button>
                  <Button
                    style={{
                      height: 25,
                      padding: 0,
                      width: 15,
                      marginRight: 10,
                    }}
                    onClick={() => removeItem(item)}
                    color="dark"
                  >
                    -
                  </Button>
                  <span style={{ marginLeft: 5 }} id="item-quantity">
                    {item.quantity}x
                  </span>
                </div>
              </div>
            );
          }
        })
        return itemList;
      }
    else {
        return (<div></div>)
    }
  }
const checkoutItems = ()=>{
  return (
    <div><center>
      <Badge style={{ width: 200, padding: 10 }} color="success">
        <h5 style={{ fontWeight: 100, color: "white" }}>Total:</h5>
        <h3>${cart.total}</h3>
      </Badge>
      <br />
          <Link href="/">
            <Button style={{ width: 160 }} color="warning">
              <a>Order more</a>
            </Button>
          </Link>
          </center>
    </div>
  )}

// return Cart
  return (
    <div>
      <Card  className="cart">
      <CardTitle className="card-header d-flex justify-content-center bg-success text-light" ><h2>Your Order</h2></CardTitle>
        <CardBody className="bg-light" style={{ padding: 10 }}>
          <div style={{ marginBottom: 6 }}>
            <small>Items:</small>
          </div>
          <div>
            {renderItems()}
          </div>
          <div>
            {checkoutItems()}
          </div>
          
          {console.log(`Router Path: ${router.asPath}`)}
        </CardBody>
      </Card>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
}
export default CartCheckout;
