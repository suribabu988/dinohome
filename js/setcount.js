$(document).ready(function () {
    var indiaPackage = $('.epicbg #india .nav-link.mileslink.subitem').length;
    localStorage.setItem("Indiapackage", indiaPackage);
    var europePackage = $('.epicbg #europe .nav-link.mileslink.subitem').length;
    localStorage.setItem("Europepackage", europePackage);
    console.log(europePackage);
    var asiaPackage = $('.epicbg #asia .nav-link.mileslink.subitem').length;
    localStorage.setItem("Asiapackage", asiaPackage);
    var internationalPackage = $('.epicbg #international .nav-link.mileslink.subitem').length;
    localStorage.setItem("Internationalpackage", internationalPackage);
    var pilgrimagePackage = $('.epicbg #pilgrimage .nav-link.mileslink.subitem').length;
    localStorage.setItem("Pilgrimagepackage", pilgrimagePackage);
});