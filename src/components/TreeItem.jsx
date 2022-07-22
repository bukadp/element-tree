import React from "react";
import {Col, Row} from "react-bootstrap";
import NewLeaf from "./NewLeaf";

function TreeItem(props) {

    return (
        <div>
            <Row>
                <NewLeaf
                    branchNameValue={props.branch.value}
                    addBranch={props.addBranch}/>

{/*                {props.branch.childNodes
                    ? <>
                        <Col></Col>
                        <Col><NewLeaf
                            branchNameValue={props.branch.value}
                            addBranch={props.addBranch}/></Col>
                    </>
                    :
                    <>
                        <Col><NewLeaf
                            branchNameValue={props.branch.value}
                            addBranch={props.addBranch}/></Col>
                    </>
                }*/}
            </Row>
        </div>

    )
}

export default TreeItem;

/*

<Col><NewLeaf branchNameInit={props.branch.value}/></Col>*/
