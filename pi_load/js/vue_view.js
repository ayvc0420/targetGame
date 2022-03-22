;(function(Vue){
    document.querySelector('body').style.margin = '0';
    const viewTemplate = {
        template:
        `
        <div>
            This is {{msg}} view
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
                    window.location.href=`./${this.msg+1}.html`;
                }
            },3000)
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