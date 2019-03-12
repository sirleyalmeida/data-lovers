let dataJson = WORLDBANK;
let objUtils = Countries;
const objIndicator = Indicator;
const itens = [];
let obj = new Object();
let arrValue = [];
let arrLabel = [];
let decade = [];

objUtils.forEach(country => {

    objIndicator.forEach(item => {
        for (let indicators of WORLDBANK[country.code]["indicators"]) {

            if ((indicators.indicatorCode == item.code)) {
                obj = new Object();
                arrLabel = [];
                arrValue = [];
                decade = [];
                obj.country = country.name;
                obj.labels = Object.keys(indicators.data);
                obj.values = Object.values(indicators.data);
                obj.indicatorName = item.name;
                obj.borderColor = item.borderColor;
                obj.backgroundColor = item.backgroundColor;
                obj.allYears = Object.keys(indicators.data);
                obj.allResult = Object.values(indicators.data);

                for (i in obj.labels) {
                    if ((obj.labels[i] >= "2000" && obj.labels[i] <= "2014")) {
                        decade.push(obj.values[i]);
                    }
                    if ((obj.labels[i] >= "2015" && obj.labels[i] <= "2017") && obj.values[i] != "") {
                        arrLabel.push(obj.labels[i]);
                        arrValue.push(Math.round(obj.values[i], 2));
                    }
                }
                arrLabel.unshift("2000-2014");
                arrValue.unshift(calculator.calcMedia(decade));
                obj.labels = arrLabel;
                obj.values = arrValue;
                itens.push(obj);
            }
        }
    })
});