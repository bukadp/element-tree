import React, {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from "react-bootstrap";
import TreeList from "./components/TreeList";
import {loadState, saveState} from "./utils/localstorage";

function App() {
    const [launch, setLaunch] = useState(false)
    const [branches, setBranches] = useState(() => initialState())

    useEffect(() => {
        saveState(branches)
    }, [branches]);

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

    function initialState() {
        const initialStateFromLocalstorage = loadState()
        if (initialStateFromLocalstorage === null) {
            return [
                {id: 0, value: 'root', parentId: null, rootElement: true, depth: 0, childNodes: []}
            ]
        } else {
            return initialStateFromLocalstorage
        }
    }

    return (
        <>
            <Container>
                <div className={launch ? "invisible" : "center"}>
                    <Button
                        variant="primary"
                        onClick={() => setLaunch(true)}
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
