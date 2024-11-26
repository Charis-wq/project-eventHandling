//array that store a list of quotes and their author
const quotes = [
{ text: "Balas dendam terbaik adalah menjadikan dirimu lebih baik.", author:  "Ali bin Abi Thalib"},

 { text: "Mulai setiap harimu dengan pikiran positif dan hati yang bersyukur.", author: - "Roy T. Bennett."},

 { text: "Jangan biarkan opini orang lain menenggelamkan suara dari dalam diri Anda.", author:  "Steve Jobs"},

 {text: "Hidup akan sangat indah jika kamu tahu manakah jalan yang benar.", author: "saya"},

 {text: "Siapa pun yang berusaha menjatuhkanmu memang sudah berada di bawahmu.", author: "saya"},

 {text: "Makin kamu membuang-buang waktu, makin jauh pula kamu dari kesukesan.", author: "saya"},

 {text:"Seorang pemenang adalah pemimpi yang tidak pernah menyerah." , author: " Nelson Mandela"},

 {text: "Mau ganteng, cantik atau tidak. Jika hatinya sudah tidak se frekuensi.bagaiman?",author: "saya"},

 {text: "Secapek-capeknya kerja, lebih capek nganggur.", author:  "Ernest Prakasa"},

 {text: "Ujian pahit sesungguhnya merupakan penyamaran dari sebuah berkah yang tidak diketahui.", author: "saya"}

];

//get html elements by their id
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

//function to generate a random function
function generateQuote(){
    //get random index from the quotes array
    const randimIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randimIndex];

    //update the quate text and author in the element HTML
    quoteText.textContent =`'${randomQuote.text}'`;
    quoteAuthor.textContent =`- ${randomQuote.author}`;


}

//add event listener for the button
newQuoteButton.addEventListener('click', generateQuote);

//call generate quote when page first loaded
generateQuote()