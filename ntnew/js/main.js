document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector(".feedback-form-btn").addEventListener("click", function () {
    document.querySelector(".feedback").classList.toggle("open");
  });

  document.querySelector(".feedback-close").addEventListener("click", function () {
    document.querySelector(".feedback").classList.remove("open");
  });

  document.querySelector(".feedback").addEventListener("click", function (event) {
    if (!event.target.closest(".feedback-modal")) {
      document.querySelector(".feedback").classList.remove("open");
    }
  });
});