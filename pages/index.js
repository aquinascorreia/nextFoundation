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
    const account_token = {account_token};
    const user_token =  {user_token};
    const groupid = {groupid};
    const profileid = {profileid};
    let res = '';
    
    res = await fetch('http://abc.datasource.com/v2.0/sm/Twitter?account_token='+ account_token + '&groupid='+ groupid+ '&user_token=' + user_token + '&profileid='+ profileid+'&resultType=json&limit=5&sortby=date&sort=desc');
        
    const data = await res.json();
    //console.log(data.docs);
    //console.log(`msgs data fetched. Count : ${data.docs.length}`);
    return {
        msgs: data.docs        
    };
};

export default Index
