<template>
    <div class="container">
        <div class="card" max-width="100%" style=" height: 12rem;">
            <div class="card-body">
                <h1 class="card-title">Flood prone area</h1>
                <p class="card-text">Mga lugar nga naa sa flood prone area.</p>
                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'FloodProne' })">
                    More info
                </v-btn>
            </div>
        </div>
    </div>
</template>