import work1 from "../../assets/work1.png"
import work2 from "../../assets/work2.png"
import work3 from "../../assets/work3.png"
import work4 from "../../assets/work4.png"

export const projectsData = [
    {
        id: 1,
        image: work1,
        title: "Another Todo App",
        subtitle: "To-do list creator with voice recognition using Vite + Vue.js",
        category: "Personal",
        link: "https://avin27.github.io/another-todo-app/"
    },

    {
        id: 2,
        image: work2,
        title: "RecipeDB",
        subtitle: "Random recipe generator using React and TailwindCSS",
        category: "Personal",
        link: "https://avin27.github.io/recipeDB/"
    },
    
    {
        id: 3,
        image: work3,
        title: "Mobile Application - MedTab",
        subtitle: "Android application for medication tracking using Java",
        category: "Academic",
        link: "https://www.google.com/"
    },

    {
        id: 4,
        image: work4,
        title: "Stock price prediction using LSTM",
        subtitle: "RNN based prediction algorithm",
        category: "Academic",
        link: "https://stockprediction-ece9e.firebaseapp.com/"
    }
]

export const projectsNav = [
    {
        name: "All"
    },

    {
        name: "Academic"
    },

    {
        name: "Personal"
    }
]