import React from 'react'
import {Link} from 'react-router-dom'
import './Index.scss'

function Index() {
  return (
    <header>
        <nav>
            <div className='left'>
                Notary
            </div>
            <div className='right'>
                <ul>
                    <li>
                        <Link className='link' to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/'}>Practise Areas</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/'}>Testimonials</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/'}> About</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/'}>Contact</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/addPage'}>Add Page</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Index