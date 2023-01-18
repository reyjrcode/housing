<template>
    <div class="div">

        <AdminNavbar />

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Card title</p>
                        <p class="text-body">Here are the details of the card</p>
                    </div>
                    <button class="card-button">More info</button>
                </div>
            </div>
            <div class="col">

                
                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Card title</p>
                        <p class="text-body">Here are the details of the card</p>
                    </div>
                    <button class="card-button">More info</button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Card title</p>
                        <p class="text-body">Here are the details of the card</p>
                    </div>
                    <button class="card-button">More info</button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-details">
                        <p class="text-title">Card title</p>
                        <p class="text-body">Here are the details of the card</p>
                    </div>
                    <button class="card-button">More info</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <PieChart></PieChart>
            </div>
            <div class="col">
                <BarChart></BarChart>
            </div>
        </div>
        <v-card>
            <v-toolbar flat color="primary" dark>
                <v-toolbar-title>Danger Zone</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab>
                    <!-- <v-icon left>
                        mdi-account
                    </v-icon> -->
                    (123) Kilid sapa
                </v-tab>
                <v-tab>
                    <!-- <v-icon left>
                        mdi-account
                    </v-icon> -->
                    (456) Walay balay
                </v-tab>
                <v-tab>
                    <!-- <v-icon left>
                        mdi-lock
                    </v-icon> -->
                    (789)
                    Kilid imburnal
                </v-tab>
                <v-tab>
                    <!-- <v-icon left>
                        mdi-access-point
                    </v-icon> -->
                    Option 3
                </v-tab>
                <v-tab>
                    <!-- <v-icon left>
                        mdi-access-point
                    </v-icon> -->
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
        </v-card>
        <v-card flat>
        </v-card>
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
    width: 255px;
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