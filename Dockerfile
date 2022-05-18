FROM gradle:7.3.1-jdk17-alpine AS builder
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle bootJar --no-daemon

FROM ubuntu
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install git sudo=1.8.31-1ubuntu1 make gcc openjdk-8-jdk -y
EXPOSE 8080
RUN mkdir /app
COPY --from=builder /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar
CMD ["java", "-jar", "/app/spring-boot-application.jar"]
