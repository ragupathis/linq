-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 17, 2014 at 08:51 AM
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
('first', 'first@ragu.com', '7c7e848c8b832b2d62f3521a1674d97154b016b4d0fb69cefec575acd64db04aab53c04ae667c2c42a334dc0bf3a2d6bd6a53d04ee116c6f588876a2911cf62d', 'cMuSQI7IpqjQ5G6Q47mgEoqAUJhzWO4ba52M9YcTLO8='),
('second', 'second@ragu.com', '0535a51fe31945edc62685fd7c25ecc6e92e275e3fff46f67cc02e89e818b121c3f69462c9ecf593872c867b4d80d222ba7bb26ef9f5c1883ec378aba012676e', 'cJHHM8K5KUgM6feneVlaLWUTjJ0SIg9MPtGc1RoftjE='),
('priya', 'priya@priya.com', '1f7dbaadc5e55a74bab5de1dbf1bca66248f2ee242949fa339e792e854c9246412b54c95d5d8a5a46bdea2b6b9e6434e71a787a64cdd0458918a0079905d4656', 'fbCwRrK6rtbbwSc5i+rQEpiwYjy396AHDvWY+dLwyyQ='),
('ragu', 'ragu@linkhere.in', '13d3eeec9a090aa3bb244018d86a49dd773cab84f272418bb39d9eeb95801fcf4507d4af6988a92ff0c73c0a3eb666da52f4a83312181c1c159dbe73f5a1de1d', 'pDNmSPehUNXJAj+EH9t9l04aks6cxwdcRW0fIXOmIUs='),
('third', 'third@ragu.com', '737fdc79c1cf8d698bfb61230b12bb61009b6ee557f512945fedf8a243c19a7168c007e5151cc3c218c324de774ee499bce049afb9a37105036aa99370c2bc30', '0WrPDKdzIMmKnpkx/NwBuHelPrAjipCCMK8MLYo0umQ='),
('ragu', 'ragu@ragu.com', 'd6d925d1bd21def404b252a4d32e9ae96d050a0ae9d1f6bf35499c2d3f2460dc642b178d6e6988f35b3d0be6c9f265b722ee84c3566b678d482f2f238adcd9d0', 'Ig4R1rD1I4B9cIIAggzUHWKyID6GTsRkyPCjPVXdc1k='),
('             ', 'abc@abc.com', '96f975e773ef37f2fe91d7916fc1456deda20b4f95e2354c3caf42657a1aa6558ff3335221804544b4646cb33c8d25a40e476b444b32722bd06cbb5ae88fea52', 'dV6iznBBSmsZ0yxhEnnWEJRmW6BT3i3HH3EvohZ6R+A=');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
