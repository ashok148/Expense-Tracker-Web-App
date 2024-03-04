const mongoose = require('mongoose')

const connectDatabase = async () => {
	await mongoose
		.connect(process.env.DATABASE)
		.then((con) => {
			console.log(con);   
		})
		.catch((err) => {
			console.log(err, 'databse connection fail!')
		})
}

export default connectDatabase;
