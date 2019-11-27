
import java.util.ArrayList;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Danilo
 */
public class Sistema {
    private ArrayList<Llamada> LTL = new ArrayList<Llamada>();
    private ArrayList<Producto> LTP = new ArrayList<Producto>();
    private ArrayList<Reclamo> LTR;
    
    
    public Sistema(){
        Garantia garant = new Garantia(1,2,new Date());
        Producto prodNuevo1= new Producto(12,"muy bueno",5,garant);
        LTP.add(prodNuevo1);
        Llamada llam = new Llamada(new Cliente(),prodNuevo1,new Date(),"maleducado",4);
    }
    
    
    
    public ArrayList<Llamada> getListaLlamadas(){
        return this.LTL;
    }
    
        public ArrayList<Producto> getListaProd(){
        return this.LTP;
    }
    public void addReclamo(Reclamo r){
        LTR.add(r);
    }
}
