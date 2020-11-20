class Promise {
  static Pending = "pending";
  static Fulfiled = "fulfiled";
  static Rejected = "rejected";
  constructor(fn) {
    this.state = Promise.Pending;
    this.value = "";
    this.onFulfileds = [];
    this.onRejects = [];
    this.onf;
    try {
      if (typeof fn === "function") {
        fn(this.reslove.bind(this), this.reject.bind(this));
      }
    } catch (e) {
      this.reject(e);
    }
  }
  reslove(value) {
    if (this.state === Promise.Pending) {
      setTimeout(() => {
        this.state = Promise.Fulfiled;
        try {
          if (this.onFulfileds.length > 0) {
            this.onFulfileds[0].onfulfiled(value);
          }
        } catch (e) {
          this.reject(e);
        }
      });
    }
  }
  reject(value) {
    if (this.state === Promise.Pending) {
      setTimeout(() => {
        this.state = Promise.Rejected;
        try {
          if (this.onRejects.length > 0) {
            this.onRejects[0].onreject(value);
          }
        } catch (e) {
          this.reject(e);
        }
      });
    }
  }

  then(onfulfiled, onreject) {
    if (this.state === Promise.Pending) {
      this.onFulfileds.push({
        onfulfiled,
        onreject,
      });
    }
  }
}

const promise = new Promise((resolve, reject) => {
  resolve(22);
}).then((e) => {
  console.log(e);
});
