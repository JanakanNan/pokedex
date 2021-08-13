<template>
  <div>

    <div class="searchbar">
      <input v-model="search" placeholder="recherche">
      <button class="fas fa-search" @click='recherche'>recherche</button>
    </div>

    <h1>Pokemon disponible</h1>
    <div class="card-deck">
      <!-- on peut mettre v-bind: ou bien : c'est la même chose -->
      <!-- v-on c'est un ecouteur -->
      <Pokemon v-for="pokemon in pokemonSpec" v-bind:nom="pokemon.name" v-bind:image="pokemon.sprites.front_default" role="commander" v-on:commande="ajouterPokemon"/>
    </div>

    <h1>Pokemon de mon équipe</h1>
    <div class="card-deck">
      <!-- on peut mettre v-bind: ou bien : c'est la même chose -->
      <!-- v-on c'est un ecouteur -->
      <Pokemon v-for="pokemon in pokemonEquipe" v-bind:nom="pokemon.name" v-bind:image="pokemon.sprites.front_default" v-bind:order="pokemon.order"/>
    </div>

    <button v-on:click="modal_code = true">Equipe</button>

    <Modal
        v-if="modal_code === true"
        @close="this.closeModalCode"
    />
  </div>
</template>
<script>
import Pokemon from "@/components /Pokemon";
import Modal from "../components /Modal";
export default {
  components:{
    Modal,
    Pokemon
  },
  data() {
    return {
      pokemonSpec: [],
      url : "",
      search: '',
      pokemonEquipe: [],
      modal_code: false,
    }
  },
  mounted() {
    this.fetchAPI();

  },

methods:{

    closeModalCode() {
      this.modal_code = false;
    },

    async fetchAPI() {
      let pages = []
      let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
          .then(res => res.json())
      for (let i=0; i<pokemons.results.length; i++){
        this.image(pokemons.results[i].url);
      }

    },

    async image(url) {
      let pokemonImages = await fetch(url)
          .then(res => res.json())
      this.pokemonSpec.push(pokemonImages)
    },

    async recherche() {
      console.log(this.search)
      for(let i =0; i <this.pokemonSpec.length;i++){
        if(this.search == this.pokemonSpec[i].name){
          console.log("GOOD");
          break;
        }else {
          console.log("BAD");
        }
      }
    },

    async ajouterPokemon(name){
      let url = 'https://pokeapi.co/api/v2/pokemon/'+name+'';
      let pokemons = await fetch(url)
          .then(res => res.json())
      this.pokemonEquipe.push(pokemons)
    },
  }
}
</script>