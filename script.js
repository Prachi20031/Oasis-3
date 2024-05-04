const temperatureInput = document.querySelector("#degree");
const temperatureOutput = document.querySelector("#celsius");
const convertButton = document.querySelector("#convert-btn");
const temperatureType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  temperatureOutput.textContent = "";
});

convertButton.addEventListener("click", () => {
  const inputValue = parseFloat(temperatureInput.value);
  const selectedType = temperatureType.value;
  let convertedValue;
  if (selectedType === "fahrenheit") {
    convertedValue = (inputValue - 32) * (5 / 9);
  } else if (selectedType === "kelvin") {
    convertedValue = inputValue - 273.15;
  } else {
    console.error("Invalid temperature type selected!");
    return;
  }
  temperatureOutput.textContent = `${convertedValue.toFixed(3)} °C`;
});
