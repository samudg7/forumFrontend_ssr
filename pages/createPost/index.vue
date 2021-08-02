<template>
  <div class="container col-md-6 mt-5">
    <h1>Crea un nuovo feedback</h1>
    <br>
    <form @submit.prevent="createPost">
      <div class="form-group">
        <label><strong>Titolo</strong></label>
        <input v-model="form.title" type="text" class="form-control" placeholder="Inserisci il titolo" autofocus>
      </div>
      <div class="form-group">
        <label><strong>Descrizione</strong></label>
        <textarea v-model="form.body" class="form-control" rows="5" placeholder="Inserisci la descrizione" autofocus></textarea>
      </div>
       <div class="form-group">
        <label><strong>Autore</strong></label>
        <textarea v-model="form.name" class="form-control" rows="5" placeholder="Inserisci l'autore" autofocus></textarea>
      </div>
      <!-- <button type="submit" class="btn btn-secondary" :disabled="disabled" style="margin: 70px; margin-left: 0px">Create</button> -->
      <v-btn
        color="#64B5F6"
        style="margin-bottom: 70px; margin-top: 30px"
        type="submit"
        :disabled="disabled"
        >Create</v-btn
      >
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        title: null,
        body: null,
        name: null
      }
    };
  },
  methods: {
    async createPost() {
        await this.$axios.$post("/post", this.form)
        // .then(res => this.console.log(res.data))
        return this.$router.push('/')
    }
  },
  //disabilita button se i campi sono vuoti
  computed: {
    disabled() {
      return !(this.form.title && this.form.body && this.form.name);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Volkhov&display=swap');
h1{
  font-family: 'Volkhov', serif;
}
</style>
