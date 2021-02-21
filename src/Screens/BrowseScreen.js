import React from 'react';
import { useContent } from "../hooks";

const BrowseScreen = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');
    
    return (
        <div>
            <h1>Browse Screen</h1>
        </div>
    );
};

export default BrowseScreen;
