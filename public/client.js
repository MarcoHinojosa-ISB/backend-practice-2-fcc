// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $("#computer-info").on("submit", function(event){
    event.preventDefault();
    
    $.get("/computer-info", function(data){
      
      $("#results").append("<h3><strong>IP address:</strong> "+data.ip+"</h3>")
      $("#results").append("<h3><strong>Language:</strong> "+data.language+"</h3>")
      $("#results").append("<h3><strong>Operating System:</strong> "+data.os+"</h3>")
    })
  })
});
