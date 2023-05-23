import React from 'react'
import FaunaCard from '../components/FaunaCard'

const FaunaDetailsPage = () => {


    return (
        <div
            style={
                {
                    width: "100%",
                    height: "100%",
                    padding: 64
                }
            }
        >
            <div style={{
                display: "flex"
            }}>
                <FaunaCard category={"mammal"}
                    name={"MAMMALS"}
                    image={"https://firebasestorage.googleapis.com/v0/b/marioblog-ad8e5.appspot.com/o/images%2FFauna%20-%20Mamals.webp?alt=media&token=d64f8b9e-e4dc-4996-a4be-868245b16239"}
                    desctiption={"Mammals are a diverse group of animals characterized by their ability to nurse their young with milk and possess hair or fur, exhibiting remarkable adaptations and behaviors across various habitats worldwide."} />
                <FaunaCard
                    category={"bird"}
                    name={"BIRDS"} i
                    image={"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTw3PtJefDwgKWR97GIVRnL5gOG8qeaCa8Ot2cWg_ESjc4S5V0whUfaw4oKMm0-A0IJ92pXTiteEE0oa6w"}
                    desctiption={"Birds are a diverse group of feathered animals known for their ability to fly, with adaptations such as wings and lightweight bodies, found in a variety of habitats worldwide."} />

            </div>
            <div style={{
                display: "flex"
            }}>
                <FaunaCard
                    category={"reptile"}
                    name={"REPTILES"}
                    image={"https://firebasestorage.googleapis.com/v0/b/marioblog-ad8e5.appspot.com/o/images%2FFauna%20-%20Reptiles.jpg?alt=media&token=6aa0e7b3-3bd8-49a1-9f38-23b8117ee5dd"}
                    desctiption={"Reptiles are a diverse group of cold-blooded animals characterized by their scaly skin, laying eggs, and typically inhabiting a wide range of terrestrial, aquatic, and arboreal environments."} />
                <FaunaCard
                    category={"fish"}
                    name={"FISH"}
                    image={"https://firebasestorage.googleapis.com/v0/b/marioblog-ad8e5.appspot.com/o/images%2FFauna%20-%20Fish.png?alt=media&token=b98b9a85-ddc3-4e7e-853b-6e624bca8b21"}
                    desctiption={"Fish are a diverse group of aquatic vertebrates characterized by their streamlined bodies, gills for breathing underwater, and fins for locomotion, found in a variety of freshwater and marine environments"} />

            </div>
            <div
                style={{
                    display: "flex"
                }}
            >
                <FaunaCard
                    category={"insect"}
                    name={"INSECTS"}
                    image={"https://cdn.britannica.com/45/102445-050-E3375B6D/Insect-diversity.jpg"}
                    desctiption={"Insects are a diverse group of small invertebrates characterized by their six legs, three body segments, and often possessing wings, found in nearly every terrestrial and freshwater habitat on Earth."} />
                <FaunaCard
                    category={"micro-fauna"}
                    name={"Micro Fauna"}
                    image={"https://firebasestorage.googleapis.com/v0/b/marioblog-ad8e5.appspot.com/o/images%2FFauna%20-%20Micro%20fauna.png?alt=media&token=e9d93ca3-061c-4c8b-bc24-d02d96dffa30"}
                    desctiption={"Micro fauna refers to the tiny organisms that are part of the animal kingdom, often invisible to the naked eye, and include various microscopic invertebrates, such as mites, nematodes, rotifers, and microcrustaceans."} />
            </div>
        </div>
    )
}

export default FaunaDetailsPage