// active link function --------------------------------------------------------------
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("nav .nav-container .nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector("nav .nav-container .nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}

function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("main").style.marginLeft = "100%";
  }
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("main").style.marginLeft= "0";
}
// ---------------------------------------------------------------------------------------

// tabbing function ----------------------------------------------------------------------

// dekstop
function openTab(evt, year, content) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-nav");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(year).style.display = "block";
    document.getElementById(content).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

// mobile
function selectTab(value){
    if(value == 2018){
     document.getElementById('m2018').style.display = "block";
    } else{
     document.getElementById('m2018').style.display = "none";
    }

    if(value == 2019){
        document.getElementById('m2019').style.display = "block";
       } else{
        document.getElementById('m2019').style.display = "none";
    }

    if(value == 2020){
        document.getElementById('m2020').style.display = "block";
       } else{
        document.getElementById('m2020').style.display = "none";
    }

    if(value == 2021){
        document.getElementById('m2021').style.display = "block";
       } else{
        document.getElementById('m2021').style.display = "none";
    }

    if(value == 2022){
        document.getElementById('m2022').style.display = "block";
       } else{
        document.getElementById('m2022').style.display = "none";
    }
 } 

// ---------------------------------------------------------------------------------------

// simple slider -------------------------------------------------------------------------
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
// ---------------------------------------------------------------------------------------