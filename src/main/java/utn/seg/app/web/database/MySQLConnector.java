package utn.seg.app.web.database;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import javax.annotation.PostConstruct;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import utn.seg.app.web.models.User;
import utn.seg.app.web.models.Movie;

@Component
public class MySQLConnector {

    private Connection connector;

    @PostConstruct
    private void Connector(){
        try {
            this.connector = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test?useSSL=false","root","root");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public boolean isValidUser(String email, String password) {
        try {
            String query = "select * from users where email = ?";
            PreparedStatement stmt = this.connector.prepareStatement(query);
            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();
            rs.next();
            return rs.getNString("password").equals(password);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }

    public List<User> GetAllUser() {
        List<User> users = new ArrayList<User>();
        try {
            Statement stmt = this.connector.createStatement();
            ResultSet rs = stmt.executeQuery("select * from users");
            while(rs.next()) {
                User u = new User();
                u.setEmails(rs.getNString("email"));
                u.setPassword(rs.getNString("password"));
                u.setRole(rs.getNString("role"));
                users.add(u);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return users;
    }

    public void AddRoleToUser(String role, String email){
        try {
            Statement stmt = this.connector.createStatement();
            String query = "update users set role = '" + role + "' where email = '" + email +"';";
            stmt.executeUpdate(query);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public List<Movie> GetAllMovies() {
        return Arrays.asList(new Movie(1, "Harry Potter"));
    }

    public boolean existsMovie(String name) {
        // SQLi
        return false;
    }

    public Movie addMovie(String name) {
        return new Movie(1, name);
    }
}
