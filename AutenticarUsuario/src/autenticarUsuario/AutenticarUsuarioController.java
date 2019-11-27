/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package autenticarUsuario;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;
import java.util.Scanner;
import modelo.Usuario;
import modelo.Sistema;
import pantallas.MenuGerente;
import pantallas.MenuTecnico;
import pantallas.menuPostventa;
import pantallas.pantallaLogin;


/**
 *
 * @author Juan
 */
public class AutenticarUsuarioController implements ActionListener {
    private Sistema sistema;
    private pantallaLogin login;
    private Connector c;
    
    public AutenticarUsuarioController(Sistema sistema){
        this.sistema = sistema;
        this.login = new pantallaLogin();
        this.login.botonAutenticar.addActionListener(this);
    }
    
    public void actionPerformed(ActionEvent e){
        autenticarUsuario();
    }    
    
    public void iniciarPantalla(){
        login.setTitle("Login");
        login.setLocationRelativeTo(null);
        login.setVisible(true);
    }
    
    public void autenticarUsuario(){
        String username = login.jTextField1.getText().toString();
        String password = login.jPasswordField1.getText().toString();
        c = new Connector();
        Usuario usuario = c.validarUsuario(username,password);
        if (usuario == null){
            login.mostrarDialogo(false);
        }
        else{
            login.mostrarDialogo(true);
            switch(usuario.getRole()){
                case "tecnico": MenuTecnico mt = new MenuTecnico();
                                mt.setLocationRelativeTo(null);
                                mt.setVisible(true);
                                break;
                case "postventa":   menuPostventa mp = new menuPostventa();
                                    mp.setLocationRelativeTo(null);
                                    mp.setVisible(true);
                                    break;
                case "gerente": MenuGerente mg = new MenuGerente();
                                mg.setLocationRelativeTo(null);
                                mg.setVisible(true);
                                break;
                }
            this.login.setVisible(false);
            sistema.agregarUsuario(usuario);
        }
    }
}
