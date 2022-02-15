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
	active,
	selected,
	setSelected,
}: PortfolioListProps) {
	const togleSelected = (topicId: string) => {
		if (selected.includes(topicId)) {
			const filtered = selected.filter((item) => item !== topicId)
			setSelected(filtered)
			return
		}
		setSelected([topicId, ...selected])
	}

	return (
		<li
			key={topicId}
			className={active ? 'portfolioList active' : 'portfolioList'}
			onClick={() => togleSelected(topicId)}
		>
			{title}
		</li>
	)
}
export default PortfolioList
