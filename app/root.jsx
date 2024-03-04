import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import { Provider } from 'react-redux'
import styles from '../app/style.css'

export function links() {
	return [{ rel: 'stylesheet', href: styles }]
}

export const meta = () => ({
	charset: 'utf-8',
	title: 'Expense Tracker Web Application',
	viewport: 'width=device-width,initial-scale=1',
})



export default function App() {
	return (
			<html lang='en'>
				<head>
					<meta charSet='utf-8' />
					<meta
						name='viewport'
						content='width=device-width,initial-scale=1'
					/>
					<Meta />
					<Links />
				</head>
				<body>
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					{process.env.NODE_ENV === 'development' && <LiveReload />}
				</body>
			</html>
	)
}
