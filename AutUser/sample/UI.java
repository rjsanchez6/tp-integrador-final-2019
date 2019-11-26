package sample;

import javax.swing.*;
import java.awt.*;

public class UI {
    JFrame frame;
    public JTextField textField1;
    public JPanel jPanel1;
    public JPasswordField passwordField1;
    public JButton autenticarButton;
    private JLabel imagen;

    public UI(){
        //Creo la interfaz
        frame =  new JFrame("Inicio de Sesion");
        frame.setContentPane(jPanel1);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setResizable(false);
        frame.setSize(400, 500);

        //Centro en la pantalla
        Dimension dim = Toolkit.getDefaultToolkit().getScreenSize();
        frame.setLocation(dim.width/2-frame.getSize().width/2, dim.height/2-frame.getSize().height/2);

        // Pongo un icono a la aplicacion
        Image icon = Toolkit.getDefaultToolkit().getImage("maxelecIcon.png");
        frame.setIconImage(icon);
    }

    private void createUIComponents() {
        // TODO: place custom component creation code here

        //Cargo la imagen de Maxelec y la escalo
        ImageIcon imageIcon = new ImageIcon("maxelec.png");
        Image image = imageIcon.getImage();
        Image newimg = image.getScaledInstance(300, 120,  java.awt.Image.SCALE_SMOOTH);
        imageIcon = new ImageIcon(newimg);
        imagen = new JLabel(imageIcon);
    }

    public void mostrarMensaje(String mensaje){
        if(mensaje=="Autenticacion Exitosa"){
            UIManager.put("OptionPane.okButtonText", "Continuar");
            JOptionPane.showMessageDialog(jPanel1,"Autenticacion exitosa","Logueado",JOptionPane.INFORMATION_MESSAGE);
        } else if(mensaje=="Datos incorrectos"){
            UIManager.put("OptionPane.okButtonText", "Reintentar");
            JOptionPane.showMessageDialog(jPanel1,"Datos incorrectos","Error",JOptionPane.ERROR_MESSAGE);
        }

    }

    public void mostrarLogin(){
        frame.setVisible(true); // Muestro el login
    }
}
