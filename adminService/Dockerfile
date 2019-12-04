FROM openjdk:11
ADD target/adminService-v1.0.0.jar /usr/src/adminService.jar
EXPOSE 8082
WORKDIR usr/src
ENTRYPOINT ["java","-jar","adminService.jar"]
