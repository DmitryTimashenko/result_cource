const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
  const name = peopleWaiting.shift();
  const length = peopleWaiting.length;
  alert(`${name} получил(а) посылку. В очереди осталось ${length} человек.`);
}

function leaveQueueWithoutParcel() {
  const name = peopleWaiting.pop();
  alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
}

// 1. Кристина и Олег получили посылки
giveParcel();
giveParcel();

// 2. Кирилл получил посылку
giveParcel();

// 3. Удаляем всех оставшихся людей без посылок
while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
  }