# PizzaDellaMamma

#Christelle

#Assa
Le premier jour nous avons creer le trello ensemble:
-nous avons decomposé les components
-crée les routes-
crée le repositorie et donner les droits
je me suis basée sur la feature  sur "affichage des produits" j'ai tout d'abord crée 3 components categoriePizza-categorieDrink-categorieDessert apres j'ai fais un service ou j'ai crée une fonction
getCategoryProduct qui retoune une categorie mais le probleme avec les filtres je n'ai pas reussi avec le premier mock-
Apres avoir reçu le nouveau mock,j'ai du refaire la page de tous les produits mais j'ai eu du mal avec l'imbrication des compossants,J'ai fais la page PRODUCTS avec sa route,les componants(category-component=qui sera appelé dans la page product,product-list=qui sera appelé dans category-component,product-card=qui est appelé dans product-list)j'ai fais les @Input entre les transmissions des données entre le parent et l'enfant)et les *ngFor associés.
Dans la feat/redirection j'ai voulu realisé un bouton qui renvoit sur un seul article quand on clique sur un image dans la page product-( path: "customization/:category/:id")
au niveau du component customisation j'ai creer une fonction getProduct qui a deux paramettres category,et id du produit j'ai d'abord recherché l'id et la category dans l'url,ensuite j'ai fais un find pour trouver la bonne categorie (ex categoryL = this.productList.find((p) => p.category === category))apres l'avoir trouver j'ai fais un nouveau find sur la categorie pour trouver le bon produit appartenant à la categorie en question 
(ex: categoryL.products.find((p) => p.id === idproduct)
Je n'ai pas pu faire les filtres mais j'ai regardé des tutos et vue la methode some que je vais experimenter ( prochainement pour terminer ma feature et valider cette compétence) . J'ai compris la logique il n'y a qu'a tester jusqu'à reussir Courage et force 


#Jérôme

#Hazar
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
