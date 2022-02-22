import { useState, useEffect, createContext } from 'react'

import './global.scss'
import './App.scss'

import TopBar from './components/topbar/TopBar'
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

import axios from 'axios'

import { useTranslation } from 'react-i18next'

export type UserRepositoriesDataProps = {
	id: string
	name: string
	owner: {
		login: string
	}
	imageURL: string
	description: string
	topics: string[]
	default_branch: string
}

type ProjectData = {
	id: string
	title: string
	description: string
	ownerName: string
	imageURL: string
	topics: string[]
}

type Contextprops = {
	userRepositoriesData: ProjectData[]
	setUserRepositoriesData: (userRepositoriesData: ProjectData[]) => void
	menuOpen: boolean
	setMenuOpen: (menuOpen: boolean) => void
	changeLanguageHandler: (lang: string) => void
}

export const UserDataContext = createContext<Contextprops>({
	userRepositoriesData: [
		{
			id: '',
			title: '',
			description: '',
			ownerName: '',
			imageURL: '',
			topics: [],
		},
	],
	setUserRepositoriesData: (userRepositoriesData: ProjectData[]) => {},
	menuOpen: false,
	setMenuOpen: (menuOpen: boolean) => {},
	changeLanguageHandler: (lang: string) => {},
})

const githubApi = {
	baseURL: 'https://api.github.com/users/',
	user_name: 'CRISTIAN-MULLER',
	client_id: 'Iv1.97dde620e78b7739',
	client_secret: 'bc5d54719db6e05ce79336eec77ecb45064138c2',
}

function App() {
	const [loading, setLoading] = useState(true)
	const [userRepositoriesData, setUserRepositoriesData] = useState<
		ProjectData[]
	>([])
	const [menuOpen, setMenuOpen] = useState(false)

	const { i18n } = useTranslation()

	const changeLanguageHandler = (lang: string) => {
		i18n.changeLanguage(lang)
		//setChangeLanguage(true);
	}

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(
				githubApi.baseURL + githubApi.user_name + '/repos',
			)

			const UserRepositoriesData: ProjectData[] = data.map(
				(item: UserRepositoriesDataProps) => ({
					id: item.id,
					title: item.name.replace(/-/g, ' '),
					ownerName: item.owner.login,
					imageURL: `https://raw.githubusercontent.com/${item.owner.login}/${item.name}/${item.default_branch}/Tela.gif`,
					description: item.description,
					topics: [...item.topics],
				}),
			)

			setUserRepositoriesData(UserRepositoriesData)
			setLoading(false)
		}
		fetchData()
	}, [])

	if (loading) {
		return (
			<div className='loading'>
				<img src='assets/loading.svg' alt='' className='svg' />
			</div>
		)
	}

	return (
		<UserDataContext.Provider
			value={{
				userRepositoriesData,
				setUserRepositoriesData,
				menuOpen,
				setMenuOpen,
				changeLanguageHandler,
			}}
		>
			<div className='App'>
				<TopBar />
				<Menu />
				<div className='sections'>
					<Intro />
					<Portfolio />
					<Works />
					<Testimonials />
					<Contact />
				</div>
			</div>
		</UserDataContext.Provider>
	)
}

export default App
