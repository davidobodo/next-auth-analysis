import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
	const { data } = useSession();
	const router = useRouter();

	const handleLogin = async () => {
		try {
			const res = await signIn("credentials-login");
		} catch (e) {}
	};

	useEffect(() => {
		if (data) {
			router.push("/");
		}
	}, [data]);
	return (
		<>
			<div className="container">
				<button onClick={handleLogin}>LOGIN</button>
			</div>

			<style jsx>{`
				.container {
					height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				button {
					min-width: 180px;
					padding: 20px;
					border-radius: 2px;
					border: 1px solid;
					cursor: pointer;
					background-color: #4389f8;
					color: #fff;
				}
			`}</style>
		</>
	);
}
