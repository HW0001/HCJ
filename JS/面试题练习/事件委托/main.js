const div = document.getElementById("par");
div.addEventListener("click", fn);

function fn(e) {
  eventBubbing(div, e, "li", () => {
    console.log("找到元素了");
  });
}

function eventBubbing(source, currentel, target, fn) {
  let el = currentel.target;
  while (el) {
    if (el.tagName.toLowerCase() === target) {
      fn();
      return;
    }
    if (el === source) return;
    else {
      el = el.parentNode;
    }
  }
}
