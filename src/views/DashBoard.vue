<template>


    <div class="div">
        <AdminNavbar />

        <div class="container" >
            <div class="row" >
                <div class="col" >

                    <div class="card text-black bg-success rounded-4" max-width="100%" >
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body" >
                            <h3 class="card-title"> <v-icon dark right color="black">
                                    mdi-trophy
                                </v-icon> Total awarded</h3>
                            <p class="card-text">12,345 total awarded</p>
                            <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'TotalProject' })">
                                More info
                            </v-btn>
                        </div>
                    </div>

                </div>
                <div class="col">

                    <div class="card text-black bg-success rounded-4" max-width="100%">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <h4 class="card-title"> <v-icon dark right color="black">
                                    mdi-thumb-up
                                </v-icon> Total approved</h4>
                            <p class="card-text">67,891 total approved</p>
                            <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'TotalProject' })">
                                More info
                            </v-btn>
                        </div>
                    </div>

                </div>
                <div class="col">

                    <div class="card text-black bg-success rounded-4" max-width="100%">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <h3 class="card-title"> <v-icon dark right color="black">
                                    mdi-home-variant
                                </v-icon> Total project</h3>
                            <p class="card-text">11,123 total project</p>
                            <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'TotalProject' })">
                                More info
                            </v-btn>
                        </div>
                    </div>
                </div>
                <div class="col">


                    <div class="card text-black bg-success rounded-4" max-width="100%">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <h4 class="card-title"> <v-icon dark right color="black">
                                    mdi-block-helper
                                </v-icon> Total blocklisted</h4>
                            <p class="card-text">100 total blocklisted</p>
                            <v-btn text color="deep-purple accent-4"
                                @click="$router.push({ name: 'TotalBlocklisted' })">
                                More info
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <PieChart></PieChart>
                </div>
                <div class="col-sm">

                    <div class="container">
                        <div class="row row-cols-2">
                            <div class="col">
                                <div class="panel panel-danger">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Kilid sa creek</h3>
                                    </div>
                                    <div class="panel-body">
                                        Adunay 30 kabook
                                    </div>
                                </div>

                            </div>

                            <div class="col">
                                <div class="panel panel-danger">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">NPC line</h3>
                                    </div>
                                    <div class="panel-body">
                                        Adunay 45 kabook
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="panel panel-danger">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Landslide prone area</h3>
                                    </div>
                                    <div class="panel-body">
                                        Adunay 50 kabook
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="panel panel-danger">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Flood prone area</h3>
                                    </div>
                                    <div class="panel-body">
                                        Adunay 80 kabook
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="panel panel-danger">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Others</h3>
                                    </div>
                                    <div class="panel-body">
                                        Adunay 36 kabook
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>




        <div class="container">
            <div class="row row-cols-2">

                <div class="col">
                    <div class="container">


                        <div class="card" max-width="100%">
                            <div class="card-body">
                                <h1 class="card-title">Kilid sa creek</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4"
                                    @click="$router.push({ name: 'KilidsaCreek' })">
                                    More info
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container">
                        <div class="card" max-width="100%">
                            <div class="card-body">
                                <h1 class="card-title">Others</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4"
                                    @click="$router.push({ name: 'OtherDanger' })">
                                    More info
                                </v-btn>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="container">



                        <div class="card" max-width="100%">
                            <div class="card-body">
                                <h1 class="card-title">NPC line</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'NPCline' })">
                                    More info
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container">



                        <div class="card" max-width="100%">
                            <div class="card-body">
                                <h1 class="card-title">Landslide prone area</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'LandSlide' })">
                                    More info
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container">
                        <div class="card" max-width="100%">
                            <div class="card-body">
                                <h1 class="card-title">Flood prone area</h1>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <v-btn text color="deep-purple accent-4" @click="$router.push({ name: 'FloodProne' })">
                                    More info
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
<!-- <style >
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


</style> -->