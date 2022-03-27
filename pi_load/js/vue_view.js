;(function(Vue){
    document.querySelector('body').style.margin = '0';
    document.querySelector('html').style.scrollBehavior = 'smooth';

	var viewCss = document.createElement('link');
    viewCss.rel="stylesheet";
	viewCss.href = './css/style.css';
	document.documentElement.appendChild(viewCss);

    // document.querySelector('#piMain>div>div:nth-of-type(odd)').style.backgroundColor = 'blue'
    // document.querySelectorAll('div').forEach(tag => {
    //     tag
    // })
    const viewTemplate = {
        template:
        `
        <div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
            <div>
                This is {{msg}} view (div*50)
            </div>
        </div>
        `,
        props:[
            'msg'
        ],
        mounted() {
            setTimeout(()=>{
                if(this.msg >= 10){
                    window.location.href=`./1.html`;
                }else{
                    window.location.href=`./${this.targetNumber}.html`;
                }
            },this.viewDelay*4.57),
            this.position1();
        },
        computed:{
            targetNumber(){
                const min = 1;
                const max = 10;
                return Math.floor(Math.random() * (max - min +1) + min);
            },
            viewPosition(){
                const min = 0;
                const max = window.document.documentElement.scrollHeight - (window.document.documentElement.scrollHeight / 10);
                return Math.floor(Math.random() * (max - min +1) + min);
            },
            viewDelay(){
                const min = 1500;
                const max = 3500;
                return Math.floor(Math.random() * (max - min +1) + min);
            }
        },
        methods: {
            position1(){
                const p = this.viewPosition/3;
                let n = 0;
                let loop = setInterval(() => {
                    document.documentElement.scrollTop += p;
                    n += 1;
                    if(n >= 3) clearInterval(loop);
                }, this.viewDelay/1.2);
                setInterval(() => {
                    document.documentElement.scrollTop -= p*2;
                }, this.viewDelay*3.4);
            }
        },
    }
    new Vue({
        el:'#piMain',
        // data:function(){
        //     return{
        //
        //     }
        // },
        components:{
            viewTemplate,
        },
        computed:{
            cssStyle(){
                return{
                    style:{
                        background:'red',
                        fontSize:'3rem',
                        margin:'0px',
                        padding:'0px',
                    }
                }
            }
        },
    })



})(Vue);