import { json, redirect } from '@remix-run/node';
import { Col, Row, Input, Avatar, Alert, Button, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useActionData, Form, useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { btnCat } from './user/styles';
import { loginUser } from '~/backend/src/services/authServices';
import { createUserSession, getUser, getUserId } from '~/authSession/session';
const { Title, Paragraph, Text } = Typography;


export async function loader({ request }) {
	const id = getUserId()
	return (await getUser(request)) ? redirect(`/user/dashboard/${id}`) : null
} 

export async function action({ request }) {
	const form = await request.formData()
	const email = form.get('email')
	const password = form.get('password')
	switch (request.method) {
		case 'POST': {
			const userData = await loginUser(email, password)
			if (!userData) {
				return json(
					{ errors: { email: 'Invalid email or password', password: null } },
					{ status: 400 }
				)
			}
			const userId = userData.user._id;
			const redirectTo = `/user/dashboard/${userData.user._id}`;
			return createUserSession(request, userId, redirectTo);
		}
		default:
			return 'invalid login form data';
	}
}

export const meta = () => {
	return {
		title: 'Login',
	}
}

export default function Login() {
	const actionData = useActionData()
	// const navigate = useNavigate()
	// const userId = actionData?.user._id
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	})

	// useEffect(() => {
	// 	if (userId == undefined) {
	// 		return navigate('/login')
	// 	} else {
	// 		Cookies.set('id', userId)
	// 		return navigate(`/user/dashboard/${userId}`)
	// 	}
	// }, [navigate, userId])

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
				{actionData?.message ? (
					<Alert
						message={actionData?.message}
						type='success'
					/>
				) : null}
				{actionData?.error?.message ? (
					<Alert
						message='Please provide a valid email address and password.'
						type='error'
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
								Login
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
									<Row>
										<Col
											span={8}
											align='left'>
											<Paragraph strong>
												<Button
													type='link'
													href='/password/forgot'>
													Forgot Your Password
												</Button>
											</Paragraph>
										</Col>
									</Row>
								</Col>
								<Col span={24}>
									<Button
										type='primary'
										htmlType='submit'
										size='large'
										style={btnCat}>
										Login
									</Button>
								</Col>
								<Col span={24}>
									<Paragraph
										strong
										style={{ marginBottom: 0 }}>
										Don't have an account?
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
