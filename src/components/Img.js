import React from 'react';

function Img({item}) {
    //const isImage = this.props.url.split().pop() === 'jpg';
    var sampleUrl = item.url;
    var video_id = sampleUrl.split("v=")[1].substring(0, 11) || sampleUrl.split('/')[1].substring(0, 11)
    return (
     <div>
        {(item.img)?
        <div>
             <img src={item.url} alt={item.bucketName}/>
        </div>:
        <div>
            <iframe id={item.id} className="embed-responsive-item" src={`https://www.youtube.com/embed/${video_id}`}>
        </iframe> 
        </div>}
     </div>

    )
}

export default Img;