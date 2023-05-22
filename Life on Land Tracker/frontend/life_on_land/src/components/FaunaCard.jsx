import React from 'react'
import { useNavigate } from 'react-router-dom'

const FaunaCard = ({ name, desctiption, image, category }) => {

    const navigate = useNavigate()

    return (
        <div

            onClick={() => {
                navigate(`${category}`)
            }}


            style={{
                cursor: "pointer",
                flex: 1,
                width: "500px",
                height: "250px",
                borderRadius: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: 8
            }}
        >
            <h3
                style={{
                    flex: 1,
                    margin: "8px 0",
                    fontSize: "24px"
                }}
            >{name}</h3>
            <div
                style={{ flex: 5, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <img src={image} alt="fauna"
                    style={{
                        flex : 1,
                        height: "175px",
                        objectFit: "fill"
                    }}
                />

                <div
                    style={{
                        flex: 1,
                        height: "100%",
                        textOverflow: "clip"
                    }}
                >
                    <h3

                    >{desctiption}</h3>
                </div>
            </div>

        </div>
    )
}

export default FaunaCard