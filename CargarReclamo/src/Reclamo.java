/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Danilo
 */

public class Reclamo {
    private Llamada llamada;
    private int numReclamo;
    private String diagnostico;
    private String descripcion;
    private String observaciones;
    public void setLlamada(Llamada llam){
        this.llamada = llam;
    }
    public void setDescrip(String d){
        descripcion=d;
    }
    public void setDiag(String diagn){
        diagnostico=diagn;
    }
    public void setObser(String o){
        observaciones=o;
    }
    public Llamada getLlamada(){
        return llamada;
    }
    
    public int getNumRec(){
        return numReclamo;
    }
    
}
