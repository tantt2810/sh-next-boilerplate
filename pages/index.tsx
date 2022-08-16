import React from "react";

import { Cards, Container, Footer, Header, Main } from "@components";
import { ReactQueryExample } from "@components/examples/react-query";

const Home: React.FC = () => {
    return (
        <Container>
            <ReactQueryExample />
            <Header />
            <Main />
            <Cards />
            <Footer />
        </Container>
    );
};

export default Home;
