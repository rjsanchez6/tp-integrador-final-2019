const CustomInput = Vue.component('custom-input',{
    template:'#input',
    props:['name', 'atribute'],
});

const CustomFileInput = Vue.component('custom-file-input',{
    template: '#file-input',
    props:['name']
})

const CustomTextInput = Vue.component('custom-text-input', {
    template:'#text-input',
    props:['name', 'atribute']
})

const CustomSelect = Vue.component('custom-select',{
    template: '#select',
    props: ['name','select', 'options', 'atribute']
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
            form: {
                category: null,
                model: null,
                message: null,
                name: null,
                surname: null,
                dni: null,
                phone: null,
                email: null,
                address: null,
                city: null,
                location: null,
                cp: null,
            }
        }
    },
    methods: {
        setPreview(event) {
            // Creamos el objeto de la clase FileReader que nos permitirá visualizar el elemento insertado
            let reader = new FileReader();
            // console.log(event.target.files[0])
            // Obtenemos el archivo subido en el objeto 'event.target.files[0]' y se lo pasamos como parámetro al objeto de filereader
            reader.readAsDataURL(event.target.files[0])
            // Cuando finalice la obtención del objeto del archivo cargado, obtendremos el resultado y cargamos a nuestra variable
            reader.onload=()=>{
                // console.log(reader.result)
                this.imagePreview=reader.result
            }
        },
        changeForm(to) {
           if(to=='slide2'){
               console.log('cambiar')
               this.producto=false;
               this.datosCliente=true;
            } else{
               const formData = new FormData();
               formData.append('nombre', this.form.name);
               formData.append('apellido', this.form.surname);
               formData.append('dni', this.form.dni);
               formData.append('email', this.form.email);
               formData.append('telefono', this.form.phone);
               formData.append('consulta', this.form.message);
               formData.append('modelo', this.form.model);
               formData.append('categoria', this.form.category);
               formData.append('domicilio', this.form.address);
               formData.append('ciudad', this.form.city);
               formData.append('localidad', this.form.location);
               formData.append('cp', this.form.cp);
               formData.append('imagen', this.imagePreview);
                //    console.log(formData.forEach(value => console.log(value)));
                axios.post('aquí va la URL', formData)
                .then(response => {
                    console.log(response);
                })
                .catch(e => {
                    console.log ('error por catch', e);
                })

            }
        },
        setValue(input) {
            // console.log(input)
            this.form[input.atribute] = input.value;
        }
    },
})