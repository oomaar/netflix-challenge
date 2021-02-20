import React from 'react';
import {
    Container,
    Title,
    Faqs,
    FaqsContainer,
} from "./styles/styledAccordion";
import data from "../../fixtures/faqsData.json";
import { Faq, Optionform } from '..';

const Accordion = () => {
    return (
        <Container>
            <Faqs>
                <Title>Frequently Asked Questions</Title>
                <FaqsContainer>
                    {data.map(item => (
                        <Faq 
                            key = {item.id}
                            header = {item.header}
                            body= {item.body}
                        />
                    ))}
                </FaqsContainer>
            </Faqs>
            {/* optionform */}
            <Optionform />
        </Container>
    )
};

export default Accordion;
