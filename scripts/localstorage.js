const saveToLocalStorage = (money) => {
    let expenses = getLocalStorage();

    if(expenses.includes(money)){
        expenses.push(money);
    }

    localStorage.setItem("Expenses", JSON.stringify(expenses));
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Expenses");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

const removeFromLocalStorage = (money) => {
    let expenses = getLocalStorage();

    let namedIndex = expenses.indexOf(money);

    expenses.splice(namedIndex, 1);

    localStorage.setItem("Expenses", Json.stringify(expenses));
}

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage }