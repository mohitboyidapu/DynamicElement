document.getElementById("trigger-btn").addEventListener("click", function () {
  var newButton = document.createElement("button");
  newButton.className = "btn-test";
  newButton.textContent = "Button";
  document.getElementById("btns").appendChild(newButton);

});

document
  .getElementById("trigger-beacon")
  .addEventListener("click", function () {
    var newButton = document.createElement("button");
    newButton.className = "btn-test beacons";
    newButton.textContent = "Beacons";
    document.getElementById("other-Beacons").appendChild(newButton);
  });

document
  .getElementById("trigger-tip-shift")
  .addEventListener("click", function () {
    if (document.getElementById("btns").classList.contains("shift-to-right")) {
      document.getElementById("btns").classList.remove("shift-to-right");
    } else {
      document.querySelectorAll("#btns .btn-test").forEach(function (element) {
        element.remove();
      });
      // setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          var newButton = document.createElement("button");
          newButton.className = "btn-test";
          newButton.textContent = "Button";
          document.getElementById("btns").appendChild(newButton);
        }
        document.getElementById("btns").classList.add("shift-to-right");
      // }, 1000);
    }
  });
