import React from 'react';

function AutoComplete(params) {
    const { results } = params;

    return (
        results && results.data?.length > 0 ? (
            <ul className="suggestions">
                {results.data?.map(function (value) {
                    return <li className="App" key={value.id} >{value.title}</li>
                })}
            </ul>
        ) : (
            <div>No results</div>
        )
    )

}

export default AutoComplete;