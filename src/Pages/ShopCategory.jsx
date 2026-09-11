import React, { useContext } from "react";
import "./Styles/ShopCategory.css";
import { ShopContextCreated } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  // consume context
  const { all_product } = useContext(ShopContextCreated);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 24 products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="DropDown-Icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, key) => {
          if (props.category === item.category) {
            return (
              <Item
                key={key}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
