const CustomInput = Vue.component('custom-input',{
    template:'#input',
    props:['name'],
});

const CustomFileInput = Vue.component('custom-file-input',{
    template: '#file-input',
    props:['name']
})

const CustomTextInput = Vue.component('custom-text-input', {
    template:'#text-input',
    props:['name']
})

const CustomSelect = Vue.component('custom-select',{
    template: '#select',
    props: ['name','select', 'options']
});


var main = new Vue({ 
    el:'main',
    components:{
        CustomInput,
    },
    data() {
        return{
            imagePreview: 'assets/img/file.svg',
            producto: true,
            datosCliente: false,
        }
    },
    methods: {
        setPreview(event) {
            // Creamos el objeto de la clase FileReader que nos permitirá visualizar el elemento insertado
            let reader = new FileReader();
            console.log(event.target.files[0])
            // Obtenemos el archivo subido en el objeto 'event.target.files[0]' y se lo pasamos como parámetro al objeto de filereader
            reader.readAsDataURL(event.target.files[0])
            // Cuando finalice la obtención del objeto del archivo cargado, obtendremos el resultado y cargamos a nuestra variable
            reader.onload=()=>{
                console.log(reader.result)
                this.imagePreview=reader.result
            }
        },
        changeForm(to) {
           if(to=='slide2'){
               console.log('cambiar')
               this.producto=false;
               this.datosCliente=true;
            } else{
               console.log('enviar')
            }
        }
    },
})