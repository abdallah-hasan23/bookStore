var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

function updateYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // احصل على عنصر HTML الذي تريد تحديث السنة فيه
  const yearElement = document.getElementById('year');

  // قم بتحديث نص العنصر ليعرض السنة الحالية
  yearElement.textContent = currentYear;
}

// قم بتحديث السنة مرة عند تحميل الصفحة
window.onload = updateYear;

// ثم، استخدم setInterval لتحديث السنة بانتظام كل 1000 مللي ثانية (كل ثانية)
setInterval(updateYear, 1000);
