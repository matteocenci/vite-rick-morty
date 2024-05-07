import { reactive } from "vue";

export const store = reactive({
    selectedStatus: "All",
    status: ["All", "Alive", "Dead", "unknown"],
    

});