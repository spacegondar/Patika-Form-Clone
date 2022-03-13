

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)
const data = [] // Girilen bilgilerin ilk alındığı dizi
const allParticipants = [] // Her kişi dizisinin saklandığı ana dizi
const allPeople = []        // Her kişi objesinin saklandığı ana dizi
let x = 0, y = 0, z = 0, d = 0 // Grafik sütun değerleri

// Radio button inputundan değer alabilmek için tanımlanan fonksiyon
function radiValue(name) {
    let radios = document.getElementsByName(name);
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

            return radios[i].value
        }
    }
}

//Form Gönder Etkinliği
function formSubmit(event) {
    console.clear()         // Her bilgi girişinde console temizlenmesi için
    event.preventDefault() // Default işlemi engellendi
    console.log("İşlem Gerçekleşti")

    // İnput değerleri alma
    let cityInputDOM = document.querySelector('#city')
    const bootInputDOM = document.querySelector('#bootcamps')
    let goodInputDOM = document.querySelector('#good')
    let badInputDOM = document.querySelector('#bad')

    // Obje tanımlaması
    function people(city, bootcamp, eventVal, teacher, good, bad) {
        this.city = city
        this.bootcamp = bootcamp
        this.eventVal = eventVal
        this.teacher = teacher
        this.good = good
        this.bad = bad
    }
    // Propların valuelar ile doldurulması
    function addPeople() {
        const peopleObj = new people(
            cityInputDOM.value,
            bootInputDOM.value,
            radiValue("learn"),
            radiValue("hoca"),
            goodInputDOM.value,
            badInputDOM.value

        );
        // Objelerin kümülatif diziye atanıp yazdırılması
        allPeople.push(peopleObj)
        console.log("Properties içeren dizi:")
        console.log(allPeople)
    }



    // Diziye input değerlerini atama
    data[0] = cityInputDOM.value
    data[1] = bootInputDOM.value
    data[2] = radiValue("learn")
    data[3] = radiValue("hoca")
    data[4] = goodInputDOM.value
    data[5] = badInputDOM.value

    //Grafik valuelarının dizi elmenı kontrol edilerek arttırılması
    if (data[1] == "Kofana") {
        x += 1;
    }
    else if (data[1] == "Waikiki") {
        y += 1;
    }
    else if (data[1] == "101") {
        z++;
    }
    else {
        d++;
    }


    // Kişi bilgilerinin kümilaftif diziye atılması
    allParticipants.push(data.slice())
    console.log("Değerleri içeren dizi:")
    console.log(allParticipants)
    // Obje oluşturan ve bilgileri yazdıran fonksiyonun çağrılması
    addPeople()

    // Son girilen bilgilerin doğrulama için ekrana yazdırılması
    console.log("Son girilen bilgiler:")
    console.log(cityInputDOM.value)
    console.log(bootInputDOM.value)
    console.log(radiValue("learn"))
    console.log(radiValue("hoca"))
    console.log(goodInputDOM.value)
    console.log(badInputDOM.value)


    let xValues = ["Kofana", "Waikiki", "A-101", "Trendyol"];
    let yValues = [x, y, z, d];
    let barColors = ["red", "green", "blue", "orange"];


    // Grafik Oluşumu
    var datar = [
        {
            x: xValues,
            y: yValues,
            type: 'bar'
        }
    ];

    Plotly.newPlot('myDiv', datar);


    // Formun temizlenmesi
    document.getElementById("userForm").reset();


}