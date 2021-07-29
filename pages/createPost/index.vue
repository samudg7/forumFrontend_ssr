<template>
  <div class="container col-md-6 mt-5">
    <h2>Crea un nuovo feedback</h2>
    <br>
    <form @submit.prevent="createPost">
      <div class="form-group">
        <label><strong>Titolo</strong></label>
        <input v-model="form.title" type="text" class="form-control" placeholder="Inserisci il titolo" autofocus>
        <!-- <small class="form-text text-danger" v-if="errors.title">{{errors.title[0]}}</small> -->
      </div>
      <div class="form-group">
        <label><strong>Descrizione</strong></label>
        <textarea v-model="form.body" class="form-control" rows="5"></textarea>
        <!-- <small class="form-text text-danger" v-if="errors.body">{{errors.body[0]}}</small> -->
      </div>
       <div class="form-group">
        <label><strong>Autore</strong></label>
        <textarea v-model="form.name" class="form-control" rows="5"></textarea>
        <!-- <small class="form-text text-danger" v-if="errors.body">{{errors.body[0]}}</small> -->
      </div>
      <button type="submit" class="btn btn-primary" :disabled="disabled">Create</button>
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

        // .then(res => this.$router.push(res.data))
        // .then(res => this.$router.push("/posts"))

        // .catch(error => console.log(error.response.data));
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

<style></style>
