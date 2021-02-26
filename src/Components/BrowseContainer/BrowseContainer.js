import { useState, useEffect } from 'react';
import { Loading, Profiles, Navbar, Card, Test} from '..';
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

            {/* <Card.Group>
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
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/Paranormal.mp4" />
                            </Player>
                        </Card.Feature> 

                    </Card>
                ))}
            </Card.Group> */}
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
                            {/* <Player>
                                <Player.Button />
                                <Player.Video src="/videos/bunny.mp4" />
                            </Player> */}
                            <p>Hello !</p>
                        </Card.Feature>
                    </Card>
                ))}

            </Card.Group>

            {/* <h1>Footer</h1> */}
            <svg id="youtube-logo" viewBox="0 0 869 611" preserveAspectRatio="xMinYMid">   <path d="M344.583367,419.231578 L344.542768,175.20748 L579.212438,297.642065 L344.583367,419.231578 Z M859.81519,132.932866 C859.81519,132.932866 851.328389,73.0861828 825.290571,46.7295833 C792.26663,12.138802 755.245893,11.9658781 738.270787,9.94191744 C616.739917,1.15738673 434.434591,1.15738673 434.434591,1.15738673 L434.054158,1.15738673 C434.054158,1.15738673 251.754846,1.15738673 130.216458,9.94342113 C113.239849,11.9673818 76.2356521,12.138802 43.1966742,46.731087 C17.158856,73.0861828 8.68558821,132.932866 8.68558821,132.932866 C8.68558821,132.932866 0.000300737101,203.21663 0.000300737101,273.495883 L0.000300737101,339.382871 C0.000300737101,409.663628 8.68558821,479.945888 8.68558821,479.945888 C8.68558821,479.945888 17.158856,539.798586 43.1981779,566.149171 C76.2371558,600.739952 119.633519,599.646772 138.961893,603.275166 C208.442689,609.937996 434.248134,611.999549 434.248134,611.999549 C434.248134,611.999549 616.741421,611.724374 738.272291,602.941347 C755.247397,600.912876 792.268134,600.739952 825.292075,566.149171 C851.329893,539.798586 859.816694,479.945888 859.816694,479.945888 C859.816694,479.945888 868.492959,409.665131 868.492959,339.382871 L868.492959,273.495883 C868.489952,203.21663 859.81519,132.932866 859.81519,132.932866 L859.81519,132.932866 Z"></path></svg>
        </Container>
    ) : (
            <Profiles user={user} setProfile={setProfile} />
        )
};

export default BrowseContainer;
