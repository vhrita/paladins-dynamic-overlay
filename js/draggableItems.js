    var container = document.querySelector("#main");
    var activeItem = null;

    var active = false;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if(e.target.classList.contains('draggable')) {
            if(e.target !== e.currentTarget) {
                active = true;
    
                // this is the item we are interacting with
                activeItem = e.target;
    
                if (activeItem !== null) {
                if (!activeItem.xOffset) {
                    activeItem.xOffset = 0;
                }
    
                if (!activeItem.yOffset) {
                    activeItem.yOffset = 0;
                }
    
                if (e.type === "touchstart") {
                    activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
                    activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
                } else {
                    console.log("doing something!");
                    activeItem.initialX = e.clientX - activeItem.xOffset;
                    activeItem.initialY = e.clientY - activeItem.yOffset;
                }

                console.log(activeItem.initialX);
                console.log(activeItem.initialY);
                }
            }
        }
        else {
            console.log('não tem');
        }
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;

        let positions = JSON.parse(localStorage.getItem('positions'));
        let existe = false;

        positions.forEach(currentInArray);

        function currentInArray(element, index) {
          if(element['id']==activeItem.id) {
            existe = true;
            positions[index]['xPos'] = activeItem.currentX;
            positions[index]['yPos'] = activeItem.currentY;
          }
        }

        if(!existe) {
          let newElement = { "id":activeItem.id, "xPos":activeItem.currentX, "yPos":activeItem.currentY }
          positions.push(newElement);
        }
        console.log(activeItem.currentX, activeItem.currentY);
        console.log(positions);
        localStorage.setItem('positions', JSON.stringify(positions));
      }

      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {
        if (e.type === "touchmove") {
          e.preventDefault();

          activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
          activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

    function setPositions() {
      let positions = JSON.parse(localStorage.getItem('positions'));

      if(positions) {
        positions.forEach(element => {
          let el = document.getElementById(element['id']);
          let xPos = element['xPos'];
          let yPos = element['yPos'];
          el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        });
      } else {
        originalPositions();
      }
    }

    function originalPositions() {
        let json = [{ "id" : "cam-overlay", "xPos" : 0, "yPos" : 100 }, { "id" : "last-infos", "xPos" : 2.997159004211426, "yPos" : 100 }];

        localStorage.setItem('positions', JSON.stringify(json));
        setPositions();
    }

    $(document).ready( function(){
      setPositions();
    });