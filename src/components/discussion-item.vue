<template>
  <div class="Discussion is-first  is-shadow">
      <div class="Discussion-wrapper">
          <div class="Discussion-top">
              <div class="DiscussionAuthor">
                  <span class="DiscussionAuthor-name">
                      <img :src="$parent.avatar" class="DiscussionAuthor-avatar" width="40" height="40"/>
                      <a href="#" title="Ver perfil de usuario" target="_blank" v-text="$parent.name"></a>
                  </span>
              </div>
              <div class="">
                  <span class="Discussion-date"><slot name="fecha"></slot></span>
              </div>
          </div>
          <div class="Discussion-text"><slot name="comentario"></slot></div>
          <div class="Discussion-bottom">
              <div class="Discussion-bottomLeft">
                  <span>
                      <span @click="onUpVote" class="Discussion-vote Discussion-voteUp icon-plus_A "></span>
                      <span @click="onDownVote" class="Discussion-vote Discussion-voteDown icon-minus_A "></span>
                      <span class="Discussion-points">{{ votes }} Punto(s)</span>
                  </span>

                  <!-- Do the functionality for reply buttons -->


              </div>
              <div class="Discussion-bottomRight">
              </div>
          </div>
      </div>
      <!-- Do the functionality form for reply -->

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        votes: 1,
        answers: []
      }
    },
     methods: {
        onSubmit() {
          this.active = false;
          this.$parent.showformdiscussion = true;
          console.log(this.$parent.showformdiscussion);
        },
        onUpVote(){
            this.votes = this.votes + 1
        },

        onDownVote(){
          this.votes = this.votes - 1
        },
        onReply(){
           console.log('va a responder')
        }

    },
    created() {
      this.active = true
    }
  }
</script>



