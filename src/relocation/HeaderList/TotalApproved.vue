<template>
    <div class="card text-black bg-success rounded-4" max-width="100%">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
            <h4 class="card-title"> <v-icon  dark right color="black">
                    mdi-thumb-up
                </v-icon> Total approved</h4>
            <p class="card-text">67,891 total approved</p>
            <v-btn text color="#7a0769" @click="$router.push({ name: 'TotalApproved' })">
                <v-icon>mdi-magnify-plus</v-icon>   More info
            </v-btn>
        </div>
    </div>

</template>