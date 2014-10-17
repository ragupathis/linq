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
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `user` varchar(50) NOT NULL,
  `feedback` varchar(1500) NOT NULL,
  `datetime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`user`, `feedback`, `datetime`) VALUES
('ragu', 'success', '0000-00-00'),
('second@ragu.com', 'am back', '0000-00-00'),
('second@ragu.com', 'wow', '0000-00-00'),
('second@ragu.com', 'tets', '0000-00-00'),
('second@ragu.com', 'Super', '0000-00-00'),
('second@ragu.com', 'amazing', '0000-00-00'),
('second@ragu.com', '', '0000-00-00'),
('second@ragu.com', '', '0000-00-00'),
('second@ragu.com', 'yesss', '0000-00-00'),
('second@ragu.com', 'yesss', '0000-00-00'),
('second@ragu.com', 'nice', '0000-00-00'),
('second@ragu.com', 'nice', '0000-00-00'),
('second@ragu.com', 'nice', '0000-00-00'),
('second@ragu.com', '123', '0000-00-00'),
('second@ragu.com', '143', '0000-00-00'),
('second@ragu.com', 'abx', '0000-00-00'),
('second@ragu.com', 'abx', '0000-00-00'),
('second@ragu.com', 'nnnn', '0000-00-00'),
('second@ragu.com', 'nnnn', '0000-00-00'),
('second@ragu.com', 'k', '0000-00-00'),
('second@ragu.com', 'i', '0000-00-00'),
('second@ragu.com', 'i', '0000-00-00'),
('second@ragu.com', 'mine', '0000-00-00'),
('second@ragu.com', 'k', '0000-00-00'),
('second@ragu.com', 'l', '0000-00-00'),
('second@ragu.com', 'l', '0000-00-00'),
('second@ragu.com', 'hi', '0000-00-00'),
('second@ragu.com', 'ok', '0000-00-00'),
('second@ragu.com', 'good', '0000-00-00'),
('priya@priya.com', 'bjvjhbnb', '0000-00-00'),
('priya@priya.com', 'thanks', '0000-00-00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
