import Link from 'next/link'

const linkStyle = {
    marginRight: 15
};

const Nav = () =>{
    return(
        <div>
            <Link href="/">
                <a style={linkStyle} title="Home Page">Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle} title="About Page">About</a>
            </Link>
            <Link href="/blog">
                <a style={linkStyle} title="Blog Page">Blog</a>
            </Link>
        </div>
    );
}

export default Nav
