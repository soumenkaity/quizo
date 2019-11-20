FROM openjdk:11
ADD ./target/HrRegistration-0.0.1-SNAPSHOT.jar /usr/src/HrRegistration-0.0.1-SNAPSHOT.jar
EXPOSE 8081
WORKDIR usr/src
ENTRYPOINT ["java","-jar","HrRegistration-0.0.1-SNAPSHOT.jar"]
