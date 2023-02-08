<template>
    <div>
        <v-navigation-drawer v-model="drawer" color="#1B5E20" dark app>
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-btn class="mx-2" fab dark large color="purple"  @click="$router.push({ name: 'EditProfile' })" outlined>
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

            <v-list shaped class="clickable">
                <template v-for="item in items">
                    <v-list-group v-if="item.children" :key="item.text" v-model="item.model"
                        :prepend-icon="item['icon-ctr']" :append-icon="item.model ? item.icon : item['icon-alt']"
                        active-class="orange--text">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(child, i) in item.children" :key="i" route :to="child.route"
                            active-class="orange--text">
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item v-else :key="item.text" active-class="orange--text" route :to="item.route">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item v-else :key="item.text" active-class="orange--text" route :to="item.route">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>



                </template>
            </v-list>
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
        drawer: null,
        items: [
            { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
            // {
            //     icon: "mdi mdi-account",
            //     text: "Forms",
            //     route: "/ScholarshipApplication",
            // },
            {
                icon: "mdi-chevron-up",
                "icon-alt": "mdi-chevron-down",
                "icon-ctr": "mdi-note-multiple",
                text: "Relocation",
                model: false,
                children: [
                    {
                        icon: "mdi-note-plus",
                        text: "Relocation Form",
                        route: "/form-one",
                    },
                    {
                        icon: "mdi-playlist-check",
                        text: "Relocation applicants",
                        route: "/relocation-list",
                    },

                ],
            },
            {
                icon: "mdi-chevron-up",
                "icon-alt": "mdi-chevron-down",
                "icon-ctr": "mdi-note-multiple",
                text: "Shelter",
                model: false,
                children: [
                    {
                        icon: "mdi-note-plus",
                        text: "Shelter Assistance Form",
                        route: "/shelter-assistance",
                    },
                    {
                        icon: "mdi-playlist-check",
                        text: "List of applicants",
                        route: "/shelter-assistance-dialog",
                    },
                ],
            },
            {
                icon: "mdi-chevron-up",
                "icon-alt": "mdi-chevron-down",
                "icon-ctr": "mdi-account-box",
                text: "Actions",
                model: false,
                children: [
                    {
                        icon: "mdi-wallet-travel",
                        text: "Inventory",
                        route: "/inventory",
                    },
                    {
                        icon: "mdi-database-plus",
                        text: "Add material",
                        route: "/add-materials",
                    },
                    // {
                    //     icon: "mdi-thumb-up",
                    //     text: "List of applicants",
                    //     route: "/to-aproved",
                    // },
                    {
                        icon: "mdi-printer",
                        text: "Print",
                        route: "/viewshit",
                    },


                    {

                        icon: "mdi-logout-variant",
                        text: "Log Out",
                        route: "/log-in",
                    },
                ],
            },
        ],
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
<style>

</style>