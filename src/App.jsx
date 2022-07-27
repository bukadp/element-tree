import React, {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from "react-bootstrap";
import TreeList from "./components/TreeList";

function App() {
    const [launch, setLaunch] = useState(false)
    const [branches, setBranches] = useState([
        {id: 0, value: 'root', parentId: null, rootElement: true, childNodes: []}])

/*        {
            id: 0, value: 'root', parentId: "null", rootElement: true, childNodes: [
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
    ])*/

    const addBranch = (value, parentId, branchDepth) => {
        let branch = {
            id: Date.now(),
            value: value,
            parentId: parentId,
            rootElement: false,
            depth: branchDepth + 1,
            childNodes: []
        }
        addBranchInData(branches, parentId, branch)
    }


    const removeBranch = (itemId) => {
        handlerRemove(itemId, branches)
    }

    const handlerRemove = (itemId, arr) => {
        arr.forEach(function (o) {
            let condition = o.childNodes.length
            o.childNodes = o.childNodes.filter(branch => branch.id !== itemId);
            if (condition === o.childNodes.length) {
                handlerRemove(itemId, o.childNodes)
            }
        })
        setBranches([...branches])
    }

    const addBranchInData = (arr, itemId, addBranch) => {
        arr.map(branch => {
            if (branch.id === itemId) {
                branch.childNodes.push(addBranch)
            } else {
                return addBranchInData(branch.childNodes, itemId, addBranch);
            }

        })
        setBranches([...branches])
    }

    const createRoot = () => {
        setLaunch(true)
        addDepth(branches)
    }

    function addDepth(arr, depth = 0) {
        arr.forEach(obj => {
            obj.depth = depth
            addDepth(obj.childNodes, depth + 1)
        })
    }


    return (
        <>
            <Container>
                <div className={launch ? "invisible" : "center"}>
                    <Button
                        variant="primary"
                        onClick={createRoot}
                        className={launch ? "invisible" : ""}
                    >create root</Button>
                </div>
                <div>
                    {launch ? <TreeList
                        branches={branches}
                        addBranch={addBranch}
                        removeBranch={removeBranch}
                    /> : ""}
                </div>
            </Container>
        </>
    );
}

export default App;
