-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 28, 2014 at 06:23 AM
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
('Education', 'admin'),
('Books', 'admin'),
('Employment', 'admin'),
('News', 'admin'),
('Science', 'admin'),
('Computer', 'admin'),
('Software', 'admin'),
('Hardware', 'admin'),
('Hacking', 'admin'),
('Graphics', 'admin'),
('Magazine', 'admin'),
('Weblogs', 'admin'),
('History', 'admin'),
('Web_Development', 'admin'),
('Business', 'admin'),
('Shopping', 'admin'),
('Entertainment', 'admin'),
('Movies', 'admin'),
('Music', 'admin'),
('Food', 'admin'),
('Pets', 'admin'),
('Photography', 'admin'),
('Travel', 'admin'),
('Vehicle', 'admin'),
('Comics', 'admin'),
('Organizations', 'admin'),
('Regional', 'admin'),
('Television', 'admin'),
('Health', 'admin'),
('Beauty', 'admin'),
('Games', 'admin'),
('MobileApps', 'admin'),
('Cricket', 'admin'),
('Football', 'admin'),
('MultiSports', 'admin'),
('Video', 'admin'),
('SocialNetwok', 'admin'),
('Cooking', 'admin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
