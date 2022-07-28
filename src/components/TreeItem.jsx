import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewLeaf from "./NewLeaf";


function TreeItem(props) {

    return (
        <>
            <Container>
                <Row >
                    <Col >
                        <NewLeaf
                        branch={props.branch}
                        addBranch={props.addBranch}
                        removeBranch={props.removeBranch}
                    /></Col>
                </Row>
            </Container>
        </>
    )
}

export default TreeItem;
