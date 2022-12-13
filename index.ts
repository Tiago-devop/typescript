const fetchCourses = async () => {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  showCourses(data);
};

fetchCourses();

interface ICourse {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}
function showCourses(courses: ICourse[]) {
  courses.forEach((course, index) => {
    if (index === 0) {
      console.log(course);
      document.body.innerHTML += `
        ___________________________________________________
        <h1 style="color:blue;">${course.nivel}</h1>
        <h3>${course.nome}</h3>
        <p style="font-size:20px;">Classes Available: ${
          course.idAulas.length
        }</p>
        <p style="font-size:20px;">Tags Available: ${displayArrayAsTexts(
          course.tags
        )}</p>

        ___________________________________________________
      `;
    }
    if (index === 1) {
      console.log(course);
      document.body.innerHTML += `
        ___________________________________________________
        <h1 style="color:red;">${course.nivel}</h1>
        <h3>${course.nome}</h3>
        <p style="font-size:20px;">Classes Available: ${
          course.idAulas.length
        }</p>
        <p style="font-size:20px;">Tags Available: ${displayArrayAsTexts(
          course.tags
        )}</p>

        ___________________________________________________
      `;
    }
  });
}

function displayArrayAsTexts(strs: string[]) {
  let result = ``;
  strs.forEach((item) => {
    result += `${item}, `;
  });

  return result;
}
