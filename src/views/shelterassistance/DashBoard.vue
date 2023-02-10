<template>
    <div class="div">
        <AdminNavbar />

        <div class="container">
            <div class="row">

                <div class="col">
                    <ByanihanPage />
                </div>
                <div class="col">
                    <SelfHelp />
                </div>
                <div class="col">
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
                            <div class="col">
                                <BayanihanRightCard />
                            </div>
                            <div class="col">
                                <SelfHelpRightCard />
                            </div>
                            <div class="col">
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
import AdminNavbar from '../Navigation/AdminNavbar.vue';
export default {
    components: {
        AdminNavbar,
    },
}
</script>
