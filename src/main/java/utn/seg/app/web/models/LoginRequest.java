package utn.seg.app.web.models;


import utn.seg.app.web.crypto.Md5;

public class LoginRequest {
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return new Md5().encrypt(this.password);
    }
}
