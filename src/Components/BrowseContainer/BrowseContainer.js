import { useState, useEffect } from 'react';
import { Loading, Profiles, Navbar, Card } from '..';
import { auth } from '../../lib/firebase';
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
} from "./styles/styledBrowseContainer";

const BrowseContainer = ({ slides }) => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const user = auth.currentUser || {};

    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);

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
                {slideRows.map(slideItem => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>

                        <Card.Entities>
                            {slideItem.data.map(item => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image
                                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                    />
                                    <Card.SubTitle>{item.title}</Card.SubTitle>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        {/* <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/Paranormal.mp4" />
                            </Player>
                        </Card.Feature> */}

                    </Card>
                ))}
            </Card.Group>
        </Container>
    ) : (
            <Profiles user={user} setProfile={setProfile} />
        )
};

export default BrowseContainer;
