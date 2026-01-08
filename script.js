document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    const inputs = document.querySelectorAll("input");

    const name = inputs[0].value.trim();
    const bank = inputs[1].value.trim();
    const ifsc = inputs[2].value.trim();

    if (name === "" || bank === "" || ifsc === "") {
      alert("Please fill all details");
      return;
    }

    alert(
      "Form Submitted!\n\nName: " +
        name +
        "\nBank: " +
        bank +
        "\nIFSC: " +
        ifsc
    );

    inputs.forEach((input) => (input.value = ""));
  });
});
