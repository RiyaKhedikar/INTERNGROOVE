/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== ABOUT TABS ====================*/

const tabs = document.querySelectorAll('.tabs__btn');
const tabContents = document.querySelectorAll('.tabs__item');

console.log(tabs);
console.log(tabContents.length);

tabs.forEach((tab) => {
    
    tab.addEventListener("click",()=>{
        tabs.forEach((tab)=>tab.classList.remove('tab__active'))
        tabContents.forEach((tab)=>tab.classList.remove('tab__active'))
        tab.classList.add('tab__active')
        document.getElementsByClassName(tab.id)[0].classList.add('tab__active')
        console.log(tab.id);

    })


    

    // tab.addEventListner('click', (e) => {
    //     console.log('tab clicked');
    //     const target = document.querySelector(tab.dataset.target);

    //     tabContents.forEach((tabContent) => {
    //         tabContent.classList.remove('tab__active');
    //     });

    //     target.classList.add('tab__active');

    //     tabs.forEach((tab) => {
    //         tab.classList.remove('tab__active');
    //     });
    //     tab.classList.add('tab__active');
    // });
});



/*=============== CONTACT FORM =============== */