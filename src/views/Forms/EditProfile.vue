<template>

    <div class="addmaterial">
        <AdminNavbar />
        <div class="container">
            <div class="row">
                <div class="col">
                    1
                </div>
                <div class="col">
                    <v-card class="mx-auto" max-width="600" outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="text-overline mb-4">
                                    OVERLINE
                                </div>
                                <v-list-item-title class="text-h5 mb-1">
                                    Headline 5
                                </v-list-item-title>
                                <v-list-item-subtitle>Greyhound divisely hello coldly
                                    fonwderfully</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-avatar tile size="80">
                                <v-btn class="mx-2" fab dark large color="purple"
                                    @click="$router.push({ name: 'EditProfile' })" outlined>
                                    <v-avatar size="90">
                                        <img src="https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png"
                                            alt="123" />
                                        <!-- <img src="https://i1.sndcdn.com/artworks-qkXAmhFYFAo2JykO-CnLyqw-t500x500.jpg" alt="123" /> -->
                                    </v-avatar>
                                </v-btn></v-list-item-avatar>
                        </v-list-item>
                        <v-card-actions>
                            <!-- <v-btn outlined rounded text>
                                Button
                            </v-btn> -->
                            <v-btn class="ma-2" outlined color="indigo">
                                Update
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </div>
                <div class="col">
                    3
                </div>
            </div>
        </div>
    </div>
</template>

<script>

/* eslint-disable */

import AdminNavbar from '../Navigation/AdminNavbar.vue';


export default {

    components: {
        AdminNavbar,

    },

    data: () => ({


    }),

};
</script>