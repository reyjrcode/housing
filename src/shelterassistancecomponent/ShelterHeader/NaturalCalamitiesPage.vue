<template>
    <div class="div">
        <div class="card text-black bg-primary rounded-4" max-width="100%">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h4 class="card-title">  Natural Calamities</h4>
                <p class="card-text">100 total blocklisted</p>
                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'NaturalCalamityPage' })">
                    More info
                </v-btn>
            </div>
        </div>
    </div>
</template>