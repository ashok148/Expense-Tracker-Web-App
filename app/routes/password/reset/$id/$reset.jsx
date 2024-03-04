import { Col, Row, Input, Avatar, Alert, Button, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useActionData, Form, useNavigate } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { btnCat } from '~/routes/user/styles'
import { resetPassword } from '~/backend/src/services/authServices';
import { validatePassword, validateConfirmPassword } from '~/routes/validation'
const { Title, Text } = Typography

export async function action({ request, params }) {
	const id = params.id
	const token = params.reset
	const form = await request.formData()
	const password = form.get('password')
	const cpassword = form.get('cpassword')
	const formErrors = {
		password: validatePassword(password),
		cpassword: validateConfirmPassword(password, cpassword),
	}
	if (Object.values(formErrors).some(Boolean))
		return {
			formErrors,
		}

	switch (request.method) {
		case 'POST': {
			return await resetPassword({id, token, password, cpassword})
		}
		default:
			return 'invalid reset password data'
	}
}

export const meta = () => {
	return {
		title: 'Reset Password',
	}
}
function Reset() {
	const actionData = useActionData()
	const navigate = useNavigate()
	const [inputs, setInputs] = useState({
		password: '',
		cpassword: '',
	})

	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	useEffect(() => {
		if (actionData?.mydata?.message) {
			navigate('/login')
		}
	}, [actionData?.mydata?.message])

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
						message={actionData?.mydata?.message}
						type='success'
					/>
				) : null}
				{actionData?.error?.message ? (
					<Alert
						message='Fail to reset password!'
						type='error'
					/>
				) : null}

				<div className='main-user-component'>
					<div className='main-component'>
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
								Reset Your Password
							</Title>
						</div>
						<Form method='POST'>
							<Row
								gutter={[16, 16]}
								className='row'>
								<Col
									sm={24}
									xl={24}>
									<Input
										name='password'
										placeholder='Enter New Password'
										required
										size='large'
										autoComplete='off'
										type='password'
										value={inputs.password}
										onChange={handleChange}
									/>
									{actionData?.formErrors?.password ? (
										<Text type='danger'>
											{actionData?.formErrors?.password}
										</Text>
									) : null}
								</Col>
								<Col
									sm={24}
									xl={24}>
									<Input
										name='cpassword'
										placeholder='Confirm New Password'
										required
										autoComplete='off'
										type='password'
										size='large'
										value={inputs.cpassword}
										onChange={handleChange}
									/>
									{actionData?.formErrors?.cpassword ? (
										<Text type='danger'>
											{actionData?.formErrors?.cpassword}
										</Text>
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
										Update Password
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				</div>
			</Col>
		</Row>
	)
}

export default Reset
