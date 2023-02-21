<template>
    <div class="div">
        <HomeNavigation />

        <div class="container">
            <div class="row">

                <div class="col" data-aos="flip-left">
                    <ByanihanPage />
                </div>
                <div class="col" data-aos="flip-left">
                    <SelfHelp />
                </div>
                <div class="col" data-aos="flip-left">
                    <NaturalCalamitiesPage />
                </div>
            </div>
        </div>


        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <PieChartShelter />
                </div>
                <div class="col-sm">
                    <div class="container">
                        <div class="row row-cols-2">
                            <div class="col" data-aos="zoom-in">
                                <BayanihanRightCard />
                            </div>
                            <div class="col" data-aos="zoom-in-up">
                                <SelfHelpRightCard />
                            </div>
                            <div class="col" data-aos="zoom-in">
                                <NaturalCalamityRightSideCard />
                            </div>
                            <div class="col">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
// import AdminNavbar from '../Navigation/AdminNavbar.vue';
export default {
    components: {
        // AdminNavbar,
    },
}
</script>
