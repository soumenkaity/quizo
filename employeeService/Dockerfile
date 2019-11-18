FROM openjdk:11
ADD target/employeeservice-0.0.1-SNAPSHOT.jar /usr/src/employeeservice.jar
EXPOSE 9090
WORKDIR usr/src
ENTRYPOINT ["java","-jar","employeeservice.jar"]

