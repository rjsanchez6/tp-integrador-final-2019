/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package autenticarUsuario;
import modelo.Usuario;
import modelo.Sistema;
import pantallas.pantallaLogin;
/**
 *
 * @author Juan
 */
public class Aplicacion {
    
    public static void main(String[] args){
        Sistema sistema = new Sistema();
        //c.insertarUsuario("JorgeT", "12345", "tecnico");
        //c.insertarUsuario("JulianG","maxElec", "postventa");
        //c.insertarUsuario("VictorG","2019","gerente");
        AutenticarUsuarioController ctrl = new AutenticarUsuarioController(sistema);
        ctrl.iniciarPantalla();
    }
}
