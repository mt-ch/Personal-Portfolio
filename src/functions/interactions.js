export const mouseOverButton = (buttonClass) => {
    var button = document.querySelector(buttonClass);
    button.classList.add("hover");
  };

export const mouseLeaveButton = (buttonClass) => {
var button = document.querySelector(buttonClass);
button.classList.remove("hover");
};

