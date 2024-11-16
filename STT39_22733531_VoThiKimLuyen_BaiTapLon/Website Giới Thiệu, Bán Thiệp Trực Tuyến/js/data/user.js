
const users = [
    {
        username: "user1",
        password: "password1",
        email: "user1@example.com",
        fullName: "Nguyễn Văn A"
    },
    {
        username: "user2",
        password: "password2",
        email: "user2@example.com",
        fullName: "Trần Thị B"
    },
    {
        username: "user3",
        password: "password3",
        email: "user3@example.com",
        fullName: "Phạm Văn C"
    }
];
// Hàm kiểm tra đăng nhập
function loginUser(email, password) {
    return users.find(user => user.email === email && user.password === password);
}