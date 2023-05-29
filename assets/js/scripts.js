
// Fade-in Animation
window.addEventListener('load', function () {
  let fadeInElement = document.querySelector('.fade-in');
  fadeInElement.style.opacity = 1;
});

// Scroll Animation
window.addEventListener('scroll', function () {
  let scrollElements = document.querySelectorAll('.scroll-animation');
  for (let element of scrollElements) {
    let position = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  }
});

// Lắng nghe sự kiện khi người dùng chọn từ menu
document.querySelectorAll('.menu a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

    // Xóa lớp "active" khỏi tất cả các liên kết trong menu
    document.querySelectorAll('.menu a').forEach(function (link) {
      link.classList.remove('active');
    });

    // Thêm lớp "active" vào liên kết được chọn
    this.classList.add('active');

    var target = this.getAttribute('href'); // Lấy giá trị thuộc tính href của liên kết

    // Ẩn tất cả các "main"
    document.querySelectorAll('.main').forEach(function (mainItem) {
      mainItem.style.display = 'none';
    });

    // Hiển thị "main" được chọn
    var main = document.querySelector(target); // Tìm phần tử "main" tương ứng
    main.style.display = 'block';
  });
});




