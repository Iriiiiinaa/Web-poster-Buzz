document.addEventListener('DOMContentLoaded', () => {
        let draggableElements = document.querySelectorAll(".sticker1, .sticker2, .sticker3, .sticker4, .sticker5"); 

      draggableElements.forEach(function (element) {
          let isDragging = false;
          let offsetX, offsetY;
          let initialPosition = { left: 0, top: 0 };

          element.addEventListener("mousedown", function (event) {
              isDragging = true;
              element.style.cursor = 'grabbing'; 

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
                  element.style.opacity = '0.8'; 
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
    })
