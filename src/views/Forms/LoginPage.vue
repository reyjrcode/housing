<template>
    <v-app>
        <v-main class="hero">
            <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="10">
                        <v-card class="elevation-6 mt-10">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-card-text class="mt-12">
                                                <h4 class="text-center">Login in to Your Account</h4>
                                                <!-- <h6 class="text-center  grey--text ">Log in to your account so you can
                                                    continue
                                                    builiding <br>and editing your onboarding flows</h6> -->
                                                <v-row align="center" justify="center">
                                                    <v-col cols="12" sm="8">
                                                        <v-text-field label="Email" v-model="email" outlined dense
                                                            color="blue" autocomplete="false" class="mt-16" />
                                                        <v-text-field label="Password" v-model="password" outlined dense
                                                            color="blue" autocomplete="false" type="password" />
                                                        <!-- <v-row>
                                                            <v-col cols="12" sm="7">
                                                                <v-checkbox label="Remember Me" class="mt-n1"
                                                                    color="blue">
                                                                </v-checkbox>
                                                            </v-col>
                                                            <v-col cols="12" sm="5">
                                                                <span class="caption blue--text">Forgot password</span>
                                                            </v-col>
                                                        </v-row> -->
                                                        <v-btn color="blue" dark block tile @click=userlogin>Log
                                                            in</v-btn>





















                                                        <h5 class="text-center  grey--text mt-4 mb-3">Or Log in using
                                                        </h5>
                                                        <div
                                                            class="d-flex  justify-space-between align-center mx-10 mb-16">
                                                            <v-btn depressed outlined color="grey">
                                                                <v-icon color="red">mdi-google-plus</v-icon>
                                                            </v-btn>
                                                            <v-btn depressed outlined color="grey">
                                                                <v-icon dark color="blue">
                                                                    mdi-facebook
                                                                </v-icon>
                                                            </v-btn>
                                                            <v-btn depressed outlined color="grey">
                                                                <v-icon
                                                                    color="light-blue lighten-3">mdi-twitter</v-icon>
                                                            </v-btn>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-col>
                                        <v-col cols="12" md="6" class="green rounded-bl-xl">
                                            <div style="  text-align: center; padding: 180px 0;">
                                                <v-card-text class="white--text">
                                                    <h3 class="text-center ">Don't Have an Account Yet?</h3>
                                                    <h6 class="text-center">Let's get you all set up so you can start
                                                        creating
                                                        your your first<br> onboarding experience</h6>
                                                </v-card-text>
                                                <div class="text-center">
                                                    <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                                <v-window-item :value="2">
                                    <v-row>
                                        <v-col cols="12" md="6" class="green rounded-br-xl">
                                            <div style="  text-align: center; padding: 180px 0;">
                                                <v-card-text class="white--text">
                                                    <h3 class="text-center ">Alredy Signed up?</h3>
                                                    <h6 class="text-center">Log in to your account so you can continue
                                                        building
                                                        and<br> editing your onboarding flows</h6>
                                                </v-card-text>
                                                <div class="text-center">
                                                    <v-btn tile outlined dark @click="step--">Log in</v-btn>
                                                </div>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-card-text class="mt-12">
                                                <h6 class="text-center">Sign Up for an Account</h6>
                                                <!-- <h6 class="text-center  grey--text ">Let's get you all set up so you can
                                                    start
                                                    creatin your <br>
                                                    first onboarding experiance</h6> -->
                                                <v-row align="center" justify="center">
                                                    <v-col cols="12" sm="8">
                                                        <v-row>
                                                            <v-col cols="12" sm="6">
                                                                <v-text-field v-model="firstname" label="First Name"
                                                                    outlined dense color="blue" autocomplete="false"
                                                                    class="mt-5" />
                                                            </v-col>
                                                            <v-col cols="12" sm="6">
                                                                <v-text-field v-model="lastname" label="Last Name"
                                                                    outlined dense color="blue" autocomplete="false"
                                                                    class="mt-5" />
                                                            </v-col>
                                                        </v-row> <v-text-field v-model="username" label="User Name"
                                                            outlined dense color="blue" autocomplete="false" />
                                                        <!-- <v-text-field label="User Name" outlined dense color="blue"
                                                            autocomplete="false" /> -->
                                                        <v-text-field v-model="password" label="Password" outlined dense
                                                            color="blue" autocomplete="false" type="password" />
                                                        <!-- <v-row>
                                                            <v-col cols="12" sm="7">
                                                                <v-checkbox label="I Accept AAE" class="mt-n1"
                                                                    color="blue">
                                                                </v-checkbox>
                                                            </v-col>
                                                            <v-col cols="12" sm="5">
                                                                <span class="caption blue--text ml-n4">Terms
                                                                    &Conditions</span>
                                                            </v-col>
                                                        </v-row> -->
                                                        <v-btn color="blue" dark block tile @click="register">Sign
                                                            up</v-btn>
                                                        <h6 class="text-center  grey--text mt-4 mb-3">Or Sign up using
                                                        </h6>
                                                        <div
                                                            class="d-flex  justify-space-between align-center mx-10 mb-11">
                                                            <v-btn depressed outlined color="grey">
                                                                <v-icon color="red">mdi-google-plus</v-icon>
                                                            </v-btn>
                                                            <v-btn depressed outlined color="grey">
                                                                <v-icon dark color="blue">
                                                                    mdi-facebook
                                                                </v-icon>
                                                            </v-btn>
                                                            <v-btn depressed outlined color="grey">
                                                                <v-icon
                                                                    color="light-blue lighten-3">mdi-twitter</v-icon>
                                                            </v-btn>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>


import { mapActions } from 'vuex';
export default {
    data: () => ({
        step: 1,
        loading: false,
        selection: 1,
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    }),

    methods: {
        ...mapActions('users', ['Registration']),
        register() {
            this.loading = true
            let data = new FormData;
            data.append('firstname', this.firstname);
            data.append('lastname', this.lastname);
            data.append('username', this.username);
            data.append('password', this.password);
            this.Registration(data);
            setTimeout(() => {
                this.loading = false;
                this.$router.push('/dashboard');
            }, 2000)
        },
    },

}


</script>


<style scoped>
.hero {
    background: url('https://www.bria.com.ph/wp-content/uploads/2021/03/Tagum-economy-1024x576.jpg');
    background-size: cover;
    height: 100vh;
}
</style>