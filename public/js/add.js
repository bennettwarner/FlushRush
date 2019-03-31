$(document).ready(() => {

  // Place JavaScript code here...
  $(function () {
 
    $("#cleanlinessStars").rateYo({
      rating: 0,
      fullStar: true
    });
    $("#trafficStars").rateYo({
        rating: 0,
        fullStar: true
      });
    $("#tpStars").rateYo({
        rating: 0,
        fullStar: true
      });
  });

  $("#cleanlinessStars").rateYo()
  .on("rateyo.change", function (e, data) {

    var ratingCleanliness = Math.round(data.rating);
    $('input[name=cleanliness]').val(ratingCleanliness);

  });
  $("#trafficStars").rateYo()
  .on("rateyo.change", function (e, data) {

    var ratingTraffic = Math.round(data.rating);
    $('input[name=traffic]').val(ratingTraffic);

  });
  $("#tpStars").rateYo()
  .on("rateyo.change", function (e, data) {

    var ratingTp = Math.round(data.rating);
    $('input[name=tp]').val(ratingTp);

  });
});
