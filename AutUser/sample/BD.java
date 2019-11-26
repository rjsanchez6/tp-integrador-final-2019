package sample;

import sun.tools.jconsole.JConsole;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class BD {
    static BD bdSingleton = null;

    private BD(){

    }
    public static BD obtenerbd(){
        if(bdSingleton ==null){
            bdSingleton = new BD();
        }
        return bdSingleton;
    }

    Connection c = null;
    Statement stmt = null;

    public void conectar(){

        try{
            Class.forName("org.sqlite.JDBC");
            c = DriverManager.getConnection("jdbc:sqlite:SGP");
            System.out.println("Conectado a la DB prueba");

        }catch (Exception e){
            System.out.println("Error:" + e.getMessage());
            System.exit(1);
        }
    }

    public void crearTablas(){
        try {
            stmt = c.createStatement();
            String sql = "CREATE TABLE IF NOT EXISTS Usuario"+
                    "(nombre varchar(30) PRIMARY KEY,"+
                    "contrasena varchar(30)," +
                    "rol varchar(30))";
            stmt.executeUpdate(sql);

            System.out.println("Creadas las tablas");
        }catch (Exception e){
            System.out.println("Error:" + e.getMessage());
        }
    }

    public void desconectar(){
        try{
            c.close();
            System.out.println("Desconectado de la DB");
        }catch (Exception e){
            System.out.println("Error:" + e.getMessage());
            System.exit(1);
        }
    }

    public void insertarEjemplos(){
        try{

            stmt.executeUpdate("INSERT INTO Usuario(nombre,contrasena,rol)" +
                    " VALUES('roger','1234','administrador') ON CONFLICT(nombre) DO NOTHING");
            stmt.executeUpdate("INSERT INTO Usuario(nombre,contrasena,rol)" +
                    " VALUES('facundo','1234','Gerente') ON CONFLICT(nombre) DO NOTHING");
            stmt.executeUpdate("INSERT INTO Usuario(nombre,contrasena,rol)" +
                    " VALUES('nicolas','1234','ServicioT') ON CONFLICT(nombre) DO NOTHING");
            stmt.executeUpdate("INSERT INTO Usuario(nombre,contrasena,rol)" +
                    " VALUES('martin','1234','administrador') ON CONFLICT(nombre) DO NOTHING");
            stmt.executeUpdate("INSERT INTO Usuario(nombre,contrasena,rol)" +
                    " VALUES('selene','1234','administrador') ON CONFLICT(nombre) DO NOTHING");
            stmt.executeUpdate("INSERT INTO Usuario(nombre,contrasena,rol)" +
                    " VALUES('robinson','1234','administrador') ON CONFLICT(nombre) DO NOTHING");
            System.out.println("Insertados ejemplos");
        }catch (Exception e){
            System.out.println("Error:" + e.getMessage());
        }
    }

    public ArrayList<String> obtenerUsuarios(String usuario) {
        this.obtenerbd();
        this.conectar();
        this.crearTablas();
        this.insertarEjemplos();
        ArrayList<String> listaSalida = new ArrayList<>();
        try {
            ResultSet rs = stmt.executeQuery("SELECT * FROM Usuario");
            while (rs.next()) {
                String user = rs.getString("nombre");
                String contrasena = rs.getString("contrasena");
                String rol = rs.getString("rol");
                if(user.equals(usuario)){
                    listaSalida.add(user);
                    listaSalida.add(contrasena);
                    listaSalida.add(rol);
                    this.desconectar();
                    return listaSalida;
                }
            }

        }catch (Exception e){
            System.out.println("Error:" + e.getMessage());
        }
        this.desconectar();
        return null;
    }
}

