function menuBtn() {
    var elements = document.getElementsByClassName("menuList");
  
    var element = elements[0];
  
    if (element.style.display === "none") {
      element.style.display = "block"; 
    } else {
      element.style.display = "none";
    }
  }