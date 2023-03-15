// html кодддон header тегин таап алабыз
const header = document.querySelector("header");

// header тегине header_container деген класс бар div тег ачабыз
// let block = document.createElement("div");
// block.className = "header_container";
// header.append(block);

// light_dark()

// create =>> a
// let div_a = document.createElement("a");
// div_a.className = "logo";
// div_a.innerHTML = '<img src="/img/icon.png" alt="">';
// div_a.href = "/";
// block.append(div_a);

// create =>> nav
// let div_nav = document.createElement("nav");
// block.append(div_nav);
//
// // create =>> ul внутри nav
// let div_ul = document.createElement("ul");
// div_nav.append(div_ul);
//
// // create =>> li внутри ul
// let div_li1 = document.createElement("li");
// div_ul.append(div_li1);

// create =>> a внутри li
// let div_li_a1 = document.createElement("a");
// div_li_a1.className = "active";
// div_li_a1.innerHTML = "Discover";
// div_li_a1.href = "#";
// div_li1.append(div_li_a1);

// create =>> li внутри ul
// let div_li2 = document.createElement("li");
// div_ul.append(div_li2);

// create =>> a внутри li
// let div_li_a2 = document.createElement("a");
// div_li_a2.innerHTML = "How it work";
// div_li_a2.href = "/test/";
// div_li2.append(div_li_a2);

// create =>> menus
// let div_menus = document.createElement("div");
// div_menus.className = "menus";
// div_nav.append(div_menus);
//
// // create =>> form
// let form = document.createElement("form");
// form.action = "#";
// form.method = "post";
// div_menus.append(form);

// create =>> line_search
// let line_search = document.createElement("line_search");
// line_search.className = "line_search";
// form.append(line_search);

// create =>> input
// let input = document.createElement("input");
// input.type = "search";
// input.placeholder = "Search";
// line_search.append(input);

// create =>> button
// let button = document.createElement("button");
// button.type = "submit";
// button.insnerHTML = '<ion-icon name="search-outline"></ion-icon>';
// line_search.append(button);

// create =>> detal
// let detal = document.createElement("div");
// detal.className = "detal";
// div_menus.append(detal);

// create =>> notification
// let notification = document.createElement("div");
// notification.className = "notification";
// notification.innerHTML = '<ion-icon name="notifications-outline"></ion-icon>';
// detal.append(notification);

// // create =>> green_circle
// let green_circle = document.createElement("div");
// green_circle.className = "green_circle";
// notification.append(green_circle);
//
// // create =>> a class=Upload
// let Upload = document.createElement("a");
// Upload.className = "Upload";
// Upload.href = "#";
// Upload.innerHTML = "Upload";
// detal.append(Upload);
//
// // create =>> a class=Connect_Wallet
// let Connect_Wallet = document.createElement("a");
// Connect_Wallet.className = "Connect_Wallet";
// Connect_Wallet.href = "#";
// Connect_Wallet.innerHTML = "Connect Wallet";
// detal.append(Connect_Wallet);

// create =>> menu_bar
// let menu_bar = document.createElement("div");
// menu_bar.className = "menu_bar";
// menu_bar.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
// block.append(menu_bar);

// Create header end

// menu burger
let btn_bar = document.querySelector(".menu_bar");
let btn_nav = document.querySelector(".header__nav");

let num = 0;
btn_bar.addEventListener("click", () => {
  num++;

  if (num == 1) {
    btn_bar.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  }

  if (num == 2) {
    btn_bar.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    num = 0;
  }

  btn_nav.classList.toggle("nav_active");
});

// create =>> light_dark
// let light_dark = document.createElement("div");
// light_dark.className = "light_dark";
// light_dark.id = "light_dark";
// light_dark.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
// document.body.append(light_dark);
//
// let bodyId = document.getElementById("body")
//
// let light_darkid = document.getElementById("light_dark");
// let light_darkid_num = 0;
// light_darkid.addEventListener("click", () => {
//   light_darkid_num++;
//
//   bodyId.classList.toggle("body");
//
//   if (light_darkid_num == 1) {
//     light_dark.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
//     div_a.innerHTML = '<img src="/img/icon_white.png" alt="">';
//   }
//
//   if (light_darkid_num == 2) {
//     light_dark.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
//     div_a.innerHTML = '<img src="/img/icon.png" alt="">';
//     light_darkid_num = 0;
//   }
// });
