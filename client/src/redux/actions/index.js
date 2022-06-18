import axios from "axios"

import {GET_RECIPES , GET_DIETS , GET_DETAIL , SEARCH_RECIPE , CLEAR_PAGE} from '../../redux/actions/actionTypes'

//async await
export function getFullRecipes(){
    return async function(dispatch){
        try{
            let response= await (axios.get("http://localhost:3001/recipes"));

            return dispatch ({type:GET_RECIPES, payload:{
                recipes:response.data,
                currentPage:0
            }})
        } catch (error){
            return dispatch({type: Error, payload:error.response.data})
        }
    }
}

export function getDiets(){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/diets")
            return dispatch({
                type: GET_DIETS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


//promesas
export function getRecipes(){
    return function(dispatch){
             axios.get("http://localhost:3001/recipes")
            .then(response => {
                return dispatch({
                    type: GET_RECIPES,
                    payload: response.data
                })
    })
}}

export function getDetail(id){
    return function(dispatch){
        try{
        axios.get('http://localhost:3001/recipes/' + id)
        .then(response => {
            return dispatch ({
                type: GET_DETAIL,
                payload: response.data
            })
        })
    } catch (error) {
    console.log(error)

        }
    }
}

export function searchRecipe(name){
    return async function(dispatch){
        try {
            axios.get('http://localhost:3001/recipes?name=' + name)
            .then(response => {
                return dispatch ({
                    type: SEARCH_RECIPE,
                    payload: response.data
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filteredByDiets(payload){ 
    return {
        type: "FILTERED_BY_DIETS",
        payload
    }
}

export function orderByTitle(payload){
    return {
        type: "ORDER_BY_TITLE",
        payload
    }
}

export function orderByScore(payload){
    return {
        type: "ORDER_BY_SCORE",
        payload
    }
}



export function clearPage(){
    return {
        type: CLEAR_PAGE
    }
}