import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { product } = this.props;
    // product : { name : "" , price: "" , ram :"" , rom:""}
    return (
      <>
        {product ? (
          <>
            <div className="mt-5">
              <h3>ProductDetail</h3>
              <div className="row">
                <div className="col-4">
                  <img
                    className="img-thumbnail img-fluid"
                    src={product?.image}
                    style={{ width: "100%", objectFit: "cover" }}
                    alt="iphone"
                  />
                </div>
                <div className="col-8">
                  <p>Tên sản phẩm : {product?.name}</p>
                  <p>Giá sản phẩm: {product?.price}$</p>
                  <p>Tồn kho: {product?.quantity} đôi</p>
                  <p>Mô tả: {product?.description}</p>
                  <p>{product?.shortDescription}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Chưa chọn sản phẩm"
        )}
      </>
    );
  }
}
