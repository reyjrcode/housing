<template>
    <div class="div">
        <NavigationBar />
        <v-snackbar v-model="snackbar" :timeout="timeout">
            <h3> {{ text }}</h3>

            <template v-slot:action="{ attrs }">
                <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
                    OK!
                </v-btn>
            </template>
        </v-snackbar>





        <v-dialog v-model="dialog1" :scrim="false" persistent width="300">
            <v-card color="primary">
                <v-card-text>
                    <h3> Please stand by</h3>
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog v-model="dialog2" persistent width="auto">
            <v-card>
                <v-card-title class="text-h5">
                    Input all fields!!
                </v-card-title>
                <v-card-text></v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green-darken-1" variant="text" @click="dialog2 = false">
                        Disagree
                    </v-btn>
                    <v-btn color="green-darken-1" variant="text" @click="dialog2 = false">
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-card class="mx-auto" max-width="500" variant="outlined">
            <v-card-item>
                <div>
                    <div class="text-overline mb-1">
                        .
                    </div>
                    <div class="text-h6 mb-1">
                        Housing
                    </div>
                    <div class="text-caption"> <v-text-field v-model="block_name" type="date" label="Block Name" clearable
                            required outlined autofocus></v-text-field>
                        <v-select :items="['1', '2', '3', '4', '5', '6', '7', '8']" v-model="lot_number" label="Lot number"
                            required outlined></v-select>
                        <v-select :items="['1', '2', '3', '4', '5', '6', '7', '8']" v-model="block_number"
                            label="Block number" required outlined></v-select>
                    </div>
                </div>
            </v-card-item>

            <v-card-actions>
                <v-btn type="submit" @click="savelot" variant="outlined" color="success">
                    <v-icon> mdi-content-save</v-icon> Save
                </v-btn>
                <v-btn type="reset" variant="outlined" color="red" @click="$router.push({ name: 'Dashboard' })">
                    <v-icon>mdi-keyboard-backspace</v-icon>
                    Back
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>


<script scoped>
/* eslint-disable */
import { mapActions } from 'vuex';
export default {
    data: () => ({
        block_name: '',
        dialog1: false,
        dialog2: false,
        lot_number: '',
        block_number: '',
        snackbar: false,
        text: `Data save!`,
        timeout: 1000,
    }),

    methods: {
        ...mapActions('lot', ['Lotregistration']),
        savelot() {
            let data = new FormData;
            data.append('block_name', this.block_name);
            data.append('lot_number', this.lot_number);
            data.append('block_number', this.block_number);
            if (this.block_name.length == 0 || this.lot_number.length == 0 || this.block_number.length == 0) {
                this.dialog2 = true;
            } else {
                this.Lotregistration(data);
                console.log(this.block_name);
                console.log(this.lot_number);
                console.log(this.block_number);
                setTimeout(() => {
                    console.log("lot form");
                    // this.$router.push('/housing-project-form');
                    window.location = window.location

                    this.dialog1 = true;
                    //  this.snackbar = true;
                    // this.block_name = "";
                    // this.lot_number = "";
                    // this.block_number = "";

                }, 2000)
            }
        },
    },
}

</script>