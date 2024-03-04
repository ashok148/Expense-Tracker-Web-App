import React, { useState } from 'react'
import {
	UserOutlined,
	DesktopOutlined,
	FileOutlined,
	HomeOutlined,
	TransactionOutlined,
	SettingOutlined,
} from '@ant-design/icons'
import {
	Layout,
	Menu,
	Avatar,
	Button,
	Popover,
	Col,
	Row,
	Typography,
} from 'antd'
const { Header, Content, Footer, Sider } = Layout
import {useLoaderData, useNavigate } from '@remix-run/react'
import Cookies from 'js-cookie'
import { listyle } from '../user/styles'
import { getUserId } from '~/authSession/session'
const { Text } = Typography

export async function loader({ request }) {
	return await getUserId(request);
}
const MainLayout = ({ children }) => {
	const loaderData = useLoaderData()
	const userId = loaderData?.user?.userId	
	// const userId = Cookies.get("id");
	const navigate = useNavigate()
	const [collapsed, setCollapsed] = useState(false)

	const Logout = () => {
		// Cookies.remove('id')
		navigate('/login')
	}

	const handleMenuItem = (key) => {
		navigate(key)
	}
	const navItems = [
		{
			label: 'Dashboard',
			key: `/user/dashboard/${userId}`,
			icon: <HomeOutlined />,
		},
		{
			label: 'Create Expense',
			key: `/user/categories/${userId}`,
			icon: <FileOutlined />,
		},
		{
			label: 'Transaction',
			key: `/user/transaction/${userId}`,
			icon: <TransactionOutlined />,
		},
		{
			label: 'Reports',
			key: `/user/reports/${userId}`,
			icon: <DesktopOutlined />,
		},
		{
			label: 'Settings',
			key: `/user/setting/${userId}`,
			icon: <SettingOutlined />,
		},
	]

	const myprofile = `../setting/${userId}`

	const content = (
		<>
			<Button
				block
				type='text'
				href={myprofile}>
				My Profile
			</Button>
			<Button
				block
				type='text'
				onClick={Logout}>
				Log out
			</Button>
		</>
	)

	return (
		<Layout
			style={{
				minHeight: '100vh',
			}}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}>
				<div style={listyle}>
					<h2>ΣƬ</h2>
				</div>
				<Menu
					theme='dark'
					onClick={(item) => handleMenuItem(item?.key)}
					defaultSelectedKeys={['1']}
					mode='inline'
					items={navItems}
				/>
			</Sider>
			<Layout className='site-layout'>
				<Header
					style={{
						position: 'sticky',
						top: 0,
						zIndex: 1,
						width: '100%',
					}}>
					<Row justify='space-between'>
						<Col
							xl={12}
							style={{ display: 'flex', alignItems: 'center' }}>
							<Text className='expense'>𝔼𝕏ℙ𝔼ℕ𝕊𝔼 𝕋ℝ𝔸ℂ𝕂</Text>
						</Col>
						<Col
							xl={12}
							align='right'>
							<Popover
								placement='bottomRight'
								content={content}
								trigger='click'>
								<Avatar
									style={{ background: '#ffffff33' }}
									size={44}
									icon={<UserOutlined />}
								/>
							</Popover>
						</Col>
					</Row>
				</Header>
				<Content
					style={{
						margin: '0 16px',
					}}>
					{children}
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}>
					Expense Tracker ©{new Date().getFullYear()} Created.
				</Footer>
			</Layout>
		</Layout>
	)
}
export default MainLayout
