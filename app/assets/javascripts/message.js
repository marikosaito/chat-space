$(function(){
  function buildHTML(data){

    console.log(data);
    if(data.message != ""){
     var html = `<div class="chat-main__messege">
                  <div class-"chat-main__messege-name">
                   ${data.user_name}
                  </div>
                  <div class="chat-main__messege-time">
                   ${data.create_time}
                  </div>
                  <p class="chat-main__messege-text">
                   ${data.message}
                  </p>
                </div>`
    } else  if(data.image != null){
     var html = `<div class="chat-main__messege">
                   <div class-"chat-main__messege-name">
                    ${data.user_name}
                   </div>
                   <div class="chat-main__messege-time">
                    ${data.create_time}
                   </div>
                   <div>
                   <img src="${data.image}">
                   </div>
                 </div>`
    }
    return html;
  }
  $('#new-message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'post',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      console.log(html);
      $('.chat-main__body').append(html);
      $('.chat-main__footer-text').val('');
      $('.chat-main__body').animate({scrollTop: $('.chat-main__body')[0].scrollHeight},'fast');

    })
    .fail(function(){
      alert('error');
    })
  })
})
