function stripHTML(dirtyString) {

  return dirtyString.replace(/(<([^>]+)>)/ig,""); // innerHTML will be a xss safe string
}

$( document ).ready(function() {
    
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); 
        $('.content').html(post.content);
           $('.twwet').attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+stripHTML(post.content));
      },
      cache: false
    });

$('#reload-btn').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        beforeSend: function(){
        $('#spinner').addClass('fa-spin');
    },
    complete: function(){
        $('#spinner').removeClass('fa-spin');

    },
      success: function(data) {
        var post = data.shift(); 
        $('.content').html(post.content);
        $('.twwet').attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+stripHTML(post.content));
      },
      cache: false
    });
  });
});
