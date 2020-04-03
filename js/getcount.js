$(document).ready(function () {
    var indiaPackages = localStorage.getItem("Indiapackage");
    $('.destination .container ul li a span.india').text('(' + indiaPackages + ')');
    var asiaPackages = localStorage.getItem("Asiapackage");
    $('.destination .container ul li a span.asia').text('(' + asiaPackages + ')');
    var europePackages = localStorage.getItem("Europepackage");
    $('.destination .container ul li a span.europe').text('(' + europePackages + ')');
    var internationalPackages = localStorage.getItem("Internationalpackage");
    $('.destination .container ul li a span.international').text('(' + internationalPackages + ')');
});
