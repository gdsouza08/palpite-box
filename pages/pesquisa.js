import React, { useState} from 'react'
import PageTitle from '../components/pageTitle'

const Pesquisa = () => {
    const [ form,setForm ] = useState({
        Nome:'',
        Email:'',
        WhatsApp:'', 
        Nota: 0
    })
    const Notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSucess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const save = async () => {
       try {
        const response = await fetch('api/save', {
            method:'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()
        setSucess(true)
        setRetorno(data)
    } catch (err){
    }}
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa' />
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='mt-12 text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br/>
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            { !sucess &&<div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu Nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>
                <label className='font-bold'>E-mail:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email'value={form.Email}/>
                <label className='font-bold'>WhatsApp:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='WhatsApp' onChange={onChange} name='WhatsApp'value={form.WhatsApp}/>
                <label className='font-bold'>Nota:</label>
                <div className='flex'>
                {Notas.map(Nota => {
                    return (
                    <label className='block w-1/6 text-center py-6'>
                        {Nota} <br/> 
                        <input type='radio' name='Nota' value={Nota} onChange={onChange}/>
                    </label>)
                })
                }
                </div>
                <button className='bg-blue-400 px-12 py-4 rounded-lg font-bold shadow-lg hover:shadow' onClick={save}>Salvar</button>
            </div>}
            {sucess && <div className='w-1/5 mx-auto'>
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>//Obrigado por contribuir com sua opnião.</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        Seu Cupom: <br/>
                        <span className='font-bold text2xl'>{retorno.Cupom}</span>
                        </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        Seu Cupom: <br/>
                        <span className='font-bold block mb-2'>{retorno.Promocao}</span>
                        <br/>
                        <span className='italic'>Tire um print ou foto e mostre quando chegar ao restaurante.</span>
                        </div>
                }
            </div>}
        </div>
        
    )
}

export default Pesquisa