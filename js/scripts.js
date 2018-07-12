document.addEventListener('DOMContentLoaded', () => {

    new Slider();

})

class Slider{
    constructor(){
        this.data = 'https://frontend.camp.dev.unit6.ru/get-slides';

        this.init();
    }

    init(){
        const datas = this.getDatas(this.data)
    }

    getDatas(data){
        fetch(data).then(function(response){
            if(response.status !== 200){
                console.log(response.status)
                return;
            }
            
            response.json().then(function(data){
                console.log(data)
            })
        })
        .catch(function(err) {  
            console.log('Fetch Error :-S', err);  
        });
    }
}