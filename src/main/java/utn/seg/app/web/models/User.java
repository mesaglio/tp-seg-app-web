package utn.seg.app.web.models;


public class User {
    private String emails;
    private String password;
    private String role;

    public String getEmails() {
        return emails;
    }

    public String getPassword() {
        return password;
    }

    public void setEmails(String emails) {
        this.emails = emails;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
