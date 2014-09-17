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
('www.linkq.com', 'cricket', 'admin1', 'ragu@ragu.com', 11, 1),
('myweb', 'videos', 'ragu@ragu.com', 'Public', 4, 1),
('my_test_web', 'news', 'test@test.com', 'Public', 2, 0),
('link.com', 'news', 'test@test.com', 'Public', 4, 2),
('www.abcdefghijklmnopqrstuvwxyz.com', 'news', 'ragu@ragu.com', 'Public', 4, 0),
('www.cricinfo.com', 'cricket', 'ragu@ragu.com', 'ragu@ragu.com', 7, 0),
('www.linkhere.in', 'videos', 'ragu@ragu.com', 'Public', 4, 1),
('test.com', 'entertainment', 'ragupathi@ragu.com', 'Public', 3, 0),
('www.guvi.com', 'education', 'ragupathi@ragu.com', 'Public', 6, 2),
('www.guvi.in', 'sdfsdfsdf', 'admin@linkhere.in', 'Public', 1, 1),
('www.youtube.com', 'my_new', 'admin@linkhere.in', 'Public', 0, 0),
('gcdghd', 'entertainment', 'ragu@linkhere.in', 'Public', 0, 0),
(' www.google.com', 'sdfsdfsdf', 'ragu@linkhere.info', 'Public', 0, 0),
('https://www.linkhere.in/', 'videos', 'admin@linkhere.in', 'Public', 0, 0),
('www.csbvhvshvhvhhvbbvbvcbc.com/dsbhbhdbhvdv/fdsfsd.html', 'cricket', 'admin@linkhere.in', 'Public', 0, 0),
('www.csbvhvshvhvhhvbbvbvcbc.com/dsbhbhdbhvdv/fdsfsd.htm', 'cricket', 'admin@linkhere.in', 'Public', 0, 0),
('www.guvi.in', 'video_tutorial', 'ragupathi@ragu.co', 'Public', 1, 1),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.google.com', 'cricket', 'ragu@ragu.ragu', 'Public', 1, 0),
('www.second.com', 'second', 'second@ragu.com', 'Public', 0, 0),
('www.fb.com', 'video_tutorial', 'second@ragu.com', 'Public', 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
