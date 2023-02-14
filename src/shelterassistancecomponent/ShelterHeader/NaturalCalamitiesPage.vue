<template>
    <div class="div">
        <div class="card text-black bg-success rounded-4" max-width="100%">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body"> 
                <h4 class="card-title"> <v-icon size="45" dark right color="black">mdi-weather-pouring </v-icon> Natural Calamities</h4>
                <p class="card-text">123 Natural Calamity</p>
                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'NaturalCalamityPage' })">
                    <v-icon>mdi-magnify-plus</v-icon> More info
                </v-btn>
            </div>
        </div>
    </div>
</template>