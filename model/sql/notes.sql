-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 10, 2014 at 05:32 PM
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
-- Table structure for table `notes`
--

CREATE TABLE IF NOT EXISTS `notes` (
  `user_name` varchar(50) NOT NULL,
  `notes` varchar(500) NOT NULL,
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`user_name`, `notes`) VALUES
('', 'text here'),
('a@b.c', 'text here'),
('abc@abc.abc', 'text here'),
('abc@fdw.cw', 'text here'),
('admin123@linkhere.in', 'text here'),
('admin@linkhere.com', 'text here'),
('admin@linkhere.in', 'gtrghrthr'),
('first@ragu.com', 'text here'),
('helloworld@hello.com', 'text here'),
('ragu@linkhere.in', 'text here bcd'),
('ragu@linkhere.info', 'text here'),
('ragu@linkhere.net', 'text here'),
('ragu@ragu.com', 'text here'),
('ragu@ragu.ragu', 'text here'),
('ragupathi@ragu.co', 'text here'),
('ragupathi@ragu.com', 'text here'),
('second@ragu.com', 'text here'),
('temp', 'text here');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
