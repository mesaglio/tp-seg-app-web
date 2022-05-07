package utn.seg.app.web.controllers;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utn.seg.app.web.jwt.Jwt;

@RestController
public class UserController {

    private static final Logger logger = LogManager.getLogger("HelloWorld");

    @Autowired
    Jwt jwtComponent;

    @GetMapping("/user")
    public ResponseEntity hello(@RequestHeader("JWT") String token) {
        try {
            logger.info(jwtComponent.decodeJWT(token).get("isAdmin"));
            return ResponseEntity.status(200).build();
        } catch (io.jsonwebtoken.MalformedJwtException e) {
            return ResponseEntity.status(403).build();
        }
    }
}
