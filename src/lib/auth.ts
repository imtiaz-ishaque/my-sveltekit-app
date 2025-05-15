export type User = {
	username: string;
};

const mockUser = {
	username: 'admin',
	password: 'admin123'
};

export function authenticate(username: string, password: string): User | null {
	if (username === mockUser.username && password === mockUser.password) {
		return { username };
	}
	return null;
}
