<template>
  <form @submit.prevent="onSubmit" class="DiscussionReplyForm">
      <textarea v-model="text" name="description" autoFocus placeholder="Escribe tu pregunta" class="DiscussionReplyForm-area"></textarea>
      <input type="submit" value="Enviar" class="DiscussionReplyForm-submit"/>
  </form>
</template>

<script>
  export default {
    name: 'discussion-add',
    data () {
      return {
        value: '',
        text: '',
      }
    },
     methods: {
        onSubmit() {
          var fecha = new Date();
          if(this.text != ""){
            var newcomment = {
              comentario: this.text,
              date: fecha
            };
            console.log(newcomment);
            this.$parent.discussions.push(newcomment);
            this.text = ""
          }          
        }
    },
    created() {
      this.active = true
    }
  }
</script>



