-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: tryouts
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tryouts`
--

DROP TABLE IF EXISTS `tryouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tryouts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `judul` varchar(225) DEFAULT NULL,
  `mapel` varchar(225) DEFAULT NULL,
  `tanggal_dibuat` date DEFAULT NULL,
  `tanggal_dilaksanakan` date DEFAULT NULL,
  `waktu_pelaksanaan` varchar(225) DEFAULT NULL,
  `durasi_jam` float DEFAULT NULL,
  `jumlah_soal` int DEFAULT NULL,
  `jumlah_submisi` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tryouts`
--

LOCK TABLES `tryouts` WRITE;
/*!40000 ALTER TABLE `tryouts` DISABLE KEYS */;
INSERT INTO `tryouts` VALUES (1,'Latihan Ujian SPLDV','Matematika','2025-03-07','2025-03-10','10.00-12.00',2,20,2),(2,'Latihan Ujian Hukum Newton','Fisika','2025-03-08','2025-03-11','13.00-15.00',1.5,20,5),(3,'Try Out Ujian Nasional 1 Matematika','Matematika','2025-03-09','2025-03-13','09.00-11.00',2,40,0),(4,'Latihan UAS Matematika','Matematika','2025-03-09','2025-03-13','13.00-15.30',2.5,30,10),(5,'Latihan 1 Bahasa Indonesia','Bahasa Indonesia','2025-03-10','2025-03-14','11.00-12.00',1,15,0);
/*!40000 ALTER TABLE `tryouts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-10 22:35:41
