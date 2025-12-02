1. Basic git
# Khởi tạo repo
git init

# Cấu hình user (chạy 1 lần) (nhiều lần thì bỏ --global)
git config --global user.name "Tên bạn"
git config --global user.email "email@example.com"

# Kiểm tra trạng thái
git status      # File đỏ: working, xanh: staging
git log         # Xem lịch sử commit

# Thao tác với file
git add <file>  # Thêm file vào staging
git add .       # Thêm tất cả file
git commit -m "message"  # Tạo commit
git push origin main     # Đẩy code lên remote

2. Commit Convention
Format: <type>: <short_description>
Type:
chore: Sửa nhỏ, chỉnh tả, xóa file không dùng
feat: Thêm tính năng/test case mới
fix: Sửa lỗi test case

Ví dụ:
chore: remove unused file
feat: add login test case
fix: fix timeout issue in test 1

3. Quy trình làm việc với Git
git init (nếu chưa có repo)
git add . 
git commit -m "type: description"
git push origin main

4. Note 
- Luôn commit với message rõ ràng theo convention
- Kiểm tra git status trước khi commit
- Mặc định dùng const thay vì let
- Luôn dùng === thay vì ==
- Format code trước khi commit

5. Common issues
- Chưa cấu hình user.name/user.email → không commit được
- Quên git add trước khi commit
- Dùng == thay vì === gây bug khó phát hiện
- Khai báo biến với var gây hoisting issue

6. Toán tử một ngôi
let x = 5;
x++;      // Postfix: trả về 5, sau đó x = 6
++x;      // Prefix: x = 6, trả về 6

7. Terminal note
# Di chuyển thư mục
cd path/to/folder      # Vào folder
cd ..                  # Lùi một cấp
cd                     # Về home directory

# Tạo folder/file
mkdir folder_name      # Tạo folder
touch file_name.js     # Tạo file

# Chạy JavaScript
node file_name.js      # Chạy file JS