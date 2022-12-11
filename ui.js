class UI {
  constructor(firstSelect, secondSelect) {
    this.firstSelect = firstSelect;
    this.secondSelect = secondSelect;

    this.outputFirst = document.querySelector("#outputFirst");
    this.outputSecond = document.querySelector("#outputSecond");
    this.outputResult = document.querySelector("#outputResult");
  }
  changeFirst() {
    this.outputFirst.textContent =
      firstSelect.options[firstSelect.selectedIndex].textContent; //selected index ile hangisinin seçildiğini anlayabiliriz.
  }
  changeSecond() {
    this.outputSecond.textContent =
      secondSelect.options[secondSelect.selectedIndex].textContent;
  }
  addResult(data) {
    this.outputResult.value = data;
  }
}
