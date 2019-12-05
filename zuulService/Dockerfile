FROM openjdk:11
ADD ./target/zuulService-v1.0.0.jar /usr/src/zuulservice-0.0.1-SNAPSHOT.jar
EXPOSE 8080
WORKDIR usr/src
ENTRYPOINT ["java","-jar","zuulservice-0.0.1-SNAPSHOT.jar"]
