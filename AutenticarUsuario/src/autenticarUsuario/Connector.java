/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package autenticarUsuario;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;
import modelo.Sistema;
import modelo.Usuario;

/**
 *
 * @author Juan
 */
public class Connector {
    Connection c = null;
    Statement stmt = null;

    public Connector() {
        //try connect to DB
        try {
            Class.forName("org.sqlite.JDBC");
            c = DriverManager.getConnection("jdbc:sqlite:MaxElecDB.sqlite");
            //System.out.println("Connected to DB OK...");
        } catch (Exception e) {
            //System.out.println("Error: " + e.getMessage());
        }
    }

    public void crearTabla() {
        try {
            this.stmt = c.createStatement();
            stmt.executeUpdate("Create table if not exists usuario(username text primary key,"
                    + "password text not null, role text not null)");
        } catch (Exception e) {
            //System.out.println("Error: " + e.getMessage());
        }
    }    
    
    public void insertarUsuario(String username,String password,String role){
        try{
            this.stmt = c.createStatement();
            stmt.executeUpdate("insert into usuario(username,password,role) values('"+username+"','"+password+"','"+role+"') ON CONFLICT(username) DO NOTHING ");
        }catch(Exception e){
            //System.out.println("Error: "+e.getMessage());
        }
    }
    
    public Usuario validarUsuario(String username,String password){
        Usuario usuario = null;
        try{
            this.stmt = c.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM usuario WHERE username = '"+username+"' ");
            rs.next();
            String userbd = rs.getString("username");
            String passbd = rs.getString("password");
            String role = rs.getString("role");
            if (passbd.equalsIgnoreCase(password)){
                usuario = new Usuario(username,password,role);
            }
        }catch(Exception e){
            System.out.println("Error: "+e.getMessage());
        }
        this.desconectar();
        return usuario;
    }
    
    public void desconectar(){
        try{
            c.close();
        }catch (Exception e){
            //System.out.println("Error:" + e.getMessage());
        }
    }
}
