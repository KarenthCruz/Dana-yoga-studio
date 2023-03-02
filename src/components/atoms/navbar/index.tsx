import React from 'react'


function NavBar() {

    return(
        <section className='NavBarContainer'>
            <li><a className="navLink" href="/">Inicio</a></li>
            <li><a className="navLink" href="/">Clases</a></li>
            <li><a className="navLink" href="/">Niveles</a></li>
            <li><a className="navLink" href="/">Contacto</a></li>
        </section>
    )
}

export {NavBar}