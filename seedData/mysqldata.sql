-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: AQE
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.19.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `expiry` date DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'user','email','{bcrypt}$2a$10$GTFGD83Y5wE4uP8.AttjnuaZusBvbP5F64ZBRX.gN6/cTUHyd4e6y',NULL,'HRM'),(6,'useradm','email','{bcrypt}$2a$10$vFFQpgfdRn3k5Z9njlh6auFBZM29yHmFE2doFF1S9T/UHqxDZc/yq',NULL,'ADM'),(7,'userh','email','{bcrypt}$2a$10$owSQ9srJxz7C1fT2zI0ERO25UhGml/SJ2ziamGS5a1309x.PZTe5e',NULL,'HRM'),(8,'usere','email','{bcrypt}$2a$10$XnhxgpIMl9.edwKs79tTOudKUEysLhiBfPFtLhLDo5oNOGAa0Wfya',NULL,'EMP'),(15,'userh2','email','{bcrypt}$2a$10$QSncqW5EXx0Ygay8VkQT.eeKX.1YWzUhlAze3fzvT8e4L8W7wnS3u',NULL,'EMP'),(16,'asd','asf','{bcrypt}$2a$10$HxNGTop/2zb0FaG7Jrx61.YOXrH/.OCz0Wtb2haeAnmeFLWdj3HOy',NULL,'EMP'),(17,'user12','123','{bcrypt}$2a$10$fZ5H48sBo83ziFjHQ2lpOuF4i.u/l25ys6H2TyxXtgRqcI6lRmacy',NULL,'EMP');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-21 15:43:03
