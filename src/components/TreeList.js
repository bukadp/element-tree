import React from "react";
import TreeItem from "./TreeItem";

function TreeList(props) {
/*    const element = (props.branches?.childNodes).map(branch => {
            return (<TreeItem
                key={branch.id}
                branch={branch}
                addBranch={props.addBranch}/>)
        }
    )*/


    return (
        <div>
            {props.branches.map(branch => {
                if (branch.childNodes?.length) {

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


            })}

        </div>
    )
}

export default TreeList;


/*                return (<TreeItem
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

/*    const Card = (props) => {
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


/*    const recursive = (id) => {
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


/*        <div>
            {props.branches.map(branch => {
                <div>
                    {branch.childNodes?.length && <TreeList branches={branch.childNodes}/>}
                </div>
            })}

        </div>*/
