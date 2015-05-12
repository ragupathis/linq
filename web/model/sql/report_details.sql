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
-- Table structure for table `report_details`
--

CREATE TABLE IF NOT EXISTS `report_details` (
  `sitename` varchar(50) NOT NULL,
  `by` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `report_details`
--

INSERT INTO `report_details` (`sitename`, `by`) VALUES
('www.tamil.com', 'admin@linkhere.in'),
('abcdef', 'admin@linkhere.in'),
('hjb', 'admin@linkhere.in'),
('www.linq.com', 'admin@linkhere.in'),
('www.linkhere.in', 'admin@linkhere.in'),
('abcdef', 'ragu@linkhere.in'),
('helloweb', 'admin@linkhere.in'),
('www.guvi.com', 'admin@linkhere.in'),
('myweb', 'admin@linkhere.in'),
('www.cricbuzz.com', 'str@str.com'),
('helloweb', 'str@str.com'),
('link.com', 'str@str.com'),
('www.google.com', 'ragu@linkhere.info'),
('https:\\/\\/www.linkhere.in\\/', 'admin@linkhere.in'),
('www.guvi.in', 'ragupathi@ragu.co'),
('www.guvi.com', 'ragu@ragu.ragu'),
('gcdghd', 'second@ragu.com'),
('www.ipl.com', 'priya@priya.com'),
('gcdghd', 'priya@priya.com'),
('www.musiq.com', 'second@ragu.com'),
('test.com', 'second@ragu.com'),
('test.com', 'priya@priya.com'),
('test.com', 'first@ragu.com'),
('link.com', 'priya@priya.com'),
('www.google.com', 'priya@priya.com'),
('www.usa.com/india.html', 'priya@priya.com'),
('www.usa.com', 'priya@priya.com'),
('www.asd.com', 'priya@priya.com'),
('www.tn.gov/in', 'priya@priya.com'),
('my_test_web', 'priya@priya.com'),
('www.test.com/test', 'priya@priya.com'),
('www.linksavers.com/awards.html', 'priya@priya.com'),
('www.my.com', 'priya@priya.com'),
('www.goal.com', 'priya@priya.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
