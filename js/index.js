const onInputHandler = that => counterSelector => {
  const currentContent = that.value;
  console.log("currentContent", currentContent);
  const counterEl = document.querySelector(counterSelector);
  const remaining = Math.max(0, 120 - currentContent.length);
  counterEl.textContent = remaining;
};
