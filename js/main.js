let referralCodes = [['STAR-VXJR-7MLS', 'Xaxa84'], ['STAR-H9QF-FB34','DafunkyHapax'], ['STAR-L4B4-VB6Z', 'Nico_Farseeker'], ['STAR-ZSMG-R9P9', 'Mr_Teigneux'], ['STAR-GY4M-S664', 'DK-Asabrag'], ['STAR-DVV4-NM9S', 'Kryhos'], ['STAR-RKRT-NCSR', 'So666'], ['STAR-VP3Q-C6RQ','Shrek'], ['STAR-YPXV-N5J7','Ben13']]
const randomize = document.querySelector('.randomize');

function randomReferralFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

randomize.addEventListener('click', resultDisplay);

function resultDisplay() {
    document.getElementById('result').style.height = '164px';
    document.getElementById('yourReferral').style.height = '110px';
    setTimeout(finalResult, 800);
}

function finalResult() {
    const referralAndName = randomReferralFromArray(referralCodes);
    const referral = referralAndName[0];
    const name = referralAndName[1];
    let generator = document.getElementById('yourReferral');
    generator.textContent = referral;
    let referralName = document.getElementById('yourReferralNameSpan');
    referralName.textContent = name;
    document.getElementById('yourReferralComment').style.display = 'block';
    document.getElementById('yourReferralName').style.display = 'block';
}

function copy_to_clipboard(yourReferral) {
    var text = document.getElementById(yourReferral).innerHTML;
    navigator.clipboard.writeText(text).then(function() {
        /* clipboard successfully set */
        // on change l'apparence du texte pour montrer qu'il a été copié :
        document.getElementById(yourReferral).style.color = "grey"; 
        document.getElementById(yourReferral).style.fontStyle = "italic";
    }, function() {
        /* clipboard write failed */
    });
}