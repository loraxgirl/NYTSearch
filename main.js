$("searchbutton").on("click", function() {
  var searchterm = $("#search-term").val().trim();
  var numofartciles = $("#select-number").val().trim();
  var startYr = $("#start-year").val().trim();
  var endYr = $("#end-year").val().trim();
  var queryURL = "";
if(startYr == "" & endYr == ""){
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="
    + searchterm + "&api-key=0xsDbzpUAaE8VnGYtmAf814wlGkeicRA";
}else if(startYr = ""){
    endYr = parseInt(endYr);
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="
    + searchterm + "&facet_field=day_of_week&facet=true&end_date=" + endYr  + "0101"
    + "&api-key=0xsDbzpUAaE8VnGYtmAf814wlGkeicRA";
}else if(endYr = ""){
    startYr = parseInt(startYr);
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="
    + searchterm + "&facet_field=day_of_week&facet=true&begin_date=" + startYr + "0101"
    + "&api-key=0xsDbzpUAaE8VnGYtmAf814wlGkeicRA";
}else{
    startYr = parseInt(startYr);
    endYr = parseInt(endYr);
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="
    + searchterm + "&facet_field=day_of_week&facet=true&begin_date=" + startYr + "0101&end_date=" + endYr  + "0101"
    + "&api-key=0xsDbzpUAaE8VnGYtmAf814wlGkeicRA";
}
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        var results = response.data;
        console.log(response);
        for (var i = 0; i < results.length; i++) {
          var articleDiv = $("<div>");
        }
    });
});