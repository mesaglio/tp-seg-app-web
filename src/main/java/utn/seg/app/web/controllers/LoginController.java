package utn.seg.app.web.controllers;


import io.jsonwebtoken.Claims;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import utn.seg.app.web.database.MySQLConnector;
import utn.seg.app.web.jwt.Jwt;
import utn.seg.app.web.models.LoginRequest;

@RestController
public class LoginController {

    private static final Logger logger = LogManager.getLogger("HelloWorld");

    @Autowired
    MySQLConnector mySQLConnector;

    @Autowired
    Jwt jwtComponent;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequest body) {
        String password = body.getPassword();
        if (mySQLConnector.isValidUser(body.getUsername(), password)) {
            String token = jwtComponent.createJWT(body.getUsername(), true);
            Claims claim = jwtComponent.decodeJWT(token);
            logger.info(claim.get("isAdmin"));
            return ResponseEntity.status(200).header("TOKEN", token).body("");
        }
        return ResponseEntity.status(403).body("");
    }
}