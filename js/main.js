document.addEventListener("DOMContentLoaded", ()=>{
  const burgerBtn = document.querySelector(".burger-btn");
  const burgerMenu = document.querySelector(".responsive-nav");

  burgerBtn.addEventListener("click", function () {
    burgerMenu.classList.toggle("show");
    if(burgerBtn.setAttribute("icon", busrgerMenu.classList.contains("show") ? "bi:x" : "bi:list"));
  });

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

  var tabs = document.querySelectorAll('.products__sidetab button');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var tabId = this.getAttribute('data-tab');
      changeProduct(tabId);
    });
  });
  function changeProduct(productId) {
    var productContents = document.querySelectorAll('.product-content');
    productContents.forEach(function(content) {
      content.classList.remove('active');
    });

    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });

    var selectedProduct = document.getElementById(productId);
    selectedProduct.classList.add('active');

    var activeTab = document.querySelector('.products__sidetab button[data-tab="' + productId + '"]');
    activeTab.classList.add('active');
  }
});
