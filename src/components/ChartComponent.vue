
<template>


    <apexchart :width="600" :height="600" :options="options" :series="data">
    </apexchart>


</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
    name: "ChartShit",

    props: {
        title: {
            type: String,
        },
        width: {
            type: Number,
        },
        height: {
            type: Number,
        },
        loading: {
            type: Boolean,
        },
    },
    components: {
        apexchart: VueApexCharts,
    },
    data: function () {
        return {
            data: [30, 40, 45, 50,],
        };
    },
    computed: {
        options() {
            return {
                chart: {
                    type: "pie",
                },
                title: {
                    text: this.title,
                    align: "left",
                    style: {
                        fontSize: "30px",
                        fontWeight: "bold",
                    },
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    label: "Total",
                                    fontSize: "40px",
                                    fontWeight: "bold",
                                    color: "black",
                                },
                            },
                        },
                    },
                },
                colors: [
                    "#40E0D0",
                    "#008000",
                    "#FFD700",
                    "#FF4500",

                ],
                noData: {
                    text: this.loading ? "Loading..." : "No Data",
                },
                labels: [
                    "Kilid sa sapa",
                    "Kilid sa creek",
                    "kilid sa emburnal",
                    "Walay balay",

                ],

            };
        },
    },
};
</script>
