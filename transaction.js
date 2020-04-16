const axios = require('axios')
class Transaction {
  constructor(o) {
    if (o && o.url) {
      this.url = o.url
      this.headers = o.headers
      this.statusPath = "/mapi/tx"
      this.pushPath = "/mapi/tx"
    }
  }
  push(rawtx) {
    if (this.url) {
      let u = this.url + (this.pushPath ? this.pushPath : "")
      return axios.post(u, { rawtx: rawtx }, {
        headers: this.headers
      }).then((res) => {
        return JSON.parse(res.data.payload)
      })
    } else {
      throw new Error("Must instantiate with a miner merchant API root URL")
    }
  }
  status(id) {
    if (this.url) {
      let u = this.url + (this.statusPath ? this.statusPath : "") + "/" + id
      return axios.get(u, { headers: this.headers }).then((res) => {
        return JSON.parse(res.data.payload)
      })
    } else {
      throw new Error("Must instantiate with a miner merchant API root URL")
    }
  }
}
module.exports = Transaction
