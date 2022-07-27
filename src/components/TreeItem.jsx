import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewLeaf from "./NewLeaf";


function TreeItem(props) {

    return (
        <>
            <Container>
                <Row>
                    <Col style={{marginLeft: `${props.branch.depth * 10}px`}}><NewLeaf
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
