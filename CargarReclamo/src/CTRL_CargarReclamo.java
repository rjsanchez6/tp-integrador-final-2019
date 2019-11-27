
import java.util.ArrayList;
import java.util.Scanner;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Danilo
 */
public class CTRL_CargarReclamo {
    private Sistema sist = new Sistema();
    
    
    public boolean verifGarantia(Date fecCom, int cob){
        return true;
    }
    public void iniciar(){
        Scanner sc= new Scanner(System.in);
        ArrayList<Llamada> LTL= sist.getListaLlamadas();
        for(Llamada llamada:LTL){
            System.out.println(llamada.getNumLlamada());
        }
        int idIngresado= sc.nextInt();
        Reclamo rec = new Reclamo();
        
        for(Llamada llamada:LTL){
            if(llamada.getNumLlamada()==idIngresado){
                rec.setLlamada(llamada);
            }
        }
        int garIngresada= sc.nextInt();
        Date fecCom=null;
        int cober=0;

        ArrayList<Producto>LTP = sist.getListaProd();
        for(Producto prod:LTP){
            Garantia garantia = prod.getGarantia();
            if(garantia.getNumGarantia()==garIngresada){
                fecCom=garantia.getFecCom();
                cober=garantia.getCobertura();
            }
            
        }
        
        boolean flag =verifGarantia(fecCom,cober);
        if(flag==true){
            
            System.out.println(fecCom);
            System.out.println(cober);   
        }
        
        
        String descrip= sc.nextLine();
        String obser= sc.nextLine();
        String diag= sc.nextLine();
        
        rec.setDescrip(descrip);
        rec.setDiag(diag);
        rec.setObser(obser);
        
        Cliente c=rec.getLlamada().getCliente();
        
        

                
                
        c.addReclamo(rec);
                
        sist.addReclamo(rec);
        
        int numRec=rec.getNumRec();
    }
    
    
    
    
    
    
    
    
    
    public static void main(String [] args)
    {
        CTRL_CargarReclamo control = new CTRL_CargarReclamo();
        control.iniciar();
        
    }
   
    
}

