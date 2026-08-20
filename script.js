const form = document.querySelector("#quote-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = form.querySelector("button[type='submit']");
  const error = form.querySelector(".form-error");
  const originalLabel = button.innerHTML;
  button.disabled = true;
  button.textContent = "Sending…";
  error.hidden = true;

  const data = new FormData(form);
  data.append("_subject", "New Trash Titans Quote Request");
  data.append("_template", "table");
  data.append("_captcha", "false");

  try {
    const response = await fetch("https://formsubmit.co/ajax/kristoffershore@gmail.com", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error("Submission failed");
    form.reset();
    document.querySelector("#form-fields").hidden = true;
    document.querySelector("#form-success").hidden = false;
  } catch {
    error.textContent = "Something went wrong. Please call or text us at (904) 302-1061.";
    error.hidden = false;
    button.disabled = false;
    button.innerHTML = originalLabel;
  }
});
