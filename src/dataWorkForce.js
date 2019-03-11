let dataJson = WORLDBANK;
let objUtils = Countries;
const objIndicator = Indicator;
const itens = [];
let obj = new Object();
let aux1 = [];
let aux2 = [];
let decada = [];

objUtils.forEach(country => {

    objIndicator.forEach(item => {
        for (let indicators of WORLDBANK[country.code]["indicators"]) {

            if ((indicators.indicatorCode == item.code)) {
                obj = new Object();
                aux1 = [];
                aux2 = [];
                decada = [];
                obj.country = country.name;
                obj.labels = Object.keys(indicators.data);
                obj.values = Object.values(indicators.data);
                obj.indicadorName = item.name;
                obj.borderColor = item.borderColor;
                obj.backgroundColor = item.backgroundColor;

                for (i in obj.labels) {
                    if ((obj.labels[i] >= "2000" && obj.labels[i] <= "2014")) {
                        decada.push(obj.values[i]);
                    }
                    if ((obj.labels[i] >= "2015" && obj.labels[i] <= "2017") && obj.values[i] != "") {
                        aux1.push(obj.labels[i]);
                        aux2.push(Math.round(obj.values[i], 2));
                    }
                }
                aux1.unshift("2000-2014");
                aux2.unshift(calculadora.calcMedia(decada));
                obj.labels = aux1;
                obj.values = aux2;
                //let media = calculadora.calcMedia(decada);
                //console.log(decada);
                itens.push(obj);
            }
        }
    })
});





console.log(itens);
