-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 21 fév. 2023 à 12:55
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
-- Structure de la table `Boutique`
--

CREATE TABLE `Boutique` (
  `idBoutique` int(11) NOT NULL,
  `nomBoutique` varchar(50) NOT NULL,
  `descBoutique` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Boutique`
--

-- --------------------------------------------------------

--
-- Structure de la table `Conversation`
--

CREATE TABLE `Conversation` (
  `idConversation` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `urlImage` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `lu`
--

CREATE TABLE `lu` (
  `tagUtilisateur` int(11) NOT NULL,
  `nomUtilisateur` varchar(50) NOT NULL,
  `idMessage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `Message`
--

CREATE TABLE `Message` (
  `idMessage` int(11) NOT NULL,
  `contenu` varchar(500) NOT NULL,
  `dateMessage` date NOT NULL,
  `heureMessage` time NOT NULL,
  `tagUtilisateur` int(11) NOT NULL,
  `nomUtilisateur` varchar(50) NOT NULL,
  `idConversation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `Objet`
--

CREATE TABLE `Objet` (
  `idObjet` int(11) NOT NULL,
  `nomObjet` varchar(50) NOT NULL,
  `prixObjet` int(11) NOT NULL,
  `imageObjet` varchar(1000) DEFAULT NULL,
  `descObjet` varchar(100) NOT NULL,
  `idType` int(11) NOT NULL,
  `idBoutique` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Objet`
--



-- --------------------------------------------------------

--
-- Structure de la table `ObjetPossession`
--

CREATE TABLE `ObjetPossession` (
  `tagUtilisateur` int(11) NOT NULL,
  `idObjet` int(11) NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ObjetPossession`
--



-- --------------------------------------------------------

--
-- Structure de la table `Type`
--

CREATE TABLE `Type` (
  `idType` int(11) NOT NULL,
  `nomType` varchar(50) NOT NULL,
  `descType` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Type`
--



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

--
-- Déchargement des données de la table `Utilisateur`
--



-- --------------------------------------------------------

--
-- Structure de la table `UtilisateursConv`
--

CREATE TABLE `UtilisateursConv` (
  `tagUtilisateur` int(11) NOT NULL,
  `nomUtilisateur` varchar(50) NOT NULL,
  `idConversation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Boutique`
--
ALTER TABLE `Boutique`
  ADD PRIMARY KEY (`idBoutique`);

--
-- Index pour la table `Conversation`
--
ALTER TABLE `Conversation`
  ADD PRIMARY KEY (`idConversation`);

--
-- Index pour la table `lu`
--
ALTER TABLE `lu`
  ADD PRIMARY KEY (`tagUtilisateur`,`nomUtilisateur`,`idMessage`),
  ADD KEY `idMessage` (`idMessage`);

--
-- Index pour la table `Message`
--
ALTER TABLE `Message`
  ADD PRIMARY KEY (`idMessage`),
  ADD KEY `Message_ibfk_1` (`tagUtilisateur`,`nomUtilisateur`),
  ADD KEY `idConversation` (`idConversation`);

--
-- Index pour la table `Objet`
--
ALTER TABLE `Objet`
  ADD PRIMARY KEY (`idObjet`),
  ADD KEY `idType` (`idType`),
  ADD KEY `idBoutique` (`idBoutique`);

--
-- Index pour la table `ObjetPossession`
--
ALTER TABLE `ObjetPossession`
  ADD PRIMARY KEY (`tagUtilisateur`),
  ADD KEY `tagUtilisateur` (`tagUtilisateur`),
  ADD KEY `idObjet` (`idObjet`);

--
-- Index pour la table `Type`
--
ALTER TABLE `Type`
  ADD PRIMARY KEY (`idType`);

--
-- Index pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  ADD PRIMARY KEY (`tagUtilisateur`,`nomUtilisateur`);

--
-- Index pour la table `UtilisateursConv`
--
ALTER TABLE `UtilisateursConv`
  ADD PRIMARY KEY (`tagUtilisateur`,`nomUtilisateur`,`idConversation`),
  ADD KEY `idConversation` (`idConversation`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Boutique`
--
ALTER TABLE `Boutique`
  MODIFY `idBoutique` int(11) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT pour la table `Objet`
--
ALTER TABLE `Objet`
  MODIFY `idObjet` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Type`
--
ALTER TABLE `Type`
  MODIFY `idType` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `lu_ibfk_1` FOREIGN KEY (`tagUtilisateur`,`nomUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`, `nomUtilisateur`),
  ADD CONSTRAINT `lu_ibfk_2` FOREIGN KEY (`idMessage`) REFERENCES `Message` (`idMessage`);

--
-- Contraintes pour la table `Message`
--
ALTER TABLE `Message`
  ADD CONSTRAINT `Message_ibfk_1` FOREIGN KEY (`tagUtilisateur`,`nomUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`, `nomUtilisateur`),
  ADD CONSTRAINT `Message_ibfk_2` FOREIGN KEY (`idConversation`) REFERENCES `Conversation` (`idConversation`);

--
-- Contraintes pour la table `Objet`
--
ALTER TABLE `Objet`
  ADD CONSTRAINT `FK_Objet_Boutique` FOREIGN KEY (`idBoutique`) REFERENCES `Boutique` (`idBoutique`),
  ADD CONSTRAINT `FK_Objet_Type` FOREIGN KEY (`idType`) REFERENCES `Type` (`idType`);

--
-- Contraintes pour la table `ObjetPossession`
--
ALTER TABLE `ObjetPossession`
  ADD CONSTRAINT `FK_ObjetPossession_Objet` FOREIGN KEY (`idObjet`) REFERENCES `Objet` (`idObjet`),
  ADD CONSTRAINT `FK_ObjetPossession_Utilisateur` FOREIGN KEY (`tagUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`);

--
-- Contraintes pour la table `UtilisateursConv`
--
ALTER TABLE `UtilisateursConv`
  ADD CONSTRAINT `UtilisateursConv_ibfk_1` FOREIGN KEY (`tagUtilisateur`,`nomUtilisateur`) REFERENCES `Utilisateur` (`tagUtilisateur`, `nomUtilisateur`),
  ADD CONSTRAINT `UtilisateursConv_ibfk_2` FOREIGN KEY (`idConversation`) REFERENCES `Conversation` (`idConversation`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
