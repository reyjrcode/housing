<template>


    <div class="div">
        <AdminNavbar />

        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-details">
                            <p class="text-title"> <v-icon dark right color="black">
                                    mdi-trophy
                                </v-icon>
                                Total award</p>
                            <p class="text-body">Here are the details of the card</p>
                        </div>
                        <button class="card-button" @click="$router.push({ name: 'TotalAwards' })">More info</button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-details">
                            <p class="text-title"> <v-icon dark right color="black">
                                    mdi-thumb-up
                                </v-icon>
                                Total approved</p>
                            <p class="text-body">Here are the details of the card</p>
                        </div>
                        <button class="card-button" @click="$router.push({ name: 'TotalApproved' })">More info</button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-details">
                            <p class="text-title"> <v-icon dark right color="black">
                                    mdi-home-variant
                                </v-icon>
                                Total Project</p>
                            <p class="text-body">Here are the details of the card</p>
                        </div>
                        <button class="card-button" @click="$router.push({ name: 'TotalProject' })">More info</button>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-details">
                            <p class="text-title"> <v-icon dark right color="black">
                                    mdi-block-helper
                                </v-icon>
                                Total blocklisted</p>
                            <p class="text-body">Here are the details of the card</p>
                        </div>
                        <button class="card-button" @click="$router.push({ name: 'TotalBlocklisted' })">More
                            info</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <center>
                <div class="container p-5 my-5 border">

                    <div class="container-fluid">
                        <PieChart></PieChart>
                    </div>
                </div>
            </center>
        </div>
        <div class="di">
            <center>
                <div class="container-fluid">
                    <BarChart></BarChart>
                </div>
            </center>
        </div>

        <div class="container">
            <div class="row row-cols-2">
                <div class="col">
                    <div class="container">


                        <div class="card" max-width="100%">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h1 class="card-title">Kilid sa sapa</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'KilidsaSapa' })">
                                    Learn More
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container">


                        <div class="card" max-width="100%">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h1 class="card-title">Kilid sa creek</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4"
                                    @click="$router.push({ name: 'KilidsaCreek' })">
                                    Learn More
                                </v-btn>
                            </div>
                        </div>



                    </div>
                </div>
                <div class="col">
                    <div class="container">


                        <div class="card" max-width="100%">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h1 class="card-title">Kilid sa emburnal</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4"
                                    @click="$router.push({ name: 'KilidsaEmburnal' })">
                                    Learn More
                                </v-btn>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="container">



                        <div class="card" max-width="100%">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h1 class="card-title">Walay balay</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'WalayBalay' })">
                                    Learn More
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- <v-card elevation="2" width="100%">
            <v-toolbar flat color="primary" dark>
                <v-toolbar-title>Danger Zone</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab>

                    (123) Kilid sapa
                </v-tab>
                <v-tab>

                    (456) Walay balay
                </v-tab>
                <v-tab>

                    (789)
                    Kilid imburnal
                </v-tab>
                <v-tab>

                    Option 3
                </v-tab>
                <v-tab>
                    Option 3
                </v-tab>
                <v-tab-item>
                    <v-card flat>
                        <DataTable />
                    </v-card>


                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <DataTable />
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <DataTable />
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <DataTable />
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card flat>
                        <DataTable />
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card> -->


    </div>
</template>
 
<script>

/* eslint-disable */

import AdminNavbar from "../views/Navigation/AdminNavbar.vue"
import PieChart from "@/components/ChartComponent.vue";
import BarChart from "@/components/BarChart.vue"
import DataTable from "@/components/DataTable.vue";

export default {

    components: {
        AdminNavbar,
        PieChart,
        BarChart,
        DataTable
    },

    data: () => ({


    }),

};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
    font-family: Roboto, sans-serif;
}

.card {
    width: 100%;
    height: 170px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    /* padding: 1.8rem; */
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
}

.card-details {
    color: black;
    height: 100%;
    gap: .5em;
    display: grid;
    place-content: center;
}

.card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: #fff;
    font-size: 1rem;
    padding: .5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
}

.text-body {
    color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
    font-size: 1.5em;
    font-weight: bold;
}

/*Hover*/
.card:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
}
</style>