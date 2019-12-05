rm - rf adaptive-quiz-engine/
git clone https://gitlab-ci-token:8sk7oM92YNs3sFr83AkAhttps@gitlab-cgi.stackroute.in/cgi-wave14/adaptive-quiz-engine.git
git pull origin v1.0.0
mvn clean compile package -DskipTests
sudo docker-compose down
sudo docker-compose up --build
