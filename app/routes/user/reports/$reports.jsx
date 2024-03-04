import React, { useRef, useState, useEffect } from 'react'
import { useLoaderData } from '@remix-run/react'
import { SearchOutlined } from '@ant-design/icons'
import MainLayout from '../../layouts/home'
import {
	Button,
	Input,
	Space,
	Table,
	Breadcrumb,
	Col,
	Row,
	Typography,
} from 'antd'
import Highlighter from 'react-highlight-words'
import { transItems } from '../../user/styles'
import ReportDownload from './ReportDownload'
import { getExpenseByUserId } from '~/backend/src/services/expenseServices'
import { requireUserId } from '~/authSession/session'
const { Title } = Typography

export async function loader({request, params }) {
	await requireUserId(request);
	const id = params.reports
	const expenseList = await getExpenseByUserId(id)
	return expenseList
}
const Report = () => {
	const loaderData = useLoaderData()
	const [expenses, setExpenses] = useState([])
	useEffect(() => {
		const data = loaderData?.user?.expenses
		setExpenses(data)
	}, [loaderData])
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
	]
	return (
		<MainLayout>
			<div>
				<Breadcrumb
					style={{
						margin: '16px 0',
					}}>
					<Breadcrumb.Item style={{ color: '#3dc4e0' }}>User</Breadcrumb.Item>
					<Breadcrumb.Item>Reports</Breadcrumb.Item>
				</Breadcrumb>
				<div style={transItems}>
					<Row
						justify='space-between'
						align='middle'
						style={{ marginBottom: 20 }}>
						<Col
							sm={12}
							xl={12}>
							<Title
								level={3}
								style={{ marginTop: 0 }}>
								Download Expense Report
							</Title>
						</Col>

						<Col
							sm={12}
							xl={12}
							style={{ textAlign: 'right' }}>
							<ReportDownload expenses={expenses} />
						</Col>
					</Row>

					<Table
						columns={columns}
						dataSource={expenses}
					/>
				</div>
			</div>
		</MainLayout>
	)
}
export default Report
