import { fail, redirect } from '@sveltejs/kit';
import { authenticate } from '$lib/auth';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		const password = data.get('password') as string;

		const user = authenticate(username, password);
		if (!user) {
			return fail(400, { error: 'Invalid Credentials' });
		}

		cookies.set('session', JSON.stringify(user), {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			maxAge: 60 * 60 * 24
        });

        throw redirect(302, '/protected');
	}
};
