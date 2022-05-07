package utn.seg.app.web.database;

import org.springframework.stereotype.Component;

@Component
public class MySQLConnector {

    public boolean isValidUser(String username, String password) {
        return true;
    }
}
