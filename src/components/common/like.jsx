import React from "react";
const Like = (props) => {
  let classes = props.liked ? "fa-heart fa-solid" : "fa-heart fa-regular";
  return (
    <i
      className={classes}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
