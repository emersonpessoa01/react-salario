// const numberFormatter = Intl.NumberFormat("pt-BR");

const moneyFormatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// const formatterNumber = (number) => {
//   return numberFormatter.format(number);
// };

const formatterMoney = (number) => {
  return moneyFormatter.format(number);
};

const formatPercentage = (number) => {
  return `${number.toFixed(2).replace(",", "")}%`;
};

export { formatterMoney, formatPercentage };
