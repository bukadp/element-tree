import React from "react";
import TreeItem from "./TreeItem";
import NewLeaf from "./NewLeaf";

function TreeList(props) {

    return (
        <div>
            {props.branches?.map(branch => {
                    return (
                        <div>
                            <div>
                                <TreeItem
                                    key={branch.id}
                                    branch={branch}
                                    addBranch={props.addBranch}/>
                            </div>
                            <TreeList branches={branch.childNodes} addBranch={props.addBranch}/>
                        </div>
                    )
                }
            )}

        </div>
    )
}

export default TreeList;


/*

{props.branches.map((person, index) => {
    return (
        <div key={index}>
            <TreeItem
                key={person.id}
                addBranch={props.addBranch}
                branch={person}
            />

            {person.childNodes.map((pet, index) => {
                return (
                    <div key={index}>
                        <TreeItem
                            key={person.id}
                            addBranch={props.addBranch}
                            branch={person}
                        />
                    </div>
                );
            })}

            <hr />
        </div>
    );
})}

*/


/* return (<TreeItem
key={branch.id}
branch={branch}
addBranch={props.addBranch}/>)
})}*/


/*
const recursive = (id) => {
let leaf = props.branches.find(el => el.id === id)
if (leaf) {
<TreeItem
key={leaf.id}
branch={leaf}
addBranch={props.addBranch}/>
}
if (leaf.childIds.length) {
recursive()
}
}*/

/*

return (
<div>
    {props.branches.map(branch => {
        return (<TreeItem
            key={branch.id}
            branch={branch}
            addBranch={props.addBranch}/>)
    })}

</div>
)*/

/* const Card = (props) => {
return (
<>
{props.data.map((item) => (
<>
<div>
{item.childNodes?.length && <Card data={item.children} />}
</div>
</>
))}
</>
);
};*/


/* const recursive = (id) => {
let leaf = props.branches.find(el => el.id === id)
if (leaf) {
(<TreeItem
key={leaf.id}
branch={leaf}
addBranch={props.addBranch}/>)
}
if (leaf.childNodes?.length) {
recursive(leaf.childNodes.id)
}}*/


/*
<div>
    {props.branches.map(branch => {
        recursive(branch.id)
    })}
</div>
*/


/*-----------------------------------
<div>
    {props.branches.map(branch => {
        if (branch.childNodes?.length) {
            return (<TreeList branches={branch.childNodes}
                              addBranch={props.addBranch}
                              key={branch.id}
            />)
        } else {
            return (<TreeItem
                key={branch.id}
                branch={branch}
                addBranch={props.addBranch}/>)
        }


    })}

</div>*/


/* <div>
{props.branches.map(branch => {
    <div>
        {branch.childNodes?.length && <TreeList branches={branch.childNodes}/>}
    </div>
})}

</div>*/

/*

{props.branches.map(branch => {

    if (branch.childNodes?.length) {
        {
            createTree(branch)
        }
        return (
            <TreeList branches={branch.childNodes}
                      addBranch={props.addBranch}
                      key={branch.id}
            />)
    } else {
        return (<TreeItem
                key={branch.id}
                branch={branch}
                addBranch={props.addBranch}/>

        )
    }


})}*/


/*
<NewLeaf>
    {props.branches.map((branch) => (
        <NewLeaf>{createTree(branch)}</NewLeaf>
    ))}
</NewLeaf>*/

