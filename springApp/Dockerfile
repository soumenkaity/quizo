FROM openjdk:11
ADD ./target/springapp-0.0.1-SNAPSHOT.jar /usr/src/springapp-0.0.1-SNAPSHOT.jar
EXPOSE 8090
WORKDIR usr/src
ENTRYPOINT ["java","-jar","springapp-0.0.1-SNAPSHOT.jar"]
