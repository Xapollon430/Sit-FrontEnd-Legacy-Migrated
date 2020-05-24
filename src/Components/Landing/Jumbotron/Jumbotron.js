import React, { useMemo } from "react";
import {
    Section,
    Title,
    Paragraph,
    Button,
    Footer,
    Link,
} from "./JumbotronCss";

const Jumbotron = React.memo(() => {
    return (
        <Section>
            <Title>
                You love your pets, <br /> so do we.
            </Title>
            <Paragraph>
                At Sit.com we provide the most quality <br />
                caretakers to your beloved pets.
            </Paragraph>
            <Button>Find a Sitter!</Button>
            <Footer>
                Are you looking for a pet sitting job?{" "}
                <Link href="gugle">Apply Now.</Link>
            </Footer>
        </Section>
    );
});

export default Jumbotron;
