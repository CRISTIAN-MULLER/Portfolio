import { useState, useEffect, useContext } from 'react'

import './Portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useTranslation } from 'react-i18next'

import { UserDataContext } from '../../App'

function Portfolio() {
	const { userRepositoriesData } = useContext(UserDataContext)

	const { t } = useTranslation()

	const [data, setData] = useState(userRepositoriesData)

	const topics = userRepositoriesData
		.filter((item) => item.topics.length > 0)
		.map((topic) =>
			topic.topics.map((item) => {
				return item
			}),
		)
		.flat()

	const [selected, setSelected] = useState<string[]>([])

	const topicsWithoutDuplicates = [...new Set(topics)].map((item) => {
		return { id: item, title: item }
	})

	useEffect(() => {
		if (selected.length > 0) {
			const filteredData = [
				...new Set(
					selected
						.map((topic) => {
							const temp = userRepositoriesData.filter((item) => {
								return item.topics.includes(topic)
							})
							return temp
						})
						.flat(),
				),
			]
			setData(filteredData)
			return
		}

		setData(userRepositoriesData)
		// eslint-disable-next-line
	}, [selected])

	return (
		<div className='portfolio' id='portfolio'>
			<h1>{t('portfolio.portifolio')}</h1>
			<ul>
				{topicsWithoutDuplicates.map((topic) => (
					<PortfolioList
						key={topic.id}
						topicId={topic.id}
						title={topic.title}
						active={selected.includes(topic.id)}
						selected={selected}
						setSelected={setSelected}
					/>
				))}
			</ul>
			{
				<div className='container style-2'>
					{data.map((item) => (
						<a href={`#${item.id}`} key={item.id}>
							<div className='item'>
								<img src={item.imageURL} alt='Logo' />
								<h3> {item.title}</h3>
							</div>
						</a>
					))}
				</div>
			}
		</div>
	)
}

export default Portfolio
