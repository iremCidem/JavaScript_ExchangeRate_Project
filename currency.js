var myHeaders = new Headers();
myHeaders.append("apikey", "UnD4h7l4FIRsqFy5wRO80eD3HylbUtsM");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};
class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.amount = null;
    this.url = "http://api.apilayer.com/exchangerates_data/convert?";
  }
  changeAmount(amount) {
    this.amount = amount; //amount değerim güncellenebilsin diye this.amount girilen yeni amount değeri olacak.
  }
  changeFirstCurrency(newfirstcurrency) {
    this.firstCurrency = newfirstcurrency;
  }
  changeSecondCurrency(newsecondcurrency) {
    this.secondCurrency = newsecondcurrency;
  }
  exchange() {
    return new Promise((resolve, reject) => {
      fetch(
        this.url +
          "to=" +
          this.firstCurrency +
          "&from=" +
          this.secondCurrency +
          "&amount=" +
          this.amount,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          const total = data.result;
          resolve(total);
        })
        .catch((err) => reject(err));
    });
  }
}
