package utn.seg.app.web.database;

import org.springframework.stereotype.Component;
import utn.seg.app.web.models.Movie;

import java.util.Arrays;
import java.util.List;

@Component
public class MySQLConnector {

    public boolean isValidUser(String username, String password) {
        return true;
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
