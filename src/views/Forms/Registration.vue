<template>
    <v-container fill-height>
        <v-row no-gutters>
            <v-col md="12" offset-md="4" justify="center" align="center">


                <!-- this line start -->
                <!-- <v-card :loading="loading" class="mx-auto my-12" max-width="374" elevation="24" outlined shaped> -->
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>



                    <v-card-title>Add New User</v-card-title>

                    <v-card-text>




                        <div>
                            <v-text-field label="FIRSTNAME" hide-details="auto" v-model="firstname"></v-text-field>
                            <v-text-field label="Password" type="text" v-model="password"></v-text-field>
                        </div>
                    </v-card-text>



                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="register">
                            Save
                        </v-btn>
                        <v-btn color="deep-purple lighten-2" text @click="$router.push('/Dashboard')">
                            Cancel
                        </v-btn>
                    </v-card-actions>
                <!-- </v-card> -->
                <!-- this line ends -->


            </v-col>
        </v-row>

    </v-container>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data: () => ({
        loading: false,
        selection: 1,
        firstname: '',
        password: ''
    }),

    methods: {
        ...mapActions('users', ['Registration','Login']),
        register() {
            console.log("sugud");
            console.log(this.firstname);
            console.log(this.password);
            this.loading = true;
            let data = new FormData;
            data.append('firstname', this.firstname);
            data.append('password', this.password);
            console.log("sugud");
            this.Login();
            this.Registration(data);
            setTimeout(() => {
                this.loading = false;
                this.$router.push('/Dashboard');
            }, 2000)
        },
    },
}
</script>