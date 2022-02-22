import './PortfolioList.scss'

type PortfolioListProps = {
	topicId: string
	title: string
	active: boolean
	selected: string[]
	setSelected: (selected: string[]) => void
}

function PortfolioList({
	topicId,
	title,
	active = false,
	selected,
	setSelected,
}: PortfolioListProps) {
	const togleSelected = (topicId: string) => {
		//console.log('ini', selected)
		//console.log(topicId)

		if (selected) {
			if (selected.includes(topicId)) {
				const filtered: string[] = selected.filter((item) => item !== topicId)
				setSelected(filtered)
				return
			}
			setSelected([topicId, ...selected])
		}
	}

	return (
		<li
			key={topicId}
			className={
				active ? 'portfolioList active uppercase' : 'portfolioList uppercase'
			}
			onClick={() => togleSelected(topicId)}
		>
			{title}
		</li>
	)
}
export default PortfolioList
