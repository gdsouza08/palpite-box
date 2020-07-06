import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Guilherme Amorim / {' '}
                <a className='hover:underline' href='https://www.linkedin.com/in/guilherme-amorim-dos-santos-souza-8267a0127/' target="_blank" >Linkedin</a> / {' '}
                <a className='hover:underline' href='https://www.facebook.com/guilherme.amorim.9421' target="_blank"> Facebook</a>
                <div className='mt-2'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>

        </div>
    )
}

export default Footer