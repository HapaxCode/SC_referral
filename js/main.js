let referralCodes = ['STAR-VXJR-7MLS', 'STAR-H9QF-FB34', 'STAR-L4B4-VB6Z', 'STAR-ZSMG-R9P9', 'STAR-GY4M-S664', 'STAR-DVV4-NM9S']
const randomize = document.querySelector('.randomize');

function randomReferralFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click', result);

let generator = document.querySelector('#yourReferral');

function result() {
    document.querySelector('#result').style.height = '164px';
    document.querySelector('#yourReferral').style.height = '110px';
    setTimeout(resultDisplay, 800);
}

function resultDisplay() {
    const referral = randomReferralFromArray(referralCodes);
    generator.textContent = referral;
    document.querySelector('#yourReferralComment').style.display = 'block';
}