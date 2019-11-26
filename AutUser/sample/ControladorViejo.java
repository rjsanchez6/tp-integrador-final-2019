package sample;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class ControladorViejo implements ActionListener{

    private Sistema sistema = Sistema.obtenerSistema();
    private UI ui;
    private Sesion sesion;

    public ControladorViejo() {
        ui = new UI();  // Creamos la interfaz (que tambien muestra los mensajes)
        ui.mostrarLogin();
        ui.autenticarButton.addActionListener(this);    // Esperamos que el usuario ingrese los datos y presione el boton
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        String nombreUser = ui.textField1.getText();
        String contra = new String(ui.passwordField1.getPassword());

        Usuario usuarioValidado = null;
        boolean validado = false;

        ArrayList<Usuario> listaTodoUsuarios = sistema.getListaUsuarios();

        for(Usuario usuario:listaTodoUsuarios){
            String usuarioLista = usuario.getUsuario();
            String contraLista = usuario.getPass();
            if(usuarioLista.equals(nombreUser) && contraLista.equals(contra)){
                usuarioValidado = usuario;
                validado = true;
            }
        }

        if(validado) {
            ui.mostrarMensaje("Autenticacion Exitosa");
            sesion = new Sesion();
            sesion.setUsuarioDeSesion(usuarioValidado);
        }else{
            ui.mostrarMensaje("Datos incorrectos");
        }
    }
}
