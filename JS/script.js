let panier = [];
const tonNumero = "242053815937"; // Change ici !

function addToCart(nom, prix) {
    panier.push({ nom: nom, prix: prix });

    // Mise à jour du compteur
    document.getElementById('cart-count').innerText = panier.length;

    // Animation visuelle simple
    console.log("Panier actuel:", panier);
}

function envoyerWhatsApp() {
    if (panier.length === 0) {
        alert("Votre panier est vide. Ajoutez des produits avant de commander !");
        return;
    }

    let message = "Bonjour ManiBio ! Je souhaite passer la commande suivante :\n\n";
    let total = 0;

    panier.forEach((item, index) => {
        message += `✅ ${item.nom} - ${item.prix} FCFA\n`;
        total += item.prix;
    });

    message += `\n*Total : ${total} FCFA*`;
    message += "\n\n📍 Voici mes coordonnées :";
    message += "\n- Nom : ";
    message += "\n- Adresse de livraison : ";
    message += "\n- Ville : ";


    // Encoder pour URL
    const url = `https://wa.me/${tonNumero}?text=${encodeURIComponent(message)}`;

    // Ouvrir WhatsApp
    window.open(url, '_blank');
}