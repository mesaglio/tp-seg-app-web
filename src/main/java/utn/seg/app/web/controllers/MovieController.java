package utn.seg.app.web.controllers;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utn.seg.app.web.database.MySQLConnector;
import utn.seg.app.web.dto.MovieDTO;
import utn.seg.app.web.jwt.Jwt;
import utn.seg.app.web.models.Movie;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class MovieController {
    private static final Logger logger = LogManager.getLogger("App");

    @Autowired
    Jwt jwtComponent;

    @Autowired
    MySQLConnector dbConnector;

    @GetMapping("/movie")
    public ResponseEntity getAllMovies() {
        try {
            List<Movie> movies = dbConnector.getAllMovies();
            return ResponseEntity.ok(movies);
        } catch (io.jsonwebtoken.MalformedJwtException e) {
            return ResponseEntity.status(403).build();
        }
    }

    @PostMapping("/movie")
    public ResponseEntity addMovie(@RequestBody MovieDTO movie) {
        try {
            if (movie.getName().equals("")) {
                return ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body("Name is empty");
            }
            if (dbConnector.existsMovie(movie.getName())) {
                return ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body("Movie already exists");
            }
            dbConnector.addMovie(movie.getName());
            return ResponseEntity.ok().build();
        } catch (io.jsonwebtoken.MalformedJwtException e) {
            return ResponseEntity.status(403).build();
        }
    }
}
