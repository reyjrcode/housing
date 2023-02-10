<template>
    <div class="container">
        <div class="card" max-width="100%" style=" height: 12rem;">
            <div class="card-body">
                <h1 class="card-title">Landslide prone area</h1>
                <p class="card-text">Mga lugar nga naa sa landsile prone area</p>
                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'LandSlide' })">
                    More info
                </v-btn>
            </div>
        </div>
    </div>
</template>