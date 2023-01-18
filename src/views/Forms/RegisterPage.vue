<template>
    <div>
        <v-app id="inspire" class="background">
            <v-main class="d-flex justify-center align-center">
                <v-col cols="10" lg="5" class="mx-auto">
                    <v-form>
                        <v-container>
                            <v-layout row wrap>
                                <v-card class="wrapper">
                                    <div class="text-center">
                                        <h2>C.H.L.M.O</h2>
                                    </div>
                                    <v-row class="text-form">
                                        <v-col offset="1" md="10">
                                            <v-text-field class="textbox" v-model="firstname" type="text"
                                                label="First Name" prepend-inner-icon="mdi mdi-account mdi-green"
                                                required />

                                            <v-text-field class="textbox" v-model="lastname" type="text"
                                                label="Last Name" prepend-inner-icon="mdi mdi-account mdi-green"
                                                required />



                                            <v-text-field class="textbox" v-model="username" type="text"
                                                label="Username" prepend-inner-icon="mdi mdi-account mdi-green"
                                                required />



                                            <v-text-field class="textbox" v-model="password" type="text"
                                                label="password" prepend-inner-icon="mdi mdi-account mdi-green"
                                                required />
                                        </v-col>
                                    </v-row>
                                    <v-container>
                                        <v-row>
                                            <v-col offset="2" size="9">


                                                <v-dialog v-model="dialog" max-width="290">
                                                    <v-card>
                                                        <v-card-title class="text-h5">
                                                            EEEHHH!!!!
                                                        </v-card-title>

                                                        <v-card-text>

                                                        </v-card-text>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>

                                                            <v-btn color="green darken-1" text @click="dialog = false">
                                                                Disagree
                                                            </v-btn>

                                                            <v-btn color="green darken-1" text @click="dialog = false">
                                                                Agree
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>





                                            </v-col>
                                            <v-col offset="" size="9">
                                                <v-btn @click="register" color="green" class="rounded-xl">
                                                    <v-icon left>mdi-account-check</v-icon>
                                                    SIGN UP
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card>
                            </v-layout>
                        </v-container>
                    </v-form>
                </v-col>
            </v-main>
        </v-app>
    </div>
</template>

<script scoped>

import { mapActions } from 'vuex';
export default {
    data: () => ({
        dialog: false,
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    }),

    methods: {
        ...mapActions('users', ['Registration']),
        register() {

            let data = new FormData;
            data.append('firstname', this.firstname);
            data.append('lastname', this.lastname);
            data.append('username', this.username);
            data.append('password', this.password);




            if (this.firstname.length == 0 || this.lastname.length == 0 || this.username.length == 0 || this.password.length == 0) {
                this.dialog = true;
            } else {
                this.Registration(data);
                console.log(this.firstname);
                console.log(this.lastname);
                console.log(this.username);
                console.log(this.password);

                setTimeout(() => {
                    console.log("register form");
                    this.$router.push('/dashboard');
                }, 2000)
            }
        },
    },
}



</script>
    
    
<style scoped>
input[type="sample"] {
    border-bottom: 1px solid rgb(28, 110, 4);
    outline: none;
    color: rgb(28, 110, 4);
}

input[type="password"] {
    background: transparent;
    outline: none;
    color: rgb(28, 110, 4);
}

.custom-placeholer-color input::placeholder {
    color: rgb(28, 110, 4) !important;
    opacity: 1;
}

.custom-label-color .v-label {
    color: rgb(28, 110, 4);
    opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
    color: rgb(28, 110, 4) !important;
}

.v-sheet.v-card {
    border-radius: 25px 25px 25px 25px;
}

.v-btn {
    border-radius: 25px 25px 25px 25px;
}

h2 {
    color: rgb(28, 110, 4);
    -webkit-text-stroke-color: rgb(0, 0, 0);
    margin-top: 20px;
}

.wrapper {
    position: absolute;
    left: 50%;
    top: 250%;
    width: 400px;
    transform: translate(-50%, -50%);
    background: rgb(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
    box-shadow: 0 0 8px rgb(201, 181, 1);
}

.background {
    margin: 0;
    padding: 0;
    background-image: url("C:\Users\CityOfTagum\Desktop\housing\back-up\housing-dashboard\src\assets\images\cover.jpg") !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}

.text-form {
    margin-top: 20px;
    color: rgb(28, 110, 4);
}
</style>
    
    
