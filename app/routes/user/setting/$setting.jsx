import { useState } from 'react'
import MainLayout from '../../layouts/home'
import { Breadcrumb, Col, Row, Input, Button, Typography } from 'antd'
import { transItems, btnCat } from '../styles'
import { useActionData, Form } from '@remix-run/react'
import { updateProfile } from '~/backend/src/services/authServices'
import {
	validatefirst,
	validatelast,
	validatePassword,
	validateConfirmPassword,
} from '../../validation'
import { requireUserId } from '~/authSession/session'
const { Title, Text } = Typography

export async function loader({ request }) {
	await requireUserId(request);
	return null;
}

export async function action({ request, params }) {
	const id = params.setting
	const form = await request.formData()
	const firstname = form.get('firstname')
	const lastname = form.get('lastname')
	const password = form.get('password')
	const cpassword = form.get('cpassword')
	const formErrors = {
		firstname: validatefirst(firstname),
		lastname: validatelast(lastname),
		password: validatePassword(password),
		cpassword: validateConfirmPassword(password, cpassword),
	}
	if (Object.values(formErrors).some(Boolean))
		return {
			formErrors,
		}

	switch (request.method) {
		case 'PUT': {
			return await updateProfile(id, firstname, lastname, password, cpassword)
		}
		default:
			return 'invalid form data'
	}
}

const Setting = () => {
	const actionData = useActionData()
	const [inputs, setInputs] = useState({
		firstname: '',
		lastname: '',
		password: '',
		cpassword: '',
	})

	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	return (
		<MainLayout>
			<Breadcrumb
				style={{
					margin: '16px 0',
				}}>
				<Breadcrumb.Item style={{ color: '#3dc4e0' }}>User</Breadcrumb.Item>
				<Breadcrumb.Item>Settings</Breadcrumb.Item>
			</Breadcrumb>
			<div style={transItems}>
				<Title
					level={3}
					style={{ marginTop: 0 }}>
					Profile Settings
				</Title>
				<Form method='PUT'>
					<Row
						gutter={[16, 16]}
						className='row'>
						<Col
							sm={24}
							xl={12}>
							<Input
								name='firstname'
								placeholder='First Name'
								required
								size='large'
								value={inputs.firstname}
								onChange={handleChange}
							/>
							{actionData?.formErrors?.firstname ? (
								<Text type='danger'>{actionData?.formErrors?.firstname}</Text>
							) : null}
						</Col>
						<Col
							sm={24}
							xl={12}>
							<Input
								name='lastname'
								placeholder='last Name'
								required
								size='large'
								value={inputs.lastname}
								onChange={handleChange}
							/>
							{actionData?.formErrors?.lastname ? (
								<Text type='danger'>{actionData?.formErrors?.lastname}</Text>
							) : null}
						</Col>
						<Col
							sm={24}
							xl={12}>
							<Input
								name='password'
								placeholder='Password'
								required
								size='large'
								type='password'
								autoComplete='off'
								value={inputs.password}
								onChange={handleChange}
							/>
							{actionData?.formErrors?.password ? (
								<Text type='danger'>{actionData?.formErrors?.password}</Text>
							) : null}
						</Col>
						<Col
							sm={24}
							xl={12}>
							<Input
								name='cpassword'
								placeholder='Confirm Password'
								required
								size='large'
								value={inputs.cpassword}
								onChange={handleChange}
								type='password'
								autoComplete='off'
							/>
							{actionData?.formErrors?.cpassword ? (
								<Text type='danger'>{actionData?.formErrors?.cpassword}</Text>
							) : null}
						</Col>
						<Col span={24}>
							<Button
								type='primary'
								htmlType='submit'
								size='large'
								style={btnCat}>
								Update Profile
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</MainLayout>
	)
}
export default Setting
