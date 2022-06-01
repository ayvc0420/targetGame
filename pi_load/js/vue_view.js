;(function(Vue){
    document.querySelector('body').style.margin = '0';
    document.querySelector('html').style.scrollBehavior = 'smooth';

	var viewCss = document.createElement('link');
    viewCss.rel="stylesheet";
	viewCss.href = './css/style.css';
	document.documentElement.appendChild(viewCss);
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
            },this.viewDelay*5.3),
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
                const min = 2200;
                const max = 3300;
                return Math.floor(Math.random() * (max - min +1) + min);
            }
        },
        methods: {
            position1(){
                const p = this.viewPosition/2;
                let n = 0;
                let loop = setInterval(() => {
                    document.documentElement.scrollTop += p;
                    n += 1;
                    p%n === 0 ? clearInterval(loop) : '';
                }, this.viewDelay/1.2);
                setInterval(() => {
                    p%n === 0 ? document.documentElement.scrollTop -= p*2 : '';
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
                        fontSize:'3rem',
                        margin:'0px',
                        padding:'0px',
                    }
                }
            }
        },
    })



})(Vue);