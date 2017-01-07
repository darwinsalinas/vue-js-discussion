<template>
  <div>
    <form @submit.prevent="onSubmit" class="DiscussionUser" v-if="active">
      <label class="label_A">Como te llamas</label>
      <input 
      type="text" 
      name="name"
      class="input_A"
      placeholder="Escribe tu nombre"
      v-model="name"
      onChange={this._onChange}
      />
      <label class="label_A">Pega una URL para la imagen de tu avatar</label>
      <input 
      type="text" 
      name="avatar"
      class="input_A"
      placeholder="ejemplo : https://pbs.twimg.com/profile_images/480073396072742912/h6VGOhH6.jpeg"
      v-model="avatar"
      onChange={this._onChange}
      />
      <input type="submit" value="Entrar" class="btn-Red btn--big"/>
    </form>


    <div class="DiscussionBody" v-if="this.$parent.showformdiscussion">

      <!-- Componente para agregar la pregunta -->

      <discussion-add></discussion-add>

      <div class="Discussion-list" v-for="discusion in discussions">

        <!-- Componente para el item de la discusion -->
        <discussion-item>
          <span slot="comentario">{{ discusion.comentario }}</span>
          <span slot="fecha">{{ dateFormat(discusion.date) }}</span>
        </discussion-item>

      </div>

      <!-- Componente para el pie de la discusion -->
      <discussion-footer>
      </discussion-footer>
      
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name: '',
        avatar: '',
        active: false,
        discussions: []
      }
    },
    methods: {
      dateFormat(date){
        return moment(date).fromNow();
      },
      onSubmit() {
        this.active = false;
        this.$parent.showformdiscussion = true;
        console.log(this.$parent.showformdiscussion);
        if(this.avatar === ""){
          this.avatar = "https://static.platzi.com/media/avatares/default.png"
        }

        if(this.name === ""){
          name = "Guest"
        }
        console.log('enviando los datos ' + this. name)
      }
  },
  created() {
    this.active = true
  }
}
</script>



