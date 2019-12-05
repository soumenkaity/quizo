FROM openjdk:11
ADD target/employeeservice-v1.0.0.jar /usr/src/employeeservice.jar
EXPOSE 8083
WORKDIR usr/src
ENTRYPOINT ["java","-jar","employeeservice.jar"]

