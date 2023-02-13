<template>
    <div class="div">
        <div class="card text-black bg-success rounded-4" max-width="100%">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h4 class="card-title"> <v-icon dark right color="black">mdi-human-handsup</v-icon> Self Help</h4>
                <p class="card-text">123 Self help</p>
                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'SelfHelpPage' })">
                    More info
                </v-btn>
            </div>
        </div>
    </div>
</template>