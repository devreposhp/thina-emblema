emblemas = [
    "NÂO APAGUE ESSA LINHA",
    "HLV24RAD74",
    "HLV24RAD65",
    "HLV24RAD64",
    "HLV24RAD63",
    "HLV24RAD62",
    "HLV24RAD61",
    "HLV24RAD60",
    "HLV24RAD59",
    "HLV24RAD58",
    "HLV24RAD57",
    "HLV24RAD56",
    "HLV24RAD55",
    "HLV24RAD54",
    "HLV24RAD53",
    "HLV24RAD52",
    "HLV24RAD51",
    "HLV24RAD50",
    "HLV24RAD49",
    "HLV24RAD48",
    "HLV24RAD47",
    "HLV24RAD46",
    "HLV24RAD45",
    "HLV24RAD44",
    "HLV24RAD43",
    "HLV24RAD42",
    "HLV24RAD41",
    "HLV24RAD40",
    "HLV24RAD39",
    "HLV24RAD38",
    "HLV24RAD37",
    "HLV24RAD36",
    "HLV24RAD35",
    "HLV24RAD34",
    "HLV24RAD33",
    "HLV24RAD32",
    "HLV24RAD31",
    "HLV24RAD30",
    "HLV24RAD29",
    "HLV24RAD28",
    "HLV24RAD27",
    "HLV24RAD26",
    "HLV24RAD25",
    "HLV24RAD24",
    "HLV24RAD23",
    "HLV24RAD19",
    "HLV24RAD18",
    "HLV24RAD17",
    "HLV24RAD16",
    "HLV24RAD15",
    "HLV24RAD14",
    "HLV24RAD13",
    "HLV24RAD12",
    "HLV24RAD11",
    "HLV24RAD10",
    "HLV24RAD9",
    "HLV24RAD8",
    "HLV24RAD7",
    "HLV24RAD6",
    "HLV24RAD5",
    "HLV24RAD4",
    "HLV24RAD3",
    "HLV24RAD2",
    "HLV24RAD1",
    "HLV23RAD94",
    "HLV23RAD93",
    "HLV23RAD92",
    "HLV23RAD90",
    "HLV23RAD89",
    "HLV23RAD88",
    "HLV23RAD87",
    "HLV23RAD86",
    "HLV23RAD85",
    "HLV23RAD84",
    "HLV23RAD83",
    "HLV23RAD82",
    "HLV23RAD81",
    "HLV23RAD80",
    "HLV23RAD79",
    "HLV23RAD78",
    "HLV23RAD77",
    "HLV23RAD76",
    "HLV23RAD75",
    "HLV23RAD74",
    "HLV23RAD73",
    "HLV23RAD72",
    "HLV23RAD71",
    "HLV23RAD70",
    "HLV23RAD69",
    "HLV23RAD68",
    "HLV23RAD67",
    "HLV23RAD66",
    "HLV23RAD65",
    "HLV23RAD64",
    "HLV23RAD63",
    "HLV23RAD62",
    "HLV23RAD61",
    "HLV23RAD60",
    "HLV24RAD65",
    "HLV24RAD17",
    "HLV24RAD13",
    "HLV24RAD11",
    "HLV24RAD10",
    "HLV24RAD7",
    "HLV24RAD6",
    "HLV24RAD5",
    "HLV24RAD3",
    "HLV23RAD90",
    "HLV23RAD89",
    "HLV23RAD88",
    "HLV23RAD87",
    "HLV23RAD83",
    "RADIOLV8",
    "HLV23RAD3",
    "HLV23RAD9",
    "HLV23RAD10",
    "HLV23RAD11",
    "HLV23RAD12",
    "HLV23RAD13",
    "HLV23RAD14",
    "HLV23RAD15",
    "HLV23RAD16",
    "HLV23RAD17",
    "HLV23RAD20",
    "HLV23RAD22",
    "HLV23RAD23",
    "HLV23RAD28",
    "HLV23RAD29",
    "HLV23RAD30",
    "HLV23RAD31",
    "HLV23RAD32",
    "HLV23RAD33",
    "HLV23RAD34",
    "HLV23RAD35",
    "HLV23RAD37",
    "HLV23RAD58",
    "HLV23RAD59",
    "HLV23RAD60",
    "HLV23RAD61",
    "HLV23RAD62",
    "HLV23RAD63",
    "HLV23RAD64",
    "HLV23RAD66",
    "HLV23RAD67",
    "HLV23RAD68",
    "HLV23RAD70",
    "HLV23RAD71",
    "HLV23RAD72",
    "HLV23RAD73",
    "HLV23RAD74",
    "HLV23RAD75",
    "HLV23RAD76",
    "HLV23RAD77",
    "HLV23RAD81",
    "HLV23RAD94",
]

comando = ":givebadge"
nick_user = "WiredD"
count = 0

function emblema() {
    const inputDestino = document.querySelector('input.chat-input');

    if (inputDestino) {
        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Enter',
            code: 'Enter'
        });

        inputDestino.value = "@green@ Começando a entregar os emblemas!";

        inputDestino.dispatchEvent(event);
        inputDestino.value = '';

        for (let i = 0; i < emblemas.length; i++) {
            setTimeout(() => {
                count++
                inputDestino.value = comando + " " + nick_user + " " + emblemas[i];
                inputDestino.dispatchEvent(event);
                inputDestino.value = '';

                console.log("1", i)
                console.log("2", emblemas.length)
                if (i >= emblemas.length - 1) {
                    setTimeout(() => {
                        inputDestino.value = "@green@Um total de " + (count - 1) + " emblemas foram entregues a " + nick_user + "!";
                        inputDestino.dispatchEvent(event);
                        inputDestino.value = '';
                    }, 1000);
                }
            }, i * 1000);
        }
    }
}

emblema()