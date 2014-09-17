-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 10, 2014 at 05:33 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `linku`
--

-- --------------------------------------------------------

--
-- Table structure for table `useranalyst`
--

CREATE TABLE IF NOT EXISTS `useranalyst` (
  `user_name` varchar(50) NOT NULL,
  `hash` varchar(1500) NOT NULL,
  `ip_address` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `useranalyst`
--

INSERT INTO `useranalyst` (`user_name`, `hash`, `ip_address`) VALUES
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433'),
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433'),
('second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', '2130706433'),
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433'),
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
