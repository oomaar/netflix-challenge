import { useState, useEffect } from 'react';
import { Loading, Profiles, Navbar, Card, Player } from '..';
import { auth } from '../../lib/firebase';
import { Row, Rows } from '../Footer/styles/styledFooter';
import { Background } from '../Header/styles/styledHeader';
import {
    Container,
    Banner,
    MovieTitle,
    MovieInfo,
    Buttons,
    PlayButton,
    ButtonIcon,
    InfoButton,
    BrowseFooter,
    FooterContainer,
    SocialBox,
    FooterLink,

    ServiceButton,
} from "./styles/styledBrowseContainer";

const BrowseContainer = ({ slides }) => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);

    const user = auth.currentUser || {};
    
    useEffect(() => {
        // console.log("🚀 ~ file: BrowseContainer.js ~ line 7 ~ BrowseContainer ~ profile", profile)
        setTimeout(() => setLoading(false), 3000);
    }, [profile, profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    return profile.displayName ? (
        <Container>
            {loading ? (
                <Loading src={user.photoURL} />
                ) : <Loading.ReleaseBody />}
            <Background className="browseContainer__background">
                <Navbar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    category={category}
                    setCategory={setCategory}
                />

                <Banner>
                    <MovieTitle>Watch Paranormal Now</MovieTitle>
                    <MovieInfo>
                        After a skeptical hematologist is plunged into a series of inexplicable events,
                        he unwillingly becomes the go-to-guy for paranormal investigations.
                    </MovieInfo>
                    <Buttons>
                        <PlayButton>
                            <ButtonIcon src="/images/icons/play.png" alt="Play Button" />
                        Play
                    </PlayButton>
                        <InfoButton>
                            <ButtonIcon src="/images/icons/info.png" alt="info Button" />
                        More info
                    </InfoButton>
                    </Buttons>
                </Banner>

            </Background>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map(item => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/Paranormal.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}

            </Card.Group>

            <BrowseFooter>
                <FooterContainer>
                    <SocialBox>
                        <img src="/images/social/facebook.png" alt="" />
                        <img src="/images/social/instagram.png" alt="" />
                        <img src="/images/social/twitter.png" alt="" />
                        <img src="/images/social/youtube.png" alt="" />
                    </SocialBox>
                    <Rows className="rows__browsePage">
                        <Row>
                            <FooterLink>Audio and Subtitles</FooterLink>
                            <FooterLink>Media Center</FooterLink>
                            <FooterLink>Privacy</FooterLink>
                            <FooterLink>Contact Us</FooterLink>
                        </Row>
                        <Row>
                            <FooterLink>Audio Description</FooterLink>
                            <FooterLink>Investor Relations</FooterLink>
                            <FooterLink>Legal Notices</FooterLink>
                        </Row>
                        <Row>
                            <FooterLink>Help Center</FooterLink>
                            <FooterLink>Jobs</FooterLink>
                            <FooterLink>Cookie Preferences</FooterLink>
                        </Row>
                        <Row>
                            <FooterLink>Gift Cards</FooterLink>
                            <FooterLink>Terms of Use</FooterLink>
                            <FooterLink>Corporate Information</FooterLink>
                        </Row>
                    </Rows>

                        <ServiceButton>Service Code</ServiceButton>
                        <h6>Copy Rights</h6>

                </FooterContainer>
            </BrowseFooter>
        </Container>
    ) : (
            <Profiles user={user} setProfile={setProfile} />
        )
};

export default BrowseContainer;
