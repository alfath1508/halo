
function sobekTiket() {
    const ticket = document.querySelector('.ticket');
    ticket.classList.add('torn');
    setTimeout(() => {
        ticket.innerHTML = "<p style='margin:auto;'>Yeayyyyy, semoga kamu mau yaa. Mau banget nonton bareng kamu, jujur bukan hanya nonton tapi saya sudah buat plan kecil kecilan karena menurut saya ini adalah momen spesial soalnya nontonnya bareng orang paling cantik dan lucu, saya senang banget🥹😋 mau yaaa </p>";
        ticket.classList.remove('torn');
    }, 700);
}
