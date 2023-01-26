<template>

    <div class="example">
        <v-card elevation="4">
            <apexcharts width="80%" height="350" :options="chartOptions" :series="series"></apexcharts>
        </v-card>
    </div>
</template>

<script>
/* eslint-disable */
import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'Chart',
    components: {
        apexcharts: VueApexCharts,
    },
    data: function () {
        return {
            chartOptions: {
                chart: {
                    id: 'basic-bar',
                    type: 'bar'
                },
                xaxis: {
                    categories: ["Kilid sa sapa", "Kilid sa creek", "Kilid sa emburnal", "Walay balay", 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 99]
            }]
        }
    },
}
</script>