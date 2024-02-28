const module = document.querySelector(".module");
const refresh = document.querySelector("#refresh");
const count = 6;
const URL = `https://v2.jokeapi.dev/joke/Any?type=single&amount=${count}`;

const showJokes = (jokes) => {
    for(let i=0; i<count; i++) {
        const div = document.createElement("div");
        const pera = document.createElement("p");
        module.append(div);
        div.append(pera);
        div.setAttribute("class", "box");
        pera.innerText = jokes[i]["joke"];
    }
}

const getRespose = async () => {
    const respose = await fetch(URL);
    let data = await respose.json();
    let jokes = data["jokes"];
    showJokes(jokes);
}
getRespose();
refresh.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    })
    getRespose();
});
