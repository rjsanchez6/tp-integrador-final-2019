/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Danilo
 */
public class Llamada {
    private Cliente cliente;
    private Producto producto;
    private Date fechaConsulta ;
    String observaciones;
    int numLlamada;
    
    public Llamada(Cliente cli, Producto prod, Date fecha, String observ,int numLlam){
        this.cliente = cli;
        this.producto = prod;
        this.fechaConsulta = fecha;
        this.observaciones = observ;
        this.numLlamada = numLlam;
    }
    public int getNumLlamada(){
        return this.numLlamada;
    }
    
    public Cliente getCliente(){
        return this.cliente;
    }
}

