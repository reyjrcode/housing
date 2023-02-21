<template>
    <div>


        <v-app-bar color="#C8E6C9" dark app>


            <v-toolbar-title class="text-uppercase">
                <v-avatar size="50">
                    <v-img :width="300" aspect-ratio="16/9" cover
                        src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.15752-9/331931450_564497342289025_501882712394233791_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHMkg0MHgAjqD3ZS36PDV8GjlsOzyDejZOOWw7PIN6Nk9KAlud3WscZgbmexKw1GnwyuC6cPX55uSxaAt3jD11T&_nc_ohc=rPhL8_J2M2IAX80zobp&_nc_ht=scontent.fmnl3-2.fna&oh=03_AdQ0I7WQI_6pzBo4PHrYkU4SqXQiFnjThp1OPNSfk_Gwow&oe=641BA6DF"></v-img>
                    <!-- <img src="https://i1.sndcdn.com/artworks-qkXAmhFYFAo2JykO-CnLyqw-t500x500.jpg" alt="123" /> -->
                </v-avatar>
                <span class="font-weight-light"> City Housing and Land Management Office</span>
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

</script>
<style></style>