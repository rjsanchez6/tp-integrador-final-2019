package sample;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class Controlador implements ActionListener{

    private Sistema sistema = Sistema.obtenerSistema();
    private UI ui;
    private Sesion sesion;

    public Controlador() {
        ui = new UI();  // Creamos la interfaz (que tambien muestra los mensajes)
        ui.mostrarLogin();
        ui.autenticarButton.addActionListener(this);    // Esperamos que el usuario ingrese los datos y presione el boton
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        String nombreUser = ui.textField1.getText();
        String contra = new String(ui.passwordField1.getPassword());

        if(nombreUser.equals("") || contra.equals("")){
            ui.mostrarMensaje("Datos incorrectos");
        }else {
            boolean validado = false;

            Usuario usuarioEncontrado = sistema.getUsuario(nombreUser);
            if (usuarioEncontrado != null) {
                String usuario = usuarioEncontrado.getUsuario();
                String contraLista = usuarioEncontrado.getPass();
                if (usuario.equals(nombreUser) && contraLista.equals(contra)) {
                    validado = true;
                }
            }

            if (validado) {
                ui.mostrarMensaje("Autenticacion Exitosa");
                sesion = new Sesion();
                sesion.setUsuarioDeSesion(usuarioEncontrado);
            } else {
                ui.mostrarMensaje("Datos incorrectos");
            }
        }
    }
}
