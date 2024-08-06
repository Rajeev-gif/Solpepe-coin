const dropdownContent = [];
dropdownContent[0] = document.getElementById("DropdownContent1");
dropdownContent[1] = document.getElementById("DropdownContent2");
dropdownContent[2] = document.getElementById("DropdownContent3");
dropdownContent[3] = document.getElementById("DropdownContent4");
function toggleDropdown1() {
     
     dropdownContent.forEach(dropdown => {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
     });
    // if (dropdownContent.style.display === "block") {
    //   dropdownContent.style.display = "none";
    // } else {
    //   dropdownContent.style.display = "block";
    // }
  }