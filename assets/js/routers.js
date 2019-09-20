const url = "https://agconsulting.altervista.org/";
let query = (document.location.href).slice(25);

let replacer = function(str, from, to) {
  return str.replace(from, to);
}

fetch(url + query)
  .then((response) => {
    return response.text();
  })
  .then((html) => {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        let header = doc.querySelector('head').innerHTML;
        let content = doc.querySelector('body').innerHTML;

        document.querySelector('head').innerHTML = doc.querySelector('head').innerHTML;
        document.querySelector('content').innerHTML = replacer(doc.querySelector('body').innerHTML, "agconsulting.altervista.org", "andreagelmini.it");
  });
