import React, { Component } from "react";
import { calculateSalaryFrom } from "./helpers/salary";

import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import ProportionalBar from "./components/ProportionalBar";

const COLOR_INSS = "#FF2D20";
const COLOR_IRPF = "#DD0031";
const COLOR_NET_SALARY = "#16a085";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }
  // handleFullSalaryChange=(newValue) => {
  //   this.setState({ fullSalary: newValue})
  // }
  handleFullSalaryChange = (event) => {
    const newValue = +event.target.value;
    this.setState({ fullSalary: newValue });
  };

  render() {
    const { fullSalary } = this.state;

    const salaryObject = calculateSalaryFrom(fullSalary);
    console.log(salaryObject);

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentageINSS,
      percentageIRPF,
      percentageNetSalary,
    } = salaryObject;

    return (
      <div className="container">
        <h1 className="center" style={{color: "#02569B", fontFamily: 'Montserrat'}} >React - Salário</h1>

        <div className="row">
          <InputFullSalary
            currentValue={fullSalary}
            onSalaryChange={this.handleFullSalaryChange}
          />
        </div>

        <div className="row">
          <InputReadOnly label="Base INSS" value={baseINSS} />

          <InputReadOnly
            label="Desconto INSS"
            value={discountINSS}
            percentage={percentageINSS}
            color={COLOR_INSS}
          />

          <InputReadOnly label="Base IRPF" value={baseIRPF} />

          <InputReadOnly
            label="Desconto IRPF"
            value={discountIRPF}
            percentage={percentageIRPF}
            color={COLOR_IRPF}
          />

          <InputReadOnly
            label="Salário Líquido"
            value={netSalary}
            percentage={percentageNetSalary}
            color={COLOR_NET_SALARY}
          />
        </div>
        <ProportionalBar
          inss={percentageINSS}
          irpf={percentageIRPF}
          netSalary={percentageNetSalary}
        />
      </div>
    );
  }
}
