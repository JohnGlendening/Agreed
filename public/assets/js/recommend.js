$(function() {
    $(".guest_like").on("click", function(event) {
      var id = $(this).data("id");
      var newGuestLike = $(this).data("newGuestLike");
  
      var guestLikeMovie= {
        guest_like: 1
      
      };
      $.ajax("/api/recommended/guest/" + id, {
        type: "PUT",
        data: guestLikeMovie
      }).then(
        function() {
          console.log("Changed to likeMovie", newGuestLike);
          location.reload();
        }
      );
      
    });
    
});
$(function() {
  $(".guest_dislike").on("click", function(event) {
    var id = $(this).data("id");
    var newGuestLike = $(this).data("newGuestLike");

    var guestLikeMovie= {
      guest_like: 0
    
    };
    $.ajax("/api/recommended/guest/" + id, {
      type: "PUT",
      data: guestLikeMovie
    }).then(
      function() {
        console.log("Changed to likeMovie", newGuestLike);
        location.reload();
      }
    );
    
  });
  
});


$(function() {
    $(".host_like").on("click", function(event) {
      var id = $(this).data("id");
      var newHostLike = $(this).data("newHostLike");
  
      var hostLikeMovie= {
        host_like: 1
      };
  
      $.ajax("/api/recommended/host/" + id, {
        type: "PUT",
        data: hostLikeMovie
      }).then(
        function() {
          console.log("Changed to likeMovie", newHostLike);
          location.reload();
        }
      );
    });
});

$(function() {
  $(".host_dislike").on("click", function(event) {
    var id = $(this).data("id");
    var newHostLike = $(this).data("newHostLike");

    var hostLikeMovie= {
      host_like: 0
    };

    $.ajax("/api/recommended/host/" + id, {
      type: "PUT",
      data: hostLikeMovie
    }).then(
      function() {
        console.log("Changed to likeMovie", newHostLike);
        location.reload();
      }
    );
  });
});


