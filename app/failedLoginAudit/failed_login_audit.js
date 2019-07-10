import { callbacks } from '../callbacks';

callbacks.add('beforeValidateLogin', (login) => {
	if (login.allowed !== true) {
		let user = 'unknown';
		if (login.user !== undefined) {
			user = login.user.username;
		}
		const { connection } = login;
		const { clientAddress } = connection.clientAddress;
		const forwardedFor = connection.httpHeaders['x-forwarded-for'];
		const userAgent = connection.httpHeaders['user-agent'];
		console.log(
			'Failed login detected - Username[%s] ClientAddress[%s] ForwardedFor[%s] UserAgent[%s]',
			user, clientAddress, forwardedFor, userAgent);
	}
	return login;
}
);
