FROM openjdk:11
ADD ./target/configServer-v1.0.0.jar /usr/src/configserver-0.0.1-SNAPSHOT.jar
EXPOSE 8888
WORKDIR usr/src
ENTRYPOINT ["java","-jar","configserver-0.0.1-SNAPSHOT.jar"]
