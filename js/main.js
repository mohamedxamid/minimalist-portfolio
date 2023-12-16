import form from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
    form();

    const modifiers = {
        siteHeaderActive: "site-header_active",
        sitenavTogglerActive: "site-header__sitenav-toggler_actice"
    };
    
    const elSiteHeader = document.querySelector('.site-header');
    const elSitenavToggler = elSiteHeader.querySelector('.site-header__sitenav-toggler');
    
    if (elSitenavToggler) {
        elSitenavToggler.addEventListener("click", function () {
            elSitenavToggler.classList.toggle(modifiers.sitenavTogglerActive);
            elSiteHeader.classList.toggle(modifiers.siteHeaderActive);
        });
    };
})