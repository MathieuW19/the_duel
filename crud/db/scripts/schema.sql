SET NAMES utf8;
SET time_zone
= '+00:00';
SET foreign_key_checks
= 0;
SET sql_mode
= 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`
(
  `uuid` varchar
(36) NOT NULL,
  `role` tinyint
(1) unsigned NOT NULL DEFAULT 2 COMMENT '1=admin / 2=player',
  `email` varchar
(32) NOT NULL,
  `password` varchar
(60) NOT NULL,
  `firstname` varchar
(24) NOT NULL,
  `lastname` varchar
(24) NOT NULL,
  `gender` tinyint
(1) NOT NULL DEFAULT 1 COMMENT '1=male / 2=female',
  `authorized` tinyint
(1) NOT NULL DEFAULT 1 COMMENT '0 = unauthorized / 1 = authorized',
  `optin` tinyint
(1) NOT NULL DEFAULT 0 COMMENT '0 = false / 1 = true',
  `double_optin` tinyint
(1) NOT NULL DEFAULT 0 COMMENT '0 = false / 1 = true',
  `token` varchar
(512) NOT NULL,
  PRIMARY KEY
(`uuid`),
  UNIQUE KEY `uuid`
(`uuid`),
  UNIQUE KEY `email`
(`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;