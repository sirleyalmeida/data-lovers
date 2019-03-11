const dataJson = WORLDBANK;
const objUtils = Countries;
const objIndicator = Indicator;
const itens = [];
const filterItens = [];
let obj = new Object();
let arrValue = [];
let arrLabel = [];
let decada = [];
let arrList = [];

objUtils.forEach(country => {

    objIndicator.forEach(item => {
        for (let indicators of WORLDBANK[country.code]["indicators"]) {

            if ((indicators.indicatorCode == item.code)) {
                obj = new Object();
                arrLabel = [];
                arrValue = [];
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
                        arrLabel.push(obj.labels[i]);
                        arrValue.push(Math.round(obj.values[i], 2));
                    }
                }
                arrLabel.unshift("2000-2014");
                arrValue.unshift(calculadora.calcMedia(decada));
                obj.labels = arrLabel;
                obj.values = arrValue;
                itens.push(obj);
            }
        }
    })
});


objUtils.forEach(country => {

    objIndicator.forEach(item => {
        console.log(item);
        for (let filterindicators of WORLDBANK[country.code]["indicators"]) {
           

            if ((filterindicators.indicatorCode == item.code)) {
                //console.log("=");
                obj = new Object();
                arrList = [];
                filterindicators = [];
                obj.country = country.name;
                //obj.labels = Object.keys(indicators.data);
                // obj.values = Object.values(indicators.data);
                obj.indicadorName = item.name;
                console.log(obj);


                for (i in obj.labels) {
                    // if ((obj.labels[i] >= "2000" && obj.labels[i] <= "2014")) {
                    //     decada.push(obj.values[i]);
                    // }
                    // if ((obj.labels[i] >= "2015" && obj.labels[i] <= "2017") && obj.values[i] != "") {
                    //     arrLabel.push(obj.labels[i]);
                    //     arrValue.push(Math.round(obj.values[i], 2));
                    // }
                    let Filterindicators = WORLDBANK.BRA["indicators"].filter(indicators => (indicators["countryName"]["data"]["indicatorName"]));
    
                }
                
                obj.arrList = arrList;Console.log(filterItens);
                // obj.labels = arrLabel;
                // obj.values = arrValue;
                filterItens.push(obj);
            }
        }
    })
});

Console.log(filterItens);

// //let Filterindicators = WORLDBANK["indicators"].filter(indicators => (indicators["countryName"]["data"]["indicatorName"]));

// // arrValue.push(Math.round(obj.values[i], 2));
// //console.log(filterindicators);

// for (i in WORLDBANK["indicators"]){
//       //if (WORLDBANK["indicators"][i]["countryName"]['data']["indicatorName"] ) {
//         console.log(WORLDBANK["indicators"][i]["countryName"]['data']["indicatorName"]);
//       //}
//     }
//       //console.log(WORLDBANK["indicators"][i]["countryName"]['data']);
  
      