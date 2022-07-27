import React from 'react';
import TreeItem from "./TreeItem";

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
                                    addBranch={props.addBranch}
                                    removeBranch={props.removeBranch}
                                />
                            </div>
                        </div>

                    )
                }
            )}

        </div>

    )
}

export default TreeList;
