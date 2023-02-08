<template>


    <div class="card text-black bg-success rounded-4" max-width="100%">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h4 class="card-title"> <v-icon dark right color="black">
                    mdi-block-helper
                </v-icon> Total blocklisted</h4>
            <p class="card-text">100 total blocklisted</p>
            <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'TotalBlocklisted' })">
                More info
            </v-btn>
        </div>
    </div>
</template>