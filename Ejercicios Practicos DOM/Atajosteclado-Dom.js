
export function shortcuts (e){
    console.log(e);
}

let x = 0, y = 0;
export function movimientoBall(e, ball, panel){
            const ball$ = document.querySelector(ball),
                  panel$ = document.querySelector(panel),
                  limitBall = ball$.getBoundingClientRect(),
                  limitpanel = panel$.getBoundingClientRect()
                // console.log(limitBall);
                // console.log(limitpanel);
                //   e.preventDefault()
                  switch (e.keyCode) {
                    case 37:
                      if (limitBall.left > limitpanel.left) {
                        x--;
                        e.preventDefault()
                      }
                        break;
                    case 38:
                      if (limitBall.top > limitpanel.top){  
                        y--;
                        e.preventDefault()
                      }
                        break;
                    case 39:
                      if (limitBall.right < limitpanel.right){
                        x++; 
                        e.preventDefault()
                      }          
                        break;
                    case 40:
                      if (limitBall.bottom < limitpanel.bottom) {
                        y++
                        e.preventDefault();
                      }
                        break;  
                        default:
                            break;
                       }
                        ball$.style.transform = `translate(${x*10}px, ${y*10}px)`

}
