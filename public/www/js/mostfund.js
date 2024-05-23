window.addEventListener("load", function () {
  const dataUrl = "./apis/mostfund.json";
  fetch(dataUrl)
    .then((response) => {
      console.log(response);
    })
    .then()
    .catch();
});
