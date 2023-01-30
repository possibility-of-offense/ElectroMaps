import React from "react";

import attributes from "./styles/ShopBoxItem.module.css";

function ShopBoxItem({ alt, title, src }) {
  return (
    <div className={attributes.imageBox}>
      <img alt={alt} className={attributes.image} title={title} src={src} />
    </div>
  );
}

export default ShopBoxItem;
