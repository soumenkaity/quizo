FROM openjdk:11
ADD ./target/zuulservice-0.0.1-SNAPSHOT.jar /usr/src/zuulservice-0.0.1-SNAPSHOT.jar
EXPOSE 8081
WORKDIR usr/src
ENTRYPOINT ["java","-jar","zuulservice-0.0.1-SNAPSHOT.jar"]
