import React from 'react'
const updateNews=async () => {
    console.log('hi');
    let url=`http GET https://api.spotify.com/v1/users/smedjan \
    Authorization:'Bearer 1POdFZRZbvb...qqillRxMr2z'`;
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
}
const Temp=() => {
    // updateNews();
    return (
        <div>
            this is a temp pageSize
            <form onSubmit={updateNews}>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Temp
