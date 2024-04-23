
function About({image, about}) {
    console.log(image)
    console.log(about)
    return (
        <div>
            <aside> 
                <img src={image ? image : "https://via.placeholder.com/215"} alt={"blog logo"} ></img>
                <p>{about}</p>
            </aside>
        </div>
    )
}

export default About;