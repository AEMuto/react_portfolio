# D20Codex
Ce projet a débuté comme un exercice personnel visant à explorer plus en profondeur Material UI. Il a évolué pour devenir un espace d'expérimentation pour des sujets qui suscitent mon intérêt. La création de feuilles de personnage a été entreprise dans le but de simplifier cet exercice amusant présent dans les jeux de rôle. Cela a été l'occasion de mettre en place une architecture MVC et de plonger dans la programmation orientée objet. Pour résumer, D20Codex contient les fonctionnalités suivantes :

- **Tableau avec Défilement Infini :** Des requêtes automatisées sont générées en fonction du défilement, assurant une expérience utilisateur fluide.

- **Virtualisation du Tableau :** Le tableau est virtualisé, limitant le nombre de lignes présentes dans le DOM à un maximum de 50 (ajustable). Ainsi, peu importe la taille du jeu de données, les performances côté client restent optimales.

- **Filtrage par Mots-Clés :** Les utilisateurs peuvent filtrer les données en utilisant des mots-clés pour une recherche efficace.

- **Outils Numériques pour le Jeu de Rôle :** Intégration d'outils numériques, tels que la création d'objets et de personnages, pour faciliter l'expérience du jeu de rôle.


## Technologies Utilisées

### Backend :

- **Appwrite :** Une instance hébergée sur un VPS assure la gestion des données provenant de diverses sources. Des scripts Node.js ont été développés pour normaliser les données en format JSON.

### Frontend :

- **Typescript**
- **React**
- **React Query**
- **React Virtual**
- **Material UI**
- **Appwrite (Web SDK)**
- **Vite**

## Objectif Initial
Au-delà de ma curiosité pour Material UI, l'objectif principal de ce projet est de recenser les éléments issus des règles des jeux de rôle utilisant un d20. En particulier, il se concentre sur les éléments affichables sous forme de listes ou de tableaux, tels que les pouvoirs magiques des personnages joueurs.

En outre, la découverte d'Appwrite s'est avérée une solution intéressante pour la gestion du backend sans nécessité de développement complet de A à Z. Son utilisation s'est révélée fluide, avec une documentation claire et des performances satisfaisantes, même avec des collections conséquentes. À surveiller à mesure que le projet évolue et si jamais le trafic augmente.
