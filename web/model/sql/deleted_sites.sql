-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 17, 2014 at 08:50 AM
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
-- Table structure for table `deleted_sites`
--

CREATE TABLE IF NOT EXISTS `deleted_sites` (
  `sitename` varchar(50) NOT NULL,
  `by` varchar(50) NOT NULL,
  `report_count` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deleted_sites`
--

INSERT INTO `deleted_sites` (`sitename`, `by`, `report_count`) VALUES
('my_temp', 'ragu@ragu.com', '3'),
('www.cricbuzz.com', 'temp@dfx.v', '3'),
('helloweb', 'ragu@ragu.com', '3'),
('test.com', 'ragupathi@ragu.com', '3'),
('link.com', 'test@test.com', '3');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
