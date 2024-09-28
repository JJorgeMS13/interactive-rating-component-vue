<template>
    <section class="card">
        <picture class="card__star">
            <img src="../../public/images/icon-star.svg" alt="icon of star">
        </picture>
        <header class="card__title">
            <h1>How did we do?</h1>
        </header>
        <p> Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
        </p>
        <div class="card__number">
            <button 
              v-for="(item, index) in numersStar"
              :key="index"
              @click="saveNumberStar(item)"
              :class="active(index)"
              >{{ item }}</button>
        </div>
        <button @click="submit()">Submit</button>
    </section>
</template>

<script>
export default {
    name: 'CardFeedback',
    props: {
        numersStar: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            selectedStar: 0
        }
    },
    methods: {
      active(item){
        if ((item + 1) === this.selectedStar) {
            return 'active';
        }
      },
      saveNumberStar(value){
        this.selectedStar = value;
      },
      submit(){
        this.$emit('save-star', this.selectedStar)
      }
    },
}
</script>

<style lang="scss" scoped>
.active {
    cursor: pointer;
    background-color: $orange !important;
    color: $darkBlue !important;
}
.card {
    p {
        font-size: 1.4rem;
        font-weight: 400;
        color: $light-grey;
    }
    button {
        text-transform: uppercase;
        background-color: $orange;
        border: none;
        border-radius: 2.25rem;
        height: 4.5rem;
        font-weight: 700;
        &:hover {
            cursor: pointer;
            background-color: $pure-withe;
            color: $darkBlue;
        }
    }
}

.card__star {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $darkBlue;
    height: 4rem;
    width: 4rem;
}
.card__title h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: $pure-withe;
}
.card__number {
    display: flex;
    gap: 1.8rem;
    justify-content: space-around;
    button {
        display: flex;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: 700;
        border: none;
        align-items: center;
        border-radius: 50%;
        background-color: $darkBlue;
        color: $light-grey;
        height: 4.2rem;
        width: 4.2rem;
        &:hover {
            cursor: pointer;
            background-color: $pure-withe;
            color: $darkBlue;
        }
    }
}

@media screen and (min-width: 90rem){
    .card {
        height: 41.6rem;
        .card__star {
            width: 4.8rem;
            height: 4.8rem;
        }
        .card__title {
            h1 {
                font-size: 2.8rem;
            }
        }
        p {
            font-size: 1.5rem;
        }
        .card__number {
            span {
                font-size: 1.6rem;
                height: 5.1rem;
                width: 5.1rem;
            }
        }
        button {
            font-size: 1.5rem;
        }
    }
}
</style>