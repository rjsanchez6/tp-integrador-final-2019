/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Juan
 */
public class Sistema {
    private List<Usuario> listaUsuariosAutenticados;
    
    public Sistema(){
        listaUsuariosAutenticados = new ArrayList<Usuario>();
    }
    
    public void agregarUsuario(Usuario usuario){
        this.listaUsuariosAutenticados.add(usuario);
    }
    
    public void removerUsuario(Usuario usuario){
        listaUsuariosAutenticados.remove(usuario);
    }
    
}
