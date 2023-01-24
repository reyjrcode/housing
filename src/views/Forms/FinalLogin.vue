
<template>

    <div>
        <v-app id="inspire" class="background">
            <v-main class="d-flex justify-center align-center">
                <v-col cols="10" lg="5" class="mx-auto">


                    <v-form @submit.prevent="submitHandler" ref="form">
                        <v-container>
                            <v-layout row wrap>


                                <v-card class="wrapper">

                                    <v-snackbar v-model="snackbar" :timeout="timeout">
                                        <h3> {{ text }}</h3>

                                        <template v-slot:action="{ attrs }">
                                            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
                                                OK!
                                            </v-btn>
                                        </template>
                                    </v-snackbar>

                                    <div class="text-center ">
                                        <h1>C.H.L.M.O</h1>
                                    </div>

                                    <v-row>

                                        <v-col offset="1" md="10">
                                            <v-text-field class="custom-label-color" v-model="id" label="User Name"
                                                color="white" type="sample"
                                                prepend-inner-icon="mdi mdi-account mdi-light" autofocus></v-text-field>

                                            <v-text-field v-model="password" class="custom-label-color" label="Password"
                                                color="white" type="password"
                                                prepend-inner-icon="mdi-key mdi-light"></v-text-field>

                                        </v-col>
                                    </v-row>

                                    <v-container>

                                        <v-row>
                                            <v-col offset="2" size="9">

                                                <v-btn type="submit" color="blue" class="rounded-xl" @click=userlogin>
                                                    <v-icon left>mdi-login-variant</v-icon>
                                                    LOG IN

                                                </v-btn>
                                                <v-dialog v-model="dialog" max-width="290">
                                                    <v-card>
                                                        <v-card-title class="text-h6">
                                                            No user account found!
                                                        </v-card-title>

                                                        <v-card-text>
                                                            {{ this.loginCorrection }}
                                                        </v-card-text>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>

                                                            <!-- <v-btn color="green darken-1" text @click="dialog = false">
                                                                Disagree
                                                            </v-btn> -->

                                                            <v-btn color="green darken-1" text @click="dialog = false">
                                                                Agree
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                            </v-col>








                                            <v-col offset="" size="9"
                                                @click="$router.push({ name: 'RegistrationPage' })">

                                                <v-btn color="green" class="rounded-xl">
                                                    <v-icon left>mdi-lead-pencil</v-icon>
                                                    SING UP
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
  
<script>

/* eslint-disable */
import { mapActions } from 'vuex';


export default {
    name: "App",
    components: {

    },
    data: () => ({
        inputcheck: false,
        dialog: false,
        snackbar: false,
        passwordShow: false,
        id: "",
        password: "",
        loginCorrection: '',
        text: `Input all fields to login!!!!!!`,
        timeout: 3000,
    }),

    methods: {
        ...mapActions('users', ['Loginuser']),
        submitHandler() {
            if (this.$refs.form.validate()) {
                this.loading = true;
                setTimeout(() => {
                }, 3000);
            }

        },
        userlogin() {


            let data = new FormData;

            data.append('id', this.id);
            data.append('password', this.password);
            console.log(this.id);
            console.log(this.password);


            if (this.id.length == 0) {
                this.inputcheck = true;
                this.snackbar = true;
                localStorage.clear();
            } else {
                this.Loginuser(data).then(e => {
                    console.log('Hello!')
                    if (e == 0) {
                        this.id="";
                        this.password="";
                        this.loginCorrection = "Check user name and password first before log-in."
                        this.dialog = true;
                    } else if (e == 2) {
                        this.loginCorrection = "No user account found!"
                        this.dialog = true;
                    }
                    else {

                        this.$router.push('dashboard');
                    }
                });


            }

        },

    },

};
</script>

<style>
input[type="sample"] {
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
    background: transparent;
    outline: none;

    width: 100%;
    color: rgb(255, 255, 255);

}

input[type="password"] {
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
    background: transparent;
    outline: none;

    width: 100%;
    color: rgb(255, 255, 255);

}


.custom-placeholer-color input::placeholder {
    color: rgb(255, 255, 255) !important;
    opacity: 1;
}

.custom-label-color .v-label {
    color: rgb(255, 255, 255);
    opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
    color: rgb(255, 255, 255) !important;
}
</style>
  
<style scoped>
.v-sheet.v-card {
    border-radius: 25px 25px 25px 25px;
}

.v-btn {
    border-radius: 25px 25px 25px 25px;
}


h1 {
    color: rgb(63, 248, 7);
    -webkit-text-fill-color: rgb(4, 245, 85);
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
}

.wrapper {

    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.623);


    border-radius: 20px;
    box-shadow: 10px 10px 15px rgba(49, 47, 47, 0.15);
    box-shadow: 0 0 8px rgb(201, 181, 1);


}


.background {

    margin: 0;
    padding: 0;
    /* background-image: url(/cover4.jpg) !important; */
    background-image: url("C:\Users\CityOfTagum\Desktop\housing\back-up\housing-dashboard\src\assets\images\cover.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;


}
</style>






