-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 17, 2014 at 01:15 PM
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
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `category` varchar(20) NOT NULL,
  `added_by` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category`, `added_by`) VALUES
('News', 'admin'),
('Business', 'admin'),
('Sports', 'admin'),
('Entertainment', 'admin'),
('Education', 'admin'),
('Shopping', 'admin'),
('Photography', 'admin'),
('Cricket', 'admin'),
('SOCIAL', 'admin'),
('My_favourite', 'first@ragu.com'),
('Travel', 'admin'),
('Football', 'admin'),
('World Records', 'admin'),
('Social_Network', 'admin'),
('Search_Engine', 'admin'),
('web_develop', 'admin'),
('Multi-Sports ', 'admin'),
('Magazines', 'admin'),
('Organizations', 'admin'),
('Weblogs', 'admin'),
('Employment ', 'admin'),
('Science', 'admin'),
('Website Design', 'admin'),
('History', 'admin'),
('sample', 'priya@priya.com'),
('qwerty', 'priya@priya.com'),
('Abced_fghijkl', 'priya@priya.com'),
('Social_Network', 'priya@priya.com'),
('history', 'priya@priya.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
