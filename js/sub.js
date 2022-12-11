/* 주메뉴 */
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll("nav.gnb>ul>li");
const long = document.querySelector("li.long");
console.log(long);

headerWrap.classList.add("on");

for(let i=0;i<gnbMenu.length;i++){

    // pc
    if(window.innerWidth >= 960){

        gnbMenu[i].addEventListener("mouseover" , e => {
            e.currentTarget.classList.add("on");
            headerWrap.classList.add("on");
            headerWrap.style.height = "330px"; 
        });
        gnbMenu[i].addEventListener("mouseout" , e => {
            e.currentTarget.classList.remove("on");
            if(window.innerWidth >= 960){
                headerWrap.style.height = '64px';
            }
        });  

    }
    
    // tab
    if(window.innerWidth >= 560 && window.innerWidth < 960){

        gnbMenu[i].addEventListener("click", e=>{
            e.currentTarget.classList.toggle("on")
            if(e.currentTarget.classList.contains("on")){
                activation(i,gnbMenu);
            }
        })

    }

} //for문

// mob&tab
if(window.innerWidth < 560 || window.innerWidth >= 560 && window.innerWidth < 960){
    for(let i=0;i<gnbMenu.length;i++){
        gnbMenu[i].addEventListener("click" , e => {
            e.currentTarget.classList.toggle("on");
                if(e.currentTarget.classList.contains("on")){
                    activation(i,gnbMenu);
                }
        });
    
    }
}


// 검색박스
const srchBox = document.querySelector(".srch_box");
const srchForm = document.querySelector(".srch_box > form");
const btnSrch = document.querySelector(".srch_button");
const srchRecom = document.querySelector(".recom");

btnSrch.addEventListener("click", e=>{

    e.preventDefault();
    srchBox.classList.toggle("on");
    e.currentTarget.classList.toggle("close");

    if(e.currentTarget.classList.contains("close")){
        srchForm.style.display = "block";
        total.style.position = "fixed";
    }else{
        total.style.position = "relative";
    }

    // pc
    if(window.innerWidth >= 960){
        headerWrap.classList.toggle("srch");
    }

    // mob&tab
    if(window.innerWidth < 560 || window.innerWidth >= 560 && window.innerWidth < 960){
        headerWrap.classList.toggle("srch");
        srchBox.style.height = window.innerHeight+"px";
    }
});


// .header_wrap.active 배경설정
// 햄버거 버튼 클릭하면 header_wrap에 .active가 붙고
// total에 position fixed
// topmenu display none
// nav.gnb의 하이트값이 윈도우의 innerHeight
const hamburger = document.querySelector(".hamburger");
const total =document.querySelector("#total");
const gnbWrap = document.querySelector("nav.gnb");
const topMenu = document.querySelector("dl.top_menu");

hamburger.addEventListener("click", e=>{
    headerWrap.classList.add("active");
    total.style.position = "fixed";
    topMenu.style.display = "none";
    gnbWrap.style.height = window.innerHeight +"px";
});

// .header_close 누르면 .header_wrap.active 사라짐
// topmenu > 검색버튼, 햄버거 버튼 display block
// total position relative
const headerClose = document.querySelector(".header_close");

headerClose.addEventListener("click", e=>{
    e.preventDefault();
    headerWrap.classList.remove("active");
    topMenu.style.display = "block";
    total.style.position = "relative";
});



// 스크롤
let lastScroll = 0;
const btnMall = document.querySelector(".mall");

window.addEventListener("scroll",()=>{

    let scroll = document.querySelector("html").scrollTop;
    console.log(scroll);

    btnMall.style.top = `${scroll+800}px`;

    if(scroll > lastScroll){
        headerWrap.classList.add("on");
        headerWrap.style.transform = `translateY(-64px)`;
    }if(scroll < lastScroll){
        headerWrap.style.transform = `translateY(0)`;
        srchForm.style.display = "none";
    }
    lastScroll = scroll;
    
});

// topmenu
// topmenu .lang의 kor(a)를 클릭하면 .lang에 .on이 붙음
const kor = document.querySelector(".lang > ul > li:first-of-type a");
const eng = document.querySelector(".lang > ul > li:nth-of-type(2) a");
const lang = document.querySelector(".lang");
kor.addEventListener("click", e=>{
    e.preventDefault();
    lang.classList.toggle("on");
})

function activation(index,list){
    for(let el of list){
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}


// faq
const faqList = document.querySelectorAll(".faq_list > ul > li");

for(let k=0; k<faqList.length; k++){
    faqList[k].addEventListener("click", e=>{
        e.preventDefault();
        e.currentTarget.classList.toggle("on");
        if(e.currentTarget.classList.contains("on")){
            activation(k,faqList);
        }
    })
}


// footer > family site
const fam = document.querySelector(".family");
const btnFam = document.querySelector(".family > button");

btnFam.addEventListener("click", ()=>{
    fam.classList.toggle("on");
})


// footer (tab,mob)
// li를 클릭하면
// li가 액티베이션 + 토글 되고
// footer의 하이트값이 기존값 + 활성화된 하위ul의 height값이 됨
// ul.shop의 마진탑이 기존값 + 활성화된 하위ul의 height값
const footer = document.querySelector("#footer");
const footMenuList = document.querySelectorAll(".foot_nav > ul > li");
const footSubMenu = document.querySelectorAll(".foot_nav > ul > li > ul");
const shop = document.querySelector("ul.shop");

for(let i=0; i<footMenuList.length; i++){
    footMenuList[i].addEventListener("click", e=>{
        e.preventDefault();

        // mob&tab
        if(window.innerWidth < 560 || window.innerWidth >= 560 && window.innerWidth < 960){
            e.currentTarget.classList.toggle("on");
            if(e.currentTarget.classList.contains("on")){
                activation(i,footMenuList);
            }
            let plusH = footSubMenu[i].offsetHeight; 
            footer.style.height = `${730+plusH}px`;
            shop.style.margin = `${400+plusH}px 0 0 0`;
        }

    })
}


// topbutton
const btnTop = document.querySelector(".btn_top");

btnTop.addEventListener("click", e=>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})