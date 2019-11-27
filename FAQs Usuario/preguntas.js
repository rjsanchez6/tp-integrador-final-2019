var Categoria = /** @class */ (function () {
    function Categoria(nombre) {
        this.nombre = nombre;
    }
    Categoria.prototype.getNombre = function () {
        return this.nombre;
    };
    return Categoria;
}());
var Valoracion = /** @class */ (function () {
    function Valoracion() {
        this.promedio = 3;
    }
    Valoracion.prototype.getPromedio = function () {
        return this.promedio;
    };
    Valoracion.prototype.insertarValoracion = function (valor) {
        this.listaval.push(valor);
    };
    return Valoracion;
}());
var Respuesta = /** @class */ (function () {
    function Respuesta(texto) {
        this.texto = texto;
    }
    Respuesta.prototype.getResumen = function () {
        var pos = this.texto.indexOf("\n");
        var a = this.texto.slice(0, pos);
        return a;
    };
    Respuesta.prototype.getTexto = function () {
        return this.texto;
    };
    Respuesta.prototype.getValoracion = function () {
        return this.valoracion;
    };
    Respuesta.prototype.getRespuesta = function () {
        return this.texto;
    };
    return Respuesta;
}());
var Pregunta = /** @class */ (function () {
    function Pregunta(quest, visitas, categoria, respuesta) {
        this.quest = quest;
        this.visitas = visitas;
        this.categoria = categoria;
        this.resp = respuesta;
    }
    Pregunta.prototype.getQuest = function () {
        return this.quest;
    };
    Pregunta.prototype.getNumVisitas = function () {
        return this.visitas;
    };
    Pregunta.prototype.getCategoria = function () {
        return this.categoria;
    };
    Pregunta.prototype.getRespuesta = function () {
        return this.resp;
    };
    Pregunta.prototype.incrementarNVisitas = function () {
        this.visitas = this.visitas + 1;
    };
    Pregunta.prototype.getResumen = function () {
        return this.resp.getTexto(); //modificar esto mas tarde
    };
    return Pregunta;
}());
var CTR_Faqs = /** @class */ (function () {
    function CTR_Faqs(ls) {
        this.ca = new Categoria("fdf");
        this.res = new Respuesta("fd");
        this.pre3 = new Pregunta("ds", 10, this.ca, this.res);
        this.listaPreg = new Array();
        this.aux = [];
        this.n = 10;
        this.listaPreg = ls;
    }
    CTR_Faqs.prototype.showResponse = function (num) {
        alert(this.listaPreg[num].getQuest() + '\n' + '\n' + this.listaPreg[num].getRespuesta().getRespuesta());
    };
    CTR_Faqs.prototype.visualizarFAQS = function (listaCategorias) {
        var _this = this;
        var listaDocumentos = new Array();
        var ui = new UIs(this.listaPreg);
        var n = 1;
        for (var _i = 0, listaCategorias_1 = listaCategorias; _i < listaCategorias_1.length; _i++) {
            var val = listaCategorias_1[_i];
            document.getElementById("cat" + n.toString()).innerHTML = val.getNombre();
            n = n + 1;
        }
        var n = 0;
        var k = this.listaPreg.length;
        while (n < k) {
            listaDocumentos.push(document.getElementById("pre" + n.toString()));
            document.getElementById("pre" + n.toString()).innerHTML = this.listaPreg[n].getQuest();
            listaDocumentos[n].addEventListener("click", function (e) { return _this.showResponse(((e.target.id)).toString()[3]); });
            document.getElementById("res" + n.toString()).innerHTML = this.listaPreg[n].getRespuesta().getResumen();
            n = n + 1;
        }
    };
    return CTR_Faqs;
}());
var Sistema = /** @class */ (function () {
    function Sistema() {
        this.listaPreguntas = [];
        //obtener datos de bd
        //cargarlos en las listas
        var cat1 = new Categoria("Anafes");
        var resp1 = new Respuesta("Fijarse si el boton de encendido/apagado en la parte inferior esta presionado. " + '\n' + "Luego corrobore si la corriente de energia esta funcionando");
        var preg1 = new Pregunta("¿No enciende?", 10, cat1, resp1);
        var valora1 = new Valoracion();
        var cat2 = new Categoria("Tanques");
        var resp2 = new Respuesta("Activa el modo ahorro de recursos." + '\n' + "Luego presione en el boton de reinicio rápido, espere 5 minutos y vuelva a probarlo");
        var resp3 = new Respuesta("Reinicia con el boton trasero, inicie los valores con los cuales desee que funcione." + '\n' + "Apagar y prender para comprobar que los cambios se hayan llevado a cabo");
        var preg3 = new Pregunta("¿El sistema se desconfiguro?", 10, cat2, resp3);
        var preg2 = new Pregunta("¿Calienta mucho?", 8, cat2, resp2);
        var resp4 = new Respuesta("Quitar la pequeña tapa de plastico debajo del foco rojo. Tomar una birome o lapiz, introducirlo en el agujero hasta escuchar un click. Colocar la tapa nuevamente y verificar que caliente");
        var resp5 = new Respuesta("Si el termotanque esta instalado en una zona de aguas duras, lo que puede ocasionar problemas de sarro, es recomendable drenar de 2 a 3 veces por año, al rededor de 20 litros de agua por la valvula de descarga. Esto ayuda a disminuir la formacion de deposito de sarro en la zona inferior del tanque. " + '\n' + "Los depositos de zarro reducen el rendimiento y la vida util de su termotanque");
        var preg5 = new Pregunta("¿Que mantenimiento tengo que hacer al termotanque?", 2, cat1, resp5);
        var preg4 = new Pregunta("¿Calienta mucho?", 20, cat1, resp4);
        var resp6 = new Respuesta("No, no esta estropeado. La luz piloto se ilumina cuando el electrodomestico está funcionando para que alcance la temperatura seleccionada." + '\n' + "Una vez alcanzada se desconecta hasta que automaticamente vuelve a conectarse para mantener la temperatura elegida");
        var preg6 = new Pregunta("Algunas veces la luz piloto de control del termostato se apaga. ¿Esta estropeado?", 3, cat2, resp6);
        var resp7 = new Respuesta("Los productos cuentan con 6 meses de garantia total");
        var preg7 = new Pregunta("¿Los productos tienen garantia?", 12, cat2, resp7);
        var listaPreguntas = new Array();
        var listaCategorias = new Array();
        this.listaPreguntas.push(preg1);
        this.listaPreguntas.push(preg2);
        this.listaPreguntas.push(preg3);
        this.listaPreguntas.push(preg4);
        this.listaPreguntas.push(preg5);
        this.listaPreguntas.push(preg6);
        this.listaPreguntas.push(preg7);
        listaCategorias.push(cat1);
        listaCategorias.push(cat2);
        var control = new CTR_Faqs(this.listaPreguntas);
        control.visualizarFAQS(listaCategorias);
    }
    Sistema.prototype.getListaPreguntas = function () {
        return this.listaPreguntas;
    };
    return Sistema;
}());
var UIs = /** @class */ (function () {
    function UIs(listaPreguntas) {
        console.log("ui");
        this.lista = listaPreguntas;
    }
    return UIs;
}());
var general = new Sistema();
