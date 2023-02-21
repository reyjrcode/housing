<template>
    <div class="div">
        <HomeNavigation />
        <div class="container">
            <div class="row">
                <div class="col" data-aos="flip-left">
                    <total-awarded />
                </div>
                <div class="col" data-aos="flip-left">
                    <total-approved />
                </div>
                <div class="col" data-aos="flip-left">
                    <total-project />
                </div>
                <div class="col" data-aos="flip-left">
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
                            <div class="col"  data-aos="fade-up">
                                <kilidsa-creek />
                            </div>
                            <div class="col" data-aos="fade-down">
                                <npc-line />
                            </div>
                            <div class="col" data-aos="fade-right">
                                <landslide-area />
                            </div>
                            <div class="col" data-aos="fade-left">
                                <flood-area />
                            </div>
                            <div class="col" data-aos="fade-up-right">
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
