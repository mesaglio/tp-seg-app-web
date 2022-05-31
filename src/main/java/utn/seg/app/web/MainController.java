package utn.seg.app.web;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    private static final Logger logger = LogManager.getLogger("HelloWorld");

    @GetMapping("/")//@RequestHeader("X-Api-Version") String apiVersion
    public String index() {
        logger.info("Received a request for API version ");
        return "Hello, world!";
    }

}