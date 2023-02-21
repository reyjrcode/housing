<template>
    <div>
        <v-navigation-drawer v-model="drawer" color="#1B5E20" dark app width="345px">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-btn class="mx-2" fab dark large color="purple" @click="$router.push({ name: 'EditProfile' })"
                        outlined>
                        <v-avatar size="90">
                            <img src="https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png"
                                alt="123" />
                            <!-- <img src="https://i1.sndcdn.com/artworks-qkXAmhFYFAo2JykO-CnLyqw-t500x500.jpg" alt="123" /> -->
                        </v-avatar>
                    </v-btn>

                    <p class="white--text subheading mt-1 text-center">Username</p>
                </v-flex>
                <v-flex>
                    <h3 class="white--text subheading mt-1 text-center">User Title</h3>
                </v-flex>

                <v-flex class="mt-4 mb-4">
                </v-flex>
            </v-layout>

        </v-navigation-drawer>
        <v-app-bar color="#388E3C" dark app>
            <v-app-bar-nav-icon color="#000000" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">City Housing and Land Management Office</span>
                <span></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <v-list flat>
                    <v-list-item v-for="link in items" :key="link.text" router :to="link.route" active-class="border">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn elevation="4" color="error" @click="logout">
                <span>LOG OUT</span>
                <v-icon right> mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>


<script>
export default {
    data: () => ({
        drawer: false,
 
    }),
    methods: {
        logout() {
            console.log("Local storage clear")
            localStorage.clear();
            this.$router.replace({ name: 'Loginpage' });
        },
    }
};
</script>
<style></style>