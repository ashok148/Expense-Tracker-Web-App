import React, { useState } from 'react'
import MainLayout from '../../layouts/home'
import { Breadcrumb, Typography, Row, Col, Input, Button, Alert } from 'antd'
import { useActionData, Form } from '@remix-run/react'
import { createExpense } from '~/backend/src/services/expenseServices';
import { requireUserId } from "~/authSession/session";
import { transItems, card, categoryItem } from '../../user/styles'
const { Title } = Typography

export async function loader({ request }) {
	await requireUserId(request);
	return null;
}
export async function action({ request, params }) {
	const userId = params.categories;
	const form = await request.formData()
	const title = form.get('title')
	const category = form.get('category')
	const amount = form.get('amount')
	const date = form.get('date')
	switch (request.method) {
		case 'POST': {
			const expenseData = await createExpense(
				title,
				category,
				amount,
				date,
				userId
			)
			return expenseData
		}
		default:
			return 'invalid form data'
	}
}

const Categories = () => {
	const actionData = useActionData()
	const [formData, setFormData] = useState({
		title: '',
		category: '',
		amount: '',
		date: '',
	})
	const categories = [
		'Maintenance_and_repairs',
		'Telephone',
		'Printing',
		'Salaries_and_other_compensation',
		'Travel',
		'Business_meals',
		'Medical_expenses',
		'Licenses_and_permits',
		'Client_gifts',
		'Employee_loans',
	]

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}
	const handleValue = () => {
		// if(!actionData?.mydata?.message){
		//   setFormData("")
		// }
	}
	return (
		<MainLayout>
			<div>
				<Breadcrumb
					style={{
						margin: '16px 0',
					}}>
					<Breadcrumb.Item style={{ color: '#3dc4e0' }}>User</Breadcrumb.Item>
					<Breadcrumb.Item>Create New Expense</Breadcrumb.Item>
				</Breadcrumb>
				<div style={transItems}>
					<Title
						level={3}
						style={{ margin: '0 0 20px 0px' }}>
						Create New Expense
					</Title>

					<Row>
						<Col
							sm={24}
							xl={12}
							style={{ margin: 'auto' }}>
							<Row gutter={[16, 16]}>
								<Col
									xl={24}
									style={{ width: '100%' }}>
									{actionData?.mydata?.message ? (
										<Alert
											message={actionData?.mydata?.message}
											type='success'
										/>
									) : null}
								</Col>
								<Col
									xl={24}
									style={{ width: '100%' }}>
									{actionData?.error?.message ? (
										<Alert
											message='Fail to add.!'
											type='error'
										/>
									) : null}
								</Col>
							</Row>
							<div style={{ ...card, ...categoryItem }}>
								<Title
									level={4}
									style={{ textAlign: 'center', margin: '0px 0px 15px 0px' }}>
									Register a new expense and save it.
								</Title>
								<Form method='POST'>
									<Row
										gutter={[16, 16]}
										className='row'>
										<Col
											sm={24}
											xl={12}>
											<Input
												name='title'
												placeholder='Title'
												required
												size='large'
												value={formData.title}
												onChange={handleChange}
											/>
										</Col>
										<Col
											sm={24}
											xl={12}>
											<select
												name='category'
												value={formData.category}
												onChange={handleChange}>
												<option
													key='blankKey'
													hidden
													value>
													Select Category..
												</option>
												{categories &&
													categories.map((item) => {
														return (
															<option
																key={item}
																value={item}>
																{item}
															</option>
														)
													})}
											</select>
										</Col>
										<Col
											sm={24}
											xl={12}>
											<Input
												required
												type='number'
												placeholder='Add Expense Amount'
												name='amount'
												value={formData.amount}
												onChange={handleChange}
											/>
										</Col>
										<Col
											sm={24}
											xl={12}>
											<Input
												placeholder='DD-MM-YYYY'
												type='date'
												required
												name='date'
												value={formData.date}
												onChange={handleChange}
											/>
										</Col>
										<Col
											sm={24}
											xl={24}>
											<Button
												onClick={handleValue}
												type='primary'
												htmlType='submit'>
												Create Expense
											</Button>
										</Col>
									</Row>
								</Form>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</MainLayout>
	)
}
export default Categories
