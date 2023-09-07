describe('Login', () => {

  it('Mở màn hình login', () => {
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
  });

  it('Đăng nhập khi không nhập password', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

    // Nhập thông tin đăng nhập sai
    cy.get('input[id="email"]').type('quynh123@gmail.com');

    // Submit form đăng nhập
    cy.get('button[type="submit"]').click();

    // Kiểm tra xem thông báo lỗi hiển thị
    cy.contains('Mục Mật khẩu là bắt buộc.').should('be.visible');
  });

  it('Đăng nhập khi bỏ trống tất cả các trường', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

    // Submit form đăng nhập
    cy.get('button[type="submit"]').click();

    // Kiểm tra xem thông báo lỗi hiển thị
    cy.contains('Mục Mật khẩu là bắt buộc.').should('be.visible');
    cy.contains('Mục Địa chỉ email là bắt buộc.').should('be.visible');
  });

  it('Kiểm tra checkbox ghi nhớ tài khoản', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

   // Nhập thông tin đăng nhập
    cy.get('input[id="email"]').type('quynh123@gmail.com');
    cy.get('input[id="password"]').type('123');

   // Kiểm tra nút "Ghi nhớ tài khoản" và check nó
    cy.get('input[id="remember"]').check();

   // Submit form đăng nhập
    cy.get('button[type="submit"]').click();

   // Kiểm tra xem sau khi đăng nhập thành công, bạn có thể thấy thông tin người dùng hoặc trang chính khác không
    cy.contains('Bảng thông tin chung').should('be.visible');
  });

  it('Kiểm tra chức năng quên mật khẩu', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

   // click vào quên mật khẩu
   cy.contains('Quên mật khẩu?').click();

   // Kiểm tra hiển thị form quên mật khẩu
    cy.contains('Quên mật khẩu').should('be.visible');
  })

  it('Kiểm tra khi nhập sai email vào form quên mật khẩu', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

   // click vào quên mật khẩu
   cy.contains('Quên mật khẩu?').click();

   // Nhập email sai và submit
   cy.get('input[id="email"]').type('quynh12@gmail.com');
   cy.get('button[type="submit"]').click();

   // Kiểm tra hiển thị lỗi
   cy.contains('Không tìm thấy email').should('be.visible')
   .should('have.css', 'background-color', 'rgb(242, 222, 222)')
   .should('have.css', 'color', 'rgb(169, 68, 66)')
  })

  it('Kiểm tra khi không nhập email vào form quên mật khẩu và submit', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

   // click vào quên mật khẩu
   cy.contains('Quên mật khẩu?').click();

   // submit
   cy.get('button[type="submit"]').click();

   // Kiểm tra hiển thị lỗi
   cy.contains('Không tìm thấy email').should('be.visible')
   .should('have.css', 'background-color', 'rgb(242, 222, 222)')
   .should('have.css', 'color', 'rgb(169, 68, 66)')
  })

  it('Kiểm tra khi nhập đúng email vào form quên mật khẩu', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');

   // click vào quên mật khẩu
   cy.contains('Quên mật khẩu?').click();

   // Nhập email sai và submit
   cy.get('input[id="email"]').type('quynh123@gmail.com');
   cy.get('button[type="submit"]').click();

   // Kiểm tra hiển thị form đăng nhập
   cy.contains('Đăng nhập').should('be.visible')

   // Kiểm tra hiển thị notice
   cy.contains('Vui lòng kiểm tra email để xem hướng dẫn đặt lại mật khẩu chi tiết hơn').should('be.visible')
   .should('have.css', 'background-color', 'rgb(223, 240, 216)')
   .should('have.css', 'color', 'rgb(60, 118, 61)')
  })
})

describe('Menu Công việc', () => {
  it('Mở menu', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');
     // Nhập thông tin đăng nhập
     cy.get('input[id="email"]').type('quynh123@gmail.com');
     cy.get('input[id="password"]').type('123');
 
     // Submit form đăng nhập
     cy.get('button[type="submit"]').click();
  
     // Mở Menu
     cy.get('body > aside:nth-child(4) > ul:nth-child(1) > li:nth-child(24) > a:nth-child(1) > span:nth-child(2)').click();
    });

  it('Hiển thị danh sách phân công', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');
     // Nhập thông tin đăng nhập
     cy.get('input[id="email"]').type('quynh123@gmail.com');
     cy.get('input[id="password"]').type('123');
 
     // Submit form đăng nhập
     cy.get('button[type="submit"]').click();
  
     // Mở Menu
     cy.get('body > aside:nth-child(4) > ul:nth-child(1) > li:nth-child(24) > a:nth-child(1) > span:nth-child(2)').click();
     // Kiểm tra hiển thị bảng phân công
     cy.get('.table-responsive')
     .should('be.visible')
     .should('have.css','color', 'rgb(50, 58, 69)');

     //Kiểm tra có button thêm phân công
     cy.get('.btn.btn-info.pull-left.new')
     .should('be.visible')
     .should('have.css','background-color', 'rgb(28, 63, 170)')
     .should('have.css','font-size', '14px');
  })
 
  it('Mở màn hình thêm phân công', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');
     // Nhập thông tin đăng nhập
     cy.get('input[id="email"]').type('quynh123@gmail.com');
     cy.get('input[id="password"]').type('123');
 
     // Submit form đăng nhập
     cy.get('button[type="submit"]').click();
  
     // Mở Menu
     cy.get('body > aside:nth-child(4) > ul:nth-child(1) > li:nth-child(24) > a:nth-child(1) > span:nth-child(2)').click();
     // Kiểm tra hiển thị bảng phân công
     cy.get('.table-responsive')
     .should('be.visible')
     .should('have.css','color', 'rgb(50, 58, 69)');

     //Kiểm tra có button thêm phân công
     cy.get('.btn.btn-info.pull-left.new')
     .should('be.visible')
     .should('have.css','background-color', 'rgb(28, 63, 170)')
     .should('have.css','font-size', '14px');
 
     // Thêm phân công mới
     cy.get('.btn.btn-info.pull-left.new').click();
})
   it('Thêm phân công khi không nhập dữ liệu', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');
     // Nhập thông tin đăng nhập
     cy.get('input[id="email"]').type('quynh123@gmail.com');
     cy.get('input[id="password"]').type('123');
 
     // Submit form đăng nhập
     cy.get('button[type="submit"]').click();
  
     // Mở Menu
     cy.get('body > aside:nth-child(4) > ul:nth-child(1) > li:nth-child(24) > a:nth-child(1) > span:nth-child(2)').click();
     // Kiểm tra hiển thị bảng phân công
     cy.get('.table-responsive')
     .should('be.visible')
     .should('have.css','color', 'rgb(50, 58, 69)');

     //Kiểm tra có button thêm phân công
     cy.get('.btn.btn-info.pull-left.new')
     .should('be.visible')
     .should('have.css','background-color', 'rgb(28, 63, 170)')
     .should('have.css','font-size', '14px');
 
     // Thêm phân công mới
     cy.get('.btn.btn-info.pull-left.new').click();

     // Trường hợp không nhập gì và lưu lại
     cy.get('#submit').click();

     // Kiểm tra xem thông báo lỗi hiển thị
    cy.get('#name-error')
    .should('be.visible')
    .should('have.css','color', 'rgb(252, 45, 66)')
    .should('have.css','font-size', '14px')
    .should('have.css','font-weight', '400');
  });

  it('Thêm phân công khi nhập các trường bắt buộc', () => {
    // Truy cập trang đăng nhập
    cy.visit('https://binbin.cozwork.io');
     // Nhập thông tin đăng nhập
     cy.get('input[id="email"]').type('quynh123@gmail.com');
     cy.get('input[id="password"]').type('123');
 
     // Submit form đăng nhập
     cy.get('button[type="submit"]').click();
  
     // Mở Menu
     cy.get('body > aside:nth-child(4) > ul:nth-child(1) > li:nth-child(24) > a:nth-child(1) > span:nth-child(2)').click();
     // Kiểm tra hiển thị bảng phân công
     cy.get('.table-responsive')
     .should('be.visible')
     .should('have.css','color', 'rgb(50, 58, 69)');

     //Kiểm tra có button thêm phân công không
     cy.get('.btn.btn-info.pull-left.new')
     .should('be.visible')
     .should('have.css','background-color', 'rgb(28, 63, 170)')
     .should('have.css','font-size', '14px');
 
     // Thêm phân công mới
     cy.get('.btn.btn-info.pull-left.new').click();

     // Nhập field "Chủ đề" và lưu lại
     cy.get('#name').type('Chủ đề 123@');
     cy.get('#submit').click();

     // Kiểm tra hiển thị màn hình chi tiết phân công
    cy.get('#task-modal').should('be.visible');

    // Kiểm tra tên phân công hiển thị đúng
    cy.contains('Chủ đề 123@').should('exist');
  });
})