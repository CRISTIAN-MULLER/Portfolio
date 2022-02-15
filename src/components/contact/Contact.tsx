import { FormEvent, useState } from 'react'
import './Contact.scss'
import { useTranslation } from 'react-i18next'

function Contact() {
	const { t } = useTranslation()
	const [message, setMessage] = useState(false)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		setMessage(true)
	}
	return (
		<div className='contact' id='contact'>
			<div className='left'>
				<img src='assets/shake.svg' alt='' />
			</div>
			<div className='right'>
				<h2>{t('contact.contato')}</h2>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder={t('contact.email')} />
					<textarea placeholder={t('contact.mensagem')}></textarea>
					<button type='submit'>{t('contact.enviar')}</button>
					{message && <span>{t('contact.obrigado')}</span>}
				</form>
			</div>
		</div>
	)
}

export default Contact
