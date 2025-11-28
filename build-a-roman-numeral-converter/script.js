const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
  const romanMap = [
    { val: 1000, symbol: "M" },
    { val: 900, symbol: "CM" },
    { val: 500, symbol: "D" },
    { val: 400, symbol: "CD" },
    { val: 100, symbol: "C" },
    { val: 90, symbol: "XC" },
    { val: 50, symbol: "L" },
    { val: 40, symbol: "XL" },
    { val: 10, symbol: "X" },
    { val: 9, symbol: "IX" },
    { val: 5, symbol: "V" },
    { val: 4, symbol: "IV" },
    { val: 1, symbol: "I" }
  ];

  let result = "";

  romanMap.forEach(({ val, symbol }) => {
    while (num >= val) {
      result += symbol;
      num -= val;
    }
  });

  return result;
};

const handleConvert = () => {
  const value = numberInput.value;

  // Reset animation
  output.classList.remove("show");

  if (!value) {
    output.textContent = "Please enter a valid number";
    output.classList.add("show");
    return;
  }

  const num = parseInt(value);

  if (num < 1) {
    output.textContent =
      "Please enter a number greater than or equal to 1";
    output.classList.add("show");
    return;
  }

  if (num >= 4000) {
    output.textContent =
      "Please enter a number less than or equal to 3999";
    output.classList.add("show");
    return;
  }

  output.textContent = convertToRoman(num);

  // Slight delay para animación
  setTimeout(() => output.classList.add("show"), 10);
};

convertBtn.addEventListener("click", handleConvert);