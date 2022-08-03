$(function(){
        // 
    let searchIcon = $(`.searchIcon`)
    let searchBox = $(`.search`)
    searchIcon.click(function(){
     
        searchBox.fadeIn(300) 
    })


    //  cancel Icon

    let cancelIcon = $(`.cancelIcon`)
     
    cancelIcon.click(function(){

       searchBox.slideUp()
    })
})