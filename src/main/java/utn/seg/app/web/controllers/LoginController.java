package utn.seg.app.web.controllers;


import io.jsonwebtoken.Claims;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utn.seg.app.web.database.MySQLConnector;
import utn.seg.app.web.jwt.Jwt;
import utn.seg.app.web.models.LoginRequest;
import utn.seg.app.web.models.LoginResponse;

@RestController()
@CrossOrigin(origins = "http://localhost:3000/")
public class LoginController {

    private static final Logger logger = LogManager.getLogger("App");

    @Autowired
    MySQLConnector mySQLConnector;

    @Autowired
    Jwt jwtComponent;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequest body) {
        String password = body.getPassword();
        if (mySQLConnector.isValidUser(body.getEmail(), password)) {
            String token = jwtComponent.createJWT(body.getEmail(), true);
            LoginResponse response = new LoginResponse();
            response.setToken(token);
            return ResponseEntity.status(200).body(response);
        }
        return ResponseEntity.status(403).body("");
    }
}