function SpecialDishes(props) {

    // console.log("this  isn props", props);

    let SpecialDishes=8

    let special = props.special.map((item,index) => {

        if(index < SpecialDishes){
            return (
                <li>
                    <img src={item.strMealThumb} className='br-10' alt='' />
                    <h5>{item.strMeal}</h5>
                </li>
            )
    
        }

     

    })


    return (

        <section className="special-dishes">
            <div className="container">
                <div className="special-dishes-content text-center">
                    <h1>Our special Dishes</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                </div>
                <div className="special-dishes-list">
                    <ul className="flex flex-wrap gap-30">

                        {special}
                    </ul>



                </div>
            </div>



        </section>

    )
}

export default SpecialDishes