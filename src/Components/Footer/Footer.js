import {
    Container,
    Title,
    Rows,
    Row,
    Link,
} from "./styles/styledFooter";

const Footer = () => {
    return (
        <Container>
            <Title>Questions? Contact us</Title>

            <Rows>
                <Row>
                    <Link>FAQ </Link>
                    <Link>Investor Relations </Link>
                    <Link>Privacy </Link>
                    <Link>Speed Test </Link>
                </Row>
                <Row>
                    <Link>Help Center </Link>
                    <Link>Jobs </Link>
                    <Link>Cookie Preferences </Link>
                    <Link>Legal Notices </Link>
                </Row>
                <Row>
                    <Link>Account </Link>
                    <Link>Ways to Watch </Link>
                    <Link>Coroporate Information </Link>
                    <Link>Netflix Originals </Link>
                </Row>
                <Row>
                    <Link>Media Center </Link>
                    <Link>Terms of Use </Link>
                    <Link>Contact Us </Link>
                </Row>
            </Rows>
        </Container>
    )
};

export default Footer;
