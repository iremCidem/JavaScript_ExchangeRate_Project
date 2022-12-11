//elementleri seçme

const inputAmount = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const inputResult = document.querySelector("#outputResult");
const currency = new Currency();
const ui = new UI();

eventlisteners();

function eventlisteners() {
  inputAmount.addEventListener("input", amountChange);
  firstSelect.onchange = function () {
    currency.changeFirstCurrency(
      firstSelect.options[firstSelect.selectedIndex].textContent
    );
    ui.changeFirst();
  };

  secondSelect.onchange = function () {
    currency.changeSecondCurrency(
      secondSelect.options[secondSelect.selectedIndex].textContent
    );
    ui.changeSecond();
  };
}

function amountChange() {
  currency.changeAmount(inputAmount.value);
  currency
    .exchange()
    .then((response) => {
      ui.addResult(response);
    })
    .catch((err) => console.log(err));
}
