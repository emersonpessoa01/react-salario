import React, { Component } from "react";

export default class proportionBar extends Component {
  render() {
    const {
      inss,
      irpf,
      netSalary,
      colorINSS = "#FF2D20",
      colorIRPF = "#DD0031",
      colorNetSalary = "#13988a",
    } = this.props;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            backgroundColor: colorINSS,
            width: inss + "%",
            height: "20px",
          }}
        />

        <div
          style={{
            backgroundColor: colorIRPF,
            width: irpf + "%",
            height: "20px",
          }}
        />

        <div
          style={{
            backgroundColor: colorNetSalary,
            width: netSalary + "%",
            height: "20px",
          }}
        />
      </div>
    );
  }
}
