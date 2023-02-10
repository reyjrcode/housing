<template>
    <div class="card text-black bg-success rounded-4" max-width="100%">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h4 class="card-title"> <v-icon dark right color="black">
                    mdi-thumb-up
                </v-icon> Total approved</h4>
            <p class="card-text">67,891 total approved</p>
            <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'TotalApproved' })">
                More info
            </v-btn>
        </div>
    </div>

</template>