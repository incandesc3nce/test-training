function calculator(a, b, oper) {
  if (a == undefined || b == undefined || oper == undefined) {
    throw new Error("One of the arguments is not specified.");
  }

  const aNumber = Number(a);
  const bNumber = Number(b);

  if (isNaN(aNumber) || isNaN(bNumber)) {
    throw new Error("One of the arguments is NaN.");
  }

  switch (oper) {
    case "+":
      return aNumber + bNumber;
    case "-":
      return aNumber - bNumber;
    case "*":
      return aNumber * bNumber;
    case "/":
      if (b === 0) throw new Error("Division by 0.");

      return aNumber / bNumber;
    default:
      throw new Error("Wrong operator specified.");
  }
}

module.exports = calculator;
