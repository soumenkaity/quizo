FROM openjdk:11
ADD target/loginService-v1.0.0.jar /usr/src/loginService.jar
EXPOSE 8081
WORKDIR usr/src
ENTRYPOINT ["java","-jar","loginService.jar"]
