const menu = document.getElementsByClassName("sub");
const acc = document.getElementsByClassName("accordion");
const subItems = document.getElementsByClassName("sub-items");

let showMenu = true;
let rafa = true;

/** sub list  */
Array.from(menu).forEach((element, index) => {
  let show = true;

  element.addEventListener("mouseover", () => {
    acc[index].classList.add("on");
    subItems[index].classList.add("active");
  });

  // element.addEventListener("click", mySecondFunction);

  element.addEventListener("mouseout", () => {
    acc[index].classList.remove("on");
      subItems[index].classList.remove("active");
  });

  // element.addEventListener("mouseover", function() {
  //   acc[index].classList.toggle("on", show);
  //   subItems[index].classList.toggle("active", show);
  //   show = !show;
  // });
});

function myFunction() {
  console.log("Moused over!");
}

function mySecondFunction() {
  console.log("Clicked!");
}

function myThirdFunction() {
  console.log("Moused out!");
}


// menu[0].addEventListener("mouseover", func, false);
// menu[0].addEventListener("mouseout", func1, false);

// function func()
// {  // not needed since item is already global, 
//    // I am assuming this is here just because it's sample code?
//    // var item = document.getElementById("button"); 
//   //  item.setAttribute("style", "background-color:blue;")
//   // acc[0].classList.toggle("on", show);
//   subItems[0].classList.toggle("active", rafa);
//   console.log('A')
// }

// function func1()
// {  
//   console.log('B')
//   subItems[0].classList.toggle("active", rafa);
//   //  item.setAttribute("style", "background-color:green;")
// }