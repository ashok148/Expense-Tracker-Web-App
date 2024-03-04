import { useState, useEffect } from 'react'
import { useActionData, Form, useNavigate } from '@remix-run/react'
import {
	validatefirst,
	validatelast,
	validateEmail,
	validatePassword,
	validateConfirmPassword,
} from './validation'
import { Col, Row, Input, Avatar, Alert, Button, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Cookies from 'js-cookie'
import { btnCat } from './user/styles'
import { registerUser } from '~/backend/src/services/authServices'
import { createUserSession } from '~/authSession/session';
import { json } from '@remix-run/node';
const { Title, Paragraph, Text } = Typography;

export async function action({ request }) {
	const form = await request.formData()
	const firstname = form.get('firstname')
	const lastname = form.get('lastname')
	const email = form.get('email')
	const password = form.get('password')
	const cpassword = form.get('cpassword')

	const formErrors = {
		firstname: validatefirst(firstname),
		lastname: validatelast(lastname),
		email: validateEmail(email),
		password: validatePassword(password),
		cpassword: validateConfirmPassword(password, cpassword),
	}

	if (Object.values(formErrors).some(Boolean))
		return {
			formErrors,
		}

	switch (request.method) {
		case 'POST': {
			const userData = await registerUser(
				firstname,
				lastname,
				email,
				password,
				cpassword,
			)
			if (!userData) {
				return json(
					{ errors: "Fail to register!" },
					{ status: 400 }
				)
			}
			const userId = userData.user._id;
			const redirectTo = `/user/dashboard/${userData.user._id}`;
			return createUserSession(request, userId, redirectTo);
		}
		default:
			return 'invalid form data'
	}
}

export const meta = () => {
	return {
		title: 'Sign Up',
	}
}

export default function Signup() {
	const actionData = useActionData()
	const navigate = useNavigate()
	const userId = actionData?.myData?.user._id
	const [inputs, setInputs] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		cpassword: '',
	})
	useEffect(() => {
		if (userId == undefined) {
			return navigate('/')
		} else {
			Cookies.set('id', userId)
			return navigate(`/user/dashboard/${userId}`)
		}
	}, [navigate, userId])

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
				{actionData?.myData?.message ? (
					<Alert
						message={actionData?.myData?.message}
						type='success'
					/>
				) : null}
				{actionData?.error?.message ? (
					<Alert
						message='User Already Exits, Please login'
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
								Sign up
							</Title>
						</div>
						<Form method='POST'>
							<Row
								gutter={[16, 16]}
								className='row'>
								<Col
									xs={24}
									sm={12}
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
										<Text type='danger'>
											{actionData?.formErrors?.firstname}
										</Text>
									) : null}
								</Col>
								<Col
									xs={24}
									sm={12}
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
										<Text type='danger'>
											{actionData?.formErrors?.lastname}
										</Text>
									) : null}
								</Col>
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
										autoComplete='off'
										size='large'
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
										placeholder='Confirm Password'
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
										Sign Up
									</Button>
								</Col>
								<Col
									sm={24}
									xl={24}>
									<Paragraph strong>
										Already have an account?
										<Button
											type='link'
											href='/login'>
											Sign In
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
