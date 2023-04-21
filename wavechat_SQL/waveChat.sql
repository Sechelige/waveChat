-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 21 avr. 2023 à 23:01
-- Version du serveur :  10.5.18-MariaDB-0+deb11u1
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `waveChat`
--

-- --------------------------------------------------------

--
-- Structure de la table `Conversation`
--

CREATE TABLE `Conversation` (
  `idConversation` int(11) NOT NULL,
  `nomConversation` varchar(50) NOT NULL,
  `descConv` varchar(50) DEFAULT NULL,
  `urlImage` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Conversation`
--

INSERT INTO `Conversation` (`idConversation`, `nomConversation`, `descConv`, `urlImage`) VALUES
(1, 'Une super conversation', 'ceci est une description de conv', 'Une URL d\'image randomm'),
(7, 'nouveauNom', NULL, NULL),
(8, 'une nouvelle conv de test', 'ceci est une conv', 'pasd\'urldimage'),
(9, 'Une super conversation', 'ceci est une description de conv', 'Une URL d\'image randomm'),
(10, 'Une super conversation', 'ceci est une description de conv', 'Une URL d\'image randomm'),
(11, 'Une super conversation', 'ceci est une description de conv', 'Une URL d\'image randomm'),
(12, 'La Famille', 'une famille de zinzin', 'onenapas'),
(13, 'Les potes compotes', 'on adore la binouse', 'onenapas'),
(16, 'Les amis', 'c\'est les potes', 'onenapas'),
(17, 'Antoine', 'c\'est les potes', 'onenapas'),
(18, 'Nino', 'c\'est les potes', 'onenapas'),
(19, 'Elena', 'c\'est les potes', 'onenapas'),
(20, 'Vacances d\'été', 'c\'est les potes', 'onenapas'),
(21, 'qsd', 'qsd', 'none'),
(22, 'test postman', 'nigga', 'none'),
(23, 'Conv cool', 'conv pas cool', 'none'),
(24, 'Conv cool', 'conv pas cool', 'none'),
(25, 'test', 'test', 'none'),
(26, 'Marie et Nino', 'la conv avec Marie', 'none'),
(27, 'Mon groupe', 'none', 'none'),
(28, 'testtesttetset', 'none', 'none'),
(29, 'groupetest', 'none', 'none'),
(30, 'test', 'none', 'none'),
(31, 'test', 'none', 'none'),
(32, 'test', 'none', 'none'),
(33, 'test', 'none', 'none'),
(34, 'test', 'none', 'none'),
(35, 'Mon tout premier groupe !', 'none', 'none'),
(36, 'Groupe des amis', 'none', 'none'),
(37, 'AAA', 'none', 'none'),
(38, 'AAAAA', 'none', 'none'),
(39, 'AAAAA', 'none', 'none'),
(40, 'Nm du cogruoe', 'none', 'none');

-- --------------------------------------------------------

--
-- Structure de la table `lu`
--

CREATE TABLE `lu` (
  `tagUtilisateur` int(11) NOT NULL,
  `idMessage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Message`
--

CREATE TABLE `Message` (
  `idMessage` int(11) NOT NULL,
  `contenuMessage` varchar(500) NOT NULL,
  `dateMessage` date NOT NULL,
  `heureMessage` time NOT NULL,
  `tagUtilisateur` int(11) NOT NULL,
  `idConversation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Message`
--

INSERT INTO `Message` (`idMessage`, `contenuMessage`, `dateMessage`, `heureMessage`, `tagUtilisateur`, `idConversation`) VALUES
(8, 'czopdijcecpêakzdc', '2023-02-01', '00:00:00', 1, 1),
(9, 'Coucou !', '2023-03-28', '10:42:27', 8, 12),
(10, 'Comment ça va ?', '2023-03-28', '10:42:31', 8, 12),
(11, 'ça va super ', '2023-03-28', '10:42:42', 8, 12),
(12, 'Coucou', '2023-03-28', '12:40:24', 7, 12),
(13, 'cc mec ', '2023-03-28', '12:40:41', 8, 12),
(14, 'Hehe', '2023-03-28', '12:46:00', 4, 12),
(15, 'qsf', '2023-03-28', '12:46:07', 4, 12),
(16, 'salut', '2023-03-28', '12:46:48', 4, 12),
(17, 'Ceci est la seconde conv ', '2023-03-28', '12:49:49', 8, 13),
(18, 'Voilà c\'est un peu bugué mdr *', '2023-03-28', '12:49:53', 8, 13),
(19, 'SALUT ? ', '2023-03-28', '16:40:04', 8, 12),
(20, 'ls ', '2023-03-31', '11:42:25', 8, 12),
(21, 'test', '2023-03-31', '12:42:25', 8, 12),
(22, 'test 2 ', '2023-03-31', '12:43:01', 8, 12),
(23, 'Fortnite', '2023-03-31', '12:43:06', 8, 12),
(24, 'Coucou', '2023-04-03', '21:21:09', 8, 12),
(26, 'qsdqsd', '2023-04-03', '21:31:32', 8, 12),
(28, ' qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd  qsdqsdqsdsq qsd qsd ', '2023-04-03', '21:31:48', 8, 12),
(29, 'test', '2023-04-04', '15:08:32', 8, 12),
(30, 'test', '2023-04-04', '15:16:21', 8, 12),
(31, 'cmsdvsfv', '2023-04-04', '16:20:16', 8, 19),
(32, 'sfvsf', '2023-04-04', '16:20:16', 8, 19),
(33, 'vs', '2023-04-04', '16:20:16', 8, 19),
(34, 'fvs', '2023-04-04', '16:20:16', 8, 19),
(35, 'fv', '2023-04-04', '16:20:17', 8, 19),
(36, 'sfv', '2023-04-04', '16:20:17', 8, 19),
(37, 'sf', '2023-04-04', '16:20:17', 8, 19),
(38, 'vsf', '2023-04-04', '16:20:17', 8, 19),
(39, 'vsf', '2023-04-04', '16:20:17', 8, 19),
(40, 'v', '2023-04-04', '16:20:17', 8, 19),
(41, 'fsv', '2023-04-04', '16:20:18', 8, 19),
(42, 'fsv', '2023-04-04', '16:20:18', 8, 19),
(43, 'fs', '2023-04-04', '16:20:18', 8, 19),
(44, 'vfs', '2023-04-04', '16:20:18', 8, 19),
(45, 'vsf', '2023-04-04', '16:20:18', 8, 19),
(46, 'v', '2023-04-04', '16:20:18', 8, 19),
(47, 'COUCOU MON FRERE', '2023-04-04', '16:24:20', 8, 12),
(48, 'let\'s gpoo', '2023-04-04', '16:24:32', 7, 12),
(49, 'qsdqsd', '2023-04-04', '16:24:38', 8, 12),
(50, 'biteee', '2023-04-04', '16:26:49', 8, 12),
(51, 'immature nino', '2023-04-04', '16:27:00', 8, 12),
(52, 'KYS ', '2023-04-04', '16:27:02', 8, 12),
(53, 'test`', '2023-04-04', '16:31:33', 7, 12),
(54, 'coucou mec ', '2023-04-04', '16:31:43', 8, 12),
(55, '`k,csdcsd', '2023-04-04', '16:31:53', 7, 12),
(56, 'test', '2023-04-04', '16:33:25', 7, 12),
(57, 'test', '2023-04-04', '16:34:24', 7, 12),
(58, 'bsbfv ds ', '2023-04-04', '16:34:27', 7, 12),
(59, 'test', '2023-04-04', '16:34:29', 8, 13),
(60, 'csjdncnldsc', '2023-04-04', '22:26:09', 7, 12),
(61, 'ocoksdpkc', '2023-04-04', '22:26:10', 7, 12),
(62, 'clksd,cns', '2023-04-04', '22:26:11', 7, 12),
(63, 'lsdjcns$', '2023-04-04', '22:26:12', 7, 12),
(64, 'ouais kys ', '2023-04-05', '10:16:08', 8, 12),
(65, 'Test', '2023-04-05', '10:22:22', 8, 12),
(66, 'Coucou les amis ', '2023-04-05', '10:27:16', 8, 16),
(67, 'Coucou Antoine', '2023-04-05', '10:27:22', 8, 17),
(68, 'Coucou Nino', '2023-04-05', '10:27:26', 8, 18),
(69, 'Test', '2023-04-05', '10:28:11', 8, 12),
(70, 'Salut !', '2023-04-05', '10:28:17', 8, 12),
(71, 'test', '2023-04-05', '10:41:45', 8, 12),
(72, 'Test pour scroll', '2023-04-05', '10:41:53', 8, 12),
(73, '$a', '2023-04-05', '10:42:53', 8, 12),
(74, 'a', '2023-04-05', '10:42:53', 8, 12),
(75, 'a', '2023-04-05', '10:42:54', 8, 12),
(76, 'a', '2023-04-05', '10:42:54', 8, 12),
(77, 'a', '2023-04-05', '10:42:54', 8, 12),
(78, 'a', '2023-04-05', '10:42:54', 8, 12),
(79, 'a', '2023-04-05', '10:42:54', 8, 12),
(80, 'a', '2023-04-05', '10:42:55', 8, 12),
(81, 'a', '2023-04-05', '10:42:55', 8, 12),
(82, 'a', '2023-04-05', '10:42:55', 8, 12),
(83, 'a', '2023-04-05', '10:42:55', 8, 12),
(84, 'a', '2023-04-05', '10:42:56', 8, 12),
(85, 'a', '2023-04-05', '10:42:56', 8, 12),
(86, 'a', '2023-04-05', '10:42:56', 8, 12),
(87, 'a', '2023-04-05', '10:42:56', 8, 12),
(88, 'a', '2023-04-05', '10:42:57', 8, 12),
(89, 'a', '2023-04-05', '10:42:57', 8, 12),
(90, 'a', '2023-04-05', '10:42:57', 8, 12),
(91, 'a', '2023-04-05', '10:42:57', 8, 12),
(92, 'a', '2023-04-05', '10:42:58', 8, 12),
(93, 'a', '2023-04-05', '10:42:58', 8, 12),
(94, 'a', '2023-04-05', '10:42:58', 8, 12),
(95, 'qsd', '2023-04-05', '10:42:58', 8, 12),
(96, 'f', '2023-04-05', '10:42:58', 8, 12),
(97, 'sdf', '2023-04-05', '10:42:59', 8, 12),
(98, 'sqdfsdfs', '2023-04-05', '10:42:59', 8, 12),
(99, 'qdfs', '2023-04-05', '10:42:59', 8, 12),
(100, 'dfs', '2023-04-05', '10:43:00', 8, 12),
(101, 'dfs', '2023-04-05', '10:43:00', 8, 12),
(102, 'df', '2023-04-05', '10:43:00', 8, 12),
(103, 'sd', '2023-04-05', '10:43:00', 8, 12),
(104, 'd', '2023-04-05', '10:43:00', 8, 12),
(105, 'd', '2023-04-05', '10:43:00', 8, 12),
(106, 'd', '2023-04-05', '10:43:01', 8, 12),
(107, 'd', '2023-04-05', '10:43:01', 8, 12),
(108, 'd', '2023-04-05', '10:43:01', 8, 12),
(109, 'd', '2023-04-05', '10:43:01', 8, 12),
(110, 'd', '2023-04-05', '10:43:01', 8, 12),
(111, 'd', '2023-04-05', '10:43:02', 8, 12),
(112, 'ssdfsdfsqdfsqfsqfdsqdf', '2023-04-05', '10:43:03', 8, 12),
(113, 'sdfsd', '2023-04-05', '10:43:04', 8, 12),
(114, 'fsq', '2023-04-05', '10:43:04', 8, 12),
(115, 'dfs', '2023-04-05', '10:43:04', 8, 12),
(116, 'df', '2023-04-05', '10:43:05', 8, 12),
(117, 'q', '2023-04-05', '10:43:05', 8, 12),
(118, 's', '2023-04-05', '10:43:05', 8, 12),
(119, 'df', '2023-04-05', '10:43:05', 8, 12),
(120, 'sdf', '2023-04-05', '10:43:06', 8, 12),
(121, 'sdf', '2023-04-05', '10:43:06', 8, 12),
(122, 's', '2023-04-05', '10:43:06', 8, 12),
(123, 'df', '2023-04-05', '10:43:06', 8, 12),
(124, 'f', '2023-04-05', '10:43:06', 8, 12),
(125, 'f', '2023-04-05', '10:43:07', 8, 12),
(126, 'f', '2023-04-05', '10:43:07', 8, 12),
(127, 'f', '2023-04-05', '10:43:07', 8, 12),
(128, 'f', '2023-04-05', '10:43:07', 8, 12),
(129, 'f', '2023-04-05', '10:43:08', 8, 12),
(130, 'f', '2023-04-05', '10:43:08', 8, 12),
(131, 'f', '2023-04-05', '10:43:08', 8, 12),
(132, 'f', '2023-04-05', '10:43:08', 8, 12),
(133, 'f', '2023-04-05', '10:43:08', 8, 12),
(134, 'd', '2023-04-05', '10:43:08', 8, 12),
(135, 'd', '2023-04-05', '10:43:09', 8, 12),
(136, 'd', '2023-04-05', '10:43:09', 8, 12),
(137, 'ssss', '2023-04-05', '10:43:09', 8, 12),
(138, 's', '2023-04-05', '10:43:10', 8, 12),
(139, 'd', '2023-04-05', '10:43:10', 8, 12),
(140, 'd', '2023-04-05', '10:43:10', 8, 12),
(141, 'd', '2023-04-05', '10:43:10', 8, 12),
(142, 's', '2023-04-05', '10:43:11', 8, 12),
(143, 's', '2023-04-05', '10:43:11', 8, 12),
(144, 'd', '2023-04-05', '10:43:11', 8, 12),
(145, 'test', '2023-04-05', '10:43:17', 8, 12),
(146, 'test php', '2023-04-05', '10:44:16', 8, 13),
(147, 'test php 2', '2023-04-05', '10:44:19', 8, 13),
(148, 'lol', '2023-04-05', '11:54:01', 7, 12),
(149, 'coucou', '2023-04-05', '11:54:38', 7, 20),
(150, 'test', '2023-04-05', '11:54:52', 7, 20),
(151, 'ok', '2023-04-05', '11:55:35', 7, 20),
(152, 'fortnite', '2023-04-07', '17:24:00', 7, 12),
(153, 'AAAAAAAAAAAAAAA', '2023-04-07', '17:26:19', 7, 13),
(154, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', '2023-04-07', '17:31:23', 7, 13),
(155, 'tesdt', '2023-04-07', '17:46:33', 7, 12),
(156, 'Message envoyé le 07/04/2023 à 5;47', '2023-04-07', '17:47:35', 7, 12),
(157, 'test', '2023-04-07', '17:48:08', 7, 12),
(158, 'test', '2023-04-07', '17:48:16', 7, 12),
(159, 'test', '2023-04-07', '17:48:34', 7, 12),
(160, 'test', '2023-04-07', '17:49:55', 7, 12),
(161, 'COUCOU', '2023-04-07', '41:51:51', 8, 12),
(162, 'test', '2023-04-07', '18:10:24', 7, 12),
(163, 'yo', '2023-04-08', '16:43:42', 7, 12),
(164, 'test', '2023-04-08', '16:44:47', 7, 13),
(165, 'test', '2023-04-08', '01:25:20', 8, 13),
(166, 'sdfsdfqsdf', '2023-04-08', '01:25:42', 8, 20),
(167, 'qsdqsdqsd', '2023-04-08', '01:27:41', 8, 12),
(168, 'coucou', '2023-04-09', '16:35:37', 8, 12),
(169, 'ok ok ', '2023-04-09', '16:35:41', 8, 12),
(170, '', '2023-04-09', '15:31:30', 12, 21),
(171, 'test', '2023-04-09', '17:32:02', 8, 21),
(172, '', '2023-04-09', '15:38:54', 12, 22),
(173, 'test', '2023-04-09', '17:39:48', 8, 22),
(174, 'fortnite', '2023-04-09', '17:39:54', 8, 22),
(175, '', '2023-04-09', '15:43:40', 12, 25),
(176, 'Coucou', '2023-04-11', '17:08:35', 8, 12),
(177, 'qsdqsd', '2023-04-11', '17:08:37', 8, 12),
(178, 'qsdqsd', '2023-04-11', '17:08:38', 8, 12),
(179, 'qsd', '2023-04-11', '17:08:38', 8, 12),
(180, 'qsd', '2023-04-11', '17:08:39', 8, 12),
(181, 'COUCOU MARIE*', '2023-04-11', '17:08:42', 8, 12),
(182, 'coucou', '2023-04-11', '17:10:39', 7, 12),
(183, '', '2023-04-14', '22:28:07', 12, 28),
(184, 'test', '2023-04-14', '24:37:28', 8, 22),
(185, 'test', '2023-04-14', '24:38:23', 8, 22),
(186, '', '2023-04-14', '22:47:38', 12, 30),
(187, '', '2023-04-14', '22:47:40', 12, 31),
(188, '', '2023-04-14', '22:47:40', 12, 32),
(189, '', '2023-04-14', '22:47:40', 12, 33),
(190, '', '2023-04-14', '22:47:41', 12, 34),
(191, 'Coucou !', '2023-04-15', '01:25:18', 8, 16),
(192, 'Tu vas bien ? ', '2023-04-15', '01:25:23', 8, 19),
(193, 'Salut Antoine !', '2023-04-15', '01:25:29', 8, 17),
(194, 'Toujours ok pour Samedi ?', '2023-04-15', '01:25:35', 8, 18),
(195, 'Préparez vous bien !', '2023-04-15', '01:25:45', 8, 20),
(196, 'Bon les gars jeudi ça vous va ? ', '2023-04-15', '01:26:01', 8, 13),
(197, 'Bon anniversaire Mathieu !', '2023-04-15', '01:26:12', 8, 12),
(198, 'mlqkscl^dsq,c', '2023-04-17', '20:54:40', 8, 12),
(199, 'qmksl,xcmkqs,', '2023-04-17', '20:54:46', 8, 13),
(200, 'ljnnnjnln', '2023-04-17', '23:35:11', 8, 12),
(201, 'ljknjn', '2023-04-17', '23:35:14', 8, 12),
(202, 'Bonsoir je suis Nino', '2023-04-19', '20:33:39', 8, 12),
(203, 'test', '2023-04-19', '20:33:55', 8, 13),
(204, 'qsdqsd', '2023-04-19', '20:34:02', 8, 13),
(205, '', '2023-04-20', '09:22:48', 12, 35),
(206, 'Bonsoir à tous !', '2023-04-20', '11:22:57', 8, 35),
(207, 'ça va ? ', '2023-04-20', '12:55:23', 8, 35),
(208, 'test', '2023-04-20', '22:55:40', 8, 13),
(209, 'qsdqsdqsd', '2023-04-20', '22:55:44', 8, 13),
(210, 'etgest', '2023-04-20', '22:55:52', 8, 13),
(211, 'Salut Elena', '2023-04-21', '14:11:32', 8, 35),
(212, 'Salut Nino', '2023-04-21', '14:13:13', 11, 35),
(213, 'test', '2023-04-21', '14:13:25', 11, 35),
(214, 'test', '2023-04-21', '14:13:29', 8, 35),
(215, '', '2023-04-21', '12:28:39', 12, 36),
(216, 'test', '2023-04-21', '14:33:24', 10, 36),
(217, '', '2023-04-21', '12:34:59', 12, 38),
(218, '', '2023-04-21', '12:35:02', 12, 39),
(219, 'coucou', '2023-04-21', '14:35:42', 10, 36),
(220, '', '2023-04-21', '13:25:10', 12, 40),
(221, 'Coucou', '2023-04-21', '15:25:28', 8, 40),
(222, 'qsd', '2023-04-21', '15:25:39', 8, 40),
(223, 'qssq', '2023-04-21', '15:25:47', 8, 40),
(224, 'test', '2023-04-21', '22:32:56', 8, 40),
(225, 'coucou', '2023-04-21', '22:33:40', 8, 39),
(226, 'yo', '2023-04-21', '22:41:26', 8, 39),
(227, 'aidin', '2023-04-21', '22:41:31', 8, 39),
(228, 'coucou nino c\'est elena', '2023-04-21', '22:42:03', 8, 39),
(229, 'Ce que tu écris ici ', '2023-04-21', '22:42:09', 8, 39),
(230, 'Ce sera vu par les profs ', '2023-04-21', '22:42:13', 8, 39),
(231, ':)', '2023-04-21', '22:42:14', 8, 39),
(232, 'En théorie ', '2023-04-21', '22:42:16', 8, 39),
(233, 'supprime', '2023-04-21', '22:42:19', 8, 39),
(234, 'et c\'est aussi vu par antoine donc logique que j\'allais rien dire de bzr', '2023-04-21', '22:42:51', 8, 39),
(235, 'Ouais comme le fait que j\'aime les pieds ', '2023-04-21', '22:43:13', 8, 39),
(236, '?', '2023-04-21', '22:43:14', 8, 39),
(237, '????????????', '2023-04-21', '22:49:37', 8, 39);

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateur`
--

CREATE TABLE `Utilisateur` (
  `tagUtilisateur` int(11) NOT NULL,
  `nomUtilisateur` varchar(50) NOT NULL,
  `photoProfil` varchar(100) DEFAULT NULL,
  `numCheck` int(6) DEFAULT NULL,
  `dateCreation` date NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Utilisateur`
--

INSERT INTO `Utilisateur` (`tagUtilisateur`, `nomUtilisateur`, `photoProfil`, `numCheck`, `dateCreation`, `email`) VALUES
(1, 'antoine', 'onapasencoredelien', 939752, '2023-02-26', 'antoine.deurv@gmail.com'),
(4, 'Jaden_Yuki', 'onapasencoredelien', 296359, '2023-02-25', 'toinou.deurv@gmail.com'),
(6, 'czjoczdklc,zdk', 'onapasencoredelien', 939752, '2023-03-10', 'antoine.deurv@gmail.com'),
(7, 'andinox', 'onapasencoredelien', NULL, '2023-03-15', 'riedel.ncls@gmail.com'),
(8, 'grxnd3r', 'none', 557221, '2023-03-22', 'ninorocafulle@gmail.com'),
(9, '', 'none', NULL, '2023-03-28', ''),
(10, 'test1', 'none', 149789, '2023-03-28', 'grxnd3r@gmail.com'),
(11, 'elenouille', 'none', 643489, '2023-04-04', 'elena.lacroixferreira@gmail.com'),
(12, 'Début de votre conversation !', NULL, NULL, '2023-04-06', 'wavechathelp@gmail.com'),
(13, 'mariecaipi', 'none', 418622, '2023-04-11', 'mariedechamps69420@gmail.com'),
(14, 'antoine2', 'none', 443860, '2023-04-21', 'antoine.deurveilher@universite-paris-saclay.fr');

-- --------------------------------------------------------

--
-- Structure de la table `UtilisateursConv`
--

CREATE TABLE `UtilisateursConv` (
  `tagUtilisateur` int(11) NOT NULL,
  `idConversation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `UtilisateursConv`
--

INSERT INTO `UtilisateursConv` (`tagUtilisateur`, `idConversation`) VALUES
(1, 1),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(4, 9),
(4, 10),
(4, 11),
(4, 12),
(4, 13),
(4, 16),
(4, 17),
(4, 18),
(4, 19),
(4, 20),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(6, 13),
(6, 16),
(6, 17),
(6, 18),
(6, 19),
(6, 20),
(7, 12),
(7, 13),
(7, 16),
(7, 17),
(7, 18),
(7, 19),
(7, 20),
(8, 12),
(8, 13),
(8, 16),
(8, 17),
(8, 18),
(8, 19),
(8, 20),
(8, 21),
(8, 22),
(8, 24),
(8, 25),
(8, 27),
(8, 28),
(8, 30),
(8, 31),
(8, 32),
(8, 33),
(8, 34),
(8, 35),
(8, 36),
(8, 38),
(8, 39),
(8, 40),
(10, 21),
(10, 24),
(10, 25),
(10, 27),
(10, 28),
(10, 30),
(10, 31),
(10, 32),
(10, 33),
(10, 34),
(10, 35),
(10, 36),
(10, 38),
(10, 39),
(10, 40),
(11, 21),
(11, 22),
(11, 35),
(13, 26);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Conversation`
--
ALTER TABLE `Conversation`
  ADD PRIMARY KEY (`idConversation`);

--
-- Index pour la table `lu`
--
ALTER TABLE `lu`
  ADD PRIMARY KEY (`tagUtilisateur`,`idMessage`),
  ADD KEY `idMessage` (`idMessage`);

--
-- Index pour la table `Message`
--
ALTER TABLE `Message`
  ADD PRIMARY KEY (`idMessage`),
  ADD KEY `Message_ibfk_1` (`tagUtilisateur`),
  ADD KEY `idConversation` (`idConversation`);

--
-- Index pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  ADD PRIMARY KEY (`tagUtilisateur`);

--
-- Index pour la table `UtilisateursConv`
--
ALTER TABLE `UtilisateursConv`
  ADD PRIMARY KEY (`tagUtilisateur`,`idConversation`),
  ADD KEY `idConversation` (`idConversation`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Conversation`
--
ALTER TABLE `Conversation`
  MODIFY `idConversation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `Message`
--
ALTER TABLE `Message`
  MODIFY `idMessage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=238;

--
-- AUTO_INCREMENT pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  MODIFY `tagUtilisateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `lu`
--
ALTER TABLE `lu`
  ADD CONSTRAINT `lu_ibfk_1` FOREIGN KEY (`tagUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`),
  ADD CONSTRAINT `lu_ibfk_2` FOREIGN KEY (`idMessage`) REFERENCES `Message` (`idMessage`);

--
-- Contraintes pour la table `Message`
--
ALTER TABLE `Message`
  ADD CONSTRAINT `Message_ibfk_1` FOREIGN KEY (`tagUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Message_ibfk_2` FOREIGN KEY (`idConversation`) REFERENCES `Conversation` (`idConversation`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `UtilisateursConv`
--
ALTER TABLE `UtilisateursConv`
  ADD CONSTRAINT `UtilisateursConv_ibfk_1` FOREIGN KEY (`tagUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UtilisateursConv_ibfk_2` FOREIGN KEY (`idConversation`) REFERENCES `Conversation` (`idConversation`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
