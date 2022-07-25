import React from "react";
import {Col, Row} from "react-bootstrap";
import NewLeaf from "./NewLeaf";

function TreeItem(props) {

    return (
        <div>
            <Row>
                <Col style={{marginLeft: `${props.branch.depth * 3}vw`}}><NewLeaf
                    branchNameValue={props.branch.value}
                    addBranch={props.addBranch}
                    id={props.branch.id}
                    depth={props.branch.depth}
                    removeBranch={props.removeBranch}/></Col>
                {/*                <NewLeaf
                    branchNameValue={props.branch?.value}
                    addBranch={props.addBranch}/>*/}

                {/*                {props.branch.childNodes.length
                    ? <>
                        <Col><NewLeaf
                            branchNameValue={props.branch.value}
                            addBranch={props.addBranch}/></Col>
                    </>
                    :
                    <>
                                                <Col></Col>
                        <Col style={{marginLeft: `${props.branch.depth * 3}vw`}}><NewLeaf
                            branchNameValue={props.branch.value}
                            addBranch={props.addBranch}/></Col>
                    </>
                }*/}
            </Row>
        </div>

    )
}

export default TreeItem;
