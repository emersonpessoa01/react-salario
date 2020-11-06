import React, { Component } from "react";
import { formatPercentage, formatterMoney } from "../helpers/formatters";

export default class InputReadOnly extends Component {
  render() {
    const { color = "black", value, percentage = 0, label } = this.props;
    // console.log(this.props)
    const id="input" + label

    const formattedPercentage =
      percentage > 0 ? `(${formatPercentage(percentage)})` : "";
    const formatterValue = `${formatterMoney(value)} ${formattedPercentage}`;
    // console.log(formatterValue)

    return (
      <div className="input-field col s12 m6 l3">
        <input
          id={id}
          value={formatterValue}
          readOnly
          style={{ color, fontWeight: "bold" }}
        />
        <label className="active" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
}
