import { writable } from "svelte/store";

const navbarComponents = ["Portfolio","Experience", "About", "Contact"];

export const navbar = writable({
    navbarComponents
})