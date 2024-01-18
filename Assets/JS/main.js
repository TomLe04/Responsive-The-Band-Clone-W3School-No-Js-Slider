// JS Modal Begin
    const buyBtns = document.querySelectorAll('.js-buy-ticket')
    const modal = document.querySelector('.js-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modalClose = document.querySelector('.js-modal-close')
    const modalCloseBtn = document.querySelector('.js-close-btn')

    function showBuyTickets() {
      modal.classList.add('open')
    }

    function hideBuyTickets() {
      modal.classList.remove('open')
    }

    for (const buyBtn of buyBtns) {
      buyBtn.addEventListener('click', showBuyTickets)
    }

    modalCloseBtn.addEventListener('click', hideBuyTickets)

    modalClose.addEventListener('click', hideBuyTickets)

    modal.addEventListener('click', hideBuyTickets)

    modalContainer.addEventListener('click', function (event) {
      event.stopPropagation()
    })
// JS Modal End

// JS Mobile Begin
    var header = document.getElementById('header');
    var mobileMenu = document.getElementById('mobile-menu');
    var headerHeight = header.clientHeight;

    // Đóng mở mobile menu
    mobileMenu.onclick = function () {
      var isClosed = header.clientHeight === headerHeight;
      if (isClosed) {
        header.style.height = 'auto';
      } else {
        header.style.height = null;
      }
    }

    // Tự động đóng khi chọn menu
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for (var i = 0; i < menuItems.length; i++) {
      var menuItem = menuItems[i];

      menuItem.onclick = function () {
        header.style.height = null;
      }
    }
// JS Mobile End

// Responsive Text Replacement Begin
    var mql = window.matchMedia("(max-width: 740px)");
    function matches() {
      var elem = document.getElementById("more");
      elem.innerHTML = mql.matches ? 'Merch' : 'MORE <i class="fa fa-caret-down"></i>';

    }
    mql.addListener(matches);
  // Responsive Text Replacement End