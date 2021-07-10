function showRegister() {
    const registerForm = document.getElementById('register-form');
    const registerFormModal = document.createElement('div');
    const id = 'register-modal-form';
    registerFormModal.classList.add('modal');
    registerFormModal.setAttribute("id", id);
    registerFormModal.innerHTML = `
        <div class="modal__overlay" onclick = "backFromModalForm(id = '${id}')"></div>
        <div class="modal__body">

            <!-- Register form -->
            <div class="auth-form">
                <div class="auth-form__body">
                    <div class="auth-form__header">
                        <span class="auth-form__heading text-bold">Đăng ký</span>
                        <a href="#" onclick = "switchToLoginForm()" class="auth-form__switch-btn text-bold">Đăng nhập</a>
                    </div>
                    <div class="auth-form__form">
                        <form class="auth-form__group" action="">
                            <input type="email" class="auth-form__input" required placeholder="Nhập email...">
                            <input type="password" class="auth-form__input" required placeholder="Nhập mật khẩu">
                            <input type="password" class="auth-form__input" required placeholder="Nhập lại mật khẩu">
                        </form>
                        <div class="auth-form__text">
                            <p class="auth-form__policy">
                                Bằng việc đăng kí, bạn đã đồng ý với Shoppeo về 
                                <a href="" class="auth-form__link">Điều khoản dịch vụ</a> & 
                                <a href="" class="auth-form__link">Chính sách bảo mật</a>
                            </p>
                        </div>
                        <div class="auth-form__control">
                            <a href="#" onclick = "backFromModalForm(id = '${id}')" class="btn btn-back">TRỞ LẠI</a>
                            <a href="" class="btn btn-primary">ĐĂNG KÝ</a>
                        </div>
                    </div>
                </div>
                <div class="social-connect">
                    <a href="" class="btn btn-social btn-facebook">
                        <i class="fab fa-facebook-square"></i>
                        Kết nối với Facebook
                    </a>
                    <a href="" class="btn btn-social btn-google">
                        <i class="fab fa-google"></i>
                        Kết nối với Google
                    </a>
                </div>
            </div>
        </div>
    `;
    registerForm.appendChild(registerFormModal);
}

function showLogin() {
    const loginForm = document.getElementById('login-form');
    const loginFormModal = document.createElement('div');
    const id = 'login-modal-form';
    loginFormModal.classList.add('modal');
    loginFormModal.setAttribute("id", id);
    loginFormModal.innerHTML = `
        <div class="modal__overlay" onclick = "backFromModalForm(id = '${id}')"></div>
        <div class="modal__body">
        
            <div class="auth-form">
                <div class="auth-form__body">
                    <div class="auth-form__header">
                        <span class="auth-form__heading text-bold">Đăng nhập</span>
                        <a href="#" onclick = "switchToRegisterForm()" class="auth-form__switch-btn text-bold">Đăng ký</a>
                    </div>
                    <div class="auth-form__form">
                        <form class="auth-form__group" action="">
                            <input type="email" class="auth-form__input" required placeholder="Nhập email...">
                            <input type="password" class="auth-form__input" required placeholder="Nhập mật khẩu">
                        </form>
                        <div class="auth-form__text">
                            <p class="auth-form__help">
                                <a href="" class="auth-form__link">Quên mật khẩu</a>
                                <a href="" class="auth-form__link">Cần trợ  giúp?</a>
                            </p>
                        </div>
                        <div class="auth-form__control">
                            <a href="#" onclick = "backFromModalForm(id = '${id}')" class="btn btn-back">TRỞ LẠI</a>
                            <a href="" class="btn btn-primary">ĐĂNG NHẬP</a>
                        </div>
                    </div>
                </div>
                <div class="social-connect">
                    <a href="" class="btn btn-social btn-facebook">
                        <i class="fab fa-facebook-square"></i>
                        Kết nối với Facebook
                    </a>
                    <a href="" class="btn btn-social btn-google">
                        <i class="fab fa-google"></i>
                        Kết nối với Google
                    </a>
                </div>
            </div>
        </div>
    `;
    loginForm.appendChild(loginFormModal);
}

function switchToLoginForm() {
    const registerForm = document.getElementById('register-modal-form');
    registerForm.remove();
    showLogin();
}

function switchToRegisterForm() {
    const loginForm = document.getElementById('login-modal-form');
    loginForm.remove();
    showRegister();
}

function backFromModalForm(id = '') {
    const currentModal = document.getElementById(id);
    currentModal.remove();
}