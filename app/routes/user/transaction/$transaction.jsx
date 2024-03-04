import React, { useRef, useEffect, useState } from 'react';
import {
	Breadcrumb,
	Button,
	Table,
	Tag,
	Col,
	Row,
	Typography,
	Input,
	Space,
	Modal,
} from 'antd'
import Highlighter from 'react-highlight-words';
import {
	SearchOutlined,
	EditFilled,
	DeleteFilled,
	ExclamationCircleFilled,
} from '@ant-design/icons';
import MainLayout from '../../layouts/home';
import axios from 'axios'
import { useLoaderData, Form, useActionData } from '@remix-run/react'
import { transItems } from '../styles'
import { deleteExpense, getExpenseByUserId, updateExpense } from '~/backend/src/services/expenseServices';
import Cookies from 'js-cookie';
import { requireUserId } from '~/authSession/session'
const { Title } = Typography

export async function loader({ request, params }) {
	await requireUserId(request);
	const id = params.transaction;
	const expenseList = await getExpenseByUserId(id)
	return expenseList
}
export async function action({ request }) {
	switch (request.method) {
		case "DELETE": {
			return await deleteExpense(id);
		}
		case "PUT": {
			return await updateExpense(id);
		}
		default:
			return 'invalid action';
	}
	
}
function Transaction() {
	const loaderData = useLoaderData();
	const actionData = useActionData();
	const [expenses, setExpenses] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [formData, setFormData] = useState({});
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

	const { confirm } = Modal
	const showDeleteConfirm = (id, index) => {
		confirm({
			title: 'Are you sure delete this Item?',
			icon: <ExclamationCircleFilled />,
			content: 'This item is delete Permanently',
			okText: 'Yes',
			okType: 'danger',
			cancelText: 'No',
			onOk() {
				// deleteExpense(id)
				setExpenses((pre) => {
					return pre.filter((item) => item._id !== id)
				})
			},
			onCancel() {},
		})
	}

	// const updateExpense = async (id) => {
	// 	try {
	// 		const config = { headers: { 'Content-Type': 'application/json' } }
	// 		const res = await axios.put( `http://localhost4000/api/expense/update/${id}`, {
	// 			title: formData.title,
	// 			category: formData.category,
	// 			amount: formData.amount,
	// 			createdAt: formData.createdAt,
	// 			config,
	// 		})
	// 		const mydata = await res?.data?.expense
	// 		return { mydata }
	// 	} catch (error) {
	// 		return { error }
	// 	}
	// }

	const showModalEdit = (id) => {
		Cookies.set('expense_id', id)
		setExpenses(expenses)
		setIsModalVisible(true)
		const editData = expenses.filter((item) => {
			if (item._id === id) {
				return item
			}
		})
		setFormData({
			id: editData[0]._id,
			title: editData[0].title,
			category: editData[0].category,
			amount: editData[0].amount,
			createdAt: editData[0].createdAt,
		})
	}

	const handleOk = () => {
		const id = Cookies.get('expense_id')
		// updateExpense(id)
		setIsModalVisible(false)
		setExpenses((pre) => {
			return pre.map((item) => {
				if (item._id === formData.id) {
					return formData
				} else {
					return item
				}
			})
		})
		resetEditing()
	}
	const resetEditing = () => {
		setIsModalVisible(false)
		// setFormData(null)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const [searchText, setSearchText] = useState('')
	const [searchedColumn, setSearchedColumn] = useState('')
	const searchInput = useRef(null)
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm()
		setSearchText(selectedKeys[0])
		setSearchedColumn(dataIndex)
	}
	const handleReset = (clearFilters) => {
		clearFilters()
		setSearchText('')
	}
	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
			close,
		}) => (
			<div
				style={{
					padding: 8,
				}}
				onKeyDown={(e) => e.stopPropagation()}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: 'block',
					}}
				/>
				<Space>
					<Button
						type='primary'
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size='small'>
						Search
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters)}
						size='small'
						type='primary'>
						Reset
					</Button>
					<Button
						size='small'
						type='primary'
						onClick={() => {
							confirm({
								closeDropdown: false,
							})
							setSearchText(selectedKeys[0])
							setSearchedColumn(dataIndex)
						}}>
						Filter
					</Button>
					<Button
						type='primary'
						size='small'
						onClick={() => {
							close()
						}}>
						close
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? '#1890ff' : undefined,
				}}
			/>
		),
		onFilter: (value, record) =>
			record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100)
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#ffc069',
						padding: 0,
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (
				text
			),
	})

	useEffect(() => {
		const data = loaderData?.user?.expenses
		setExpenses(data)
	}, [loaderData])
	const columns = [
		{
			title: 'Item Name',
			dataIndex: 'title',
			key: 'title',
			...getColumnSearchProps('title'),
			sorter: (a, b) => a.title.length - b.title.length,
			sortDirections: ['descend', 'ascend'],
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			...getColumnSearchProps('category'),
			sorter: (a, b) => a.category.length - b.category.length,
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
			key: 'amount',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.amount - b.amount,
		},
		{
			title: 'Expense Date',
			dataIndex: 'createdAt',
			key: 'createdAt',
		},
		{
			title: 'Type',
			key: 'type',
			render: () => (
				<>
					<Tag color='red'>EXPENSE</Tag>
				</>
			),
		},
		{
			title: 'Action',
			dataIndex: '_id',
			key: '_id',
			render: (_, { _id }) => (
				<Space size='middle'>
					<Button
						id={_id}
						type='primary'
						onClick={() => showModalEdit(_id)}>
						<EditFilled />
					</Button>
					<Button
						onClick={() => showDeleteConfirm(_id)}
						type='dashed'>
						<DeleteFilled />
					</Button>
				</Space>
			),
		},
	]

	return (
		<MainLayout>
			<div>
				<Breadcrumb
					style={{
						margin: '16px 0',
					}}>
					<Breadcrumb.Item style={{ color: '#3dc4e0' }}>User</Breadcrumb.Item>
					<Breadcrumb.Item>Transactions</Breadcrumb.Item>
				</Breadcrumb>
				<div style={transItems}>
					<Row
						justify='space-between'
						align='middle'
						style={{ marginBottom: 20 }}>
						<Col
							sm={24}
							xl={10}>
							<Title
								level={3}
								style={{ marginTop: 0 }}>
								All Expenses
							</Title>
						</Col>
					</Row>
					<Row>
						<Col xl={24}>
							<Table
								key={expenses[0]?.title}
								columns={columns}
								dataSource={expenses}
							/>
						</Col>
						<Modal
							title='Basic Modal'
							open={isModalVisible}
							onOk={handleOk}
							onCancel={resetEditing}>
							<Form method='PUT'>
								<Row gutter={[16, 16]}>
									<Col span={12}>
										<Input
											name='title'
											placeholder='Title'
											required
											size='large'
											value={formData.title}
											onChange={handleChange}
										/>
									</Col>
									<Col span={12}>
										<select
											name='category'
											placeholder='Select Category..'
											value={formData.category}
											onChange={handleChange}>
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
									<Col span={12}>
										<Input
											required
											type='number'
											placeholder='Amount'
											name='amount'
											value={formData.amount}
											onChange={handleChange}
										/>
									</Col>
									<Col span={12}>
										<Input
											format='DD-MM-YYYY'
											type='date'
											required
											name='createdAt'
											value={formData.createdAt}
											onChange={handleChange}
										/>
									</Col>
								</Row>
							</Form>
						</Modal>
					</Row>
				</div>
			</div>
		</MainLayout>
	)
}

export default Transaction
