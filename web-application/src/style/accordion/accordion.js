import { Accordion } from "react-bootstrap";

const AccordionFun = (header, children) => {

    return(
        <>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>{header}</Accordion.Header>
                    <Accordion.Body>{children}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default AccordionFun
