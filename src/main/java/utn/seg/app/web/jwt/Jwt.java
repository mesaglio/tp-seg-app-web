package utn.seg.app.web.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class Jwt {

    public String createJWT(String username, boolean isAdmin) {

        Map<String, Object> info = new HashMap<>();
        info.put("username", username);
        info.put("isAdmin", isAdmin);

        JwtBuilder builder = Jwts.builder()
                .setClaims(info);

        return builder.compact();
    }

    public Claims decodeJWT(String jwt) {
        Claims claims = Jwts.parser()
                .parseClaimsJwt(jwt).getBody();
        return claims;
    }

}
