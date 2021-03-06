;(function(){
    const game = document.getElementById('game')
    const gameBtn = document.getElementById('gameBtn')
    const gameTime = document.getElementById('gameTime')
    const s1 = document.getElementById('s1')
    const s2 = document.getElementById('s2')
    const click1 = document.getElementById('click1')
    const click2 = document.getElementById('click2')
    const click3 = document.getElementById('click3')
    const click4 = document.getElementById('click4')
    const click5 = document.getElementById('click5')
    const view = document.getElementById('view')
    const copyView = document.getElementById('copyView')
    // 遊戲畫面
    let gameWidthPx = window.getComputedStyle(game,null).width
    let gameWidth = (parseInt(gameWidthPx,10))
    
    // // 遊戲剩餘時間
    // let gameNumber = 60;
    
    gameBtn.addEventListener('click',function(){
        // 初始化
        gameBtn.style.display='none';
        copyView.style.display = 'none';
        gameTime.textContent = '遊戲剩餘時間:倒數中';
        // 成功點擊次數
        let clickSuccess = 0;
        // 漏掉次數
        let clickFail = 0;
        view.textContent = '';
        // clickSuccess = 0;
        clickFail = 0;
        s1.textContent = 0;
        s2.textContent = 0;
        document.querySelector('.speed').style.display = 'none';

        let i = 3;
        let waitFn = function(){
            view.textContent = `${i}秒後開始`
            i-=1;
            if(i===-1){
                clearInterval(wait)
            }
            return waitFn
        }
        let wait = setInterval(waitFn(),1000)

        setTimeout(()=>{
            view.textContent = '';

            // 使用者選擇遊戲速度
            const userSpeed = document.getElementById('userSpeed').value
            // 使用者選擇時間
            const userTime = document.getElementById('userTime').value
            // 使用者選擇圓圈大小
            const userRound = document.getElementById('userRound').value
            const speed = parseInt(userSpeed,10)
            const time = parseInt(userTime,10) 
            const round = parseInt(userRound,10)
            const speedFor = [speed,speed*2,speed*3,speed*4,speed*5]
            let start = function(){
                setTimeout(() => {
                    switchPosition(click1)
                    switchView(click1)
                    switchRound(click1)
                }, speedFor[0]);
                setTimeout(() => {
                    switchPosition(click2)
                    switchView(click2)
                    switchRound(click2)
                }, speedFor[1]);
                setTimeout(() => {
                    switchPosition(click3)
                    switchView(click3)
                    switchRound(click3)
                }, speedFor[2]);
                setTimeout(() => {
                    switchPosition(click4)
                    switchView(click4)
                    switchRound(click4)
                }, speedFor[3]);
                setTimeout(() => {
                    switchPosition(click5)
                    switchView(click5)
                    switchRound(click5)
                }, speedFor[4]);


                    return start;
                }
            let cycle1 = setInterval(start(),speedFor[4])


            function switchPosition(target){
                let t = n(gameWidth)
                let l = n(gameWidth)
                function n (max){
                max = Math.floor(max) -40;
                return Math.floor(Math.random() * (max - 0 + 1 ) + 0);
                }
                target.style.top = `${t}px`;
                target.style.left = `${l}px`;
                target.style.display = 'block';
            }

            function switchView(target){
                setTimeout(()=>{
                    let targetDisplay = window.getComputedStyle(target,null).display
                    if(targetDisplay === 'block'){
                        clickFail++;
                        s2.textContent = clickFail;
                        target.style.display = 'none';
                    }
                },1000)
            }
            function switchRound(target){
                target.style.width = `${round}px`
                target.style.height = `${round}px`
                if(round === 25){
                    target.style.fontSize = `10px`
                }else if(round === 40){
                    target.style.fontSize = `24px`
                }
            }

            click1.addEventListener('click',() => {
                liClick(click1)
            })
            click2.addEventListener('click',() => {
                liClick(click2)
            })
            click3.addEventListener('click',() => {
                liClick(click3)
            })
            click4.addEventListener('click',() => {
                liClick(click4)
            })
            click5.addEventListener('click',() => {
                liClick(click5)
            })
            
            function liClick(target){
                clickSuccess+=1;
                s1.textContent = clickSuccess;
                target.style.display = 'none';
            }

            let gameNumber = time;
            let s = function(){
                gameNumber--;
                gameTime.innerHTML = `遊戲剩餘時間:${gameNumber+1}秒`
                if(gameNumber === 1){
                    clearInterval(cycle1)
                }
                if(gameNumber === -2){
                    gameTime.innerHTML = `時間到!!!`
                    clearInterval(cycle2)
                    view.innerHTML = '計算中...'
                    setTimeout(()=>{
                        gameEnd()
                    },3000)
                }
                return s;
            }
            let cycle2 = setInterval(s(),1000)
            function gameEnd(){
                gameTime.innerHTML = '遊戲結束'
                let lv = '';
                if(speed === 1000){
                    lv = '入門級'
                }
                if(speed === 500){
                    lv = '高手級'
                }
                if(speed === 300){
                    lv = '地獄級'
                }
                view.innerHTML =
                `
                    <span>您挑戰的是${lv}的速度<br>遊戲時間為${time}秒<br>尺寸大小${round}px<br>
                    <span>得分數為<span style="color:red">${clickSuccess}</span>分<br>一共漏掉了<span style="color:red">${clickFail}</span>次<br><span>
                `
                if(lv === '入門級'){
                    if(clickFail === 0){
                        view.innerHTML +=`<span>實力不錯!一次都沒漏掉</span><br>`
                    }else if(clickFail === 1){
                        view.innerHTML +=`<span>漏掉一次太可惜了<br>再挑戰一次?</span>`
                    }else if(clickFail <= clickSuccess){
                        view.innerHTML +=`<span>勉勉強強的成績，需要多加油</span>`
                    }else if(clickFail > clickSuccess){
                        view.innerHTML +=`<span style="color:red; font-weight: 900;">漏太多了，你有點不太行啊!</span>`
                    }
                }
                if(lv === '高手級'){
                    if(clickFail === 0){
                        view.innerHTML +=`<span>你的反應力及滑鼠掌控度很不錯<br>擊敗全世界94.87%的人了<br></span>`
                    }else if(clickFail === 1){
                        view.innerHTML +=`<span>漏掉一次太可惜了<br>再挑戰一次?</span>`
                    }else if(clickFail <= clickSuccess){
                        view.innerHTML +=`<span>實力還不錯!<br>在廣大的高手中你也是處於中段班以上的人</span>`
                    }else if(clickFail > clickSuccess){
                        view.innerHTML +=`<span style="color:red; font-weight: 900;">你離高手級還有一段路<br>再回去好好練習吧</span>`
                    }
                }
                if(lv === '地獄級'){
                    if(clickFail === 0){
                        view.innerHTML +=`<span>你的反應力及滑鼠掌控度已達登峰造極<br>擊敗全世界99.87%的人了<br></span>`
                    }else if(clickFail === 1){
                        view.innerHTML +=`<span>漏掉一次太可惜了<br>再挑戰一次?</span>`
                    }else if(clickFail <= clickSuccess && time !== 10){
                        view.innerHTML +=`<span>實力還不錯!成功率有一半以上<br>打敗全世界87%的人了</span>`
                    }else if(clickFail > clickSuccess){
                        view.innerHTML +=`<span style="color:red; font-weight: 900;">地獄級不是凡人輕易可以觸碰的<br>再回去好好練習吧</span>`
                    }

                    // 特別顯示 條件為十秒 失敗比或跟成功一樣多
                    if(time === 10 && clickFail <= clickSuccess && round !== 25){
                        view.innerHTML +=`<span style="color:red; font-weight: 900;">你十秒實力只有這樣而已嗎?</span>`
                    }
                    if(time === 10 && clickFail <= clickSuccess && round === 25){
                        view.innerHTML +=`<span style="color:red; font-weight: 900;">小尺寸的挑戰對你來說還是太困難了</span>`
                    }
                }
                // 結束後顯示
                gameBtn.style.display='block';
                copyView.style.display = 'block';
                document.querySelector('.speed').style.display = 'flex';
                gameBtn.textContent = '重新遊玩';
                copyView.addEventListener('click',function(){
                    window.getSelection().selectAllChildren(view);
                    document.execCommand('Copy')
                })
            }
        },4000)
    })

})()