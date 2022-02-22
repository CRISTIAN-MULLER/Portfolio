import React from 'react'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

import './Intro.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useTranslation } from 'react-i18next'

const Intro: React.FC = () => {
	const { t } = useTranslation()

	const { text } = useTypewriter({
		words: [
			`${t('home.analista')}`,
			`${t('home.desenvolvedorFull')}`,
			`${t('home.desenvolvedorWeb')}`,
		],
		loop: false,
	})

	return (
		<div className='intro' id='intro'>
			<div className='left'>
				<div className='imageContainer'>
					<img src='/assets/foto.svg' alt='' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>{t('home.oi')}</h2>
					<h1>Cristian Müller</h1>
					<h3>
						{t('home.freelance')}{' '}
						<span>
							{text}
							<Cursor />
						</span>
					</h3>
					<a href='#portfolio'>
						<KeyboardArrowDownIcon className='arrowDownIcon' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Intro
