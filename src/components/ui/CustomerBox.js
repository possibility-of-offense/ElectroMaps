import React from "react";

import attributes from "./styles/CustomerBox.module.css";

function CustomerBox({ user, review }) {
  const { userImage, userName } = user;

  return (
    <div className={attributes.container}>
      <img alt={userName} title={userName} src={userImage} />
      <h4>{userName}</h4>
      <p>{review}</p>
    </div>
  );
}

export default CustomerBox;
