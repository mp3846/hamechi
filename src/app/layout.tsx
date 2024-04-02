export const metadata = {
	title: 'Hamechi',
	description: 'A library to provide frequently used react code'
}

export default function RootLayout({ children }) {
	return (
		<html>
			<body>{children}</body>
		</html>
	)
}
