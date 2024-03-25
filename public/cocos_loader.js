!(function () {
  var canvas = document.createElement("canvas");
  canvas.id = "GameCanvas";
  canvas.tabIndex = 99;
  canvas.width = "100vw";
  canvas.height = "500";
  document.body.appendChild(canvas);
  var nthiendev = document.querySelector("#nthiendev");
  nthiendev.appendChild(canvas);
  System?.import("./index.js").catch(function (err) {
    console.error(err);
  });
})();
