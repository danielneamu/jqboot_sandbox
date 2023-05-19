/* eslint-env jquery */
import "./globals"; // Must be at top

$(() => {
  $("[data-toggle=popover]").popover({
    html: true,
    content: function () {
      const self = this;
      const content = $(self).attr("data-popover-content");
      const $body = $(content).find(".popover-body").clone();
      const $input = $body.find("input");
      const $alert = $body.find("div.alert");

      $input.on("input", function () {
        const value = $(this).val();
        if (value.length < 5) return;
        console.log(value);
        console.log($alert);
        $alert.show();
      });
      return $body;
    }
  });
});

$(document).ready(function () {
  $("#x").click(function () {
    $("#overlay").fadeIn().delay(2000).fadeOut();
  });
});
