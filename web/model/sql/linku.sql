-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 10, 2014 at 03:00 PM
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
('my_owns', 'ragu@ragu.ragu'),
('videos', 'admin'),
('cricket', 'admin'),
('news', 'admin'),
('entertainment', 'admin'),
('education', 'admin'),
('video_tutorial', 'admin'),
('second', 'second@ragu.com'),
('test_second', 'second@ragu.com'),
('temp', 'second@ragu.com'),
('success', 'second@ragu.com');

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
('helloweb', 'ragu@ragu.com', '3');

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
('test.com', 'admin@linkhere.in'),
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
('test.com', 'ragu@linkhere.in'),
('link.com', 'str@str.com'),
('www.google.com', 'ragu@linkhere.info'),
('https:\\/\\/www.linkhere.in\\/', 'admin@linkhere.in'),
('www.cricinfo.com', 'ragu@ragu.com'),
('www.guvi.in', 'ragupathi@ragu.co'),
('www.guvi.com', 'ragu@ragu.ragu'),
('www.google.com', 'ragu@ragu.ragu'),
('www.csbvhvshvhvhhvbbvbvcbc.com\\/dsbhbhdbhvdv\\/fdsfsd.htm', 'ragu@ragu.ragu'),
('www.csbvhvshvhvhhvbbvbvcbc.com\\/dsbhbhdbhvdv\\/fdsfsd.html', 'ragu@ragu.ragu');

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
('www.guvi.com', 'ragu@ragu.ragu');

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

-- --------------------------------------------------------

--
-- Table structure for table `useranalyst`
--

CREATE TABLE IF NOT EXISTS `useranalyst` (
  `user_name` varchar(50) NOT NULL,
  `hash` varchar(1500) NOT NULL,
  `ip_address` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `useranalyst`
--

INSERT INTO `useranalyst` (`user_name`, `hash`, `ip_address`) VALUES
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.com', '0c2c023a94bcd1dc13f645b289066cd73b243db2280fef9752cb70deeced8566944bff7a82d562888a7528d138afb991107f7c1526f54ce66740e7aae948db87', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('', 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin123@linkhere.in', '712c33313c8e6b11a511cb0a8bed0ce9203d1085435ef48c9906245bee346809973bbfceac07d2dc0596b1827f3c5dd361ed1049688c2cb93bb05c725ea753f0', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('abc@fdw.cw', '0a9d720033e5887b976bd304316ba52f387aff08b409c358a58bba29bfb7ec69d399b90c9b8e0a06488d2663d6f43e23f9ef00c81caf2bbe0abd9780658cb4fb', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.info', '7924c836245112d92c34307459bbb6824644262a6726a1855508ba8de9c52badde6c9d4169965fd86235941e0b5f589488fac0ea87f6da128bad5ae2dc3abca8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('ragu@linkhere.net', 'cfea9c28ab9e8e436b42b4653560083432d591ae8e61c117f1445d80880fa5be34ffcfcbbe77d84552155bc3704fc518c4be5a54614c313c998f84da8a2970c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.info', '7924c836245112d92c34307459bbb6824644262a6726a1855508ba8de9c52badde6c9d4169965fd86235941e0b5f589488fac0ea87f6da128bad5ae2dc3abca8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.net', 'cfea9c28ab9e8e436b42b4653560083432d591ae8e61c117f1445d80880fa5be34ffcfcbbe77d84552155bc3704fc518c4be5a54614c313c998f84da8a2970c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('ragu@linkhere.net', 'cfea9c28ab9e8e436b42b4653560083432d591ae8e61c117f1445d80880fa5be34ffcfcbbe77d84552155bc3704fc518c4be5a54614c313c998f84da8a2970c8', '2130706433'),
('ragu@linkhere.net', 'cfea9c28ab9e8e436b42b4653560083432d591ae8e61c117f1445d80880fa5be34ffcfcbbe77d84552155bc3704fc518c4be5a54614c313c998f84da8a2970c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@linkhere.info', '7924c836245112d92c34307459bbb6824644262a6726a1855508ba8de9c52badde6c9d4169965fd86235941e0b5f589488fac0ea87f6da128bad5ae2dc3abca8', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('ragu@ragu.com', 'd6d925d1bd21def404b252a4d32e9ae96d050a0ae9d1f6bf35499c2d3f2460dc642b178d6e6988f35b3d0be6c9f265b722ee84c3566b678d482f2f238adcd9d0', '2130706433'),
('ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', '2130706433'),
('admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', '2130706433'),
('temp', '777c534fd04b2cc000819eaf0a63bfa135a62b42777ea4650c2743ca297b3ac6d33c001c664485c7cb3cd3a08475cd80c434be670c01f16d61218f7f9fe0bde5', '2130706433'),
('ragupathi@ragu.com', '08f4f57d45858c5b4b062d6aadae2fc714edff2911a8bb2a0839c2c7d384ca7ea6df50c12aad6b99b0808c9058e44a2551878b98a8157ead15b477972f1dbcb4', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('helloworld@hello.com', 'fda75a3b31d9ee00977af8605fcbcddf6d9a62f4f114e9525da3b077703358cb4da3e02d30f418ccb0390aa319b7618390f3442810c93d0a1de33fcc97659349', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragupathi@ragu.co', 'cdfbd65774b8de6535a2dc04f1b4c1ab0d5d23c9f0d2ef2f781807323be4200aa38808a4e94babda2c36d6a9f73653fdb1f3118737bfde61e1037cd076bb0079', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('a@b.c', 'c6454e18cf075f30442add8f73bf7193f1a03f83599f4bcdfc37c680868eb9b20efdaa8de403ccb52cf8ebcf4b2b9466abd10e6c0027ea067319fa17ea51c547', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('abc@abc.abc', '4c6fc12426a63bdc517ce81799e7e79852c35029c3ecfae093cdd00ab0c14c1bdb3cc0de9b37623717cede0edb00b25b3b5e621ebac60ff61ee58ac77e8aa4db', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433'),
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433'),
('second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', '2130706433'),
('second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', '2130706433'),
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433'),
('ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', '2130706433'),
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433'),
('second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', '2130706433'),
('first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', '2130706433'),
('second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', '2130706433'),
('', 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e', '2130706433');

-- --------------------------------------------------------

--
-- Table structure for table `userdetails`
--

CREATE TABLE IF NOT EXISTS `userdetails` (
  `screen_name` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `hash` varchar(1500) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userdetails`
--

INSERT INTO `userdetails` (`screen_name`, `user_name`, `hash`, `password`) VALUES
('', 'admin@linkhere.in', '015e00482b467d77cbd1dd27623d94f0e04745beded4b7e99c6c0f365cf428aa84c7e1d5bdc43ab8d4e59824669dcf4d6e85d37d5593cdad3458b7c0d9d009c8', ''),
('', 'admin@linkhere.com', '0c2c023a94bcd1dc13f645b289066cd73b243db2280fef9752cb70deeced8566944bff7a82d562888a7528d138afb991107f7c1526f54ce66740e7aae948db87', ''),
('', 'ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', ''),
('', 'admin123@linkhere.in', '712c33313c8e6b11a511cb0a8bed0ce9203d1085435ef48c9906245bee346809973bbfceac07d2dc0596b1827f3c5dd361ed1049688c2cb93bb05c725ea753f0', ''),
('', 'abc@fdw.cw', '0a9d720033e5887b976bd304316ba52f387aff08b409c358a58bba29bfb7ec69d399b90c9b8e0a06488d2663d6f43e23f9ef00c81caf2bbe0abd9780658cb4fb', ''),
('', 'ragu@linkhere.info', '7924c836245112d92c34307459bbb6824644262a6726a1855508ba8de9c52badde6c9d4169965fd86235941e0b5f589488fac0ea87f6da128bad5ae2dc3abca8', ''),
('', 'ragu@linkhere.net', 'cfea9c28ab9e8e436b42b4653560083432d591ae8e61c117f1445d80880fa5be34ffcfcbbe77d84552155bc3704fc518c4be5a54614c313c998f84da8a2970c8', ''),
('', 'ragu@ragu.com', 'd6d925d1bd21def404b252a4d32e9ae96d050a0ae9d1f6bf35499c2d3f2460dc642b178d6e6988f35b3d0be6c9f265b722ee84c3566b678d482f2f238adcd9d0', ''),
('', 'ragupathi@ragu.com', '08f4f57d45858c5b4b062d6aadae2fc714edff2911a8bb2a0839c2c7d384ca7ea6df50c12aad6b99b0808c9058e44a2551878b98a8157ead15b477972f1dbcb4', 'pDNmSPehUNXJAj+EH9t9l04aks6cxwdcRW0fIXOmIUs='),
('helloworld', 'helloworld@hello.com', 'fda75a3b31d9ee00977af8605fcbcddf6d9a62f4f114e9525da3b077703358cb4da3e02d30f418ccb0390aa319b7618390f3442810c93d0a1de33fcc97659349', 'kG6Dfdpbjcu6xDT8uiVnqatKqdGT/gi47S+zIDJlK2E='),
('helloworld', 'ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', 'pDNmSPehUNXJAj+EH9t9l04aks6cxwdcRW0fIXOmIUs='),
('a', 'a@b.c', 'c6454e18cf075f30442add8f73bf7193f1a03f83599f4bcdfc37c680868eb9b20efdaa8de403ccb52cf8ebcf4b2b9466abd10e6c0027ea067319fa17ea51c547', 'Gd65s1qqdkuZ3+xwRbwej5xgBxIrvNksSz5dvjkYcCE='),
('abc', 'abc@abc.abc', '4c6fc12426a63bdc517ce81799e7e79852c35029c3ecfae093cdd00ab0c14c1bdb3cc0de9b37623717cede0edb00b25b3b5e621ebac60ff61ee58ac77e8aa4db', 'Gd65s1qqdkuZ3+xwRbwej5xgBxIrvNksSz5dvjkYcCE='),
('first', 'first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', 'cMuSQI7IpqjQ5G6Q47mgEoqAUJhzWO4ba52M9YcTLO8='),
('second', 'second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', 'cJHHM8K5KUgM6feneVlaLWUTjJ0SIg9MPtGc1RoftjE='),
('', 'second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', ''),
('', 'first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', ''),
('', 'ragu@ragu.ragu', 'e8f151cff6b8dd7d95337836a16083e7c5125e0ce21b9e2ff32bfdae0f19be95bf7657cd813201091d29d2e22812a679c21e36da70e5822204ed651cc93412ca', ''),
('', 'first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', ''),
('', 'second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', ''),
('', 'first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', ''),
('', 'second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', ''),
('', '', 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e', 'WKIjDDMItp+5A7KD1nF1OmJZH0JV5GBNw3DhQiROr24=');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
