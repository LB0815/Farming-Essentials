document.addEventListener("click", (event) => {
  const button = event.target.closest(".button");
  if (!button || event.defaultPrevented) return;

  const bounds = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.setAttribute("aria-hidden", "true");
  ripple.style.left = `${event.clientX ? event.clientX - bounds.left : bounds.width / 2}px`;
  ripple.style.top = `${event.clientY ? event.clientY - bounds.top : bounds.height / 2}px`;
  button.append(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
});