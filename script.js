

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)
const data = [] // Girilen bilgilerin ilk alındığı dizi
const allParticipants = [] // Her kişi dizisinin saklandığı ana dizi
const allPeople = []        // Her kişi objesinin saklandığı ana dizi

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
        console.log(allPeople)
    }





    // Diziye input değerlerini atama
    data[0] = cityInputDOM.value
    data[1] = bootInputDOM.value
    data[2] = radiValue("learn")
    data[3] = radiValue("hoca")
    data[4] = goodInputDOM.value
    data[5] = badInputDOM.value

    // Kişi bilgilerinin kümilaftif diziye atılması
    allParticipants.push(data.slice())
    console.log(allParticipants)
    
    // Obje oluşturan ve bilgileri yazdıran fonksiyonun çağrılması
    addPeople()

    // Son girilen bilgilerin doğrulama için ekrana yazdırılması
    console.log(cityInputDOM.value)
    console.log(bootInputDOM.value)
    console.log(radiValue("learn"))
    console.log(radiValue("hoca"))
    console.log(goodInputDOM.value)
    console.log(badInputDOM.value)

    document.getElementById("userForm").reset();


}

