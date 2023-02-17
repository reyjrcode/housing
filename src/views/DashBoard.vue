<template>
    <div class="div">
        <NavigationBar />
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
                    <!-- <div class="card"> -->
                    <PieChartRelocation />
                    <!-- </div> -->
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
</div>
</template>

<script>

/* eslint-disable */

import DataTable from "@/components/DataTable.vue";

export default {
    components: {
        // AdminNavbar,
        DataTable
    },
    data: () => ({

    }),
};
</script>
