FROM openjdk:11
ADD target/hrService-v1.0.0.jar /usr/src/hrService.jar
EXPOSE 8084
WORKDIR usr/src
ENTRYPOINT ["java","-jar","hrService.jar"]
