const goals = [8, 1, 1, 3, 2, -1, 5];
const validGoals = goals.filter(g => g >= 0);

const numberOfGoals = Math.max(...goals);
const number = goals.indexOf(maxGoals);
alert(`Самый результативный матч был под номером ${number + 1}. В нем было забито ${numberOfGoals} гол(ов).`);

const minGoals = Math.min(...validGoals);
const minMatchesIndices = goals.map((g, i) => g === minGoals ? i + 1 : null).filter((id) => id !== null);
alert(`Самые нерезультативные матчи были под номерами ${minMatchesIndices.join(', ')}. В каждом из них было забито по ${minGoals} мячу(а).`);

const totalGoals = validGoals.reduce((sum, g) => sum + g, 0);
alert(`Общее количество голов за сезон равно ${totalGoals}`);

const hasAutoDefeats = goals.some(g => g < 0);
alert(`Были автоматические поражения: ${hasAutoDefeats ? 'да' : 'нет'}`);

const averageGoals = totalGoals / validGoals.length;
alert(`Среднее количество голов за матч равно ${averageGoals}`);

const sortedGoals = goals.sort((a, b) => a - b);
alert(`Отсортированные голы: ${sortedGoals.join(', ')}`);