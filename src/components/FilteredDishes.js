import React, { useState } from 'react'
import Pageination from './Pageination'

function FilteredDishes(props) {


    let [allMenus, setMenu] = useState(props.allMenus)
    let [filterd, setfilter] = useState([])
    let [activeDishes, setActiveDishes] = useState('Beef')
    let [currentPage, setCurrentPage] = useState(1)
    let [itemPerPage, setitemPerPage] = useState(4)

    let singleProduct = props.singleProduct.map((item) => {
        return (
            <li><img src={item.strMealThumb} className='br-10' alt='' />
                <h5>{item.strMeal}</h5>
            </li>

        )
    })

    console.log("this is object", typeof (singleProduct));

    //show dishes on click,  $$ here things are passed from parent menu and object names are given here instead of its orginal like a state is passed for resetting  
    //the active dishes to null just below here but its name is give like the object name passed from there
    function showSelectedmenu(category) {
        props.singleDish([])
        setActiveDishes(category)
        let filterDishes = allMenus.filter((item) => {
            return item.strCategory === category

        }).map((item) => {
            return (
                <li><img src={item.strMealThumb} className='br-10' alt='' />
                    <h5>{item.strMeal}</h5>
                </li>

            )
        })

        setfilter(filterDishes)
    }






    let allCategories = props.menucategory.map((item) => {
        return (
            <li className={item.strCategory == activeDishes ? "active" : " "} onClick={() => {
                showSelectedmenu(item.strCategory)
            }}> {item.strCategory}
            </li>

        )
    })



    return (
        <div className='filtred-dishes'>
            <div className='container'>
                <div className='text-center'>
                    <h2>choose your dishes</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ad eum delectus est accusamus. Voluptatem quasi earum alias repudiandae ducimus est illo expedita repellat corporis? Nesciunt error explicabo officiis mollitia.</p>

                </div>
                <div className="filterd-dishes">
                    <ul>
                        {allCategories}
                    </ul>
                </div>
                <div className="filtered-dishes-results">
                    <ul className='flex flex-wrap gap-30'>
                        {singleProduct}
                        {filterd != 0 ? filterd : <div className='alert'><h3>Sorry,No items found.</h3><h4>Please choose another menu</h4></div>}



                    </ul>
                </div>

                <Pageination   FilteredDishes={filterd}     />

            </div>



        </div>
    )
}

export default FilteredDishes