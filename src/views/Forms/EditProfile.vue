<template>

    <div class="addmaterial">
        <HomeNavigation/>
        <div class="container">
            <v-card class="mx-auto" max-width="700" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4">
                            .
                        </div>
                        <v-list-item-title class="text-h5 mb-1">
                            Edit Profile
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-btn class="mx-2" fab dark large color="purple" @click="$router.push({ name: 'EditProfile' })"
                        outlined>
                        <v-avatar size="90">
                            <img src="https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png"
                                alt="123" />
                            <!-- <img src="https://i1.sndcdn.com/artworks-qkXAmhFYFAo2JykO-CnLyqw-t500x500.jpg" alt="123" /> -->
                        </v-avatar>

                    </v-btn>
                    <label for="formFileSm" class="form-label"> </label>
                    <input id="formFileSm" max-width="70" type="file" />
                </v-list-item>

                <v-card-content>
                    <v-card class="mx-auto" max-width="600" outlined>
                        <v-text-field label="First name" placeholder="First name" outlined></v-text-field>
                        <v-text-field label="Middle name" placeholder="Middle name" outlined></v-text-field>
                        <v-text-field label="Last name" placeholder="Last name" outlined></v-text-field>
                        <v-text-field label="Email:" placeholder="Email:" outlined></v-text-field>
                        <v-card-actions>
                            <v-btn outlined rounded text>
                                Button
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-card-content>

            </v-card>
        </div>
    </div>
</template>

<script>

/* eslint-disable */

// import AdminNavbar from '../Navigation/AdminNavbar.vue';


export default {

    components: {
        // AdminNavbar,

    },

    data: () => ({


    }),

};
</script>