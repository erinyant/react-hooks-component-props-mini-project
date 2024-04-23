
function Header({name, blogData}) { 
    // console.log(name) - how prop is passed
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;