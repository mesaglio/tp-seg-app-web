package utn.seg.app.web.database;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;
import utn.seg.app.web.models.User;
import java.sql.*;

import java.util.ArrayList;
import java.util.List;

@Component
public class MySQLConnector {

    private Connection connector;

    private void Connector(){
        try {
            this.connector = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test?useSSL=false","root","root");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public boolean isValidUser(String email, String password) {
        return true;
    }

    public List<User> GetAllUser() {
        List<User> users = new ArrayList<User>();
        try {
            this.Connector();
            Statement stmt = this.connector.createStatement();
            ResultSet rs = stmt.executeQuery("select * from users");
            while(rs.next()) {
                User u = new User();
                u.setEmails(rs.getNString("email"));
                u.setPassword(rs.getNString("password"));
                u.setRole(rs.getNString("role"));
                users.add(u);
            }
            this.connector.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return users;
    }

    public void AddRoleToUser(String role, String email){
        try {
            this.Connector();
            Statement stmt = this.connector.createStatement();
            String query = "update users set role = '" + role + "' where email = '" + email +"';";
            stmt.executeUpdate(query);
            connector.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

}
