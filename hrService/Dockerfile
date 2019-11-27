FROM openjdk:11
ADD target/hrService-0.0.1-SNAPSHOT.jar /usr/src/hrService.jar
EXPOSE 8084
WORKDIR usr/src
ENTRYPOINT ["java","-jar","hrService.jar"]
