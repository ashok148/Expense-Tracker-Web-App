import { Col, Row, Input, Avatar, Alert, Button, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useActionData, Form } from '@remix-run/react'
import { useState } from 'react'
import { validateEmail } from '../validation'
import { btnCat } from '../user/styles'
const { Title, Paragraph, Text } = Typography
import { forgotPassword } from '~/backend/src/services/authServices'


export async function action({ request }) {
	const form = await request.formData()
	const email = form.get('email')
	const formErrors = {
		email: validateEmail(email),
	}
	if (Object.values(formErrors).some(Boolean))
		return {
			formErrors,
		}

	switch (request.method) {
		case 'POST': {
			return await forgotPassword({ email })
		}
		default:
			return 'invalid forgot password data'
	}
}
export const meta = () => {
	return {
		title: 'Forgot Password',
	}
}
export default function Forgot() {
	const actionData = useActionData()
	const [inputs, setInputs] = useState({
		email: '',
	})

	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<Row
			justify='center'
			align='middle'
			style={{ height: '100vh' }}>
			<Col
				sm={16}
				xl={10}>
				{actionData?.mydata?.message ? (
					<Alert
						type='success'
						message={actionData?.mydata?.message}
					/>
				) : null}
				{actionData?.error?.message ? (
					<Alert
						type='error'
						message='Could not find any user for this account!'
					/>
				) : null}
				<div className='main-user-component'>
					<div className='main-component login'>
						<div style={{ textAlign: 'center' }}>
							<Avatar
								style={{
									backgroundColor: '#9c27b0',
									verticalAlign: 'middle',
								}}
								size='large'>
								<UserOutlined size='large' />
							</Avatar>
							<Title
								level={2}
								style={{ marginTop: '10px' }}>
								Forgot password
							</Title>
						</div>
						<Text style={{ marginBottom: '8px', display: 'block' }}>
							Enter your registered email to reset your password.
						</Text>
						<Form
							method='POST'
							style={{ width: '100%' }}>
							<Row
								gutter={[16, 16]}
								className='row'>
								<Col
									sm={24}
									xl={24}>
									<Input
										name='email'
										placeholder='Email Address'
										required
										size='large'
										value={inputs.email}
										onChange={handleChange}
									/>
									{actionData?.formErrors?.email ? (
										<Text type='danger'>{actionData?.formErrors?.email}</Text>
									) : null}
								</Col>
								<Col
									sm={24}
									xl={24}>
									<Button
										type='primary'
										htmlType='submit'
										style={btnCat}
										size='large'>
										Reset Password
									</Button>
								</Col>
								<Col span={24}>
									<Paragraph strong>
										New here?
										<Button
											type='link'
											href='/'>
											Sign Up
										</Button>
									</Paragraph>
								</Col>
							</Row>
						</Form>
					</div>
				</div>
			</Col>
		</Row>
	)
}
