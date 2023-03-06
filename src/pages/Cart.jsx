import React from 'react'

const Cart = () => {
  return (
    <section className="cart">
    <div className="cart-container">

    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="/src/assets/retail-product-5-opt-330x340.jpg" alt="" /></td>
            <td>$10</td>
            <td>1</td>
            <td>$10</td>
          </tr>
          <tr>
            <td><img src="/src/assets/retail-product-5-opt-330x340.jpg" alt="" /></td>
            <td>$10</td>
            <td>1</td>
            <td>$10</td>
          </tr>
          <tr>
            <td><img src="/src/assets/retail-product-5-opt-330x340.jpg" alt="" /></td>
            <td>$10</td>
            <td>1</td>
            <td>$10</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="cart-check">
      <h1>Cart Totals</h1>

      <div className="sub">
        <h2>SubTotal</h2>
        <p>$23,99</p>
      </div>

      <div className="sub">
        <h2>Ship Price</h2>
        <p>$46,99</p>
      </div>
      <div className="sub">
        <h2>Total</h2>
        <p>$90</p>
      </div>
      <button>Checkout</button>
    </div>

    </div>

    </section>
  )
}

export default Cart