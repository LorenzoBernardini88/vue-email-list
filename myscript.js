const myApp = new Vue ({
    el: '#app',
    data: {
        email: [],
    },
    mounted: function(){
        for (let index = 0; index < 10; index++){
            this.ciclo();
            
        }
        console.log(this.email);
    },
    methods:{
        ciclo : function(){
            
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
    
                        this.email.push(risposta.data.response);
                    })
                    .catch(function (error) {
                        
                        console.log(error);
                    })
                
            
        }
    },
    
})

