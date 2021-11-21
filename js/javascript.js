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
        // 成功點擊次數
        let clickSuccess = 0;
        // 漏掉次數
        let clickFail = 0;
        view.textContent = '';
        // clickSuccess = 0;
        clickFail = 0;
        s1.textContent = 0;
        s2.textContent = 0;

        // game.textContent = '';
        // 使用者選擇遊戲速度
        const userSpeed = document.getElementById('userSpeed').value
        // 使用者選擇時間
        const userTime = document.getElementById('userTime').value
        const speed = parseInt(userSpeed,10)
        const time = parseInt(userTime,10) 
        const speedFor = [speed,speed*2,speed*3,speed*4,speed*5]
        let start = function(){
            setTimeout(() => {
                switchPosition(click1)
                switchView(click1)
            }, speedFor[0]);
            setTimeout(() => {
                switchPosition(click2)
                switchView(click2)
            }, speedFor[1]);
            setTimeout(() => {
                switchPosition(click3)
                switchView(click3)
            }, speedFor[2]);
            setTimeout(() => {
                switchPosition(click4)
                switchView(click4)
            }, speedFor[3]);
            setTimeout(() => {
                switchPosition(click5)
                switchView(click5)
            }, speedFor[4]);


                return start;
            }
        let cycle1 = setInterval(start(),speedFor[4])


        function switchPosition(target){
            let t = n(gameWidth)
            let l = n(gameWidth)
            function n (max){
            max = Math.floor(max) -25;
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
                gameTime.innerHTML = `時間到!!`
                clearInterval(cycle2)
                setTimeout(()=>{
                    gameEnd()
                },3000)
            }
            return s;
        }
        let cycle2 = setInterval(s(),1000)
        function gameEnd(){
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
                <span>挑戰的是${lv}<br>遊戲時間:${time}秒<br>
                <span>您的得分數為<span style="color:red">${clickSuccess}</span>分，漏掉了<span style="color:red">${clickFail}</span>次<br><span>
            `
            if(clickFail === 1){
                view.innerHTML +=`<span style="margin-top: 15px;">漏掉一分太可惜了<br>再挑戰一次?</span>`
            }else if(clickFail === 0 && lv !== '地獄級' && lv !== '高手級'){
                view.innerHTML +=`<span style="margin-top: 15px;">實力不錯!一次都沒漏掉</span>`
            }
            if(lv === '高手級'){
                if(clickFail === 0){
                    view.innerHTML +=`<span style="margin-top: 15px;">你的反應力及滑鼠掌控度很不錯<br>擊敗全世界94.87%的人了<br></span>`
                }else if(clickFail <= clickSuccess && clickFail !== 1){
                    view.innerHTML +=`<span style="margin-top: 15px;">在廣大的高手中你也是處於中段班以上的人<br>實力還不錯!</span>`
                }else if(clickFail > clickSuccess){
                    view.innerHTML +=`<span style="margin-top: 15px;">你離高手級還有一段路<br>再回去好好練習吧</span>`
                }
            }
            if(lv === '地獄級'){
                if(clickFail === 0){
                    view.innerHTML +=`<span style="margin-top: 15px;">你的反應力及滑鼠掌控度已達登峰造極<br>擊敗全世界99.87%的人了<br></span>`
                }else if(clickFail <= clickSuccess  && clickFail !== 1){
                    view.innerHTML +=`<span style="margin-top: 15px;">實力還不錯!成功率有一半以上<br>打敗全世界87%的人了</span>`
                }else if(clickFail > clickSuccess){
                    view.innerHTML +=`<span style="margin-top: 15px;">地獄級不是凡人可嘗試的<br>再回去好好練習吧</span>`
                }
            }
            gameBtn.style.display='block';
            copyView.style.display = 'block';
            gameBtn.textContent = '重新遊玩';
            copyView.addEventListener('click',function(){
                window.getSelection().selectAllChildren(view);
                document.execCommand('Copy')
            })
        }

    })

})()