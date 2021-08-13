<template>
  <div>
    <h1>Hello I'm a pokemon</h1>

    <div class="searchbar">
      <input v-model="search" placeholder="recherche">
      <button class="fas fa-search" @click='recherche'>recherche</button>
    </div>

    <h1>Pokemon disponible</h1>
    <div class="card-deck">
      <!-- on peut mettre v-bind: ou bien : c'est la même chose -->
      <!-- v-on c'est un ecouteur -->
      <Pokemon v-for="pokemon in pokemonSpec" v-bind:nom="pokemon.name" v-bind:image="pokemon.sprites.front_default" v-bind:order="pokemon.order" role="commander" v-on:commande="ajouterPokemon"/>
    </div>

  </div>
</template>
<script>
import Pokemon from "@/components /Pokemon";
import PokemonDetails from "../components /PokemonDetails";
export default {
  components:{
    Pokemon,
    PokemonDetails
  },
  data() {
    return {
      pokemonSpec: [],
      url : "",
      search: '',
      pokemonEquipe: [],
    }
  },
  mounted() {
    this.ajouterPokemon();

  },

  methods:{
    async fetchAPI() {
      let pages = []
      let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
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
      console.log(name);
      let url = 'https://pokeapi.co/api/v2/pokemon/'+name+'';
      let pokemons = await fetch(url)
          .then(res => res.json())
      this.pokemonEquipe.push(pokemons)
    },
  }
}
</script>