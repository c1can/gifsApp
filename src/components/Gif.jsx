import { useState } from "react"
import { Link } from "wouter"

export const Gif = (({ title, image, id }) => {

    const [ number, setNumber ] = useState(0)

    const handleClick = () => {
        setNumber(number + 1)
    }

    return (
        <Link to={`/details/${id}`}>
            <div className="card border border-red-500">
                <p>{title}</p>
                <img src={image} alt={title} />
                <button onClick={handleClick}>{number}</button>
              </div>
        </Link>
    )
})

