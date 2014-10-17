-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 17, 2014 at 08:49 AM
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
('test', 'admin'),
('video_tutorial', 'admin'),
('Cricket', 'admin'),
('SOCIAL', 'admin'),
('My_favourite', 'first@ragu.com'),
('abc', 'admin'),
('def', 'admin'),
('ghi', 'admin'),
('social_net', 'admin'),
('search_engi', 'admin'),
('web_develop', 'admin'),
('cinema', 'admin'),
('america', 'admin'),
('terrorist', 'admin'),
('peace', 'admin'),
('global', 'admin'),
('science', 'admin'),
('inventions', 'admin'),
('aero', 'admin'),
('sample', 'priya@priya.com'),
('qwerty', 'priya@priya.com'),
('Abced_fghijkl', 'priya@priya.com'),
('Social_Network', 'priya@priya.com'),
('history', 'priya@priya.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
