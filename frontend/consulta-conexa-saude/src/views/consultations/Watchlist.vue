<template>
    <div class="container h-100 my-10 justify-center flex flex-col items-center">
        <h2 class="text-4xl font-bold text-center mb-5">Watchlist</h2>
        <div class="container grid grid-cols-3 gap-2">
            <div class="container" v-for="item in watchlist" :key="item.id">
                <serie-box :serie="item"></serie-box>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
import SerieBox from '@/components/SerieBox.vue';

export default {
    name: 'Watchlist',
	components: { SerieBox},
    mounted(){
        this.ActionFindWatchlist();
    },
    updated(){
        this.ActionFindWatchlist();
    },
    computed:{
        ...mapState('watchlist', ['watchlist'])
    },
    methods:{
        ...mapActions('watchlist', ['ActionFindWatchlist'])
    }
}
</script>


<style lang="scss" scoped>

</style>