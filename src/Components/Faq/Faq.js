import { useRef, useState } from 'react';
import {
    Container,
    Item,
    Header,
    Icon,
    Content,
    Text,
} from "./styles/styledFaq";

const Faq = ({ header, body }) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
    }

    return (
        <Container>
            <Item onClick={toggleAccordion}>
                <Header>{header}</Header>
                <Icon src="/images/icons/add.png" alt="add" />
            </Item>
            <Content ref={content} style={{ maxHeight: `${setHeight}` }}>
                <Text dangerouslySetInnerHTML={{ __html: body }} />
            </Content>
        </Container>
    )
};

export default Faq;
