$(function() {

    $('.imaga').on('click', function(e) {
        e.preventDefault()

        $(this).find('.default').addClass('aaa')
        
        setTimeout(() => {
            $(this).addClass('transformed')
        }, 1000);
    })
    
})