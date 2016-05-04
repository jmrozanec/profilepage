function pagethumbnail(documentid, page){
    if(typeof documentid !== undefined && documentid !== null){
        pageimglink(documentid, 'W64H64', page, 'png');
    }
    return
}

function brokenimagethumbnail(){
    return "/images/no-thumbnail.png";
}