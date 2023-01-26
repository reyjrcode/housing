<template>

    <div class="div">


        <v-card class="mx-auto" max-width="344">
            <v-card-text>

                <p class="text-h4 text--primary">
                    Update user
                </p>
            </v-card-text>

            <v-text-field label="First Name" placeholder="First Name" v-model="firstname" outlined></v-text-field>
            <v-text-field label="Last Name" placeholder="Last Name" v-model="lastname" outlined></v-text-field>
            <v-text-field label="User Name" placeholder="User Name" v-model="username" outlined></v-text-field>
            <v-text-field label="Password" placeholder="Password" v-model="password" outlined></v-text-field>

            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                v-model="department_id">

                <option value="1">Human Resource</option>
                <option value="2">Department Head</option>
                <option value="3">Team Leader</option>
                <option value="4">Aid</option>
            </select>

            <v-card-actions>
                <v-btn text color="deep-purple accent-4" @click="register">
                    Update
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex';
export default {
    data: () => ({
        dialog: false,
        selection: 1,
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        department_id
        ,
        pangalan: {
            id: '',
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            department_id
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
            console.log("this.department_id", this.department_id);
            let data = new FormData;
            data.append('id', this.pangalan.id);
            data.append('firstname', this.firstname);
            data.append('lastname', this.lastname);
            data.append('username', this.username);
            data.append('password', this.password);
            data.append('department_id', this.department_id);
            this.Updateuser(data);
            setTimeout(() => {
                // this.loading = false;

                this.$router.push('/dashboard')
                window.location = window.location
            }, 2000)
        },
    },
    computed: {
        ...mapGetters('users', { users: 'getUsers' })
    },
    created() {

        // if (this.firstname.length == 0 || this.lastname.length == 0 || this.username.length == 0 || this.password.length == 0) {

        // } else {

        // }
        this.pangalan = this.users.find(pangalan => pangalan.id == this.$route.params.id);
        console.log("id=>", this.pangalan.id);
        this.firstname = this.pangalan.firstname;
        this.lastname = this.pangalan.lastname;
        this.username = this.pangalan.username;
        this.password = this.pangalan.password;
        this.department_id = this.pangalan.department_id;


    }
}
</script>