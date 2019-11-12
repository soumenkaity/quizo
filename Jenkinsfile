pipeline {
    agent {
        docker {
            image 'maven:3.6.1-jdk-13-alpine'
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
