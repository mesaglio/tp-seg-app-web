package utn.seg.app.web.controllers;

import io.jsonwebtoken.Claims;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utn.seg.app.web.database.MySQLConnector;
import utn.seg.app.web.jwt.Jwt;
import utn.seg.app.web.models.User;

import java.util.List;

@RestController
public class UserController {

    private static final Logger logger = LogManager.getLogger("tp-seg-app-web");

    @Autowired
    Jwt jwtComponent;

    @Autowired
    MySQLConnector dbConnector;

    @GetMapping("/user")//@RequestHeader("JWT") String token
    public ResponseEntity<List<User>> GetAllUsers() {
        try {
            List<User> users = dbConnector.GetAllUser();
            return ResponseEntity.ok(users);
        } catch (io.jsonwebtoken.MalformedJwtException e) {
            return ResponseEntity.status(403).build();
        }
    }

    @PutMapping("/user/role")//@RequestHeader("JWT") String token
    public ResponseEntity AddRoleToUser(@RequestParam String email, @RequestParam String role) {
        try {
            //Claims claim = jwtComponent.decodeJWT(token);
            //String email = claim.get("email").toString();
            logger.info("Adding rol " + role + "to " + email);
            dbConnector.AddRoleToUser(role, email);
            return ResponseEntity.status(200).build();
        } catch (io.jsonwebtoken.MalformedJwtException e) {
            return ResponseEntity.status(403).build();
        }
    }
}
