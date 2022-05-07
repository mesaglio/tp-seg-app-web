package utn.seg.app.web.crypto;

import org.springframework.util.DigestUtils;

public class Md5 {

    public String encrypt(String data) {
        return DigestUtils.md5DigestAsHex(data.getBytes());
    }

}
