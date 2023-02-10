
<template>
    <apexchart width="100%" :height="600" :options="options" :series="data">
    </apexchart>


</template>
<script>
/* eslint-disable */
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
            data: [38, 45, 50,],
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
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                    color: "black",
                                },
                            },
                        },
                    },
                },
                colors: [
                    "#40E0D0",

                    "#FFD700",
                    "#FF4500",

                ],
                // colors: [
                //     "#F3C1C6",
                //     "#F0F69F",
                //     "#B0E0A8",
                //     "#E2C275",
                //     "#FAAB78",
                // ],
                noData: {
                    text: this.loading ? "Loading..." : "No Data",
                },
                labels: [
                    "Bayanihan",

                    "Self help",
                    "Natural calamities",

                ],

            };
        },
    },
};
</script>
