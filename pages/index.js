import Layout from '../components/Layout';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import css from '../css/styles.scss'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as = {`/p/${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Index = props => (
        <Layout>
            <p className={css.example}>Hello Next.js</p>
            <h1>My blog</h1>
            <ul>
                <PostLink id="hello-nextjs" title="Hello nextjs" />
                <PostLink id="learn-nextjs" title="Learn nextjs" />
                <PostLink id="deploy-nextjs" title="Deploy nextjs" />
            </ul>   
            <ButtonToolbar>
                <Button variant="danger">Danger</Button>
            </ButtonToolbar>
            <h2>Fetching data from external API</h2>
                <ul>
                    {props.msgs.map(mg => (
                        <li key= {mg.UniqueMessageId}>

                            <Link href="/p/[id]" as={`/p/${mg.UniqueMessageId}`}>
                                <a>{mg.UniqueMessageId}</a>
                            </Link>
                        </li>
                    ))}
                    
                </ul>
                
            {/* <h1>By using custom server route listening</h1>
                <ul>
                    {props.posts.map(ps => (
                        <li key= {ps.id}>

                            <Link as={`/post?UniqueMessageId=${ps.id}`} href={`/post?UniqueMessageId=${ps.id}`} >
                                <a style={{'fontSize':'20px'}}>{ps.id}</a>
                            </Link>
                        </li>
                    ))}
                    
                </ul> */}
        </Layout>
);

Index.getInitialProps = async function() {
    const account_token = 'PT8YzkMO74fPqt8GoAD0+5EpkAdH6WTJ';
    const user_token =  'gzSRj2TyEhnPqt8GoAD0+wymZArbWes0';
    const groupid = '1560761320';
    const profileid = '362460000';
    let res = '';
    
    res = await fetch('http://api.konnectinsights.com/v2.0/SocialMessages/Twitter?account_token='+ account_token + '&groupid='+ groupid+ '&user_token=' + user_token + '&profileid='+ profileid+'&since=2020-01-11%2000:00:00&until=2020-01-17%2023:59:59&resultType=json&limit=5&sortby=date&sort=desc');
        
    const data = await res.json();
    //console.log(data.docs);
    //console.log(`msgs data fetched. Count : ${data.docs.length}`);
    return {
        msgs: data.docs        
    };
};

export default Index
