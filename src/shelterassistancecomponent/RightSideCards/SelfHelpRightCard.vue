<template>
    <div class="card bg-danger text-black" style=" height: 7rem;">
        <center>
            <div>
                <div class="panel-heading"> <br />
                    <h3 class="panel-title">Self help</h3>
                    <div class="panel-body text-light">
                        Adunay 45 kabook
                    </div>
                </div>
                <a @click="$router.push({ name: 'SelfHelpPage' })" class="stretched-link"></a>
            </div>
        </center>
    </div>
</template>