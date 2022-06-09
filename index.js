let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

function filterCourses(requiredRange) {
    let firstEl = requiredRange[0],
        lastEl = requiredRange[1],
        resultList = [];

        if (firstEl == null) { 
            firstEl = 0;
        }
        if (lastEl == null) {
            lastEl = Infinity;
        }
        if (firstEl > lastEl) { 
            return console.log('Диапозон цен введен неправильно! Порядок MIN и MAX нарушен');;
        }

        for (let i = 0; i < courses.length; i++) {
            if (courses[i].prices[0] == null ) {
                courses[i].prices[0] = 0;
            }
            if (courses[i].prices[1] == null ) {
                courses[i].prices[1] = Infinity;
            }

            if ((firstEl < courses[i].prices[0] && lastEl > courses[i].prices[1]) || 
                (firstEl > courses[i].prices[0] && lastEl > courses[i].prices[1] && firstEl < courses[i].prices[1]) ||
                (firstEl < courses[i].prices[0] && lastEl < courses[i].prices[1] && lastEl > courses[i].prices[0]) ||
                (firstEl > courses[i].prices[0] && lastEl < courses[i].prices[1])
            ) {
                resultList.push(courses[i]);
            }
        }
        if (resultList.length == 0) {
            return console.log('Курсов подходящих под ваш ценовой диапозон - НЕТ:( Возможно, вам стоит изменить цену');
        } else {
            resultList.sort((a, b) => (a.prices[0] > b.prices[0]) ? 1 : -1);
            return console.log(`Вам могут подойти следующие курсы при ценовом диапозоне от ${firstEl} до ${lastEl}:`, resultList);
        }
}

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

filterCourses(requiredRange1);
filterCourses(requiredRange2);
filterCourses(requiredRange3);
