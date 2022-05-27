package utn.seg.app.web.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class Jwt {

    public String createJWT(String email, boolean isAdmin) {

        Map<String, Object> info = new HashMap<>();
        info.put("email", email);
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
