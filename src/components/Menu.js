
import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'
import FilteredDishes from './FilteredDishes'
import Loader from './Loader'

function Menu() {

    let [menu, setMenu] = useState([])
    let [menucategory, setCategory] = useState([])
    let [loading, changeLoading] = useState(false)
    let [singleProduct, setSingleProduct] = useState([])


    async function getallmenu() {
        changeLoading(true)
        const api = "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
        let response = await fetch(api)
        let data = await response.json()

        setMenu(data.meals)
        changeLoading(false)

    }


    async function getAllCategories() {
        const api = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(api)
        let categoryData = await response.json()
        setCategory(categoryData.categories)


    }

    async function getSingleProduct() {
        const api = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response = await fetch(api)
        let singleProductData = await response.json()
        setSingleProduct(singleProductData.meals)

    }

    console.log("this is a state",singleProduct);


    useEffect(() => {
        getallmenu()
        getAllCategories()
        getSingleProduct()
    }, [])

    return (
        <div>
            <Hero />
            {!loading ? (<SpecialDishes special={menu} />) : (
                <Loader />
            )}
            {!loading ? (
                <FilteredDishes menucategory={menucategory} 
                allMenus={menu} 
                singleProduct={singleProduct}
               singleDish= {setSingleProduct}
                />
            ) : null}

        </div>

    )

}
export default Menu

