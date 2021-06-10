let nam = parseInt(prompt("moi ban nhap nam "));
if (nam % 4 == 0) {
    if (nam % 100 == 0) {
        if (nam % 400 == 0) {
            alert(nam + " nam nhuan");
        } else {
            alert(nam + " khong phai nam nhuan");
        }
    } else {
        alert(nam + " nam nhuan");
    }
} else {
    alert(nam + " khong phai nam nhuan");
}