package utn.seg.app.web.models;


import utn.seg.app.web.crypto.Md5;

public class LoginRequest {
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return new Md5().encrypt(this.password);
    }
}
