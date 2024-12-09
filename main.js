window.onload = function () {

    const input = document.getElementById("input");
    const list = document.getElementById("list");
    const addButton = document.getElementById("add");
    const sortByNameButton = document.getElementById("sortByName");
    const sortByValueButton = document.getElementById("sortByValue");
    const deleteButton = document.getElementById("delete");

    let pairs = [];

    addButton.onclick = function () {
        const text = input.value.trim();

        if (text.indexOf("=") !== -1) {
            const parts = text.split("=");
            const name = parts[0].trim();
            const value = parts[1].trim();

            if (name && value) {
                pairs.push({ name, value });
                const option = document.createElement("option");
                option.textContent = `${name} = ${value}`;
                option.value = pairs.length - 1;
                list.appendChild(option);
                input.value = "";
            } else {
                alert("Введите name и value");
            }
        } else {
            alert("Ошибка, используйте формат: name=value");
        }
    };

    sortByNameButton.onclick = function () {
        pairs.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });

        list.textContent = '';

        for (let i = 0; i < pairs.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${pairs[i].name} = ${pairs[i].value}`;
            list.appendChild(option);
        }
    };

    sortByValueButton.onclick = function () {
        pairs.sort(function (a, b) {
            if (a.value < b.value) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            return 0;
        });

        list.textContent = '';

        for (let i = 0; i < pairs.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${pairs[i].name} = ${pairs[i].value}`;
            list.appendChild(option);
        }
    };

    list.textContent = '';

    deleteButton.onclick = function () {
        const options = list.options;

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                pairs.splice(i, 1);
                list.remove(i);
            }
        }
    };
};
