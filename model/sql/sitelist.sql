-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 24, 2014 at 06:45 PM
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
-- Table structure for table `sitelist`
--

CREATE TABLE IF NOT EXISTS `sitelist` (
  `sitename` varchar(100) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `by` varchar(100) DEFAULT NULL,
  `visible` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sitelist`
--

INSERT INTO `sitelist` (`sitename`, `category`, `by`, `visible`) VALUES
('www.guvi.in', 'videos', 'admin', 'Public'),
('www.guvi.info', 'videos', 'admin1', 'ragu@ragu.com'),
('www.linkq.com', 'ghghvh', 'admin1', 'ragu@ragu.com'),
('thursday', 'mnopqrstu', 'admin', 'ragu@ragu.com'),
('my first', 'mnopqrstu', 'ragu', 'Public'),
('temp', 'ghghvh', 'ragu@ragu.com', 'Public'),
('hjb', 'ghghvh', 'temp@dfx.v', 'Public'),
('helloweb', 'mnopqrstu', 'ragu@ragu.com', 'Public'),
('myweb', 'videos', 'ragu@ragu.com', 'Public'),
('my_test_web', 'test', 'test@test.com', 'Public'),
('link.com', 'test', 'test@test.com', 'Public'),
('www.abcdefghijklmnopqrstuvwxyz.com', 'test', 'ragu@ragu.com', 'Public'),
('my_temp', 'test', 'ragu@ragu.com', 'Public'),
('k', 'mnopqrstu', 'ragu@ragu.com', 'ragu@ragu.com'),
('www.cricbuzz.com', 'cricket', 'ragu@ragu.com', 'Public'),
('www.cricinfo.com', 'cricket', 'ragu@ragu.com', 'ragu@ragu.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
