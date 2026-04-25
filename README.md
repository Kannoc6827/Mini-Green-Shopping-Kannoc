# 🌿 Mini Green Shop

**Mini Green Shop** là một ứng dụng web thương mại điện tử (e-commerce) đơn giản, được xây dựng để cung cấp trải nghiệm mua sắm cơ bản như duyệt sản phẩm, tìm kiếm, lọc danh mục, sắp xếp giá và quản lý giỏ hàng trực tuyến.

## 📋 Mục lục
1. [Giới thiệu](#-giới-thiệu)
2. [Tính năng nổi bật](#-tính-năng-nổi-bật)
3. [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
4. [Cấu trúc dự án](#-cấu-trúc-dự-án)
5. [Hướng dẫn cài đặt & Chạy dự án](#-hướng-dẫn-cài-đặt)
6. [Giải thích luồng hoạt động (Logic)](#-giải-thích-luồng-hoạt-động)
7. [Gợi ý nâng cấp](#-gợi-ý-nâng-cấp)

---

## 🚀 Giới thiệu
Dự án này là một mô hình cửa hàng nhỏ (Mini Shop) tập trung vào giao diện thân thiện và trải nghiệm người dùng mượt mà. Ứng dụng cho phép người dùng thao tác hoàn toàn trên trình duyệt mà không cần Backend phức tạp nhờ khả năng lưu trữ trạng thái vào `localStorage` của trình duyệt.

## ✨ Tính năng nổi bật

### 1. Quản lý danh mục & Sản phẩm
* **Hiển thị sản phẩm:** Danh sách sản phẩm được render động từ mảng dữ liệu JavaScript.
* **Bộ lọc thông minh:** Cho phép lọc sản phẩm theo các danh mục như: *Áo, Giày dép, Phụ kiện, Học tập, Dụng cụ, Khác*.
* **Tìm kiếm:** Tìm kiếm sản phẩm theo tên thời gian thực (real-time) khi người dùng nhập vào thanh tìm kiếm.
* **Sắp xếp:** Hỗ trợ sắp xếp giá theo thứ tự tăng dần hoặc giảm dần.

### 2. Trải nghiệm giỏ hàng (Shopping Cart)
* **Thêm/Xóa sản phẩm:** Người dùng có thể thêm sản phẩm vào giỏ hoặc xóa trực tiếp trong modal giỏ hàng.
* **Tính toán tổng tiền:** Hệ thống tự động cập nhật tổng giá trị giỏ hàng sau mỗi thao tác.
* **Tính bền vững:** Giỏ hàng được lưu trữ trong `localStorage`, do đó dữ liệu không bị mất khi tải lại trang.

### 3. Giao diện (UI/UX)
* **Đáp ứng (Responsive):** Sử dụng hệ thống lưới của Bootstrap 5.3.0 giúp hiển thị tốt trên nhiều thiết bị.
* **Tương tác mượt mà:** Sử dụng các hiệu ứng CSS `hover` (chuyển động `translateY` và đổ bóng) tạo cảm giác hiện đại.
* **Modal chi tiết:** Xem chi tiết sản phẩm qua cửa sổ Modal mà không cần chuyển trang.

---

## 🛠 Công nghệ sử dụng
* **Frontend:** HTML5, CSS3, JavaScript (ES6+).
* **Framework/Library:** Bootstrap 5.3.0 (qua CDN) cho hệ thống lưới và các thành phần giao diện.
* **Lưu trữ:** Web Storage API (`localStorage`).

---

## 📂 Cấu trúc dự án
```text
/
├── minishop.html    # File cấu trúc giao diện chính
├── minishop.css     # File tùy chỉnh giao diện (Styling)
├── minishop.js      # File xử lý logic sản phẩm và giỏ hàng
├── app.js           # File liên kết logic (thường gọi chung với minishop.js)
└── img/             # Thư mục chứa hình ảnh sản phẩm
    ├── áo.jpg
    ├── giày.jpg
    └── ...
```

---

## ⚙️ Hướng dẫn cài đặt
1.  **Tải mã nguồn:** Sao chép toàn bộ dự án về máy.
2.  **Cấu trúc thư mục:** Đảm bảo thư mục `img/` tồn tại và chứa đúng các tệp ảnh đã được định nghĩa trong mảng `products` trong `minishop.js`.
3.  **Chạy dự án:** Bạn chỉ cần mở tệp `minishop.html` bằng bất kỳ trình duyệt web nào (Chrome, Firefox, Edge).
    * *Lưu ý:* Nếu bạn gặp vấn đề khi tải ảnh, hãy kiểm tra lại đường dẫn trong mảng `products` khớp với tên file thực tế trong thư mục `img/`.

---

## 💡 Giải thích luồng hoạt động (Logic)

### Dữ liệu sản phẩm
Dữ liệu sản phẩm được quản lý tập trung trong một mảng đối tượng (Object Array) `products`. Mỗi object chứa:
* `id`, `name`, `category`, `price`, `img`, `desc`.

### Render dữ liệu
Hàm `renderProducts()` đóng vai trò là "trái tim" của giao diện:
1.  Nó lọc dữ liệu dựa trên biến `currentFilter` (danh mục) và `keyword` (từ khóa tìm kiếm).
2.  Nó tạo ra các chuỗi HTML tương ứng với Bootstrap `col-md-4`.
3.  Nó chèn HTML vào phần tử có id `productList`.

### Giỏ hàng
* Khi nhấn "Thêm", hàm `addToCart(id)` sẽ tìm sản phẩm theo ID.
* Nếu sản phẩm đã tồn tại, tăng số lượng (`qty++`); nếu chưa, thêm mới vào mảng `cart`.
* Hàm `updateCart()` cập nhật `localStorage`, badge số lượng trên icon giỏ hàng và hiển thị danh sách chi tiết trong `cartModal`.

---

## 🔮 Gợi ý nâng cấp (Future Improvements)
* **Thanh toán:** Thêm tính năng "Đặt hàng" gửi dữ liệu về server.
* **Trình diễn ảnh:** Thêm hiệu ứng phóng to ảnh khi click vào sản phẩm.
* **Thông báo:** Sử dụng `Toast` (thông báo nhỏ góc màn hình) thay vì chỉ thêm vào giỏ hàng im lặng để tăng trải nghiệm người dùng.
* **CSS:** Tối ưu hóa file CSS, sửa dấu `}` thừa ở cuối tệp `minishop.css` để code sạch sẽ hơn.

---
*Dự án này là nền tảng tốt để học tập về DOM Manipulation và quản lý trạng thái trong JavaScript thuần.*
"cảm ơn đã đọc readme tổng quan về trang web mà tôi đã thiết kế để mô tả cho dự án của mình"
