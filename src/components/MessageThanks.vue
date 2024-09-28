<template>
    <section class="card text--alig-center">
        <picture>
            <img src="../../public/images/illustration-thank-you.svg" alt="Image of message thanks">
        </picture>
        <div>
            <p>You selected {{ numStar }} out of 5</p>
        </div>
        <h2>Thank you!</h2>
        <p> We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
        </p>
    </section>
</template>

<script>
export default {
    name: 'MessageThanks',
    props: {
        numStar: {
            type: Number,
            required: true,
        }
    }
}

</script>

<style lang="scss" scoped>
.card {
    align-items: center;
    div {
        background-color: $darkBlue;
        border-radius: 2.25rem;
        padding: .8rem 0;
        width: 16.8rem;
        height: 3.2rem;
         p {
            font-size: 1.4rem;
            color: $orange;
         }
    }
    h2 {
        font-size: 2.4rem;
        color: $pure-withe;
    }
    p {
        font-size: 1.4rem;
        color: $light-grey;
    }
}
.text--alig-center {
    text-align: center;
}
@media screen and (min-width: 90rem){
    .card {
        height: 41.6rem;
        div {
            width: 19.3rem;
            p {
                font-size: 1.5rem;
            }
        }
        h2 {
            font-size: 2.8rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
}
</style>