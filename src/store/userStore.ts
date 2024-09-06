import { create } from "zustand";
import { User } from "../types";
import { persist } from "zustand/middleware";

interface UserState {
    user: User,
    isLoged: boolean,
    setUser: (user: User)=> void,
    setIsLoged: (isLoged: boolean)=> void

}

export const useUserStore = create(persist<UserState>((set)=> ({
    user:{
        name: "",
        lastName: "",
        birthDay: ""
    },
    isLoged: false,
    setUser: (user: User) => set({ user:user }),  
    setIsLoged: (isLoged: boolean)=> set({isLoged})
}),{name: "user"})) 