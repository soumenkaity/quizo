pipeline {
    agent {
        docker {
            image 'maven:3.6-jdk-11-openj9'
            args '-v /home/cgi/.m2:/home/cgi/.m2'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile package'
            }
        }
    }
}
