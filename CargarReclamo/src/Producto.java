/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Danilo
 */
public class Producto {
    private Garantia garantia;
    private int numProducto;
    private String descripcion;
    private int lote;
    
    public Garantia getGarantia(){
        return garantia;
    }
    
    public Producto(int num,String des,int lot, Garantia gar){
        numProducto=num;
        descripcion=des;
        lote=lot;
        garantia = gar;      
    }


}
