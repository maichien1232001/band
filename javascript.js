const buyBtns = document.querySelectorAll('.js-buy-ticket');
const model = document.querySelector('.model');
const modelContainer = document.querySelector('.js-model-container');
const modelClose = document.querySelector('.js-model-close');

function showBuyTickets(){
    model.classList.add('open')
}

function hideBuyTickets(){
    
    model.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
modelClose.addEventListener('click', hideBuyTickets)
model.addEventListener('click', hideBuyTickets)
modelContainer.addEventListener('click', function(event){
    event.stopPropagation()
})


// Mobile Responsive

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function(){
    var close = header.clientHeight === headerHeight;
    if(close){
        header.style.height='auto';
    }
    else{
        header.style.height=null;
    }
}   

// Tự động đóng khi chọn menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems);
for (var i=0 ; i<menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }
        else{
            header.style.height=null;
        }
    }
}
