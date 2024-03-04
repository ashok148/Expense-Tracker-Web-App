import React, { useState, useEffect } from 'react'
import MainLayout from '../../layouts/home'
import expensePng from '../../../assets/expense.png'
import expenseNo from '../../../assets/TotalExpense.png'
import {
	Breadcrumb,
	Card,
	Col,
	Row,
	Typography,
	Tooltip,
	Select,
	DatePicker,
	Button,
} from 'antd'
import { getExpenseByUserId } from '~/backend/src/services/expenseServices'
import DoughnutChart from '../dashboard/chart'
import BarChart from './chart2'
import { useLoaderData } from '@remix-run/react'
import { card, transItems } from '../../user/styles'
import { requireUserId } from '~/authSession/session';

const { Title } = Typography

export async function loader({ request, params }) {
	await requireUserId(request);
	const userId = params.dashboard
	const expenseList = await getExpenseByUserId(userId)
	return expenseList
}
const items = [
	{
		value: 'Maintenance_and_repairs',
		label: 'Maintenance_and_repairs',
	},
	{
		value: 'Telephone',
		label: 'Telephone',
	},
	{
		value: 'Printing',
		label: 'Printing',
	},
	{
		value: 'Salaries_and_other_compensation',
		label: 'Salaries_and_other_compensation',
	},
	{
		value: 'Travel',
		label: 'Travel',
	},
	{
		value: 'Business_meals',
		label: 'Business_meals',
	},
	{
		value: 'Medical_expenses',
		label: 'Medical_expenses',
	},
	{
		value: 'Licenses_and_permits',
		label: 'Licenses_and_permits',
	},
	{
		value: 'Client_gifts',
		label: 'Client_gifts',
	},
	{
		value: 'Employee_loans',
		label: 'Employee_loans',
	},
]

const Dashboard = () => {
	const loaderData = useLoaderData()
	const [expenseList, setExpenseList] = useState([])
	const [selectedDate, setSelectedDate] = useState('')
	const [selectedCategory, setSelectedcategory] = useState()
	const [filterData, setFilterData] = useState([])
	const amounts = expenseList.map((transaction) => transaction.amount)

	const totalExpense = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)

	const expenseCount = () => {
		let count = 0
		for (let i = 0; i < expenseList.length; i++) {
			count++
		}
		return count
	}

	useEffect(() => {
		const data = loaderData?.user?.expenses
		setExpenseList(data)
	}, [loaderData])

	const onChangeDate = (date, dateString) => {
		setSelectedDate(dateString)
	}
	const handleChangeSelect = (value) => {
		setSelectedcategory(value)
	}

	const handleData = () => {
		const data = expenseList?.filter((item) => {
			const month = `${new Date(item.createdAt).getFullYear()}-${
				new Date(item.createdAt).getMonth() + 1
			}`
			return item?.category === selectedCategory && month == selectedDate
		})
		setFilterData(data)
	}
	const handleReset = () => {
		setSelectedDate('')
		setSelectedcategory()
	}

	return (
		<MainLayout userId={loaderData}>
			<div>
				<Breadcrumb
					style={{
						margin: '16px 0',
					}}>
					<Breadcrumb.Item style={{ color: '#3dc4e0' }}>User</Breadcrumb.Item>
					<Breadcrumb.Item>Dashboard</Breadcrumb.Item>
				</Breadcrumb>
				<div style={transItems}>
					<Title
						level={3}
						style={{ margin: '0 0 20px 0px' }}>
						User Dashboard
					</Title>
					<Row
						gutter={[16, 16]}
						className='row'>
						<Col
							sm={24}
							md={12}
							xl={12}>
							<Tooltip title='Total amount of all expenses.'>
								<Card className='dashboard-expense'>
									<Row
										align='middle'
										justify='space-between'>
										<Col>
											<Title level={5}>Total Expense</Title>
											<Title level={2}>₹ {totalExpense}</Title>
										</Col>
										<Col style={{ display: 'flex' }}>
											{' '}
											<img
												src={expensePng}
												width={70}
												alt=''
											/>
										</Col>
									</Row>
								</Card>
							</Tooltip>
						</Col>

						<Col
							sm={24}
							md={12}
							xl={12}>
							<Tooltip title='Total number of expenses.'>
								<Card className='dashboard-expense'>
									<Row
										align='middle'
										justify='space-between'>
										<Col>
											<Title level={5}>Number of Expenses</Title>
											<Title level={2}>{expenseCount()}</Title>
										</Col>
										<Col style={{ display: 'flex' }}>
											<img
												src={expenseNo}
												width={70}
												alt=''
											/>
										</Col>
									</Row>
								</Card>
							</Tooltip>
						</Col>
						<Col
							sm={24}
							lg={10}
							xl={10}>
							<Card style={card}>
								<Title
									level={4}
									style={{ marginTop: '10px' }}>
									Category Summary
								</Title>
								<div>
									<DoughnutChart expenseList={expenseList} />
								</div>
							</Card>
						</Col>
						<Col
							sm={24}
							lg={14}
							xl={14}>
							<Card style={card}>
								<Title
									level={4}
									style={{ marginTop: '10px' }}>
									Expense Summary
								</Title>
								<Row
									align='middle'
									gutter={[16, 16]}>
									<Col
										xs={24}
										sm={7}
										md={5}
										xl={6}>
										<DatePicker
											placeholder='Select Month'
											onChange={onChangeDate}
											picker='month'
										/>
									</Col>
									<Col
										xs={24}
										md={7}
										lg={7}
										xl={9}>
										<Select
											placeholder='Select'
											style={{
												width: 190,
											}}
											onChange={handleChangeSelect}
											options={items}
											value={selectedCategory}
										/>
									</Col>
									<Col
										xs={24}
										md={10}
										xl={8}>
										<Button
											type='primary'
											htmlType='apply'
											onClick={handleData}>
											Apply
										</Button>
										<Button
											type='primary'
											onClick={handleReset}
											htmlType='reset'>
											Reset
										</Button>
									</Col>
								</Row>
								<div style={{ marginTop: '40px' }}>
									<BarChart expenseList={filterData} />
								</div>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		</MainLayout>
	)
}
export default Dashboard
