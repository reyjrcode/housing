<template>
    <v-container fill-height>
        <v-row no-gutters>
            <v-col md="12" offset-md="4" justify="center" align="center">


                <!-- this line start -->
                <v-card :loading="loading" class="mx-auto my-12" max-width="374" elevation="24" outlined shaped>
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>



                    <v-card-title>Add New User</v-card-title>

                    <v-card-text>




                        <div>
                            <v-text-field hide-details="auto" v-model="firstname"></v-text-field>
                            <v-text-field hide-details="auto" v-model="lastname"></v-text-field>
                            <v-text-field hide-details="auto" v-model="username"></v-text-field>
                            <v-text-field label="Password" type="password" v-model="password"></v-text-field>
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
                </v-card>
                <!-- this line ends -->


            </v-col>
        </v-row>

    </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data: () => ({
        loading: false,
        selection: 1,
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        pangalan: {
            id: '',
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        }
    }),

    methods: {
        ...mapActions('users', ['Updateuser']),
        register() {
            this.loading = true
            console.log("this.pangalan.id", this.pangalan.id);
            console.log("this.firstname", this.firstname);
            console.log("this.lastname", this.lastname);
            console.log("this.username", this.username);
            console.log("this.password", this.password);
            let data = new FormData;
            data.append('id', this.pangalan.id);
            data.append('firstname', this.firstname);
            data.append('lastname', this.lastname);
            data.append('username', this.username);
            data.append('password', this.password);
            this.Updateuser(data);
            setTimeout(() => {
                this.loading = false;
                // this.$router.push('/dashboard');
            }, 2000)
        },
    },
    computed: {
        ...mapGetters('users', { users: 'getUsers' })
    },
    created() {

        this.pangalan = this.users.find(pangalan => pangalan.id == this.$route.params.id);
        console.log("id=>", this.pangalan.id);
        this.firstname = this.pangalan.firstname;
        this.lastname = this.pangalan.lastname;
        this.username = this.pangalan.username;
        this.password = this.pangalan.password;
    }
}
</script>