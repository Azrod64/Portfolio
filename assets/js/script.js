const Http = new XMLHttpRequest();
const url='https://ade-web-consult.univ-amu.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?projectId=8&resources=3929&calType=ical&firstDate=2024-01-29&lastDate=2024-02-02';
Http.open("POST", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}

