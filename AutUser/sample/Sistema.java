package sample;

import java.util.ArrayList;

public class Sistema {
    ArrayList<Usuario> listaUsuarios = new ArrayList<>();
    static Sistema sistemaSingleton = null;
    private BD bd = BD.obtenerbd();

    private Sistema(){
        /*Usuario nuevoUsuario = new Usuario("atCliente","1234","AtencionCliente");
        listaUsuarios.add(nuevoUsuario);
        nuevoUsuario = new Usuario("jefe","jefe","Administrador");
        listaUsuarios.add(nuevoUsuario);*/
    }

    public static Sistema obtenerSistema(){
        if(sistemaSingleton==null){
            sistemaSingleton = new Sistema();
        }
        return sistemaSingleton;
    }

    public Usuario getUsuario(String nombreUser){
        ArrayList<String> lista = bd.obtenerUsuarios(nombreUser);
        if(lista!=null){
            Usuario usuario = new Usuario(lista.get(0),lista.get(1),lista.get(2));
            return usuario;
        }
        return null;
    }

    public void agregarUsuario(Usuario userNuevo){
        listaUsuarios.add(userNuevo);
    }

    public ArrayList<Usuario> getListaUsuarios() {
        return listaUsuarios;
    }
}
