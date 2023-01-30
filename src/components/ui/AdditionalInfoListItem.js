import React from "react";

import attributes from "./styles/AdditionalInfoListItem.module.css";

function AdditionalInfoListItem({ title, content }) {
  return (
    <div className={attributes.container}>
      <h2 className={attributes.title}>
        <span>{title}</span>
        <span className={attributes.skewBorder}></span>
      </h2>
      <p className={attributes.content}>{content}</p>
    </div>
  );
}

export default AdditionalInfoListItem;
