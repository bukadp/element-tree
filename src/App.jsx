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
        {id: 10, value: 'rootEEE', parentId: null, rootElement: true, childNodes: []}

    ])

    const addBranch = (value, parentId, branchDepth) => {
        debugger
        let branch = {
            id: 111,
            value: value,
            parentId: parentId,
            rootElement: false,
            depth: branchDepth+1,
            childNodes: []
        }
        addBranchInData(branches, parentId, branch)
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
        <div>
            <Container>
                <div className={launch ? "hidden" : "center"}>
                    <Button
                        variant="primary"
                        onClick={createRoot}
                        className={launch ? "hidden" : ""}
                    >create root</Button>
                </div>
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


/*   const findIdRecursive = (arr, itemId, addBranch) => {
       debugger
       let res
       const newBranches =  arr.map(branch => {

            if (branch.id === itemId) {
                debugger
                console.log(branch)
                const childNodes = [...branch.childNodes, addBranch]
                console.log("childNodes", childNodes)
                console.log("!!!!!!!!!!", {...branch, childNodes})
                res = {...branch, childNodes}
            }
            else {
                return findIdRecursive(branch.childNodes, itemId, addBranch);
            }

              return res
        })
       console.log("newBranches", [newBranches])
       console.log("res", [res])
       setBranches(
           [
               ...branches,
               res
           ]
       )
       console.log("branches", branches)
   }*/

/*    const findIdRecursiveReduce = (arr, itemId, nestingKey, branch) => {
        const newBranches = arr.reduce((a, item) => {
            debugger
            console.log('a', a)
            if (a) {
                console.log("Aaaaaaaaaaaaaaaaa", {...a, childNodes: [...a.childNodes, branch]});
/!*                const childNodes = {...a, childNodes: [...a.childNodes, branch]}
                console.log("childNodes", childNodes)
                console.log("!!!!!!!!!!", {...branch, childNodes})*!/

                return a

                //-------{...a, childNodes: [...a.childNodes, branch]};
            }

            if (item.id === itemId) return item;
            if (item[nestingKey]) return findIdRecursiveReduce(item[nestingKey], itemId, nestingKey, branch)
        }, null)

        if (newBranches) {
            console.log('newBranches', newBranches)
            setBranches(
                [
                    ...branches,
                    {...newBranches, childNodes: [...newBranches.childNodes, branch]}
                ]
            )
            console.log('branches', branches)
            /!*return {...newBranches, childNodes: [...newBranches.childNodes, branch]}*!/
        }


    };*/


