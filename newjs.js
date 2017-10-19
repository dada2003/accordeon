const $ = jQuery;
let entries = [];
$('#content .post.block-in-loop').each(function(){
    const title = $(this).find('.entry-title').text().replace('', '').trim();
    const author = $(this).find('.author a').first().text().replace('', '').trim();
    const link = $(this).find('.col-img-in a').attr('href');
    entries.push({
        title:title,
        author:author,
        url:link
    });
});
console.log(entries)
$.each(entries,function(index,element){
    console.log(element.author);
});