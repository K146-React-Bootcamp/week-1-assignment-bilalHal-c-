/*  Cookie Nedir ?
Cookie (Çerez) kullanıcıların tarayıcıların çeşitli bilgilerin tutulduğu bölümdür.
Cookie (Çerez) oluşturulurken belli bir süre verilir. Bu süre boyunca cookie (çerez) kullanıcının tarayıcısında saklanır.

Cookieler (Çerezler) tarayıcı üzerinde çok kolay bir şekilde değiştirilebilir.
Bu yüzden önemli verileri cookie kullanımında çok fazla yer vermemek gerekir.
İhtiyaç olursa şifrelenerek tutulmalı ve hassas verileri açık bir şekilde paylaşmaktan kaçınılmalıdır. */

// Cookie oluşturma
// Cookie oluşturmak için setCookie fonksiyonu oluşturulur.
// Bu fonksiyon 3 parametre alır.
// 1. Cookie ismi
// 2. Cookie değeri
// 3. Cookie süresi
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Cookie okuma
// Cookie okumak için getCookie fonksiyonu oluşturulur.
// Bu fonksiyon 1 parametre alır.
// 1. Cookie ismi
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Cookie silme
// Cookie silmek için deleteCookie fonksiyonu oluşturulur.
// Bu fonksiyon 1 parametre alır.
// 1. Cookie ismi
function deleteCookie(cname) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Cookie oluşturma
// Cookie oluşturmak için setCookie fonksiyonu çağrılır.
// 1. Cookie ismi
// 2. Cookie değeri
// 3. Cookie süresi 
setCookie("username", "Bilal", 30);

// Cookie okuma
// Cookie okumak için getCookie fonksiyonu çağrılır.
// 1. Cookie ismi
var user = getCookie("username");
if (user != "") {
  alert("Welcome again " + user);
}

// Cookie silme
// Cookie silmek için deleteCookie fonksiyonu çağrılır.
// 1. Cookie ismi
deleteCookie("username");

// Session Storage Nedir ?
// Session Storage, tarayıcıda bir süre saklanan verilerdir.
// Session Storage, tarayıcı kapatıldığında silinir.

// Session Storage oluşturma
// Session Storage oluşturmak için setSessionStorage fonksiyonu oluşturulur.
// Bu fonksiyon 2 parametre alır.
// 1. Session Storage ismi
// 2. Session Storage değeri
function setSessionStorage(sname, svalue) {
  sessionStorage.setItem(sname, svalue);
}

// Session Storage okuma
// Session Storage okumak için getSessionStorage fonksiyonu oluşturulur.
// Bu fonksiyon 1 parametre alır.
// 1. Session Storage ismi
function getSessionStorage(sname) {
  return sessionStorage.getItem(sname);
}