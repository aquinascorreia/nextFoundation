import Layout from '../components/Layout';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as = {`/p/${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Index = () => (
        <Layout>
            <p>Hello Next.js</p>
            <h1>My blog</h1>
            <ul>
                <PostLink id="hello-nextjs" title="Hello nextjs" />
                <PostLink id="learn-nextjs" title="Learn nextjs" />
                <PostLink id="deploy-nextjs" title="Deploy nextjs" />
            </ul>            
            <h2>Fetching data from external API</h2>
                <ul>
                    {props.shows.map(show =>(
                        <li key= {show.id}>
                            <Link href="/p/[id]" as={`/p/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                    
                </ul>
        </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('http://api.konnectinsights.com/v2.0/SocialMessages/Facebook?account_token=KM9Rq2fpANuXl+o7XQFwbztli7MLxbRy&groupid=1550820345&user_token=MGuVc7qFQ22Xl+o7XQFwb1c4fse+RZcF&profileid=1578394727&since=2020-01-11%2000:00:00&until=2020-01-17%2023:59:59&resultType=json&limit=200&sortby=date&sort=desc');
    const data = await res.json();
    console.log(data);
    console.log(`msgs data fetched. Count : ${data.length}`);
    return {
        shows: data.map(entry => entry.docs)
    };
};

export default Index
