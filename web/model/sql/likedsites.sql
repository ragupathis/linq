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
-- Table structure for table `likedsites`
--

CREATE TABLE IF NOT EXISTS `likedsites` (
  `sitename` varchar(100) NOT NULL,
  `by` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `likedsites`
--

INSERT INTO `likedsites` (`sitename`, `by`) VALUES
('www.guvi.com', 'admin@linkhere.com'),
('abcdef', 'admin@linkhere.in'),
('www.linq.com', 'admin@linkhere.in'),
('my_test_web', 'admin@linkhere.in'),
('www.linkhere.in', 'admin@linkhere.in'),
('hjb', 'admin@linkhere.in'),
('myweb', 'admin@linkhere.in'),
('www.linkhere.in', 'ragu@linkhere.in'),
('abcdef', 'ragu@linkhere.in'),
('www.linq.com', 'admin123@linkhere.in'),
('www.linq123.com', 'admin123@linkhere.in'),
('www.tamil.com', 'admin@linkhere.in'),
('www.abcdefghijklmnopqrstuvwxyz.com', 'admin@linkhere.in'),
('www.google.com', 'ragu@linkhere.info'),
('https:\\/\\/www.linkhere.in\\/', 'admin@linkhere.in'),
('www.cricinfo.com', 'ragu@ragu.com'),
('www.guvi.in', 'ragupathi@ragu.co'),
('www.guvi.com', 'ragu@ragu.ragu'),
('www.google.com', 'ragu@ragu.ragu'),
('www.csbvhvshvhvhhvbbvbvcbc.com\\/dsbhbhdbhvdv\\/fdsfsd.htm', 'ragu@ragu.ragu'),
('www.csbvhvshvhvhhvbbvbvcbc.com\\/dsbhbhdbhvdv\\/fdsfsd.html', 'ragu@ragu.ragu'),
('www.guvi.in', 'mm.sridevi@gmail.com'),
('www.guvi.in', 'davidparthipan@gmail.com'),
('www.business.com', 'first@ragu.com'),
('www.timesofindia.com', 'first@ragu.com'),
('www.facebook.com', 'second@ragu.com'),
('www.ragupathi.com\\/achievement.html', 'second@ragu.com'),
('www.guvi.in', 'priya@priya.com'),
('www.hindu.com', 'priya@priya.com'),
('www.google.com', 'priya@priya.com'),
('www.test.com', 'priya@priya.com'),
('www.test.com/test', 'priya@priya.com'),
('www.linksavers.com/awards.html', 'priya@priya.com'),
('www.amazings.com', 'priya@priya.com'),
('www.linksavers.com', 'priya@priya.com'),
('www.abcdefghijklmnopqrstuvwxyz.com', 'priya@priya.com'),
('www.fb.com', 'priya@priya.com'),
('www.guvi.com', 'second@ragu.com'),
('www.cricinfo.com', 'priya@priya.com'),
('www.thehindu.com', 'priya@priya.com'),
('www.youtube.com', 'second@ragu.com'),
('www.xyz.com', 'priya@priya.com'),
('www.goal.com', 'priya@priya.com'),
('www.dinamalarbn.com', 'priya@priya.com'),
('www.starm.com', 'priya@priya.com'),
('www.starmusiq.com', 'priya@priya.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
