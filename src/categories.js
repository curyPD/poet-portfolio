const categories = {
    love: {
        categoryName: "Любовная лирика",
        titles: {
            title0: "Ты взгляд волнуешь",
            title1: "Знакомый силуэт",
            title10: "Спорхнул на землю чёрный вечер",
            title11: "Наша встреча - дивный случай",
            title12: "Ты смотришь на меня сквозь дым",
            title13: "Поцелуем безответным",
            title14: "Потерялся ключик",
            title15: "Роза",
            title16: "Вероника",
            title17: "Сельсебиль",
            title18: "Всесильной страстью дышит имя",
            title2: "Сердце вдруг полыхнуло пожаром",
            title3: "Занудный, неласковый дождь",
            title4: "Горемычная любовь",
            title5: "Васильки",
            title6: "Родинка",
            title7: "Лето выплыло в зенит",
            title8: "Лисовин",
            title9: "Старой собаке",
        },
    },
    misc: {
        categoryName: "Разное",
        titles: {
            title0: "Памяти отца",
            title1: "Под задиристый крик петушиный",
            title10: "Почти сорок",
            title11: "Байкал",
            title2: "Бабушке Анне",
            title3: "С. Есенину",
            title4: "Лежу. Курю. Смотрю в потолок",
            title5: "Рыбалка",
            title6: "Мечты",
            title7: "Мотылёк",
            title8: "Детство",
            title9: "Легенда",
        },
    },
    motherland: {
        categoryName: "О Родине",
        titles: {
            title0: "Посвящение ссыльным",
            title1: "Стосковавшись по белому лету",
            title10: "Если в сердце тоска и досада",
            title11: "Крыму-2",
            title12: "Развеяло ветром ненастье",
            title13: "Деревня",
            title14: "Покров",
            title15: "Снова я на любимой земле",
            title16: "Я бродил по земле как искатель",
            title17: "Перекати-поле",
            title18: "Уезжаю",
            title19: "Я рожден не в пустынном краю",
            title2: "Неизвестным героям",
            title20: "Черинянь",
            title21: "Тяжкий дар",
            title22: "Станция Глушь",
            title3: "Ностальгическая Русь",
            title4: "Русь хлебосольная",
            title5: "Северу",
            title6: "Три липы",
            title7: "Как прежде, рассветной порою",
            title8: "Простором дышу на природе",
            title9: "Чудесно и неповторимо",
        },
    },
    nature: {
        categoryName: "О природе",
        titles: {
            title0: "Ливень",
            title1: "Летний вечер был тих и приветлив",
            title10: "Предвесенье",
            title11: "Весноводье",
            title12: "Молодая весна",
            title13: "Девчонкою желанною",
            title14: "Весна",
            title2: "Летний вечер",
            title3: "Дождь",
            title4: "Буря",
            title5: "Лето",
            title6: "Вновь сменили наряды деревья",
            title7: "Природа",
            title8: "Метель",
            title9: "Снегири",
        },
    },
    philosophical: {
        categoryName: "Философское",
        titles: {
            title0: "Туманным утром",
            title1: "Ночь",
            title10: "Благодать",
            title11: "Беловодье",
            title12: "Вечером, не занят делом",
            title13: "Другу",
            title14: "День взросления",
            title15: "Аюдагу",
            title16: "Бахчисарай",
            title17: "Алёнушке Васнецовой",
            title2: "Вечер",
            title3: "Перчатки",
            title4: "Сплин",
            title5: "Он в истовой вере своей не хотел",
            title6: "Благодетель",
            title7: "Созвездия у ног",
            title8: "Поэт",
            title9: "Возле церкви",
        },
    },
};

const convertToEntries = function (categories) {
    const dataEntries = Object.entries(categories);
    const sortedDataEntries = dataEntries.reduce((acc, entry) => {
        switch (entry[0]) {
            case "philosophical":
                acc[0] = entry;
                break;
            case "motherland":
                acc[1] = entry;
                break;
            case "nature":
                acc[2] = entry;
                break;
            case "love":
                acc[3] = entry;
                break;
            case "misc":
                acc[4] = entry;
                break;
            default:
                console.log("No category matches");
        }
        return acc;
    }, []);
    return sortedDataEntries;
};

export default convertToEntries(categories);
