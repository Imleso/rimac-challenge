import { create } from "zustand";
import { List } from "../types/plans.type";
import { persist } from "zustand/middleware";

interface PlanState {
    plan: List,
    setPlan: (plan: List) => void
}



export const usePlansStore = create(persist<PlanState>((set)=> ({
    plan:{
        name: "",
        price: 0,
        description: [""],
        age: 0
    },
    setPlan: (plan: List) => set({ plan:plan }),
}),{
    name: "plans"
})) 