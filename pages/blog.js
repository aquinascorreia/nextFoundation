import Layout from '../components/Layout';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


Blog.getInitialProps = async function() {  
  let insta = '';

  insta = await fetch('https://graph.facebook.com/17841593698074073/recent_media?user_id=17841429712936619&access_token=EAAoush5u3f4BAF9beMg4ThyobDvHJTotZAhQDXGwOxTpF5p9zAMT0oCNlHDizAbZBTZCNmOofwbtopBRCppSohdClaumKA7OoSVt1ZAZB62CNHAJRTZAWx38yrRHRtPde1YjGT6N0qeWahTL3LNeFZCO8kZC2N7XashahNFeOQrPIJjWTVtpffArzwwK5FpVQKcZD&fields=id,caption,comments_count,like_count,media_type,media_url,permalink,children{media_url,id}');
  const posts = await insta.json();
  console.log(posts.data)

  return {
    posts: posts.data
  }

}

export default function Blog(props) {
  console.log(props);
  return (
    <Layout>        
        <h1>This is the blog page</h1>

        <h2>By using custom server route listening</h2>
          <ul>
            {props.posts.map(ps => (
              <Card style={{ width: '20rem',height :'15 rem'}}>
                <Card.Img variant="top" src={ps.media_url} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>{ps.caption}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>              
            ))}                    
          </ul>
    </Layout>
  );
}
