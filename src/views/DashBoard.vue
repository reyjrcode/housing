<template>
    <div class="div">
        <AdminNavbar />
        <div class="container">
            <div class="row">
                <div class="col">
                    <total-awarded />
                </div>
                <div class="col">
                    <total-approved />
                </div>
                <div class="col">
                    <total-project />
                </div>
                <div class="col">
                    <toal-blocklisted />
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <PieChartRelocation />
                </div>
                <div class="col-sm">
                    <div class="container">
                        <div class="row row-cols-2">
                            <div class="col">
                                <kilidsa-creek />
                            </div>
                            <div class="col">
                                <npc-line />
                            </div>
                            <div class="col">
                                <landslide-area />
                            </div>
                            <div class="col">
                                <flood-area />
                            </div>
                            <div class="col">
                                <others />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- <div class="container">
            <div class="row row-cols-2">
                <div class="col">
                    <kilidsa-creek-buttom />
                </div>
                <div class="col">
                    <others-buttom />
                </div>
                <div class="col">
                    <npcline-buttom />
                </div>
                <div class="col">
                    <LandSlideButtom />
                </div>
                <div class="col">
                    <FloodproneButtom />
                </div>
            </div>
        </div> -->


    </div>
</template>

<script>

/* eslint-disable */

import AdminNavbar from "../views/Navigation/AdminNavbar.vue"
import DataTable from "@/components/DataTable.vue";

export default {
    components: {
        AdminNavbar,
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