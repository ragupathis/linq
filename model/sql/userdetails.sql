-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 24, 2014 at 06:45 PM
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
  `user_name` varchar(50) NOT NULL,
  `hash` varchar(1500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userdetails`
--

INSERT INTO `userdetails` (`user_name`, `hash`) VALUES
('ragupathi@ragu.com', '08f4f57d45858c5b4b062d6aadae2fc714edff2911a8bb2a0839c2c7d384ca7ea6df50c12aad6b99b0808c9058e44a2551878b98a8157ead15b477972f1dbcb4'),
('ragu@ragu.com', 'd6d925d1bd21def404b252a4d32e9ae96d050a0ae9d1f6bf35499c2d3f2460dc642b178d6e6988f35b3d0be6c9f265b722ee84c3566b678d482f2f238adcd9d0'),
('abc@abc.com', '96f975e773ef37f2fe91d7916fc1456deda20b4f95e2354c3caf42657a1aa6558ff3335221804544b4646cb33c8d25a40e476b444b32722bd06cbb5ae88fea52'),
('', 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'),
('temp@dfx.v', '4aed42dd871471dbb89f55db4b088c85a5bc5396bd1c233ca2d3c3921a319bd38ae36c08bc9ad6ab601acfb07eae670fca0e3cb20b27c562427cffb5c61a0cf9'),
('ragu@gmail.com', '002797a72ab3da191706217828530660cfc5e4e291406593867bec87c75315a8795252975aab781abd11a8d60a95a9edc1a7e34d65283dd8ee132b07184cd057'),
('hhb', 'ef0c5c5de68738461a21fea19ecbb560851936294cc2a760f1b1868856e67dd6e5625a14e7c37483d9b569ec27205da7a63180414e1c20bc4e1c636303690288'),
('test@test.com', '045b45ad1b02b7e0de222e19c77a4e765851378a1eb2202e346cde5f979a3217e83454921dfebe3e4e27bb5cc8de91ce68ed75682bd87c1e323146d94c7a2b31');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
