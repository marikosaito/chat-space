$(function(){
  function buildHTML(data){
    if(data.message != null){
      data_message = `<p class="chat-main__messege-text">
                          ${data.message}
                        </p>`
    } else {
      data_message = ""
    }
    if(data.image != null){
      data_image = `<img src="${data.image}" class="lower-message__image">`
    } else {
      data_image = ""
    }
     var html = `<div class="chat-main__messege">
                   <div class-"chat-main__messege-name">
                    ${data.user_name}
                   </div>
                   <div class="chat-main__messege-time">
                    ${data.create_time}
                   </div>
                   ${data_message}
                   ${data_image}
                 </div>`
    return html;
  }
  $('#new-message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $('.chat-main__footer-btn').removeAttr('data-disable-with')
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
      $('.chat-main__body').append(html);
      $('#new-message')[0]. reset();
      $('.chat-main__body').animate({scrollTop: $('.chat-main__body')[0].scrollHeight},'fast');

    })
    .fail(function(){
      alert('error');
    })
  })
})
