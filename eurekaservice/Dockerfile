FROM openjdk:11
ADD ./target/eurekaservice-0.0.1-SNAPSHOT.jar /usr/src/eurekaservice-0.0.1-SNAPSHOT.jar
EXPOSE 8761
WORKDIR usr/src
ENTRYPOINT ["java","-jar","eurekaservice-0.0.1-SNAPSHOT.jar"]
