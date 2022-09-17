import React from 'react'

function Pageination(props) {

    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", props.FilteredDishes);


    let numbersOfPages = []

    for (let i = 1; i <= props.FilteredDishes.length; i++) {
        numbersOfPages.push(i)
    }

    let pages = numbersOfPages.map((item) => {
        return (
            <li>{item}</li>
        )
    })

    return (
        <section>
            <ul className='pagination flex'>{pages}</ul>
        </section>
    )
}

export default Pageination