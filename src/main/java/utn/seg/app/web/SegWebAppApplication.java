package utn.seg.app.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SegWebAppApplication {

	public static void main(String[] args) {
		System.setProperty("com.sun.jndi.ldap.object.trustURLCodebase","true");
		SpringApplication.run(SegWebAppApplication.class, args);
	}

}
