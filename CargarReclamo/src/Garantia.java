/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Danilo
 */
public class Garantia {
    private int numGarantia;
    private int cobertura;
    private Date fechaCompra;
    
    
    public Garantia(int ng, int c, Date d){
        numGarantia = ng;
        cobertura=c;
        fechaCompra = d;
    }
    
    public int getNumGarantia(){
        return this.numGarantia;
    }
         
    public Date getFecCom(){

    return fechaCompra;
    }

    public int getCobertura(){
    return cobertura;

}





}



