describe('testing', () => {

  it('TH1', () => {
    cy.visit("https://binbin.cozwork.io/")
    cy.title().should('eq','Cozwork - Đăng nhập')
  })
})
describe('Đăng nhập', () => {
  it('Đăng nhập thành công', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

    // Nhập thông tin đăng nhập
    cy.get('input[id="email"]').type('quynh123@gmail.com');
    cy.get('input[id="password"]').type('123');

    // Submit form đăng nhập
    cy.get('button[type="submit"]').click();

    // Kiểm tra xem sau khi đăng nhập thành công, bạn có thể thấy thông tin người dùng hoặc trang chính khác không
    cy.contains('Bảng thông tin chung').should('be.visible');
  });

  it('Đăng nhập thất bại với thông tin sai', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

    // Nhập thông tin đăng nhập sai
    cy.get('input[id="email"]').type('quynh12@gmail.com');
    cy.get('input[id="password"]').type('1234');

    // Submit form đăng nhập
    cy.get('button[type="submit"]').click();

    // Kiểm tra xem thông báo lỗi hiển thị
    cy.contains('Email hoặc mật khẩu không hợp lệ').should('be.visible');
  });

  it('Đăng nhập khi không nhập email', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

    // Nhập thông tin đăng nhập sai
    cy.get('input[id="password"]').type('1234');

    // Submit form đăng nhập
    cy.get('button[type="submit"]').click();

    // Kiểm tra xem thông báo lỗi hiển thị
    cy.contains('Mục Địa chỉ email là bắt buộc.').should('be.visible');
  })
});
