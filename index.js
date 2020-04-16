const Fee = require('./fee')
const Transaction = require('./transaction')
/***************************************
new Minercraft({
  url: "https://www.ddpurse.com/openapi",
  headers: {
    token: "561b756d12572020ea9a104c3441b71790acbbce95a6ddbf7e0630971af9424b"
  }
})
***************************************/
class Minercraft {
  constructor(o) {
    this.fee = new Fee(o)
    this.tx = new Transaction(o)
  }
}
module.exports = Minercraft
