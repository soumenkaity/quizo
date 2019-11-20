FROM openjdk:11
ADD target/adminService-0.0.1-SNAPSHOT.jar /usr/src/adminService.jar
EXPOSE 8092
WORKDIR usr/src
ENTRYPOINT ["java","-jar","adminService.jar"]
