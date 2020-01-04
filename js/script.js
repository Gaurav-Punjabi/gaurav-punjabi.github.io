(function () {
    const elmHamburger                  =   document.querySelector('.hamburger');
    const gNavItems                     =   document.querySelectorAll('.global-menu__item');
    const elmOverlay                    =   document.querySelector('.shape-overlays');
    const overlay                       =   new ShapeOverlays(elmOverlay);
    const coverImage                    =   $(".cover-image");
    let currentPage                     =   $('#home');
    let menuLinks                       =   $('.menu-link');
    $('section').hide();
    currentPage.show();
    coverImage.hide();


    elmHamburger.addEventListener('click', () => {
        if (overlay.isAnimating) {
            return false;
        }
        overlay.toggle();
        if (overlay.isOpened === true) {
            elmHamburger.classList.add('is-opened-navi');
            // setTimeout(() => coverImage.show(), 750);
            for (var i = 0; i < gNavItems.length; i++) {
                gNavItems[i].classList.add('is-opened');
            }
        } else {
            elmHamburger.classList.remove('is-opened-navi');
            coverImage.hide();
            for (var i = 0; i < gNavItems.length; i++) {
                gNavItems[i].classList.remove('is-opened');
            }
        }
    });

    // menuLinks.click(function() {
    //     if (overlay.isAnimating) {
    //         return false;
    //     }
    //     overlay.toggle();
    //
    //     elmHamburger.classList.remove('is-opened-navi');
    //
    //     let requestedPage = $(this).attr('id');
    //     console.log(`Requested page : ${requestedPage}`);
    //     requestedPage = $(requestedPage);
    //
    //     for (var i = 0; i < gNavItems.length; i++) {
    //         gNavItems[i].classList.remove('is-opened');
    //     }
    //     currentPage.hide();
    //     requestedPage.show();
    //     requestedPage.addClass("animated").addClass("slideInDown");
    //     currentPage = requestedPage;
    // })
}());
