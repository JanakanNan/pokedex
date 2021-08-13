<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{nom}} </h5>
      <p class="card-text"> Price : {{prix}}</p>
      <hr />
      <!-- $emit permet d'envoyer des argument a la page principale -->
      <button v-if="role == 'commander'" @click="$emit('commande',nom, prix)" class="btn btn-success"> Commander !</button>
    </div>
  </div>
</template>

<script>
export default{
  name: "Produit",
  props: ["nom", "prix","role"]
}
</script>