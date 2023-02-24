# PizzaDellaMamma 🍕

# Contexte du projet 🙌
La chaîne de restaurants Pizzeria Della Mamma souhaite automatiser la prise de commande en restaurant. Pour cela, chaque tablée se verra attribuer une tablette au moment de s’installer. Les clients pourront alors créer leur commande et l’envoyer en cuisine directement. Il est important que les clients aient la possibilité de customiser leurs pizzas.
Le projet ne nécessite pas de responsive car il est destiné à une tablette dont les dimensions sont connues.
La pizzeria fournira les maquettes ainsi que les données de produits.

# Christelle 🌞

Je me suis occupée de la feature sélection et modification du numéro de table donc de la page d'accueil.

- Voici donc un résumé des différentes fonctionnalités sur lequel j'ai travaillé :

* Un formulaire qui affiche avec un champ de saisie pour le numéro de table.
* Ce formulaire est validé seulement s'il respect le regex renseigné c'est-à-dire uniquement les numéros de 1 à 14.
* Lorsque le formulaire est correct, le numéro de table saisi est stocké dans mon service Table pour être affiché dans les autres pages.
* L'utilisateur est par la suite, dirigé vers la page de commande.
* Si l'utilisateur revient à la page d'accueil, le numéro précédemment saisi est affiché et il peut modifier son numéro de table.
* Le nouveau numéro de table saisi et lui aussi stocké et remplace l'ancien dans le service Table.
* Si l'utilisateur saisit un numéro de table invalide, un message d'erreur est affiché sous le champ de saisie.
* L'utilisateur peut revenir à la page de commande depuis la page de modification de numéro de table.
  
J'ai principalement travaillé sur le component number-table et header et sur les service visible et table.
Pour entrer plus dans le détail j'ai effectué :

  1. TableService => un service qui permet de stocker le numéro de la table choisie par le client.
  2. VisibleService => un service qui permet de gérer la visibilité des différents éléments de l'interface utilisateur en fonction de condition.
  3. NumberTableComponent => un composant qui permet au client de choisir le numéro de sa table. Ce composant inclut différentes fonctions dont :
    - table() dont la fonction initialise le formulaire permettant au client de saisir le numéro de table.
    - acces() est la fonction qui va vérifié si le numéro de table saisi est valide, puis stocke cette information dans TableService et redirige l'utilisateur vers la       page suivante.
    - evenement(event: any), fonction qui récupère le numéro de table saisi par le client.
  4. HeaderComponent => un composant qui affiche le logo de la pizzeria, le numéro de table choisi (s'il y en a un), ainsi que le bouton pour accéder au panier.


# Assa 🌞

# Jérôme 🌞

# Hazar 🌞
j'ai créer le panier et la page Recap Commande
*creation du service cart
les foncationalité du panier :
-getCart()
-removeProduct()
-validateCart()
-resetCart()
-getTotalPrice()
*creation  du component card-product-cart
les foncationalité du Recap Commande:
-resetCart()
-getTotalPrice()
