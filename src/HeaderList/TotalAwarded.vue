<template>
    <div class="card text-black bg-success rounded-4" max-width="100%">

        <div class="card-body">
            <h3 class="card-title"> <v-icon dark right color="black">
                    mdi-trophy
                </v-icon> Total awarded</h3>
            <p class="card-text">12,345 total awarded</p>
            <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'TotalAwards' })">
                More info
            </v-btn>
        </div>
    </div>
</template>