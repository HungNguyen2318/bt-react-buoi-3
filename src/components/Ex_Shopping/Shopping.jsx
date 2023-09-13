import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

export default class Shopping extends Component {
  state = {
    listProducts: [
      {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
      },
      {
        id: 2,
        name: "Adidas Prophere Black White",
        alias: "adidas-prophere-black-white",
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 990,
        image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
      },
      {
        id: 3,
        name: "Adidas Prophere Customize",
        alias: "adidas-prophere-customize",
        price: 375,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 415,
        image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
      },
      {
        id: 4,
        name: "Adidas Super Star Red",
        alias: "adidas-super-star-red",
        price: 465,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 542,
        image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
      },
      {
        id: 5,
        name: "Adidas Swift Run",
        alias: "adidas-swift-run",
        price: 550,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 674,
        image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
      },
      {
        id: 6,
        name: "Adidas Tenisky Super Star",
        alias: "adidas-tenisky-super-star",
        price: 250,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 456,
        image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
      },
      {
        id: 7,
        name: "Adidas Ultraboost 4",
        alias: "adidas-ultraboost-4",
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 854,
        image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
      },
      {
        id: 8,
        name: "Adidas Yeezy 350",
        alias: "adidas-yeezy-350",
        price: 750,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 524,
        image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
      },
      {
        id: 9,
        name: "Nike Adapt BB",
        alias: "nike-adapt-bb",
        price: 630,
        description:
          "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: "Paul George is the rare high-percentage shooter",
        quantity: 599,
        image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
      },
      {
        id: 10,
        name: "Nike Air Max 97",
        alias: "nike-air-max-97",
        price: 650,
        description:
          "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: "Paul George is the rare high-percentage shooter",
        quantity: 984,
        image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
      },
      {
        id: 11,
        name: "Nike Air Max 97 Blue",
        alias: "nike-air-max-97-blue",
        price: 450,
        description:
          "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: "Paul George is the rare high-percentage shooter",
        quantity: 875,
        image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
      },
      {
        id: 12,
        name: "Nike Air Max 270 React",
        alias: "nike-air-max-270-react",
        price: 750,
        description:
          "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        shortDescription: "Paul George is the rare high-percentage shooter",
        quantity: 445,
        image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
      },
    ],
    productDetail: null,
    isShowModal: false,
    listProductsCart: [],
  };

  //chức năng xóa sản phẩm trong giỏ hàng
  removeProductCart = (id) => {
    console.log(">>> This is remove cart function ...");
    console.log(id);
    const index = this.state.listProductsCart.findIndex(
      (item) => item.id == id
    );
    if (index != -1) {
      const newArrProductCart = [...this.state.listProductsCart];
      newArrProductCart.splice(index, 1);
      this.setState({
        listProductsCart: (this.state.listProductsCart = newArrProductCart),
      });
    }
  };

  getProductDetail = (product) => {
    console.log("product shopping", product);
    this.setState({ productDetail: product });
  };

  handleAddToCart = (product) => {
    // console.log("handleAddToCart Shopping", product);
    const newProduct = { ...product, quantity: 1 };
    this.setState({
      listProductsCart: [...this.state.listProductsCart, newProduct],
    });
    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const found = this.state.listProductsCart.find(
      (item) => item.id === product.id
    );
    if (found) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      const newCarts = this.state.listProductsCart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      this.setState({
        listProductsCart: newCarts,
      });
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng
      const productWithQuantity = { ...product, quantity: 1 };
      this.setState({
        listProductsCart: [...this.state.listProductsCart, productWithQuantity],
      });
    }
  };

  handleCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    console.log("cart", this.state.listProductsCart);
    return (
      <div className="container mt-5">
        <button
          className="btn btn-success"
          onClick={() => this.setState({ isShowModal: true })}
        >
          Giỏ hàng
        </button>
        <ProductList
          data={this.state.listProducts}
          onGetProductDetail={this.getProductDetail}
          onAddToCart={this.handleAddToCart}
        />
        <ProductDetail product={this.state.productDetail} />
        {this.state.isShowModal && (
          <Cart
            onCloseModal={this.handleCloseModal}
            data={this.state.listProductsCart}
            removeItem={this.removeProductCart}
          />
        )}
      </div>
    );
  }
}
