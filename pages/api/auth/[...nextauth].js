import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
	providers: [
		Credentials({
			id: "credentials-login",
			name: "Credentials",
			credentials: {},
			async authorize(credentials) {
				return { firstName: "John", lastName: "Doe" };
			},
		}),
	],
	pages: {
		signIn: "/login",
		error: "/login",
	},
	session: {
		jwt: true,
	},

	debug: true,
	callbacks: {
		async jwt(props) {
			const { token, user } = props;
			return token;
		},
		async session(props) {
			const { session, token } = props;

			return session;
		},
		redirect({ url, baseUrl }) {
			return url.startsWith(baseUrl) ? url : baseUrl;
		},
	},
});
