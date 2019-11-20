FROM openjdk:11
ADD target/loginService-0.0.1-SNAPSHOT.jar /usr/src/loginService.jar
EXPOSE 8091
WORKDIR usr/src
ENTRYPOINT ["java","-jar","loginService.jar"]
