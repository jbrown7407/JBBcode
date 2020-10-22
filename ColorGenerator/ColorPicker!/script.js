$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")
    let num = 0
 

    $(() => {
       
       
        const $colorPalette = $('#color-palette');
        const $myPalette = $('#my-palette');
        const $generate = $('#generate');



        const makePalette = () => {
          $colorPalette.empty()
          for(let i = 0; i < 150; i++){
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const color = 'rgb('+red+','+green+','+blue+')';

            const $square = $('<div>');
            $square.addClass('square')
            $square.css('background-color', color);
            $colorPalette.append($square);
          }
        }
    makePalette()

        $($generate).click(function generate(){ //TITLE SCREEN
          $colorPalette.empty()
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);
          const color = 'rgb('+red+','+green+','+blue+')';

          const $square = $('<div>');
          $square.addClass('square')
          $square.css('background-color', color);
          $colorPalette.append($square);
        
            $myPalette.show()
            // $colorPalette.hide()
            $myPalette.text("Color Red:" + red + " ,Color Blue:" + blue +" ,Color Green:" + green)

            console.log("replace");
              })
            })
            // $(".scene").hide()
            // $(".gameOverScene").fadeIn(700).show();
            // $(".gameScene2").hide()
            // $(".phase2").hide()
            // $(".phase5").hide()
            // cl("Title Screen")
               




      });
    
    
       

   
