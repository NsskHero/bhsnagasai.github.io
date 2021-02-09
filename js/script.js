const timeIntervel = 1000 * 60 * 1; // check every 1 mins

function changeBackground(){
    const hours = new Date().getHours();
    if(hours >= 7 && hours < 12){
        $('main').css('background', 'linear-gradient(to right top, #65dfc9, #6cdbeb)');
        $('.contact').css('background', 'linear-gradient(to right top, #65dfc9, #6cdbeb)');
    }
    else if(hours >= 12 && hours < 16){
        $('main').css('background', 'linear-gradient(to right top, #faf551, #ff0000)');
        $('.contact').css('background', 'linear-gradient(to right top, #faf551, #ff0000)');
    }
    else if(hours >= 16 && hours < 19){
        $('main').css('background', 'linear-gradient(to right top, #4a2f48, #f3b88d)');
        $('.contact').css('background', 'linear-gradient(to right top, #4a2f48, #f3b88d)');
    }
    else{
        $('main').css('background', 'linear-gradient(to right top, #000000, #210a3e)');
        $('.contact').css('background', 'linear-gradient(to right top, #000000, #210a3e)');
    }
    
}



setInterval(() => changeBackground(), timeIntervel);

$(document).ready(function(){
    changeBackground();
    $('.link').click(function(){
        id  = $(this).attr('id');
        $('.main-content').children('div').each(function(){
            $(this).addClass('display-none');
        });
        $('*[data-model="'+id+'"]').removeClass('display-none');
    
    });
});