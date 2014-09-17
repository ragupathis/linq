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
-- Table structure for table `userdetails`
--

CREATE TABLE IF NOT EXISTS `userdetails` (
  `screen_name` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `hash` varchar(1500) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userdetails`
--

INSERT INTO `userdetails` (`screen_name`, `user_name`, `hash`, `password`) VALUES
('helloworld', 'helloworld@hello.com', 'fda75a3b31d9ee00977af8605fcbcddf6d9a62f4f114e9525da3b077703358cb4da3e02d30f418ccb0390aa319b7618390f3442810c93d0a1de33fcc97659349', 'kG6Dfdpbjcu6xDT8uiVnqatKqdGT/gi47S+zIDJlK2E='),
('helloworld', 'ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', 'pDNmSPehUNXJAj+EH9t9l04aks6cxwdcRW0fIXOmIUs='),
('a', 'a@b.c', 'c6454e18cf075f30442add8f73bf7193f1a03f83599f4bcdfc37c680868eb9b20efdaa8de403ccb52cf8ebcf4b2b9466abd10e6c0027ea067319fa17ea51c547', 'Gd65s1qqdkuZ3+xwRbwej5xgBxIrvNksSz5dvjkYcCE='),
('abc', 'abc@abc.abc', '4c6fc12426a63bdc517ce81799e7e79852c35029c3ecfae093cdd00ab0c14c1bdb3cc0de9b37623717cede0edb00b25b3b5e621ebac60ff61ee58ac77e8aa4db', 'Gd65s1qqdkuZ3+xwRbwej5xgBxIrvNksSz5dvjkYcCE='),
('first', 'first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', 'cMuSQI7IpqjQ5G6Q47mgEoqAUJhzWO4ba52M9YcTLO8='),
('second', 'second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', 'cJHHM8K5KUgM6feneVlaLWUTjJ0SIg9MPtGc1RoftjE=');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
