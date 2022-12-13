"use strict";
const fetchCourses = async () => {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    showCourses(data);
};
fetchCourses();
function showCourses(courses) {
    courses.forEach((course, index) => {
        if (index === 0) {
            console.log(course);
            document.body.innerHTML += `
        ___________________________________________________
        <h1 style="color:blue;">${course.nivel}</h1>
        <h3>${course.nome}</h3>
        <p style="font-size:20px;">Classes Available: ${course.idAulas.length}</p>
        <p style="font-size:20px;">Tags Available: ${displayArrayAsTexts(course.tags)}</p>

        ___________________________________________________
      `;
        }
        if (index === 1) {
            console.log(course);
            document.body.innerHTML += `
        ___________________________________________________
        <h1 style="color:red;">${course.nivel}</h1>
        <h3>${course.nome}</h3>
        <p style="font-size:20px;">Classes Available: ${course.idAulas.length}</p>
        <p style="font-size:20px;">Tags Available: ${displayArrayAsTexts(course.tags)}</p>

        ___________________________________________________
      `;
        }
    });
}
function displayArrayAsTexts(strs) {
    let result = ``;
    strs.forEach((item) => {
        result += `${item}, `;
    });
    return result;
}
