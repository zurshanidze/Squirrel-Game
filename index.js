document.addEventListener("DOMContentLoaded", () => {
  let fullscreenContainer = document.querySelector(".fullscreen-container") 

    function getFullScreenElement(){
      return document.fullscreenElement
          || document.webkitFullscreenElement
          || document.mozFullscreenElement
          || document.msFullscreenElement
    }

    function fullscreenToggle() {
      if(getFullScreenElement()){
        document.exitFullscreen()
      }
      else{
        document.documentElement.requestFullscreen()
      }
    }

    fullscreenContainer.addEventListener("click", ()=> {
      fullscreenToggle()
    })

    fullscreenContainer.addEventListener("touchstart", ()=> {
      fullscreenToggle()
    })
})


// Prevent on DOuble Click Zoom 
// (For Mobile Devices)
document.addEventListener("dblclick", function(e){
  if (e.touches.length > 1) {
    return e.preventDefault()
  }
})




let menu = document.querySelector(".menu")
let coveredBackground = document.querySelectorAll(".covered-background")
let allcoveredBackground = [...coveredBackground]
let instruction = document.getElementById("instruction")
let instruction_text = document.getElementById("instruction-text")
let whatsNext = document.getElementById("what's-next")
let whatsNext_text = document.getElementById("author-text")
let author = document.getElementById("author")
let author_text = document.getElementById("author-text")


let menuList = document.querySelectorAll(".menu-lists")
let allMenuList = [...menuList]
author.addEventListener("click", changeList)
whatsNext.addEventListener("click", changeList)
instruction.addEventListener("click", changeList)


// Change Menu List on Click & Show on The Screen
function changeList(){
  allMenuList.forEach((item)=>{
        if(this.innerText === item.innerText){
          allcoveredBackground.map((i)=> {
            if(i.classList.contains("menu-covered-background")){
              i.classList.remove("menu-covered-background")
              console.log("test1")
            }
            else if(allcoveredBackground.map((i)=> {
              !i.classList.contains("menu-covered-background")})){
              console.log(allcoveredBackground)
              listChild = item.children
              listChild[0].classList.toggle("menu-covered-background")
              console.log("test2")
            }
    })
  }
  })
}



let gameOverWrapper = document.querySelector(".game-over-wrapper")
  let gameOverText = document.querySelector(".game-over-text")
  let start = document.querySelector(".start")
  let restart = document.querySelector(".restart")


  // Add Functionalities only after "Start" button clicked
  start.addEventListener("click", ()=> {

    menu.classList.add("unvisible")
    gameOverWrapper.classList.add("unvisible")

    allcoveredBackground.map((menuText)=> {
      menuText.classList.remove("menu-covered-background")
    })



    // Create and animate Intro Text (About "Yamagata")
    let intro = document.querySelector(".intro")


    let intro_h1_wrapper = document.querySelector(".intro-h1-wrapper")
    let intro_h1_text = document.querySelector(".intro-h1-text")

    let introH1Text_styles = window.getComputedStyle(intro_h1_text)
    let introH1Text_WidthPX = introH1Text_styles.getPropertyValue("width")
    let introH1Text_Width = parseInt(introH1Text_WidthPX)



    let intro_h2_wrapper = document.querySelector(".intro-h2-wrapper")
    let intro_h2_text = document.querySelector(".intro-h2-text")

    let introH2Text_styles = window.getComputedStyle(intro_h2_text)
    let introH2Text_WidthPX = introH2Text_styles.getPropertyValue("width")
    let introH2Text_Width = parseInt(introH2Text_WidthPX)



    let intro_h3_wrapper = document.querySelector(".intro-h3-wrapper")
    let intro_h3_text = document.querySelector(".intro-h3-text")

    let introH3Text_styles = window.getComputedStyle(intro_h3_text)
    let introH3Text_WidthPX = introH3Text_styles.getPropertyValue("width")
    let introH3Text_Width = parseInt(introH3Text_WidthPX)



    function showIntroText() {

        let intro1Wrapper_Width = 0;
        let intro2Wrapper_Width = 0;
        let intro3Wrapper_Width = 0;

      let setIntervalId = setInterval(()=> {
        if(parseInt(intro_h1_wrapper.style.width) >= introH1Text_Width){
          intro_h1_wrapper_width = "fit-content"
            clearInterval(setIntervalId)

              let setintervalSecodnId = setInterval(()=> {
                if(parseInt(intro_h2_wrapper.style.width) >= introH2Text_Width){
                  intro_h2_wrapper_width = "fit-content"
                  clearInterval(setintervalSecodnId)

                    let setintervalThirdnId = setInterval(()=> {
                        if(parseInt(intro_h3_wrapper.style.width) >= introH3Text_Width){
                          intro_h3_wrapper_width = "fit-content"
                          clearInterval(setintervalThirdnId)

                          let hideIntro_setTimeout = setTimeout(()=>{
                            intro.classList.add("hideIntro")
                            clearTimeout(hideIntro_setTimeout)
                              let removeWith_timeout = setTimeout(()=>{
                                document.body.removeChild(intro)
                                clearTimeout(hideIntro_setTimeout)
                              },2000)
                          }, 3000)
                        }
                        else{
                          intro3Wrapper_Width = intro3Wrapper_Width + 10
                          intro_h3_wrapper.style.width = intro3Wrapper_Width + "px"
                          console.log(intro3Wrapper_Width)
                          console.log(parseInt(intro_h3_wrapper.style.width), introH2Text_Width)  
                        }
                    },20)
                }
                else{
                  intro2Wrapper_Width = intro2Wrapper_Width + 10
                  intro_h2_wrapper.style.width = intro2Wrapper_Width + "px"
                  // console.log(intro2Wrapper_Width)
                  // console.log(parseInt(intro_h2_wrapper.style.width), introH2Text_Width)  
                }
              }, 20)
        }
        else{
          intro1Wrapper_Width = intro1Wrapper_Width + 10
          intro_h1_wrapper.style.width = intro1Wrapper_Width + "px"
          // console.log(intro_Width)
          // console.log(parseInt(intro_h1_wrapper.style.width), introH1Text_Width)  
        }
        
      }, 20)
  }
  showIntroText()


    


  let pointsH2 = document.querySelector(".points")
  let acornWrapper = document.querySelector(".acorn-wrapper")
  let acornAmountH2 = document.querySelector(".acorn-amount")
  let grid = document.querySelector(".grid")
  let movingBgsContainer = document.querySelector(".moving-bgs-container")
  let movingBg1 = document.querySelector(".moving-bg-1")
  let movingBg2 = document.querySelector(".moving-bg-2")
  let movingBg3 = document.querySelector(".moving-bg-3")
  let movingBg4 = document.querySelector(".moving-bg-4")
  let squirrel = document.querySelector(".squirrel")
  let block = document.querySelector(".block")
  let allBlock = [...document.querySelectorAll(".block")]
  let shootAcornStatic = document.querySelector(".shoot-acorn-static")
  let shootAcorn = document.querySelector(".shoot-acorn")
     

  let gridStyles = window.getComputedStyle(grid)
  let gridWidth_Px = gridStyles.getPropertyValue("width")
  let gridWidth = parseInt(gridWidth_Px)

  let gridHeight_Px = gridStyles.getPropertyValue("height")
  let gridHeight = parseInt(gridHeight_Px)
  
  let resizedWindow = false
  let isJumping = false;
  let secondJump = false;
  let currentJumpPosition = 0
  let firstJumpedFinalPosition
  let gameOver = false;
  // let isBlockRemoved = false;
  // let isBlockExists = false
  let acornShooted = false;
  // let blockPositionRight
  let shootAcornPositionRight = (gridWidth - 69)
  // let gravity = 9.8
  let points = 0
  let acornAmount = 0
  acornAmountH2.innerText = acornAmount

  
  // let gridStyles2 = window.getComputedStyle(grid).getPropertyValue("width")
  // let gridHeight = document.body.clientHeight + "px"
  // console.log(gridStyles2, "gridStyles2")




  // Resize Window
  // Listen it on every change & get new Value
  window.addEventListener("resize", checkResizeWindow)

  function checkResizeWindow(){
      resizedWindow = true
      let bodyStyles = window.getComputedStyle(document.body)
      let bodyWidth_Px = gridStyles.getPropertyValue("width")
      let bodyHeight_Px = gridStyles.getPropertyValue("height")
  }

  if(window.screen.width <= 960){
    document.body.style.width == document.documentElement.clientHeight
  }
  

  
    acornWrapper.addEventListener("touchstart", eventControl, (e)=>{
      console.log("touch start")
      console.log(e.touches)
    })
    document.addEventListener("touchstart", eventControl, (e)=>{
      console.log("move")
    })
    
      squirrel.style.bottom = "0px"
      shootAcornStatic.style.bottom = "0px"
      console.log(acornWrapper.getBoundingClientRect())

      let validPositionShoot = false
      
        let acornWidth = 130
        let acornHeight = 60

        let acornWrapperPositions = acornWrapper.getBoundingClientRect()
        let acornWrapperPosition_minX = acornWrapperPositions.left
        let acornWrapperPosition_maxX = acornWrapperPosition_minX + acornWidth
        let acornWrapperPosition_minY = acornWrapperPositions.top
        let acornWrapperPosition_maxY = acornWrapperPosition_minY + acornHeight
      


  function eventControl(e){
      if(e.touches){
        clientX = e.targetTouches.item(0).clientX
        clientY = e.targetTouches.item(0).clientY

        if(clientX >= acornWrapperPosition_minX &&
          clientX < acornWrapperPosition_maxX &&
          clientY >= acornWrapperPosition_minY &&
          clientY < acornWrapperPosition_maxY){
          validPositionShoot = true
        }
        else{
          validPositionShoot = false
        }
      }
    // console.log(e.targetTouches, clientX, clientY, acornWrapperPosition_minX, acornWrapperPosition_maxX, acornWrapperPosition_minY, acornWrapperPosition_maxY)

      if(e.keyCode === 38 || e.touches && !validPositionShoot && !restart.classList.contains("restart-visible")){
        console.log("jump")
        if(!isJumping){
          isJumping = true;
          jump()
        }
        else if(isJumping){
          secondJump = true
        }
    }
    
    else if(e.keyCode === 32 && acornAmount > 0 || e.touches && validPositionShoot){
      console.log("shoot")
      if(!acornAmount <= 0 && !acornShooted){
        shootingAcorn()
        acornShooted = true
      }
    }
  }
  document.addEventListener("keyup", eventControl)
  // document.addEventListener("touchend", eventControl)
  
  
  
  
  function jump(){
      
      let timerId = setInterval(()=> {
      // Move Down
         if(currentJumpPosition === 130 && !secondJump){
           clearInterval(timerId)
           
           let downTimerId = setInterval(()=> {
             currentJumpPosition = currentJumpPosition - 10
             squirrel.style.bottom = currentJumpPosition + "px"
             if(!acornShooted){
               shootAcornStatic.style.bottom = squirrel.style.bottom
             }
             

             if(currentJumpPosition === 0){
               clearInterval(downTimerId)
               isJumping = false;
             }
           }, 20)
         }
         
         //Move Up
          currentJumpPosition = currentJumpPosition + 10 
          squirrel.style.bottom = currentJumpPosition + "px"
          if(!acornShooted){
            shootAcornStatic.style.bottom = squirrel.style.bottom
          }
        // if Jump and Second Clicked Trigger "Second Jump" function
        if(secondJump){
          firstJumpedFinalPosition = currentJumpPosition
          clearInterval(timerId)
          isJumping = true;
          squirrel.classList.add("jumpAndSomersault")
          if(!acornShooted){
            shootAcornStatic.classList.add("jumpAndSomersault")
          }
          
          // Define Top Position - by adding to the first jump "currentJumpPosition" 200px
          // and clear increase "currentJumpPosition", define decrease
          let secondJumpInterval = setInterval(()=> {
            if(currentJumpPosition === (firstJumpedFinalPosition + 200)){
              clearInterval(secondJumpInterval)
              let secondJumpInterval2 = setInterval(()=> {
                currentJumpPosition = currentJumpPosition - 10
                squirrel.style.bottom = currentJumpPosition + "px"
                if(!acornShooted){
                  shootAcornStatic.style.bottom = squirrel.style.bottom
                }
                
                if(currentJumpPosition == 0){
                  squirrel.classList.remove("jumpAndSomersault")
                  shootAcornStatic.classList.remove("jumpAndSomersault")
                  clearInterval(secondJumpInterval2)
                  isJumping = false;
                  secondJump = false;
                }
              },20)
              
            }
            // in Second Jump function increase "currentJumpPosition" 
            currentJumpPosition = currentJumpPosition + 10
            squirrel.style.bottom = currentJumpPosition + "px"
            if(!acornShooted){
              shootAcornStatic.style.bottom = squirrel.style.bottom
            }
          }, 20)
        }
          
          
     }, 20)
      
           
  }
  
  
  
  
    function generateBlocks(){

       clearTimeout(generateFirstBlockWithTimeout)

    let blockPositionRight = 0
    let blockPositionBottom = 0
    let randomTime = 400 + (Math.random() * 4000)
    // console.log("example 1")
    
      let block = document.createElement("div")
        block.classList.add("block")
        grid.appendChild(block)
        isBlockExists = true
    
      let moveInterval = setInterval(()=>{
        shootAcornStatic.style.right = shootAcornPositionRight + "px"
        block.style.right = blockPositionRight + "px"
        
          if(parseInt(squirrel.style.bottom) <= 30 &&
             parseInt(block.style.right) >= gridWidth - 100 && parseInt(block.style.right) <= gridWidth - 30){
                shootAcornStatic.classList.remove("shoot-acorn")
                menu.classList.remove("unvisible")
                gameOverWrapper.classList.remove("unvisible")
                gameOverText.classList.add("displayed")
                start.classList.add("unvisible")
                restart.classList.add("restart-visible")
                gameOver = true
                isBlockExists = false
                console.log("example 3", parseInt(block.style.right), (gridWidth - 70))
                clearInterval(moveInterval)
            }
            else if(parseInt(block.style.right) >= gridWidth){
              // console.log("example 5")
              isBlockExists = false
              grid.removeChild(block)
              clearInterval(moveInterval)
            }
            else if(!gameOver && !block.classList.contains("hittedBlock") &&
                    parseInt(block.style.right) <= parseInt(shootAcornStatic.style.right) ||
                    !gameOver && !block.classList.contains("hittedBlock") &&
                    parseInt(shootAcornStatic.style.bottom) > parseInt(block.style.bottom)){
                      block.style.bottom = blockPositionBottom
                      blockPositionRight = blockPositionRight + 10
                      block.style.right = blockPositionRight + "px"
                      // console.log("example 4")
                      isBlockExists = true
            }
            else if(!gameOver && !block.classList.contains("hittedBlock") &&
                    !parseInt(block.style.right) <= parseInt(shootAcornStatic.style.right)){
                    
                      var allBlockNodeList = document.querySelectorAll(".block")
                      var blocksArr = [...allBlockNodeList]

                          block.classList.add("hittedBlock")
                          console.log(block.style.right)
                          grid.removeChild(block)
                          blockPositionRight = null
            }
               // console.log(parseInt(block.style.right), parseInt(shootAcorn.style.right))   
      }, 20)

      let generateWithTimeout

      if(gameOver){
        clearTimeout(generateWithTimeout)
      } else if(!gameOver){
        generateWithTimeout = setTimeout(generateBlocks, randomTime)
      }
      
  }

  let generateFirstBlockWithTimeout = setTimeout(generateBlocks, 7000)
  // clearTimeout(generateWithTimeout)

  
  
  
  
    // First generated Acorn Random Time
  let randomTime = 400 + (Math.random() * 20000)
  let TimeoutId = setTimeout(generateAcorns, randomTime)
  
  // Generate "Acorn" element with setInterval
  function generateAcorns(){
    let acornPositionRight = 0
    let randomTime = 4000 + (Math.random() * 35000)
    let generateWithTimeout
    
    //Remove First generated Acorn - Timeout
    clearTimeout(TimeoutId);
    
    // Create "Acorn" Element, add Class, appendChild to "grid" 
    let acorn = document.createElement("div")
    acorn.classList.add("acorn")
    grid.appendChild(acorn)
    
    // with setInterval add "Acorn" amount,
    // Move "Acorn" element to the left,
    // Remove "Acorn" element after the left prop = 800px
    let intervalId = setInterval(()=>{
      if(!gameOver){
        acornPositionRight = acornPositionRight + 15
        acorn.style.right = acornPositionRight + "px"
        
        if(parseInt(squirrel.style.bottom) <= 30 && 
           parseInt(acorn.style.right) >= gridWidth - 70 && 
           parseInt(acorn.style.right) <= gridWidth - 50){
            clearInterval(intervalId)
            acornAmount = acornAmount + 1
            grid.removeChild(acorn)
            acornAmountH2.innerText = acornAmount
            shootAcornStatic.style.visibility = "visible"
            shootAcornStatic.style.right = shootAcornPositionRight + "px"
        }
        else if(parseInt(acorn.style.right) >= gridWidth){
          clearInterval(intervalId)
          grid.removeChild(acorn)
        }
      }
      // Stop Generate "Acorn elements" if "GameOver"
      else if (gameOver){
        acornPositionRight = acornPositionRight + 5
        acorn.style.right = acornPositionRight + "px"
        if(parseInt(acorn.style.right) >= gridWidth || parseInt(acorn.style.right) >= 1400){
          clearInterval(intervalId)
          grid.removeChild(acorn)
          console.log("acorn")
        }
      }
    }, 20)
    
    
    // if "GameOver" - Stop invoke Generate "Acorn" Function
    // by clear setTimeout
    if(gameOver){
      clearTimeout(generateWithTimeout)
    }
    // if not "GameOver" - generate "Acorn" in random Time
    // by invoking setTimeout
    else if(!gameOver){
      generateWithTimeout = setTimeout(generateAcorns, randomTime)
      if(parseInt(acorn.style.right) >= gridWidth){
        clearTimeout(generateWithTimeout)
      }
    }
  }
 
  
  
 
  
  
  
  function shootingAcorn(){
    
    shootAcornStatic.style.visibility = "hidden"
    shootAcornPositionRight = (gridWidth - 70)
    shootAcornStatic.style.bottom = squirrel.style.bottom
    block = grid.querySelector(".block")
    acornShooted = true
    
    if(!gameOver){
      if(acornAmount > 0){
        acornAmount = acornAmount - 1
        acornAmountH2.innerText = acornAmount
        shootAcornStatic.style.visibility = "visible"
      }
      else if(acornAmount == 0){
        shootAcornStatic.style.visibility = "hidden"
      }
      
      let shootingAcornInterval = setInterval(()=>{
          shootAcornPositionRight = shootAcornPositionRight - 10
          shootAcornStatic.style.right = shootAcornPositionRight + "px"
          shootAcornStatic.classList.add("shoot-acorn")
        
          // console.log(shootAcornStatic.style.right, "example shootAcorn")
        
          if(parseInt(shootAcornStatic.style.right) < 0){
            clearInterval(shootingAcornInterval)
            if(acornAmount == 0 && parseInt(shootAcornStatic.style.right) < 0){
              // shootAcornPositionRight = (gridWidth - 70)
              shootAcornStatic.style.visibility = "hidden"
            }
            shootAcornPositionRight = (gridWidth - 70)
            acornShooted = false;
            shootAcornStatic.style.bottom = squirrel.style.bottom

            var allBlockNodeList = document.querySelectorAll(".block")
            var blocksArr = [...allBlockNodeList]
               
              if(blocksArr.map((block)=> block.classList.contains("hittedBlock"))){
                  blocksArr.map((block)=> {
                    block.classList.remove("hittedBlock")
                    shootAcornStatic.classList.remove("shoot-acorn")
                  })
              }
              

          }
            
        }, 20)
    }
    
  }
  
  
  function generatePineCones(){
    
  }
  
  
  
  
  
  
  function movingBg(){
      gridWidthForBg = parseInt(gridWidth)
      var movingBgsContainerPositionLeft = 0
      var bgStyles = window.getComputedStyle(movingBg1)
      var bg1Width = bgStyles.getPropertyValue("width")
      var bg2PositionLeft = parseInt(bg1Width)
      // var bg3PositionLeft = parseInt(bg1Width) * 2
      // var bg4PositionLeft = parseInt(bg1Width) * 3

      // console.log(bg1Width, "bg1Width")
      // console.log(bg2PositionLeft, "bg2PositionLeft - 1")
    
    let interevalId = setInterval(()=>{
      // console.log("setInterval")
      if(!gameOver){
        movingBgsContainerPositionLeft = movingBgsContainerPositionLeft - 4
        movingBgsContainer.style.left = movingBgsContainerPositionLeft + "px"
        
        // console.log(movingBgsContainerPositionLeft, parseInt(bg1Width))

        if(movingBgsContainerPositionLeft <= -parseInt(bg1Width)){
          movingBgsContainerPositionLeft = 0
          clearInterval(interevalId)
          movingBg()
        }
       }
      
      let RestartBgOnResizeIntervalId = setInterval(()=>{
          if(resizedWindow){
            clearInterval(interevalId)
              resizedWindow = false
              bg1PositionLeft = gridWidth - gridWidth
              console.log(bg2PositionLeft, "bg2PositionLeft - 2")
              bg2PositionLeft = gridWidthForBg-30
              console.log(bg2PositionLeft, "bg2PositionLeft - 3")
              clearInterval(interevalId)
              movingBg()
              console.log(bg2PositionLeft, "bg2PositionLeft - 4")
              clearInterval(RestartBgOnResizeIntervalId)
            }
            clearInterval(RestartBgOnResizeIntervalId)
      },1)

    }, 10)
    
  }
  movingBg()
  
  
  
  function addPoints(){
    let intervalId = setInterval(()=> {
      if(!gameOver){
        points = points + 1;
        pointsH2.innerText = points;
        clearInterval(intervalId)
        addPoints()
      }
      else if(gameOver){
        return points
      }
      
    }, 35)
    
  }
  addPoints()
    

  restart.addEventListener("click", ()=>{
    window.location.href = window.location.href;
  })
})

// let randomTime = 100 + (Math.random() * 200)