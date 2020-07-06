import React from 'react'
import Link from 'next/link'
import Head from '../components/PageTitle'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
            <h1>Sobre</h1>
            <div>
                <Link href='/index'>
                    <a className='hover:underline'>Voltar</a>
                </Link>
            </div>
        </div>
    )
}

export default Sobre