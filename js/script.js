"use strict";

// Elements

const adviceTitle = document.querySelector(".advice__title");
const adviceText = document.querySelector(".advice__text");
const adviceBtn = document.querySelector(".advice__button");

const renderAdvice = function (slip) {
  adviceTitle.textContent = `Advice #${slip.id}`;
  adviceText.textContent = `"${slip.advice}"`;
};

const generateRandomAdvice = async function () {
  const data = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await data.json();

  renderAdvice(slip);
};

adviceBtn.addEventListener("click", generateRandomAdvice);
