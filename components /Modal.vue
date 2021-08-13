<template>
  <my-modal @close_modal="close_modal" width="1200px">
    <div style="margin-left: 10%; margin-right: 10%">
      <div>
        <v-chip
            v-for="item in selected"
            :key="item.value"
            class="ma-2"
            close
            color="green"
            label
            text-color="white"
            @click:close="delete_in_selected(item)"
        >
          {{ item.value }}
        </v-chip>
      </div>
      <div style="margin-top: 8px" class="form-inline">
        <button
            type="button"
            style="
            background-color: #33bbd3 !important;
            color: white;
            margin-right: 10px;
          "
            v-on:click="reset"
        >
          Reset
        </button>
      </div>
    </div>

    <br />

  </my-modal>


</template>
<script>
var _ = require("lodash");
export default {
  props: ["selected"],

  data() {
    return {
      data: [],
      search: "",
      postal: [], // variable retourber pour travail
      response: [],
    };
  },
  methods: {

    close_modal() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline label {
  margin: 5px 10px 5px 0;
}

.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.form-inline button {
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
}

.form-inline button:hover {
  background-color: royalblue;
}

@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}
div.scroll {
  margin: 4px, 4px;
  padding: 4px;
  margin-left: 10%;
  margin-right: 10%;
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
}
</style>