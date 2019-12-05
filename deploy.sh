rm - rf adaptive-quiz-engine/
git config user.email "chinmay.kalegaonkar@cgi.com"
git config user.name "chinmay.kalegaonkar"
git pull https://gitlab-ci-token:8sk7oM92YNs3sFr83AkAhttps@gitlab-cgi.stackroute.in/cgi-wave14/adaptive-quiz-engine.git
cd adaptive-quiz-engine
git pull origin v1.0.0
mvn clean compile package -DskipTests
sudo docker-compose down
sudo docker-compose up --build
