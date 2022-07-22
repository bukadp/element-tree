import React, {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import NewLeaf from "./components/NewLeaf";
import TreeList from "./components/TreeList";

function App() {
    const [launch, setLaunch] = useState(false)
    const [branches, setBranches] = useState([
        {
            id: 0, value: 'root', parentId: null, rootElement: true, childNodes: [
                {id: 1, value: 'first element', parentId: 0, rootElement: false, childNodes: []},
                {
                    id: 2, value: 'second element', parentId: 0, rootElement: false, childNodes: [
                        {
                            id: 4, value: 'four element', parentId: 2, rootElement: false, childNodes: [
                                {id: 5, value: 'fifth element', parentId: 4, rootElement: false, childNodes: []},
                                {id: 6, value: 'six element', parentId: 4, rootElement: false, childNodes: []},
                            ]
                        },
                    ]
                },
                {id: 3, value: 'third element', parentId: 0, rootElement: false, childNodes: []},
            ]
        },

    ])

    const addBranch = (value) => {
        debugger
        let branch = {
            id: branches.length,
            value: value,
            parentId: 0,
            rootElement: false,
            childNodes: [1]
        }

        console.log("addBranch --- value", value)
        setBranches(branches.concat(branch))
        console.log("branches", branches)
    }

    const createRoot = () => {
        setLaunch(true)
    }

    return (
        <div>
            <Container>
                <Button variant="primary"
                        onClick={createRoot}
                        className={launch ? "hidden" : ""}
                >create root</Button>

                <div>
                    {launch ? <TreeList
                        branches={branches}
                        addBranch={addBranch}/> : ""}
                </div>

            </Container>
        </div>
    );
}

export default App;
