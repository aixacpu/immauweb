CREATE TABLE `Utilisateurs` (
  `idUtilisateur` int PRIMARY KEY,
  `email` varchar(255) UNIQUE NOT NULL,
  `motDePasseHash` varchar(255) NOT NULL,
  `prenom` varchar(255),
  `nom` varchar(255),
  `telephone` varchar(255),
  `role` varchar(255) COMMENT 'USER, OWNER, ADMIN',
  `emailVerifie` boolean DEFAULT false,
  `statut` varchar(255) COMMENT 'ACTIF, SUSPENDU',
  `dateInscription` datetime
);

CREATE TABLE `BiensImmobiliers` (
  `idBien` int PRIMARY KEY,
  `titre` varchar(255) NOT NULL,
  `description` text,
  `typeBien` varchar(255) COMMENT 'MAISON, APPARTEMENT, STUDIO, TERRAIN, AUTRE',
  `transaction` varchar(255) COMMENT 'VENTE, LOCATION',
  `prix` decimal(10,2) NOT NULL,
  `surface` decimal(6,2),
  `nbPieces` int,
  `nbChambres` int,
  `nbSallesDeBain` int,
  `etage` int,
  `chauffage` varchar(255),
  `meuble` boolean DEFAULT false,
  `disponibleLe` date,
  `statutAnnonce` varchar(255) COMMENT 'BROUILLON, PUBLIEE, ARCHIVEE',
  `createdAt` datetime,
  `updatedAt` datetime,
  `idUtilisateur` int
);

CREATE TABLE `Adresses` (
  `idAdresse` int PRIMARY KEY,
  `rue` varchar(255),
  `numero` varchar(255),
  `codePostal` varchar(255),
  `ville` varchar(255) NOT NULL,
  `pays` varchar(255) DEFAULT 'Belgique',
  `latitude` decimal(9,6),
  `longitude` decimal(9,6),
  `idBien` int
);

CREATE TABLE `Photos` (
  `idPhoto` int PRIMARY KEY,
  `url` varchar(255) NOT NULL,
  `texteAlternatif` varchar(255),
  `ordre` int DEFAULT 0,
  `isCover` boolean DEFAULT false,
  `idBien` int
);

CREATE TABLE `Equipements` (
  `idEquipement` int PRIMARY KEY,
  `nom` varchar(255) UNIQUE NOT NULL,
  `categorie` varchar(255)
);

CREATE TABLE `Biens_Equipements` (
  `idBien` int,
  `idEquipement` int,
  `primary` key(idBien,idEquipement)
);

CREATE TABLE `RecherchesSauvegardees` (
  `idRecherche` int PRIMARY KEY,
  `nom` varchar(255),
  `criteresJSON` text NOT NULL,
  `emailAlerte` boolean DEFAULT true,
  `frequence` varchar(255) COMMENT 'JOUR, SEMAINE, MOIS',
  `createdAt` datetime,
  `idUtilisateur` int
);

CREATE TABLE `MessagesContact` (
  `idMessage` int PRIMARY KEY,
  `email` varchar(255) NOT NULL,
  `sujet` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `statut` varchar(255) COMMENT 'NOUVEAU, LU, TRAITE',
  `createdAt` datetime,
  `idUtilisateur` int,
  `idBien` int
);

ALTER TABLE `BiensImmobiliers` ADD FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateurs` (`idUtilisateur`);

ALTER TABLE `Adresses` ADD FOREIGN KEY (`idBien`) REFERENCES `BiensImmobiliers` (`idBien`);

ALTER TABLE `Photos` ADD FOREIGN KEY (`idBien`) REFERENCES `BiensImmobiliers` (`idBien`);

ALTER TABLE `Biens_Equipements` ADD FOREIGN KEY (`idBien`) REFERENCES `BiensImmobiliers` (`idBien`);

ALTER TABLE `Biens_Equipements` ADD FOREIGN KEY (`idEquipement`) REFERENCES `Equipements` (`idEquipement`);

ALTER TABLE `RecherchesSauvegardees` ADD FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateurs` (`idUtilisateur`);

ALTER TABLE `MessagesContact` ADD FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateurs` (`idUtilisateur`);

ALTER TABLE `MessagesContact` ADD FOREIGN KEY (`idBien`) REFERENCES `BiensImmobiliers` (`idBien`);
