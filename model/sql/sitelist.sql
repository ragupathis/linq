-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 29, 2014 at 05:31 PM
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
  `visible` varchar(50) NOT NULL,
  `likes` int(8) NOT NULL,
  `report_count` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sitelist`
--

INSERT INTO `sitelist` (`sitename`, `category`, `by`, `visible`, `likes`, `report_count`) VALUES
('www.guvi.info', 'videos', 'admin1', 'ragu@ragu.com', 2, 0),
('www.linkq.com', 'ghghvh', 'admin1', 'ragu@ragu.com', 11, 1),
('hjb', 'ghghvh', 'temp@dfx.v', 'Public', 8, 1),
('helloweb', 'mnopqrstu', 'ragu@ragu.com', 'Public', 10, 1),
('myweb', 'videos', 'ragu@ragu.com', 'Public', 1, 0),
('my_test_web', 'test', 'test@test.com', 'Public', 0, 0),
('link.com', 'test', 'test@test.com', 'Public', 2, 1),
('www.abcdefghijklmnopqrstuvwxyz.com', 'test', 'ragu@ragu.com', 'Public', 2, 0),
('k', 'mnopqrstu', 'ragu@ragu.com', 'ragu@ragu.com', 1, 1),
('www.cricbuzz.com', 'cricket', 'ragu@ragu.com', 'Public', 8, 0),
('www.cricinfo.com', 'cricket', 'ragu@ragu.com', 'ragu@ragu.com', 6, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
