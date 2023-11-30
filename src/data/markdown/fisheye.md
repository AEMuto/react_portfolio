Fisheye est une application web destinée à mettre en valeur les photographes et leur travail. Les utilisateurs peuvent parcourir des pages individuelles pour différents photographes, consulter des informations détaillées sur chaque photographe et explorer une galerie d'éléments multimédias. Cette application a été réalisé dans le cadre de ma formation de développeur Front-End chez Openclassrooms.

- L'accessibilité a été particulièrement prise en compte, notamment pour le menu déroulant de triage des médias et la navigation clavier dans les modales. Compatibilité avec les lecteurs d'écrans.
- Le projet utilise un fichier JSON pour construire les éléments dynamiques du DOM. Après une première initialisation, il est stocké dans le sessionStorage pour éviter des requêtes trop fréquentes.
- La Lightbox des médias est construite selon le _factory design pattern_ pour faciliter la gestion des différents types de médias (images ou vidéos).
-  La page d'accueil est relativement simple, tandis que la page du photographe nécessite une gestion d'état pour synchroniser la galerie et la lightbox.

## Technologies Utilisées
- Javascript
- SASS

## Quel était le but&nbsp;?
Le but était ici d'obtenir les compétences suivantes&nbsp;:
- Assurer l'accessibilité d'un site web.
- Gérer les évènements d'un site avec JavaScript.
- Développer une application web modulaire avec des design patterns.
- Écrire du code JavaScript maintenable.

C'était mon premier projet relativement complexe en pur javascript, et avec du recul, je me suis rendu compte qu'il occupe une place importante dans mon parcours d'apprentissage de la programmation web. Il m'a permis de me rendre compte de l'utilité de tous les frameworks ou librairies permettant de faciliter la gestion de l'état d'un composant ou d'une application web dans son ensemble. Implémenter un _design pattern_ a été l'occasion d'avoir un apercu des outils existants pour répondre aux problématiques de l'architecture logicielle. Finalement, il m'a montré que prendre en compte les critères relatifs à l'accessibilité ne devrait pas être ignoré.
