import { firebase, fieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
	const results = await firebase
		.firestore()
		.collection('users')
		.where('username', '==', username)
		.get();

	return results.docs.map((user) => user.data().length > 0);
}