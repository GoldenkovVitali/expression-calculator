function eval() {
  return;
}

function expressionCalculator(expr) {
  let exprArr = expr.replace(/\s/g, "").split(""); //удаляем пробелы из строки (.replace(/\s/g, "") и перводим строку в массив
  console.log(arguments);
  Errors(exprArr); //вызываем функцию с проверками на ошибки (непарность скобок и деление на 0)

  function Errors(exprArr) {
    let a = 0;
    for (let i = 0; i < exprArr.length; i++) {
      if (exprArr[i] === "(") {
        a++;
      }
      if (exprArr[i] === ")") {
        a--;
      }
    }
    if (a !== 0) {
      throw new Error("ExpressionError: Brackets must be paired."); //проверка на парность строк (если не парные - выдаем ошибку)
    }

    for (let i = 0; i < exprArr.length; i++) {
      if (exprArr[i] === "/") {
        if (exprArr[i + 1] === "0")
          throw new Error("TypeError: Division by zero."); //проверка деления на 0 (если i-й элемент=/ , i+2(с учетом пробела =0) - выдаем ошибку)
      }
    }
  }

 total = new Function("return " + expr.replace(/\s/g, "")); // создаем новую функцию с подсчетом "return " + expr (в т.ч. удаляем пробелы из строки - .replace(/\s/g, ""))
 return  total(); // вызывaем функцию и выводим результат
}

module.exports = {
  expressionCalculator
};
