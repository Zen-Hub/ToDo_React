console.log("WORK")

let numFilms = ''

let inpQuestionOne = document.querySelector('.inpQsOne')
let inpQuestionTwo = document.querySelector('.inpQsTwo')


let btnOne = document.querySelector('.btn_1')


let personalMov = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


btnOne.addEventListener("click",()=>{
    let inpValOne = inpQuestionOne.value
    let inpValTwo = inpQuestionTwo.value
    personalMov.movies[`${inpValOne}`] = `${inpValTwo}` 

    console.log(personalMov)

})
