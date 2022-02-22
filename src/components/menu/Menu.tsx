import React, { useContext } from 'react'

import './Menu.scss'
import { useTranslation } from 'react-i18next'

import { UserDataContext } from '../../App'

const Menu: React.FC = () => {
	const { menuOpen, setMenuOpen } = useContext(UserDataContext)
	const { t } = useTranslation()
	return (
		<div className={'menu ' + (menuOpen && 'active')}>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#intro'>{t('menu.inicio')}</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#portfolio'>{t('menu.portifolio')}</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#works'>{t('menu.meus_projetos')}</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#testimonials'>{t('menu.depoimentos')}</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href='#contact'>{t('menu.contatos')}</a>
				</li>
			</ul>
		</div>
	)
}

export default Menu
