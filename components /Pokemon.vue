<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{nom}}</h5>
          <button v-if="role == 'commander'" @click="$emit('commande',nom, image)" class="btn btn-success"> Ajouter !</button>
          <NuxtLink to="/PokemonPerso">
            <button v-if="role == 'commander'" @click="$emit('commande',nom, image)" class="btn btn-success"> Details</button>
          </NuxtLink>
        </div>

      </div>
    </div>
    <div class="col-sm-6">

    </div>
  </div>
</template>
<script>
export default{
  name:"Pokemon",
  props:["nom", "image","role"]
}
</script>
<style scoped>
</style>