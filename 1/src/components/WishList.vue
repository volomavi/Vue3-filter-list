<template>
    <div>
        <h1>Holiday List</h1>
        <input type="text/" v-model="filterText" >
        <p>{{filteredWishlist}}</p>
        <p>{{filterText}}</p>
        <ul :class="$style.wishlist">
            <li :key="gift.id" v-for="gift in filteredWishlist">
                <h2>{{gift.label}}</h2>
                <img :src="`../images/${gift.image}`"  />

                <p>{{gift.votes}}</p>
                <button @click="submitVote(gift.id)">Wish for this</button>
            </li>
        </ul>
        <p>{{gifts}}</p>
    </div>
</template>

<script>
import gifts from '../../../data.json';

//use serverless functions to load voting functions


export default {
    data: () => ({
        gifts,
        filterText: '',
    }),
    computed: {
        filteredWishlist: function() {
            return this.gifts.filter((gift) => {
                const label = gift.label.toLowerCase();
                const search = this.filterText.toLowerCase();
                return label.includes(search);
                });
            }
    },
    methods: {
        submitVote: function(id) {
            console.log({id})
            //send a fetch to the serverless function to update votes
        },
    },
    
};
</script>

<style lang="scss" module>

.wishlist {
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    grid-template-rows: auto;
    list-style: none;
    padding: 0;
    gap: 1rem;
    justify-content: center;

    img {
        width: 100%;
    }

    h2 {
        font-size: 1rem;
    }


}

</style>