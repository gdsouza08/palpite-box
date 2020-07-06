import React from 'react'
import Link from 'next/link'
import Head from '../components/PageTitle'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <h1>Contato</h1>
            <div>
                <Link href='/index'>
                    <a className='hover:underline'>Voltar</a>
                </Link>
            </div>
        </div>
    )
}

export default Contato