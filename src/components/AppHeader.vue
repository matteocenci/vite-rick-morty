<script>
    import {store} from "../store.js";

    export default {
        emits: ['selection'],
        data() {
            return {
                store,
            }
        }

    }
</script>

<template>
    <h1 class="text-center mt-2 fw-bold"> Rick and Morty App</h1>
    <div class="container py-4">
        <div class="d-flex justify-content-between">
            <div>
                <select @change="$emit('selection')" v-model = "store.selectedStatus">
                    <option :value="status" v-for ="status in store.status">
                    {{ status }}
                
                </option>
    
                
                </select>

            </div>

            <p>Numero di carte: {{ store.count.length }}</p>
        </div>
    </div>
</template>

<style scoped lang = "scss">


</style>