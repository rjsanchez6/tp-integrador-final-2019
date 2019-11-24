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

const Ejemplo = Vue.component('ejemplo',{
    template:'<p>Esto es un ejemplo</p>'
});
const Asistencias = Vue.component('asistencias',{
    template:'#asistencias',
    methods: {
        goTo(url) {
            // console.log(url)
            this.$router.push(url)
        }
    }
});

const DetalleAsistencia = Vue.component('DetalleAsistencia', {
    template: '#detalle_asistencia',
    methods: {
        goTo(url) {
            this.$router.push(url)
        }
    }
});


const Reclamos = Vue.component('reclamos',{
    template:'#reclamos',
    methods: {
        goTo(url) {
            this.$router.push(url)
        }
    }
});

const DetalleReclamo = Vue.component('DetalleReclamo', {
    template: '#detalle_reclamo',
    data() {
        return{
            pendiente:true,
            gestion:false,
            fin:false,
            fechaini:"-",
            fechafin:"-",
            tecnico:"-",
        }
    },
    watch:{
        fin: function(){
            // console.log("asd")
            setTimeout(function() {
                let boton=document.querySelector('#confirmar');
                boton.scrollIntoView({block:'start',behavior:'smooth'})
            },100);
            // setTimeout(funcion, tiemṕo);
        }
    },
    methods:{
        gestionar(){
            this.pendiente=false
            this.gestion=true
            this.fechaini="30-07-2019"
            this.tecnico="Edward Yourdon"
        },
        finalizar(){
            this.gestion=false
            this.fin=true
            this.fechafin="30-07-2019"
        },
        goTo(url) {
            this.$router.push(url)
        }
    },
})

const NuevaAsistencia = Vue.component('nueva-asistencia',{
    template:'#nueva_asistencia',
    components:{
        CustomInput,
    },
    data() {
        return{
            band: false,
            asistencia: false,
            reclamo: false,
            producto: '',
            modelo: '',
            scroll: true,
        }
    },
    watch: {
        producto: function() {
            if (this.producto && this.modelo) {
                setTimeout(()=>{
                    document.querySelector('.asesoria').scrollIntoView({block: "start", behavior: "smooth"})
                    this.scroll=false
                }, 200);
            }
            if (!this.producto) {
                this.scroll=true
            }
        },
        modelo: function() {
            if (this.modelo && this.producto) {
                setTimeout(()=>{
                    document.querySelector('.asesoria').scrollIntoView({block: "start", behavior: "smooth"})
                    this.scroll=false
                }, 1000);
            }
            if (!this.modelo) {
                this.scroll=false
            }
        }
    },
    methods:{
        setData(data, value) {
            this[data] = value;
        },
        scrollTo(section) {
            document.querySelector(section).scrollIntoView({block: "end", behavior: "smooth"})
        },
        asistenciaON() {
            this.reclamo=false
            this.band=true
            this.asistencia=true
            setTimeout(()=>{
                document.querySelector('.choose').scrollIntoView({block: "start", behavior: "smooth"})
            }, 200);
        },
        reclamoON() {
            this.asistencia=false
            this.band=true
            this.reclamo=true
            setTimeout(()=>{
                document.querySelector('.choose').scrollIntoView({block: "start", behavior: "smooth"})
            }, 200);
        },
        goAsistencias() {
            this.$router.push('/asistencias')
        },
        goReclamos() {
            this.$router.push('/reclamos')
        }
    }
});
const Login = Vue.component('login',{
    template: '#login',
    created() {
        navbar.navbar = false
    },
    methods:{
        login() {
            navbar.navbar=true
            this.$router.push('/asistencias')
        }
    }
});

const Clientes = Vue.component('clientes',{
    template: '#clientes',
    created() {
        navbar.navbar = false
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
    destroyed() {
        // navbar.navbar = true
    }
});

const Informe = Vue.component('informe',{
    template:'#informes',
    data() {
        return{
            informes:[
                'informe_1',
                'informe_2',
                'informe_3',
            ],
            meses:[
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ],
            years:[
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
            ]
        }
    }
});



const routes=[
    { path: '/', component: Login },
    { path: '/nueva_asistencia', component: NuevaAsistencia },
    { path: '/asistencias', component: Asistencias },
    { path: '/asistencias/001', component: DetalleAsistencia },
    { path: '/reclamos', component: Reclamos },
    { path: '/reclamos/218975', component: DetalleReclamo },
    { path: '/informes', component: Informe },
    { path: '/clientes', component: Clientes },
]
const router = new VueRouter({
    routes
})

var navbar = new Vue({
    router,
    el:'.navbar-nb',
    mounted() {
        if (this.windowWidth>=768){
            this.menu=true
        }
        console.log('navbar creada: ',this.$route.path)

            this.navbar = true
        
    },
    data:{
        items:[
            {name:'Nueva Asistencia', link: '/nueva_asistencia'},
            {name:'Ver Asistencias', link: '/asistencias'},
            {name:'Reclamos', link: '/reclamos'},
            {name:'Informes', link: '/informes'},
            {name: 'Salir', link: '/'}
        ],
        menu:false,
        navbar:false,
    },
    methods:{
        mostrarMenu() {
            this.menu=!this.menu
        },
    },
    computed:{
        windowWidth() {
            return window.innerWidth;
        }
    }
});

var main = new Vue({ 
    router,
    components:{
        CustomInput,
    },
    el:'main',
})