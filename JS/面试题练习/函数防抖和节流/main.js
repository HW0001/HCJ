btn1.addEventListener("click", fn1);
btn2.addEventListener("click", fn2);

//==================================
//===========节流===================
//放外面是为了不每次点击就创建出新的对象
const thr = new throttle(() => {
  console.log(2);
}, 2000);

function fn1() {
  thr();
}

function throttle(fn, interval) {
  let throttle_state = true;
  return function () {
    if (throttle_state) {
      throttle_state = false;
      fn.apply(null, arguments);
      setTimeout(() => {
        throttle_state = true;
      }, interval);
    }
  };
}
//==================================
//===========防抖===================

const ns = new NoShake(() => {
  console.log(2);
}, 2000);

function fn2() {
  ns();
}

function NoShake(fn, interval) {
  let noShake_state;
  return function () {
    if (noShake_state) {
      clearTimeout(noShake_state);
    }
    noShake_state = setTimeout(() => {
      fn.apply(null, arguments);
    }, interval);
  };
}
