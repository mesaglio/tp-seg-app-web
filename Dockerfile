# FROM gradle:7.3.1-jdk17-alpine AS builder
# COPY --chown=gradle:gradle . /home/gradle/src
# WORKDIR /home/gradle/src
# RUN gradle bootJar --no-daemon
# 
FROM ubuntu
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install git sudo=1.8.31-1ubuntu1 make gcc openjdk-8-jdk -y
RUN adduser --disabled-password --gecos '' newuser
USER newuser
EXPOSE 8080
WORKDIR /home/newuser
# COPY --from=builder /home/gradle/src/build/libs/*.jar /home/newuser/spring-boot-application.jar
COPY bin/*.jar /home/newuser/spring-boot-application.jar
CMD ["java", "-jar", "/home/newuser/spring-boot-application.jar"]
