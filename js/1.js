document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const section = document.querySelectorAll('div[class^="section"]');
    
      function showSection(sectionToShow) {
    
          section.forEach(section => {
              if (section.classList.contains(sectionToShow)) {
                  section.classList.remove('sectionnn');
              }
              else {
                  section.classList.add('sectionnn');
              }
          });
      }
    
      buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('button_back')) {
                showSection('section1'); 
            } else if (button.classList.contains('button_backk')) {
                showSection('section2'); 
            } else if (button.classList.contains('button_backkk')) {
              showSection('section3'); 
          }
          else if (button.classList.contains('button_backkkk')) {
            showSection('section4'); 
        }
              else {
                  if (button.classList.contains('button_section1')) {
                      showSection('section2');
                  } else if (button.classList.contains('button_section2')) {
                      showSection('section3');
                  } else if (button.classList.contains('button_section3')) {
                    showSection('section4');
                   } else if (button.classList.contains('button_section4')) {
                      showSection('section5');
                }
                else if (button.classList.contains('button_section5')) {
                  showSection('section5');
            }
              }
          });
      });
    
      // загрузка страницы
      showSection('section2');



//перемещение
let draggableElements = document.querySelectorAll(".chek, .title1, .title2");

draggableElements.forEach(function (element) {
    let isDragging = false;
    let offsetX, offsetY;
    let initialPosition = { left: 0, top: 0 }; 

    element.addEventListener("mousedown", function (event) {
        event.preventDefault();
        isDragging = true;
        element.style.cursor = 'grabbing'; //курсор

        initialPosition.left = element.offsetLeft;
        initialPosition.top = element.offsetTop;

        const rect = element.getBoundingClientRect();

        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        element.style.position = 'absolute';
        element.style.marginLeft = '0'; 
        element.style.marginTop = '0';  
        element.style.left = rect.left + 'px'; 
        element.style.top = rect.top + 'px';   

        function onMouseMove(event) {
            if (isDragging) {
                let x = event.clientX - offsetX;
                let y = event.clientY - offsetY;

                element.style.left = x + "px";
                element.style.top = y + "px";
            }
        }

        function onMouseUp(event) {
            isDragging = false;
            element.style.cursor = 'grab'; 
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    element.addEventListener("mouseover", function() {
      element.style.cursor = 'grab';
  });


  element.addEventListener("mouseout", function() {
      element.style.cursor = 'default'; 
  });
});

//знаки ?
let predictButton = document.getElementById("pagge2");
let help = document.querySelector(".help"); // Исправлено: Используем querySelector для класса
let closeButton = document.querySelector(".close"); // Исправлено: Используем querySelector для класса

predictButton.addEventListener("click", function() {
  help.style.display = "block";
});

closeButton.addEventListener("click", function() {
  help.style.display = "none";
});

let predictButton1 = document.getElementById("pagge5");
let help1 = document.querySelector(".help1"); // Исправлено: Используем querySelector для класса
let closeButton1 = document.querySelector(".close1"); // Исправлено: Используем querySelector для класса

predictButton1.addEventListener("click", function() {
  help1.style.display = "block";
});

closeButton1.addEventListener("click", function() {
  help1.style.display = "none";
});

let predictButton2 = document.getElementById("pagge6");
let help2 = document.querySelector(".help2"); // Исправлено: Используем querySelector для класса
let closeButton2 = document.querySelector(".close2"); // Исправлено: Используем querySelector для класса

predictButton2.addEventListener("click", function() {
  help2.style.display = "block";
});

closeButton2.addEventListener("click", function() {
  help2.style.display = "none";
});

let predictButton3 = document.getElementById("pagge7");
let help3 = document.querySelector(".help3"); // Исправлено: Используем querySelector для класса
let closeButton3 = document.querySelector(".close3"); // Исправлено: Используем querySelector для класса

predictButton3.addEventListener("click", function() {
  help3.style.display = "block";
});

closeButton3.addEventListener("click", function() {
  help3.style.display = "none";
});

let predictButton4 = document.getElementById("pagge8");
let help4 = document.querySelector(".help4"); // Исправлено: Используем querySelector для класса
let closeButton4 = document.querySelector(".close4"); // Исправлено: Используем querySelector для класса

predictButton4.addEventListener("click", function() {
  help4.style.display = "block";
});

closeButton4.addEventListener("click", function() {
  help4.style.display = "none";
});
})