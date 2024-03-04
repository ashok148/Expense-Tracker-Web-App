import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { downloadExcel } from 'react-export-table-to-excel'
import { CSVLink } from 'react-csv'
import { DownloadOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'

function ReportDownload({ expenses }) {
	const CsvExpenses = expenses.flatMap((item) => [
		{
			title: item?.title,
			amount: item?.amount,
			category: item?.category,
			date: item?.createdAt,
		},
	])

	function handleDownloadExcel() {
		const header = ['Item Name', 'Amount', 'Category', 'Expense Date']
		const newExpense = expenses.flatMap((item) => [
			{
				title: item?.title,
				amount: item?.amount,
				category: item?.category,
				date: item?.createdAt,
			},
		])
		downloadExcel({
			fileName: 'react-export-table-to-excel -> downloadExcel method',
			sheet: 'react-export-table-to-excel',
			tablePayload: {
				header,
				body: newExpense,
			},
		})
	}

	const handleDownloadPdf = () => {
		const doc = new jsPDF()
		const newExpense = expenses.map((item) => {
			return [item.title, item.amount, item.category, item.createdAt]
		})
		autoTable(doc, {
			head: [['Item Name', 'Amount', 'Category', 'Expense Date']],
			body: newExpense,
		})
		doc.save('table.pdf')
	}
	const items = [
		{
			label: <a onClick={handleDownloadPdf}>Download as a PDF</a>,
			key: '0',
		},
		{
			label: <a onClick={handleDownloadExcel}>Download as a Excel file</a>,
			key: '1',
		},
		{
			label: (
				<Space size='middle'>
					<CSVLink
						className='btn-color'
						data={CsvExpenses}
						filename={'my-file.csv'}>
						Download as a CSV
					</CSVLink>
				</Space>
			),
			key: '3',
		},
	]
	return (
		<div>
			<Dropdown
				menu={{
					items,
				}}
				trigger={['click']}>
				<a
					onClick={(e) => e.preventDefault()}
					className='btn-color'>
					<Space>
						<DownloadOutlined />
						Report Download
					</Space>
				</a>
			</Dropdown>
		</div>
	)
}

export default ReportDownload
