<template>

    <div class="addmaterial">
        <AdminNavbar />
        <div class="div">
                <DataTable />
            </div>
    </div>
</template>

<script>

/* eslint-disable */

import AdminNavbar from '../Navigation/AdminNavbar.vue';
// import DataTable from "@/components/DataTable.vue"
import DataTable from "@/components/DangerZoneList.vue"

export default {

    components: {
        AdminNavbar,
        DataTable

    },

    data: () => ({


    }),

};
</script>