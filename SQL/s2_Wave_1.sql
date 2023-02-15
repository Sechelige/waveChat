-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 12 fév. 2023 à 17:40
-- Version du serveur : 10.3.36-MariaDB-0+deb10u2
-- Version de PHP : 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `s2_Wave`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `lu`
--

CREATE TABLE `lu` (
  `tagUtilisateur` int(11) NOT NULL,
  `idMessage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateur`
--

CREATE TABLE `Utilisateur` (
  `tagUtilisateur` int(11) NOT NULL,
  `nomUtilisateur` varchar(50) NOT NULL,
  `photoProfil` varchar(100) DEFAULT NULL,
  `mdp` varchar(20) NOT NULL,
  `dateCreation` date NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `UtilisateursConv`
--

CREATE TABLE `UtilisateursConv` (
  `tagUtilisateur` int(11) NOT NULL,
  `idConversation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  MODIFY `idConversation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Message`
--
ALTER TABLE `Message`
  MODIFY `idMessage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  MODIFY `tagUtilisateur` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `Message_ibfk_1` FOREIGN KEY (`tagUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`),
  ADD CONSTRAINT `Message_ibfk_2` FOREIGN KEY (`idConversation`) REFERENCES `Conversation` (`idConversation`);

--
-- Contraintes pour la table `UtilisateursConv`
--
ALTER TABLE `UtilisateursConv`
  ADD CONSTRAINT `UtilisateursConv_ibfk_1` FOREIGN KEY (`tagUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`),
  ADD CONSTRAINT `UtilisateursConv_ibfk_2` FOREIGN KEY (`idConversation`) REFERENCES `Conversation` (`idConversation`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
