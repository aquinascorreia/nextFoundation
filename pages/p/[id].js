import { useRouter } from 'next/router';
import Layout from '../../components/Layout'

const Post = () => {
	const router = useRouter();
	return (
		<Layout>
			<h1>{router.query.id}</h1>
			<p>This is the dynamic blog post</p>
		</Layout>
	);
};

export default Post;
