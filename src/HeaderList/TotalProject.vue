<template>
    <div class="card text-black bg-success rounded-4" max-width="100%">

        <div class="card-body">
            <h3 class="card-title"> <v-icon dark right color="black">
                    mdi-home-variant
                </v-icon> Total project</h3>
            <p class="card-text">11,123 total project</p>
            <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'TotalProject' })">
                More info
            </v-btn>
        </div>
    </div>
</template>