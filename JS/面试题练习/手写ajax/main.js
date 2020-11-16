document.getElementById("btn1").addEventListener("click", ajax);
document.getElementById("btn2").addEventListener("click", ajaxsimple);

function ajax() {
  const request = new XMLHttpRequest();
  request.open("GET", "http://httpbin.org/get");
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      console.log("请求完成");
      if (
        (request.status >= 200 && request.status < 300) ||
        request.status === 304 //请求的内容未发生变化,使用上次请求的文件
      ) {
        console.log("请求成功,并且那道的数据 为:");
        console.log(JSON.parse(request.responseText));
      }
    }
  };
}

function ajaxsimple() {
  const xml = new XMLHttpRequest();
  xml.open("get", "http://httpbin.org/get");
  xml.send();
  xml.onload = function () {
    console.log("请求成功,并且拿到的数据:");
    console.log(JSON.parse(xml.responseText));
  };
}
