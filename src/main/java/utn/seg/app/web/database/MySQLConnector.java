package utn.seg.app.web.database;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import utn.seg.app.web.models.Movie;
import utn.seg.app.web.models.User;

import javax.annotation.PostConstruct;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class MySQLConnector {
    private static final Logger logger = LogManager.getLogger("App");

    private Connection connector;

    @PostConstruct
    private void Connector(){
        try {
            this.connector = DriverManager.getConnection(
                    "jdbc:mysql://db:3306/test?useSSL=false&allowPublicKeyRetrieval=true&allowMultiQueries=true","root","root");
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

    public boolean isAdmin(String email) {
        try {
            String query = "select role from users where email = ?";
            PreparedStatement stmt = this.connector.prepareStatement(query);
            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();
            rs.next();
            return rs.getNString("role").equals("Admin");
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
                u.setId(rs.getInt("id"));
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

    public List<Movie> getAllMovies() {
        List<Movie> movies = new ArrayList<>();
        try {
            Statement stmt = this.connector.createStatement();
            ResultSet rs = stmt.executeQuery("select id, name from movies");
            while (rs.next()) {
                Movie movie = new Movie(rs.getInt("id"), rs.getNString("name"));
                movies.add(movie);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return movies;
    }

    public boolean existsMovie(String name) {
        try {
            Statement stmt = this.connector.createStatement();
            ResultSet rs = stmt.executeQuery(
                    "select 1 from test.movies where lower(name) = '" + name.toLowerCase() + "';");
            rs.last();
            return rs.getInt(1) > 0;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return false;
    }

    public void addMovie(String name) {
        try {
            Statement stmt = this.connector.createStatement();
            String query = "insert into test.movies (name) values ('" + name + "');";
            stmt.execute(query);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    public String GetUserRole(String email){
        try {
            String query = "select role from users where email = ?";
            PreparedStatement stmt = this.connector.prepareStatement(query);
            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();
            rs.next();
            return rs.getNString("role");
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return null;
    }

}
