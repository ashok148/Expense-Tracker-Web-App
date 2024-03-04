import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = ({ expenseList }) => {
	const amounts = expenseList.map((transaction) => transaction.amount)
	const expenseTitle = expenseList.map((item) => item.title)

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Top 5 highest expense per month',
			},
		},
	}

	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	const data = {
		labels,
		datasets: [
			{
				label: !expenseTitle[0] ? 'Label 1' : [expenseTitle[0]],
				data: [amounts[0]],
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132,0.5)',
				borderWidth: 5,
			},
			{
				label: !expenseTitle[1] ? 'Label 2' : [expenseTitle[1]],
				data: [amounts[1]],
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(465, 791, 24, 1)',
				borderWidth: 5,
			},
			{
				label: !expenseTitle[2] ? 'Label 3' : [expenseTitle[2]],
				data: [amounts[2]],
				borderColor: 'rgba(255, 159, 64, 1)',
				backgroundColor: 'rgba(25, 159, 124, 1)',
				borderWidth: 5,
			},
			{
				label: !expenseTitle[3] ? 'Label 4' : [expenseTitle[3]],
				data: [amounts[3]],
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgba(175, 212, 12, 1)',
				borderWidth: 5,
			},
			{
				label: !expenseTitle[4] ? 'Label 5' : [expenseTitle[4]],
				data: [amounts[4]],
				borderColor: 'rgb(153, 102, 255)',
				backgroundColor: 'rgba(235, 231, 24, 1)',
				borderWidth: 5,
			},
		],
	}

	return (
		<div className='chart'>
			<Bar
				options={options}
				data={data}
			/>
		</div>
	)
}

export default BarChart
