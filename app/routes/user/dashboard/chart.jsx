import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ expenseList }) => {
	const categories = expenseList.map((item) => item.category)

	const occurrencesOfEach = (categories) => {
		const count = categories.reduce((accumulator, value) => {
			accumulator[value] = ++accumulator[value] || 1

			return accumulator
		}, {})

		return count
	}
	const itemCount = occurrencesOfEach(categories)

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'left',
			},
			title: {
				display: true,
				text: 'Total Number of Expenses of each categories',
			},
		},
	}
	const data = {
		labels: [
			'Maintenance and repairs',
			'Telephone',
			'Printing',
			'Salaries and other compensation',
			'Travel',
			'Business meals',
			'Medical expenses',
			'Licenses and permits',
			'Client gifts',
			'Employee loans',
		],
		datasets: [
			{
				label: 'Total expense',
				data: [
					itemCount.Maintenance_and_repairs,
					itemCount.Telephone,
					itemCount.Printing,
					itemCount.Salaries_and_other_compensation,
					itemCount.Travel,
					itemCount.Business_meals,
					itemCount.Medical_expenses,
					itemCount.Licenses_and_permits,
					itemCount.Client_gifts,
					itemCount.Employee_loans,
				],
				backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(465, 791, 24, 1)',
					'rgba(125, 29, 14, 1)',
					'rgba(69, 23, 234, 1)',
					'rgba(125, 49, 114, 1)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(465, 791, 24, 1)',
					'rgba(125, 29, 14, 1)',
					'rgba(69, 23, 234, 1)',
					'rgba(125, 49, 114, 1)',
				],
				borderWidth: 1,
				hoverOffset: 16,
			},
		],
	}

	return (
		<div
			className='chart'
			style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
			<Doughnut
				data={data}
				options={options}
			/>
		</div>
	)
}

export default DoughnutChart
