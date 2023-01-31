<template>
        <div class="div">
        <v-card>
            <div class="card-body">
                <h3 class="card-title">Replacement:</h3>
                <div class="card-body">
                    <v-checkbox v-model="ex4" label="Self help" color="secondary" value="Self help" hide-details>
                    </v-checkbox>
                    <v-checkbox v-model="ex4" label="Bayanihan" color="secondary" value="Bayanihan" hide-details>
                    </v-checkbox>

                    <br /><br />



                    <div class="row">
                        <div class="col-2">
                            <h3>Natural calamity</h3>
                        </div>
                        <div class="col-4"> <select class="form-select form-select-lg mb-3"
                                aria-label=".form-select-lg example">
                                <!-- <option selected>Natural Calamity</option> -->
                                <option value="Baha">Baha</option>
                                <option value="Sunog">Sunog</option>
                                <option value="Linog">Linog</option>
                            </select></div>
                    </div>
                    <br />
                </div>

            </div>
        </v-card>
        <br />
        <v-radio-group v-model="row" row>
            <!-- <v-radio label="Option 1" value="radio-1" ></v-radio> -->
            <v-radio label="Shelter assistance program" v-on:click="form1 = !form1" value="radio-1"></v-radio>
            <v-radio label="Relocation lot applicants" v-on:click="form2 = !form2" value="radio-2"></v-radio>
        </v-radio-group>

        <div class="container">
            <div class="row">
                <div class="col">



                    <div class="card" v-show="!form1">
                        <div class="card-body">
                            <div>
                                <v-form v-model="form">
                                    <div class="form-group">

                                        <select class="form-select form-select-lg mb-3"
                                            aria-label=".form-select-lg example">
                                            <option selected>Sitwasyon sa pagpuyo</option>
                                            <option value="1">Kaugalingong balay</option>
                                            <option value="2">With notice to vacate</option>
                                            <option value="3">With court order for demolition &
                                                eviction</option>
                                            <option value="4">Affected by government
                                                infrasturcture project</option>
                                            <option value="5">Affected by private construction
                                                projects</option>
                                            <option value="6">Accretion area</option>
                                        </select>
                                        <div>
                                            <v-radio-group v-model="column" column>
                                                <v-radio label="Rights" value="radio-1"></v-radio>
                                                <v-radio label="Rent" value="radio-2"></v-radio>
                                            </v-radio-group>
                                        </div>
                                        <div>
                                            <div class="card">
                                                <div class="card-header">Area for repair</div>
                                                <div class="card-body">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck1">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Roofing
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck2">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Walling
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck3">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Septic tank
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck4">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Drainage
                                                        </label>
                                                    </div>
                                                </div>
                                                <!-- <div class="card-footer">Footer</div> -->
                                            </div>
                                        </div>
                                        <br />





                                        <div>
                                            <div class="card">
                                                <div class="card-header">Material needed</div>
                                                <div class="card-body">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck1">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Good mixed
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck2">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Cement
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck3">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Corrugated sheet
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck4">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Concrete hollowblock
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck4">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Coco lumber
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck4">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Amakan
                                                        </label>
                                                    </div>
                                                </div>
                                                <!-- <div class="card-footer">Footer</div> -->
                                            </div>
                                        </div>
                                        <br />




                                        <div>
                                            <div class="card">
                                                <div class="card-header">Material needed</div>
                                                <div class="card-body">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck1">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Nails
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck2">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Umbrella nails
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck3">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            10 MM DRB
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck4">
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            8 MM DRB
                                                        </label>
                                                    </div>
                                                    <br />
                                                    <v-text-field label="Uban pa" placeholder="Uban pa"
                                                        outlined></v-text-field>
                                                </div>
                                                <!-- <div class="card-footer">Footer</div> -->
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                </v-form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">

                    <div class="card" v-show="!form2">
                        <div class="card-body">
                            <div>
                                <v-form v-model="form">
                                    <div class="form-group">
                                        <div class="card">
                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-select
                                                        :items="['Kwarto', 'Balay', 'Kaugalingon nga balay pero ga arkila sa yuta']"
                                                        label="Nag Arkila ug" required outlined></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select
                                                        :items="['500 to 1,000', '1,100 to 1,500', '1,600 to 2,00', '2,100, to 2,500', '2,600, to 3,000', '3,000 pa taas and arkila']"
                                                        label="Pila ang pag Arkila" outlined required></v-select>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-select
                                                        :items="['Kaugalingon ang balay pero wala ga arkila sa yuta, nasayod ang tag-iya sa yuta', 'Kaugalingon nga balay pero wala ga arkila sa yuta, walay pag tugot sa tag-iya', 'Libre nga pagpuyo sa balay nga adunay pagtugot sa tag-iya', 'Libre nga pagpuyo sa balay ug yuta nga walay pagtugot sa tag-iya', 'Nakipuyo Lang']"
                                                        label="Istado sa Pagpuyo" outlined required></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="10">
                                                    <v-text-field label="Pangalan sa gipuy-an " outlined
                                                        clearable></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <!-- <div class="card-footer">Footer</div> -->
                                            <v-col sm="5" md="12">
                                                <v-card class="pa-2" outlined tile>
                                                    <h2>Atop</h2>
                                                    <v-checkbox v-model="ex4" label="Kawayan/Sawali/Cogon/Nipa"
                                                        color="secondary" value="Kawayan/Sawali/Cogon/Nipa" hide-details
                                                        autofocus></v-checkbox>
                                                    <v-checkbox v-model="ex4" label="Asbestos/Sin" color="secondary"
                                                        value="Asbestos/Sin" hide-details></v-checkbox>
                                                    <v-checkbox v-model="ex4" label="Improvised Materials"
                                                        color="secondary" value="Improvised Materials"
                                                        hide-details></v-checkbox>
                                                    <v-checkbox v-model="ex4" label="Trapal" color="secondary"
                                                        value="Trapal" hide-details>
                                                    </v-checkbox>
                                                </v-card>
                                            </v-col>
                                            <v-col sm="5" md="12">
                                                <v-card class="pa-2" outlined tile>
                                                    <h2>Bong bong</h2>
                                                    <v-checkbox v-model="ex4" label="Amakan" color="secondary"
                                                        value="Amakan" hide-details>
                                                    </v-checkbox>
                                                    <v-checkbox v-model="ex4" label="Semento" color="secondary"
                                                        value="Semento" hide-details>
                                                    </v-checkbox>
                                                    <v-checkbox v-model="ex4" label="Trapal" color="secondary"
                                                        value="Trapal" hide-details>
                                                    </v-checkbox>
                                                </v-card>
                                            </v-col>
                                            <v-col sm="5" md="12">
                                                <v-card class="pa-2" outlined tile>
                                                    <h3>Assisted by:</h3>
                                                    <v-col cols="12" sm="6" md="12">
                                                        <v-text-field label="Assisted by:" outlined
                                                            clearable></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="12">
                                                        <v-text-field label="Tagged & Validated by:" outlined
                                                            clearable></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12" sm="6" md="12">
                                                        <v-text-field label="HOA Officer" outlined
                                                            clearable></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="12">
                                                        <v-text-field label="Purok Official:" outlined
                                                            clearable></v-text-field>
                                                    </v-col>
                                                    Type of applicant:
                                                    <v-radio-group v-model="row" row>
                                                        <v-radio label="Walk-in" value="radio-1"></v-radio>
                                                        <v-radio label="On field" value="radio-2"></v-radio>
                                                        <v-radio label="Goverment employee" value="radio-3"></v-radio>
                                                    </v-radio-group>
                                                    Status of Application:
                                                    <v-radio-group v-model="row" row>
                                                        <v-radio label="For tagging" value="radio-4"></v-radio>
                                                        <v-radio label="Tagged and validated" value="radio-5"></v-radio>
                                                    </v-radio-group>
                                                </v-card>
                                            </v-col>
                                        </div>
                                    </div>
                                </v-form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col">
                    Column
                </div> -->
            </div>
        </div>
    </div>




</template>
<script>
// import PieChart from "@/components/ChartComponent.vue";



export default {
    data: () => ({
        form1: true,
        form2: true,
    })
}
</script>