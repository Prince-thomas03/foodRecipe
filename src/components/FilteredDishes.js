import React, { useState } from 'react'

function FilteredDishes(props) {


    let [allMenus, setMenu] = useState(props.allMenus)
    let [filterd, setfilter] = useState([])


    function showSelectedmenu(category) {

        let filterDishes = allMenus.filter((item) => {
            return item.strCategory === category

        }).map((item) => {
            return (
                <li><img src={item.strMealThumb} className='br-10' alt='' /></li>
            )
        })

        setfilter(filterDishes)
    }






    let allCategories = props.menucategory.map((item) => {
        return (
            <li onClick={() => {
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
                        {filterd}

                    </ul>
                </div>

            </div>



        </div>
    )
}

export default FilteredDishes