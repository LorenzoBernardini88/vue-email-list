const myApp = new Vue ({
    el: '#app',
    data: {
        email: [],
    },
    mounted: function(){
        for (let index = 0; index < 10; index++){
            this.ciclo();
            
        }
    },
    methods:{
        ciclo : function(){
            
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
    
                        this.email.push(risposta.data.response);
                        console.log(this.email);
                    })
                .catch(function (error) {
                
                    console.log(error);
                })
                
            
        }
    },
    
})

