import React from "react";
import "./Badge.css";

function Badge(props) {
  const getBadgeColor = () => {
    switch (props.status) {
      case "Todo":
        return "badge-todo";
      case "In Progress":
        return "badge-in-progress";
      case "Complete":
        return "badge-completed";
      case "Pending":
        return "badge-pending";
      default:
        return "badge-todo";
    }
  };
  return (
    <div className={`badge ${getBadgeColor()}`}>
      <p>{props.status}</p>
    </div>
  );
}

export default Badge;
