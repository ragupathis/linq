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
-- Table structure for table `sitelist`
--

CREATE TABLE IF NOT EXISTS `sitelist` (
  `sitename` varchar(100) DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `by` varchar(100) DEFAULT NULL,
  `visible` varchar(50) NOT NULL,
  `likes` int(8) NOT NULL,
  `report_count` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sitelist`
--

INSERT INTO `sitelist` (`sitename`, `description`, `category`, `by`, `visible`, `likes`, `report_count`) VALUES
('www.guvi.info', '', 'videos', 'admin1', 'ragu@ragu.com', 2, 0),
('www.linkq.com', '', 'cricket', 'admin1', 'ragu@ragu.com', 11, 1),
('myweb', '', 'videos', 'ragu@ragu.com', 'Public', 4, 1),
('my_test_web', '', 'news', 'test@test.com', 'Public', 6, 1),
('link.com', '', 'news', 'test@test.com', 'test@test.com', 9, 2),
('www.abcdefghijklmnopqrstuvwxyz.com', '', 'news', 'ragu@ragu.com', 'Public', 8, 0),
('www.cricinfo.com', '', 'cricket', 'ragu@ragu.com', 'ragu@ragu.com', 8, 0),
('www.linkhere.in', '', 'videos', 'ragu@ragu.com', 'Public', 4, 1),
('test.com', '', 'entertainment', 'ragupathi@ragu.com', 'ragupathi@ragu.com', 6, 2),
('www.guvi.com', '', 'education', 'ragupathi@ragu.com', 'Public', 10, 2),
('www.guvi.in', '', 'sdfsdfsdf', 'admin@linkhere.in', 'Public', 8, 1),
('www.youtube.com', '', 'my_new', 'admin@linkhere.in', 'Public', 1, 0),
('gcdghd', '', 'entertainment', 'ragu@linkhere.in', 'Public', 6, 2),
(' www.google.com', '', 'sdfsdfsdf', 'ragu@linkhere.info', 'Public', 0, 0),
('https://www.linkhere.in/', '', 'videos', 'admin@linkhere.in', 'Public', 0, 0),
('www.csbvhvshvhvhhvbbvbvcbc.com/dsbhbhdbhvdv/fdsfsd.html', '', 'cricket', 'admin@linkhere.in', 'Public', 5, 0),
('www.csbvhvshvhvhhvbbvbvcbc.com/dsbhbhdbhvdv/fdsfsd.htm', '', 'cricket', 'admin@linkhere.in', 'Public', 5, 0),
('www.guvi.in', '', 'video_tutorial', 'ragupathi@ragu.co', 'Public', 8, 1),
('www.guvi.in', '', 'Education', 'mm.sridevi@gmail.com', 'Public', 8, 0),
('www.goal.com', '', 'Sports', 'davidparthipan@gmail.com', 'Public', 6, 1),
('www.abc.com', '', 'News', 'davidparthipan@gmail.com', 'davidparthipan@gmail.com', 0, 0),
('www.hindu.com', '', 'Business', 'first@ragu.com', 'Public', 5, 0),
('www.csbvhvshvhvhhvbbvbvcbc.com/dsbhbhdbhvdv/fdsfsd.htm', '', 'Cricket', 'second@ragu.com', 'Public', 5, 0),
('www.asd.com', '', 'Business', 'priya@priya.com', 'Public', 1, 1),
('www.google.com', '', 'Business', 'priya@priya.com', 'Public', 1, 0),
('www.test.com', '', 'Business', 'priya@priya.com', 'Public', 1, 0),
('www.amazings.com', '', 'Entertainment', 'priya@priya.com', 'Public', 1, 0),
('www.amazings.com', '', 'Entertainment', 'priya@priya.com', 'Public', 1, 0),
('www.fb.com', '', 'Sports', 'priya@priya.com', 'Public', 1, 0),
('www.cricbuzz.com', 'Cricbuzz â€“ Live Cricket scores, schedules, news, archives, series', 'Sports', 'priya1@priya.com', 'Public', 0, 0),
('www.guvi.in', 'GUVI - Learn & Share in your native language', 'News', 'priya@priya.com', 'Public', 0, 0),
('www.cricinfo.com', 'Live cricket scores, commentary, match coverage | Cricket news, statistics | ESPN Cricinfo', 'Entertainment', 'priya@priya.com', 'Public', 8, 0),
('www.ragupathi.tk', 'Ragupathi S', 'search_engi', 'priya@priya.com', 'Public', 0, 0),
('www.sitepoint.com', 'SitePoint â€“ Learn HTML, CSS, JavaScript, PHP, Ruby & Responsive Design', 'test', 'priya@priya.com', 'Public', 0, 0),
('www.guvi.in', 'GUVI - Learn & Share in your native language', 'Education', 'priya@priya.com', 'Public', 0, 0),
('www.guvi.i', 'MTS', 'Education', 'priya@priya.com', 'Public', 0, 0),
('www.google.com', 'Google', 'Education', 'priya@priya.com', 'Public', 0, 0),
('www.fb.com', '', 'Education', 'priya@priya.com', 'Public', 0, 0),
('www.google.com', 'Google', 'Education', 'priya@priya.com', 'Public', 0, 0),
('www.fb.com', '', 'Entertainment', 'priya@priya.com', 'Public', 0, 0),
('www.fb.com', '', 'Sports', 'priya@priya.com', 'Public', 0, 0),
('www.fb.com', '', 'Sports', 'priya@priya.com', 'Public', 0, 0),
('www.thehindu.com', '\nThe Hindu: Latest News, Breaking News, Current News, Live Updates on India & World, Jayalalithaa co', 'Entertainment', 'priya@priya.com', 'Public', 1, 0),
('www.thehindu.com', '\nThe Hindu: Latest News, Breaking News, Current News, Live Updates on India & World, Jayalalithaa co', 'Entertainment', 'priya@priya.com', 'Public', 1, 0),
('www.thehindu.com', '\nThe Hindu: Latest News, Breaking News, Current News, Live Updates on India & World, Jayalalithaa co', 'Entertainment', 'priya@priya.com', 'Public', 1, 0),
('www.thehindu.com', '\nThe Hindu: Latest News, Breaking News, Current News, Live Updates on India & World, Jayalalithaa co', 'Entertainment', 'priya@priya.com', 'Public', 1, 0),
('www.thehindu.co.in', '\nThe Hindu: Latest News, Breaking News, Current News, Live Updates on India & World, Jayalalithaa co', 'Entertainment', 'priya@priya.com', 'Public', 0, 0),
('www.google.com', 'Google', 'Sports', 'second@ragu.com', 'Public', 0, 0),
('www.gmail.com', '', 'Entertainment', 'priya@priya.com', 'Public', 0, 0),
('www.ping.com', '\r\n	PING G30\r\n', 'Business', 'priya@priya.com', 'Public', 0, 0),
('www.google.com', 'Google', 'News', 'priya@priya.com', 'Public', 0, 0),
('www.starmusiq.com', 'StarMusiQ.Com Previously NewTamilHits.com & VmusiQ.Com', 'News', 'priya@priya.com', 'Public', 1, 0),
('www.starm.com', '', 'News', 'priya@priya.com', 'Public', 1, 0),
('www.xyz.com', '', 'sample', 'priya@priya.com', 'Public', 1, 0),
('www.test.com', 'Create Tests for Organizational Training and Certification Programs â€“ Test.com', 'sampl', 'priya@priya.com', 'Public', 0, 0),
('vvhgvg', '', 'web_develop', 'priya@priya.com', 'Public', 0, 0),
('www.test.html', 'MTS', 'web_develop', 'priya@priya.com', 'Public', 0, 0),
('www.html.com', 'HTML.COM', 'web_develop', 'priya@priya.com', 'Public', 0, 0),
('www.js.com/html', '', 'qwerty', 'priya@priya.com', 'Public', 0, 0),
('www.js.com/htl', '', 'qwerty', 'priya@priya.com', 'Public', 0, 0),
('www.google.co.in', 'Google', 'qwerty', 'priya@priya.com', 'Public', 0, 0),
('www.business.com', 'Business.com - Helping Growth Companies', 'Business', 'priya@priya.com', 'Public', 0, 0),
('www.business.com', 'Business.com - Helping Growth Companies', 'Business', 'priya@priya.com', 'Public', 0, 0),
('www.business.co', '', 'Business', 'priya@priya.com', 'Public', 0, 0),
('www.dinamalarbn.com', 'MTS', 'News', 'priya@priya.com', 'Public', 1, 0),
('www.bcci.tv', 'The Board Of Control For Cricket In India ', 'new_cate', 'priya@priya.com', 'Public', 0, 0),
('www.bcci.tv', 'The Board Of Control For Cricket In India ', 'new_cate', 'priya@priya.com', 'Public', 0, 0),
('www.clt20.com', '', 'Sports', 'priya@priya.com', 'Public', 0, 0),
('www.in.yahoo.com', '', 'Entertainment', 'priya@priya.com', 'Public', 0, 0),
('www.linksavers.com', '', 'Entertainment', 'priya@priya.com', 'Public', 0, 0),
('www.guvi.in', 'GUVI - Learn & Share in your native language', 'inventions', 'priya@priya.com', 'Public', 0, 0),
('www.delicious.com', '', 'Business', 'priya@priya.com', 'Public', 0, 0),
('www.cfcg.vom/hh', '', 'test', 'priya@priya.com', 'Public', 0, 0),
('pleaseentervalidlink', '', 'SOCIAL', 'priya@priya.com', 'Public', 0, 0),
('hhgghv', '', 'Entertainment', 'priya@priya.com', 'Public', 0, 0),
('www.mylink/test', '', 'SOCIAL', 'priya@priya.com', 'Public', 0, 0),
('fgfgf\\gfg\\', '', 'SOCIAL', 'priya@priya.com', 'Public', 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
