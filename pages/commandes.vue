<template>
  <div>
    <h1 class="display-1">Commander</h1>

    <h2> Commande </h2>
    <div class="card-deck">
      <!-- on peut mettre v-bind: ou bien : c'est la même chose -->
      <!-- v-on c'est un ecouteur -->
      <Produit v-for="produit in produits" v-bind:nom="produit.nom" v-bind:prix="produit.prix" role="commander" v-on:commande="ajouterProduit"/>
    </div>

    <h2> Produit commandés</h2>
    <div class="card-deck">
      <Produit v-for="commande in commandes" v-bind:nom="commande.nom" :prix="commande.prix" role="affichage" />
    </div>
  </div>
</template>

<script>
//@ permet d'aller à la racine du dossier
import Produit from "@/components /Produit";
export default{
  components: {
    Produit
  },
  data(){
    return{
      produits: [
        { nom:'Pizza', prix: 3.0},
        { nom:'frites', prix: 2.0},
        { nom:'Hamburger', prix: 3.0},
        { nom:'Chessburger', prix: 2.0}
      ],
      commandes:[
        { nom: 'Frites', prix: 2.0}
      ]
      }
    },
    methods: {
      ajouterProduit(nom, prix){
        this.commandes.push({nom: nom, prix: prix})
      }
    }
  }

</script>
//scoped permet d'appliquer le css seulement sur la page en question sinon elle est appliqué partout
<style scoped>

</style>