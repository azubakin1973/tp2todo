# API To-Do List

## Description

Auteur :Alexei de Moraes Zubakin
Lieu de création : 2024-12-17, Montréal, Canada

Ce projet a été développé dans le cadre d'un exercice pratique d'apprentissage du développement d'APIs. L'objectif était de fournir une application fonctionnelle de gestion de tâches (To-Do List) avec authentification des utilisateurs, utilisant Node.js, Express.js et MySQL. Au cours du développement, des concepts de sécurité ont été appliqués, tels que l'utilisation de JWT et bcrypt pour garantir la protection des données des utilisateurs. L'API comprend des fonctionnalités pour créer, lire, mettre à jour et supprimer des tâches. L'application est construite avec Express.js et utilise une base de données MySQL pour stocker les données des utilisateurs et des tâches.

## Fonctionnalités
- Inscription et connexion des utilisateurs avec authentification JWT
- Opérations CRUD pour les tâches (Créer, Lire, Mettre à jour, Supprimer)
- Points de terminaison sécurisés avec authentification JWT pour l'accès utilisateur
- Les mots de passe des utilisateurs sont stockés de manière sécurisée avec bcrypt

## Points de terminaison

### Authentification

| Méthode | Point de terminaison   | Description                                    |
|---------|------------------------|------------------------------------------------|
| POST    | `/signup`              | Inscription d'un nouvel utilisateur           |
| POST    | `/login`               | Connexion et récupération d'un token JWT      |
| DELETE  | `/user/delete`         | Suppression du compte utilisateur             |
| PUT     | `/user/update`         | Mise à jour des informations de l'utilisateur |

### Tâches

| Méthode | Point de terminaison    | Description                                        |
|---------|-------------------------|----------------------------------------------------|
| POST    | `/tasks`                | Créer une nouvelle tâche                          |
| GET     | `/tasks`                | Obtenir toutes les tâches de l'utilisateur connecté |
| PUT     | `/tasks/:id`            | Mettre à jour une tâche                           |
| DELETE  | `/tasks/:id`            | Supprimer une tâche spécifique                    |

## Technologies utilisées
Node.js
Express.js
MySQL
JWT pour l'authentification
bcrypt pour le hachage des mots de passe

