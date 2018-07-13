document.addEventListener('DOMContentLoaded', () => {

    new Slider();

})

class Slider{
    constructor(){
        this.resurce = 'https://frontend.camp.dev.unit6.ru/get-slides';
        this.arr;

        this.init();
    }

    init(){
        const datas = this.getDatas(this.resurce)
        console.log(datas)
        // .then(datas => {
        //     console.log(datas.title)
        // })
    }

    getDatas(data){
        this.data = data;
        return fetch(this.data)
        .then(function(response){
            if(response.status !== 200){
                console.log(response.status)
                return;
            }
            
            response.json().then(function(data){
                console.log(data)
                // this.arr = data;
            })
        })
        .catch(function(err) {  
            console.log('Fetch Error :-S', err);  
        });
    }
}