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
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (5);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (25,'chinmay','chinmay123@gmail.com','{bcrypt}$2a$10$nt.1yCB4jIahY/xdfcjzP.1ZKy3cyfWL7Wzt6cQERl8Aq8YgcrdTu',NULL,'HRM'),(26,'soumen','saumen123@gmail.com','{bcrypt}$2a$10$56Y8ICrbXn4byHRH1NYaUe//2OkDJsWhCXmPnSFEvLQbUUE8ZZ8TO',NULL,'ADM'),(27,'Ayush','aayush123@gmail.com','{bcrypt}$2a$10$1nua8Nc8FUVfg759mZUX2ud68R4EL6y9BVU8jZgp2012TPj2pXt.G',NULL,'EMP'),(28,'Shikhar','sikhar123@gmail.com','{bcrypt}$2a$10$zuJ0tNaQfio6W6S1.C1PI.oqH0LJLgpBx569z3j6yKM4TdytOqU4K',NULL,'EMP'),(29,'Renu','renu123@gmail.com','{bcrypt}$2a$10$Dc9KL3j/CVNrsIhwrSzpEuy7puMk8PAh790i9YSIJwGkAzOXo.lvq',NULL,'EMP'),(30,'Pankaj','pankaj123@gmail.com','{bcrypt}$2a$10$NksLnSiuhgwGyfWr6Loo8eOSoqhgq3mO/XToM4QklqH8E/r5bt/Gi',NULL,'EMP'),(31,'Pranjal','pranjal123@gmail.com','{bcrypt}$2a$10$MyAZE9Q9rmnpWP1gk88ai.0zYUri9G5FYCMkKHYuyzwZnywAGJVwK',NULL,'HRM'),(32,'Ganesh','ganesh123@gmail.com','{bcrypt}$2a$10$45cP3VqDErL9zqaOAQFzCuvdTxa3b57BPjG0p4KiL0241ujTLzdXm',NULL,'EMP');
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

-- Dump completed on 2019-12-02 14:47:32
