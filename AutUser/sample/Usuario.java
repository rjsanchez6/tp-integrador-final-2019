package sample;

public class Usuario {
    String usuario;
    String pass;
    String rol;
    Empleado empleado;

    public Usuario(String usuario, String pass, String rol) {
        this.usuario = usuario;
        this.pass = pass;
        this.rol = rol;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}
