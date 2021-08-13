<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{nom}}</h5>
          <p class="card-text">{{order}}</p>
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
  props:["nom", "image","role","order"]
}
</script>
<style scoped>
</style>