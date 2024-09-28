<template>
    <main>
        <Feedback 
          v-if="!showMessageThanks" 
          :numersStar="numerStar" 
          @save-star="save"/>
        <MessageThanks v-else :numStar="star"/>
    </main>
</template>

<script>
import Feedback from "../components/CardFeedback.vue";
import MessageThanks from "../components/MessageThanks.vue";

export default {
    name: 'RatingPage',
    components: {
        Feedback,
        MessageThanks,
    },
    data(){
        return {
            showMessageThanks: false,
            numerStar: [1, 2, 3, 4, 5],
            star: 0,
        }
    },
    methods: {
        save(value){
            this.star = value;
            if(value) this.showMessageThanks = true;
        }
    }
}
</script>

<style lang="scss">
main {
  display: flex;
  background-color: $very-dark-blue;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(to bottom, $black, #181E27);
    border-radius: 1.5rem;
    margin: 0 2.4rem;
    padding: 3rem 2.3rem;
    height: 36rem;
    max-width: 41.2rem;
}
@media screen and (min-width: 48rem){
    .card {
        margin: 0;
        padding: 3rem 4rem;
    }
}
</style>