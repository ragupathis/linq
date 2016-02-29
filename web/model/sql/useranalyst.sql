-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 17, 2014 at 08:51 AM
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
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('abc@abc.com', '96f975e773ef37f2fe91d7916fc1456deda20b4f95e2354c3caf42657a1aa6558ff3335221804544b4646cb33c8d25a40e476b444b32722bd06cbb5ae88fea52', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433'),
('priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', '2130706433');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;