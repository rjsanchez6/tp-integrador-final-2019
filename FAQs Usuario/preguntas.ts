class Categoria
{
    nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
    getNombre()
    {
        return this.nombre;
    }
}
class Valoracion
{
    promedio:number;
    listaval:number[];

    constructor(){
        this.promedio=3;
    }
    getPromedio():number{
        return this.promedio;
    }
    insertarValoracion(valor):void{
        this.listaval.push(valor)
    }
}
class Respuesta
{
    valoracion:Valoracion;
    texto:string;
    getResumen():string
    {
        var pos=this.texto.indexOf("\n");
        var a = this.texto.slice(0,pos);
        return a;
    }
    getTexto():string
    {
        return this.texto;
    }
    getValoracion():Valoracion
    {
        return this.valoracion;
    }
    getRespuesta():string
    {
        return this.texto;
    }
    constructor(texto:string)
    {
        this.texto=texto;
    }
   
}
class Pregunta
{
    quest:string;
    categoria:Categoria;
    resp:Respuesta;
    visitas:number;

    getQuest():string{
        return this.quest;
    }
    getNumVisitas():number{
        return this.visitas;
    }
    getCategoria():Categoria{
        return this.categoria;
    }
    getRespuesta():Respuesta{
        return this.resp;
    }
    incrementarNVisitas():void{
        this.visitas=this.visitas+1
    }
    constructor(quest:string,visitas:number,categoria:Categoria,respuesta:Respuesta){
        this.quest=quest;
        this.visitas=visitas;
        this.categoria=categoria;
        this.resp=respuesta;
    }
    getResumen():string{
        return this.resp.getTexto(); //modificar esto mas tarde
    }
}
class CTR_Faqs
{
    n:number;
    ca=new Categoria("fdf");
    res=new Respuesta("fd")
    pre3= new Pregunta("ds",10,this.ca,this.res);
    listaPreg:Pregunta[]=new Array();
    aux:any=[]
    constructor(ls:Pregunta[]){
        this.n=10;
        this.listaPreg=ls;
    }
    showResponse(num):void
    {
        alert(this.listaPreg[num].getQuest()+'\n'+'\n'+this.listaPreg[num].getRespuesta().getRespuesta());
    }
    visualizarFAQS(listaCategorias):void{
        let listaDocumentos= new Array();
        let ui = new UIs(this.listaPreg);
        var n=1;
        for(var val of listaCategorias)
        {
            document.getElementById("cat"+n.toString()).innerHTML=val.getNombre();
            n=n+1;
        }
        var n=0
        var k=this.listaPreg.length
        while(n < k)
        {
            listaDocumentos.push(document.getElementById("pre"+n.toString()));
            document.getElementById("pre"+n.toString()).innerHTML=this.listaPreg[n].getQuest();
            listaDocumentos[n].addEventListener("click",(e:Event) => this.showResponse((((<HTMLHeadingElement>e.target).id)).toString()[3]));
            document.getElementById("res"+n.toString()).innerHTML=this.listaPreg[n].getRespuesta().getResumen();
            n=n+1
        }
    }
}
class Sistema
{
    listaPreguntas:Pregunta[]=[];
    currentElement:Pregunta[];

    constructor()
    {
        //obtener datos de bd
        //cargarlos en las listas
        let cat1= new Categoria("Anafes");
        let resp1= new Respuesta("Fijarse si el boton de encendido/apagado en la parte inferior esta presionado. " +'\n'+"Luego corrobore si la corriente de energia esta funcionando");
        let preg1= new Pregunta("¿No enciende?",10,cat1,resp1);
        let valora1= new Valoracion();
        let cat2=new Categoria("Tanques");
        let resp2= new Respuesta("Activa el modo ahorro de recursos." +'\n'+"Luego presione en el boton de reinicio rápido, espere 5 minutos y vuelva a probarlo");
        let resp3= new Respuesta("Reinicia con el boton trasero, inicie los valores con los cuales desee que funcione."+'\n'+"Apagar y prender para comprobar que los cambios se hayan llevado a cabo");
        let preg3=new Pregunta("¿El sistema se desconfiguro?",10,cat2,resp3);
        let preg2= new Pregunta("¿Calienta mucho?",8,cat2,resp2);

        let resp4= new Respuesta("Quitar la pequeña tapa de plastico debajo del foco rojo. Tomar una birome o lapiz, introducirlo en el agujero hasta escuchar un click. Colocar la tapa nuevamente y verificar que caliente");
        let resp5= new Respuesta("Si el termotanque esta instalado en una zona de aguas duras, lo que puede ocasionar problemas de sarro, es recomendable drenar de 2 a 3 veces por año, al rededor de 20 litros de agua por la valvula de descarga. Esto ayuda a disminuir la formacion de deposito de sarro en la zona inferior del tanque. "+'\n'+"Los depositos de zarro reducen el rendimiento y la vida util de su termotanque")
        let preg5= new Pregunta("¿Que mantenimiento tengo que hacer al termotanque?",2,cat1,resp5);
        let preg4= new Pregunta("¿Calienta mucho?",20,cat1,resp4);
        let resp6= new Respuesta("No, no esta estropeado. La luz piloto se ilumina cuando el electrodomestico está funcionando para que alcance la temperatura seleccionada."+'\n'+"Una vez alcanzada se desconecta hasta que automaticamente vuelve a conectarse para mantener la temperatura elegida");
        let preg6= new Pregunta("Algunas veces la luz piloto de control del termostato se apaga. ¿Esta estropeado?",3,cat2,resp6);
        let resp7= new Respuesta("Los productos cuentan con 6 meses de garantia total");
        let preg7= new Pregunta("¿Los productos tienen garantia?",12,cat2,resp7);

        let listaPreguntas = new Array(); 
        let listaCategorias = new Array(); 
        this.listaPreguntas.push(preg1);
        this.listaPreguntas.push(preg2);
        this.listaPreguntas.push(preg3);
        this.listaPreguntas.push(preg4);
        this.listaPreguntas.push(preg5);
        this.listaPreguntas.push(preg6);
        this.listaPreguntas.push(preg7);
        listaCategorias.push(cat1);
        listaCategorias.push(cat2);
        let control= new CTR_Faqs(this.listaPreguntas);
        control.visualizarFAQS(listaCategorias);
        }
        getListaPreguntas():Pregunta[]
        {
        return this.listaPreguntas;
        }
}


class UIs
{
    lista:Pregunta[];
    constructor(listaPreguntas)
    {
        console.log("ui");
        this.lista=listaPreguntas;
        
    }
    

}

let general = new Sistema();

    



