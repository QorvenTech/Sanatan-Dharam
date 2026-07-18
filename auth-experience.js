(function () {
  'use strict';

  var selectedRegistrationLanguage = 'both';
  var resetCode = '';
  var initialized = false;

  function byId(id) { return document.getElementById(id); }
  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
    });
  }

  function googleIcon() {
    return '<svg aria-hidden="true" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09A6.9 6.9 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>';
  }

  function lotusLogo() {
    return '<svg class="auth-lotus" aria-hidden="true" viewBox="0 0 72 64" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M36 52C23 44 20 29 36 10c16 19 13 34 0 42Z"/><path d="M32 51C19 48 10 38 13 21c14 6 21 17 19 30Z"/><path d="M40 51c13-3 22-13 19-30-14 6-21 17-19 30Z"/><path d="M25 52C14 54 5 50 3 37c12-1 20 5 22 15Zm22 0c11 2 20-2 22-15-12-1-20 5-22 15Z"/><path d="M12 56c14 5 34 5 48 0M18 61h36"/></svg>';
  }

  function passwordField(id, label, autocomplete) {
    return '<div class="auth-field"><label for="' + id + '">' + label + '</label><div class="auth-input-wrap"><input id="' + id + '" type="password" autocomplete="' + autocomplete + '" placeholder="••••••••"><button class="password-toggle" type="button" data-password-toggle="' + id + '" aria-label="Show password">◉</button></div><small class="field-error" id="' + id + 'Error"></small></div>';
  }

  function markup() {
    return '<div class="auth-page" role="dialog" aria-modal="true" aria-labelledby="modalTitle">' +
      '<header class="auth-topbar"><button type="button" class="auth-brand" onclick="closeModal()">' + lotusLogo() + '<span><strong>सनातन धर्म</strong><small>Sanatan for Humanity</small></span></button><button type="button" class="auth-back" onclick="closeModal()">← Back to website</button></header>' +
      '<div class="auth-shell">' +
        '<aside class="auth-art"><div class="auth-art-copy"><h2 id="authArtTitle">Your sacred reading, remembered.</h2><p id="authArtCopy">Sign in to save resources and keep your library available across supported devices.</p><p class="auth-art-note" id="authArtNote">Public knowledge remains available without signing in.</p><div class="auth-shanti">ॐ&nbsp;&nbsp; शान्तिः शान्तिः शान्तिः</div></div></aside>' +
        '<main class="auth-panel">' +
          '<div id="errorMsg" class="error-msg auth-alert" role="alert"></div><div id="successMsg" class="success-msg auth-alert" role="status"></div>' +
          '<section class="auth-view" id="loginForm">' +
            '<header class="auth-heading"><h1 id="modalTitle">Welcome Back <span>पुनः स्वागत है</span></h1><p id="modalSubtitle">Sign in to save resources, sync your library and continue reading.</p></header>' +
            '<button class="auth-google" id="googleBtn" type="button" onclick="loginWithGoogle()">' + googleIcon() + 'Continue with Google</button>' +
            '<div class="auth-divider">or sign in with email</div>' +
            '<div class="auth-field"><label for="loginEmail">Email Address</label><div class="auth-input-wrap"><input id="loginEmail" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com"></div><small class="field-error" id="loginEmailError"></small></div>' +
            passwordField('loginPassword', 'Password', 'current-password') +
            '<div class="auth-row"><label class="auth-check"><input id="rememberLogin" type="checkbox" checked>Remember me</label><button type="button" class="auth-link" onclick="showForgotPassword()">Forgot password?</button></div>' +
            '<button class="auth-primary" id="loginBtn" type="button" onclick="loginWithEmail()">✦ &nbsp; Login</button>' +
            '<div class="auth-switch">Don’t have an account? <button class="auth-link" type="button" onclick="switchToRegister()">Register</button></div>' +
            '<div class="auth-privacy"><span>♢</span><p>Your account is used for saved resources and supported reading preferences. Public content remains accessible without signing in. <a href="privacy-policy.html" class="auth-link">Privacy Policy</a></p></div>' +
          '</section>' +
          '<section class="auth-view" id="registerForm" hidden>' +
            '<header class="auth-heading"><h1 id="registerTitle">Create Your Account <span>अपना खाता बनाएँ</span></h1><p>Save resources and choose your preferred reading language.</p></header>' +
            '<button class="auth-google" id="regGoogleBtn" type="button" onclick="loginWithGoogle()">' + googleIcon() + 'Continue with Google</button>' +
            '<div class="auth-divider">or register with email</div>' +
            '<div class="auth-field"><label for="regName">Full Name</label><div class="auth-input-wrap"><input id="regName" type="text" autocomplete="name" placeholder="Your name"></div><small class="field-error" id="regNameError"></small></div>' +
            '<div class="auth-field"><label for="regEmail">Email Address</label><div class="auth-input-wrap"><input id="regEmail" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com"></div><small class="field-error" id="regEmailError"></small></div>' +
            passwordField('regPassword', 'Password', 'new-password') +
            passwordField('regConfirmPassword', 'Confirm Password', 'new-password') +
            '<div class="auth-requirements"><span id="regLengthRequirement">At least 6 characters</span><span id="regMatchRequirement">Passwords must match</span></div>' +
            '<div class="auth-language"><span>Preferred reading language · Optional</span><div class="auth-segment"><button type="button" data-register-language="hi">हिन्दी</button><button type="button" data-register-language="en">English</button><button type="button" class="active" data-register-language="both">✓ Both</button></div></div>' +
            '<label class="auth-check"><input id="regConsent" type="checkbox">I agree to the site guidelines and acknowledge the&nbsp;<a href="privacy-policy.html" class="auth-link">Privacy Policy</a>.</label><small class="field-error" id="regConsentError"></small>' +
            '<button class="auth-primary" id="registerBtn" type="button" onclick="registerWithEmail()">✦ &nbsp; Create Account</button>' +
            '<div class="auth-switch">Already have an account? <button class="auth-link" type="button" onclick="switchToLogin()">Login</button></div>' +
            '<div class="auth-privacy"><span>♢</span><p>Your account stores saved resources and preferences. Public content remains available without registering.</p></div>' +
          '</section>' +
          '<section class="auth-view" id="forgotForm" hidden>' +
            '<div class="auth-recovery-steps"><span id="resetStepDot1" class="active">1</span><i></i><span id="resetStepDot2">2</span><i></i><span id="resetStepDot3">3</span></div>' +
            '<div id="forgotRequest">' +
              '<header class="auth-heading"><h1 id="recoveryTitle">Forgot Password? <span>पासवर्ड भूल गए?</span></h1><p>Enter your email and we’ll send reset instructions if an account is associated with it.</p></header>' +
              '<div class="auth-field"><label for="forgotEmail">Email Address</label><div class="auth-input-wrap"><input id="forgotEmail" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com"></div><small class="field-error" id="forgotEmailError"></small></div>' +
              '<button class="auth-primary" id="resetSendBtn" type="button" onclick="sendResetEmail()">✦ &nbsp; Send Reset Link</button><div class="auth-switch"><button class="auth-link" type="button" onclick="switchToLogin()">← Back to Login</button></div>' +
              '<div class="auth-privacy"><span>♢</span><p>For privacy, the same confirmation is shown whether or not an account exists.</p></div>' +
            '</div>' +
            '<div id="forgotSent" hidden>' +
              '<header class="auth-heading"><h1>Check Your Email <span>अपना ईमेल देखें</span></h1></header><div class="auth-email-art">✉</div><p class="auth-confirm-copy" id="forgotSentCopy"></p>' +
              '<ul class="auth-help-list"><li>Check your spam or promotions folder.</li><li>The link may take a few minutes to arrive.</li></ul>' +
              '<button class="auth-secondary" id="resetResendBtn" type="button" onclick="sendResetEmail(true)">Resend link</button><button class="auth-secondary" style="margin-top:9px" type="button" onclick="showForgotPassword()">Use a different email</button><div class="auth-switch"><button class="auth-link" type="button" onclick="switchToLogin()">← Back to Login</button></div>' +
            '</div>' +
            '<div id="forgotNewPassword" hidden>' +
              '<header class="auth-heading"><h1>Set New Password <span>नया पासवर्ड बनाएँ</span></h1><p>Choose a new password for your account.</p></header>' +
              passwordField('resetPassword', 'New Password', 'new-password') + passwordField('resetConfirmPassword', 'Confirm Password', 'new-password') +
              '<div class="auth-requirements"><span id="resetLengthRequirement">At least 6 characters</span><span id="resetMatchRequirement">Passwords must match</span></div>' +
              '<button class="auth-primary" id="resetUpdateBtn" type="button" onclick="updateRecoveredPassword()">✦ &nbsp; Update Password</button><div class="auth-switch"><button class="auth-link" type="button" onclick="switchToLogin()">← Back to Login</button></div>' +
            '</div>' +
          '</section>' +
          '<section class="auth-success" id="authSuccessState" hidden><div class="auth-success-icon">✓</div><h2 id="authSuccessTitle">Account created</h2><p id="authSuccessCopy">Your library is ready.</p><button class="auth-primary" type="button" onclick="authContinueToLibrary()">Continue to My Library</button></section>' +
        '</main>' +
      '</div>' +
      '<footer class="auth-footer"><strong>© Sanatan for Humanity</strong><nav><a href="privacy-policy.html">Privacy</a><button type="button" onclick="closeModal()">Back to website</button></nav><span>ॐ शान्तिः शान्तिः शान्तिः</span></footer>' +
    '</div>';
  }

  function install() {
    if (initialized) return;
    var modal = byId('loginModal');
    if (!modal) return;
    initialized = true;
    modal.innerHTML = markup();
    modal.setAttribute('aria-hidden', 'true');
    bindEvents();
    handleResetLink();
  }

  function bindEvents() {
    document.querySelectorAll('[data-password-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        var input = byId(button.getAttribute('data-password-toggle'));
        if (!input) return;
        var reveal = input.type === 'password';
        input.type = reveal ? 'text' : 'password';
        button.textContent = reveal ? '◌' : '◉';
        button.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
      });
    });
    document.querySelectorAll('[data-register-language]').forEach(function (button) {
      button.addEventListener('click', function () {
        selectedRegistrationLanguage = button.getAttribute('data-register-language');
        document.querySelectorAll('[data-register-language]').forEach(function (candidate) { candidate.classList.toggle('active', candidate === button); });
      });
    });
    ['loginEmail', 'loginPassword'].forEach(function (id) {
      var input = byId(id); if (input) input.addEventListener('keydown', function (event) { if (event.key === 'Enter') window.loginWithEmail(); });
    });
    ['regName', 'regEmail', 'regPassword', 'regConfirmPassword'].forEach(function (id) {
      var input = byId(id); if (input) input.addEventListener('keydown', function (event) { if (event.key === 'Enter') window.registerWithEmail(); });
    });
    var regPassword = byId('regPassword');
    var regConfirm = byId('regConfirmPassword');
    if (regPassword) regPassword.addEventListener('input', updateRegistrationRequirements);
    if (regConfirm) regConfirm.addEventListener('input', updateRegistrationRequirements);
    var resetPassword = byId('resetPassword');
    var resetConfirm = byId('resetConfirmPassword');
    if (resetPassword) resetPassword.addEventListener('input', updateResetRequirements);
    if (resetConfirm) resetConfirm.addEventListener('input', updateResetRequirements);
  }

  function updateRegistrationRequirements() {
    var password = byId('regPassword').value;
    var confirmPassword = byId('regConfirmPassword').value;
    byId('regLengthRequirement').classList.toggle('met', password.length >= 6);
    byId('regMatchRequirement').classList.toggle('met', !!confirmPassword && password === confirmPassword);
  }

  function updateResetRequirements() {
    var password = byId('resetPassword').value;
    var confirmPassword = byId('resetConfirmPassword').value;
    byId('resetLengthRequirement').classList.toggle('met', password.length >= 6);
    byId('resetMatchRequirement').classList.toggle('met', !!confirmPassword && password === confirmPassword);
  }

  function setArt(mode) {
    var content = {
      login: ['Your sacred reading, remembered.', 'Sign in to save resources and keep your library available across supported devices.', 'Public knowledge remains available without signing in.'],
      register: ['Begin your personal library.', 'Create an account to save sacred resources and return to your reading across supported devices.', 'Public knowledge remains available without an account.'],
      forgot: ['Restore your path.', 'Use a secure reset link to regain access to your saved library.', 'For privacy, account existence is never revealed.']
    }[mode];
    byId('authArtTitle').textContent = content[0];
    byId('authArtCopy').textContent = content[1];
    byId('authArtNote').textContent = content[2];
  }

  function setView(name) {
    ['loginForm', 'registerForm', 'forgotForm'].forEach(function (id) { byId(id).hidden = id !== name; });
    byId('authSuccessState').hidden = true;
    clearMessages();
    setArt(name === 'loginForm' ? 'login' : name === 'registerForm' ? 'register' : 'forgot');
    var page = document.querySelector('#loginModal .auth-page');
    if (page) page.setAttribute('aria-labelledby', name === 'loginForm' ? 'modalTitle' : name === 'registerForm' ? 'registerTitle' : 'recoveryTitle');
  }

  function clearFieldErrors() {
    document.querySelectorAll('#loginModal .field-error').forEach(function (element) { element.textContent = ''; });
    document.querySelectorAll('#loginModal input.invalid').forEach(function (element) { element.classList.remove('invalid'); });
  }

  function fieldError(id, message) {
    var input = byId(id);
    var error = byId(id + 'Error');
    if (input) input.classList.add('invalid');
    if (error) error.textContent = message;
  }

  function validEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

  function showAlert(type, message) {
    clearMessages();
    var element = byId(type === 'success' ? 'successMsg' : 'errorMsg');
    if (!element) return;
    element.textContent = message;
    element.classList.add('visible');
  }

  function clearMessages() {
    ['errorMsg', 'successMsg'].forEach(function (id) {
      var element = byId(id);
      if (element) { element.textContent = ''; element.classList.remove('visible'); element.style.display = ''; }
    });
    clearFieldErrors();
  }

  function setBusy(button, busy, busyText) {
    if (!button) return;
    if (busy) {
      button.dataset.originalText = button.textContent;
      button.textContent = busyText;
      button.disabled = true;
    } else {
      button.textContent = button.dataset.originalText || button.textContent;
      button.disabled = false;
    }
  }

  function authMessage(error) {
    var map = {
      'auth/invalid-email': 'Enter a valid email address.',
      'auth/user-disabled': 'This account has been disabled.',
      'auth/user-not-found': 'We couldn’t sign you in. Check your email and password and try again.',
      'auth/wrong-password': 'We couldn’t sign you in. Check your email and password and try again.',
      'auth/invalid-credential': 'We couldn’t sign you in. Check your email and password and try again.',
      'auth/email-already-in-use': 'An account already exists for this email. Sign in instead.',
      'auth/weak-password': 'Use a password with at least 6 characters.',
      'auth/popup-closed-by-user': 'Google sign-in was closed before completion.',
      'auth/network-request-failed': 'Network error. Check your connection and try again.',
      'auth/too-many-requests': 'Too many attempts. Please wait a little and try again.'
    };
    return map[error && error.code] || 'Something went wrong. Please try again.';
  }

  async function mergeUserProfile(user, extra) {
    if (!user || typeof db === 'undefined') return;
    var payload = Object.assign({
      displayName: user.displayName || '',
      email: user.email || '',
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, extra || {});
    await db.collection('users').doc(user.uid).set(payload, { merge: true });
  }

  window.openModal = function () {
    install();
    window.switchToLogin();
    var modal = byId('loginModal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('auth-page-open');
    window.setTimeout(function () { var input = byId('loginEmail'); if (input) input.focus(); }, 50);
  };

  window.closeModal = function () {
    var modal = byId('loginModal');
    if (modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
    document.body.classList.remove('auth-page-open');
    clearMessages();
  };

  window.switchToLogin = function () { install(); setView('loginForm'); };
  window.switchToRegister = function () { install(); setView('registerForm'); };
  window.showForgotPassword = function () {
    install();
    setView('forgotForm');
    byId('forgotRequest').hidden = false;
    byId('forgotSent').hidden = true;
    byId('forgotNewPassword').hidden = true;
    setResetStep(1);
  };
  window.showError = function (message) { showAlert('error', message); };
  window.showSuccess = function (message) { showAlert('success', message); };
  window.clearMessages = clearMessages;

  window.loginWithGoogle = async function () {
    clearMessages();
    var button = !byId('loginForm').hidden ? byId('googleBtn') : byId('regGoogleBtn');
    setBusy(button, true, 'Connecting to Google…');
    try {
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      var result = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      await mergeUserProfile(result.user, { authProvider: 'google.com' });
      window.closeModal();
    } catch (error) {
      showAlert('error', authMessage(error));
    } finally { setBusy(button, false); }
  };

  window.loginWithEmail = async function () {
    clearMessages();
    var email = byId('loginEmail').value.trim();
    var password = byId('loginPassword').value;
    var valid = true;
    if (!validEmail(email)) { fieldError('loginEmail', 'Enter a valid email address.'); valid = false; }
    if (!password) { fieldError('loginPassword', 'Password is required.'); valid = false; }
    if (!valid) return;
    var button = byId('loginBtn');
    setBusy(button, true, 'Signing in…');
    try {
      var persistence = byId('rememberLogin').checked ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;
      await auth.setPersistence(persistence);
      var result = await auth.signInWithEmailAndPassword(email, password);
      await mergeUserProfile(result.user, { authProvider: 'password' });
      window.closeModal();
    } catch (error) { showAlert('error', authMessage(error)); }
    finally { setBusy(button, false); }
  };

  window.registerWithEmail = async function () {
    clearMessages();
    var name = byId('regName').value.trim();
    var email = byId('regEmail').value.trim();
    var password = byId('regPassword').value;
    var confirmPassword = byId('regConfirmPassword').value;
    var consent = byId('regConsent').checked;
    var valid = true;
    if (name.length < 2) { fieldError('regName', 'Enter your full name.'); valid = false; }
    if (!validEmail(email)) { fieldError('regEmail', 'Enter a valid email address.'); valid = false; }
    if (password.length < 6) { fieldError('regPassword', 'Use at least 6 characters.'); valid = false; }
    if (!confirmPassword || password !== confirmPassword) { fieldError('regConfirmPassword', 'Passwords do not match.'); valid = false; }
    if (!consent) { byId('regConsentError').textContent = 'Please acknowledge the privacy policy to continue.'; valid = false; }
    if (!valid) return;
    var button = byId('registerBtn');
    setBusy(button, true, 'Creating account…');
    try {
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      var credential = await auth.createUserWithEmailAndPassword(email, password);
      await credential.user.updateProfile({ displayName: name });
      await mergeUserProfile(credential.user, {
        displayName: name,
        preferredLanguage: selectedRegistrationLanguage,
        authProvider: 'password',
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        preferences: { textScale: 'default', showTransliteration: true, meaningLanguage: 'hi', lineSpacing: 'comfortable' }
      });
      if (selectedRegistrationLanguage === 'hi' || selectedRegistrationLanguage === 'en') {
        try { localStorage.setItem('sanatan-preferred-language', selectedRegistrationLanguage); } catch (_) {}
      }
      if (typeof updateHeaderUI === 'function') updateHeaderUI();
      byId('registerForm').hidden = true;
      byId('authSuccessState').hidden = false;
      byId('authSuccessTitle').textContent = 'Account created';
      byId('authSuccessCopy').textContent = 'Your personal library is ready.';
      var successButton = byId('authSuccessState').querySelector('button');
      successButton.textContent = 'Continue to My Library';
      successButton.setAttribute('onclick', 'authContinueToLibrary()');
    } catch (error) { showAlert('error', authMessage(error)); }
    finally { setBusy(button, false); }
  };

  window.authContinueToLibrary = function () {
    window.closeModal();
    if (typeof window.showFavorites === 'function') window.showFavorites();
  };

  function setResetStep(step) {
    [1, 2, 3].forEach(function (number) { byId('resetStepDot' + number).classList.toggle('active', number === step); });
  }

  window.sendResetEmail = async function (resend) {
    clearMessages();
    var email = byId('forgotEmail').value.trim();
    if (!validEmail(email)) { fieldError('forgotEmail', 'Enter a valid email address.'); return; }
    var button = resend ? byId('resetResendBtn') : byId('resetSendBtn');
    setBusy(button, true, resend ? 'Resending…' : 'Sending link…');
    try {
      await auth.sendPasswordResetEmail(email);
      byId('forgotRequest').hidden = true;
      byId('forgotSent').hidden = false;
      byId('forgotNewPassword').hidden = true;
      setResetStep(2);
      byId('forgotSentCopy').innerHTML = 'If an account is associated with <strong>' + escapeHtml(maskEmail(email)) + '</strong>, password-reset instructions will arrive shortly.';
      if (resend) showAlert('success', 'A new reset link has been requested.');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        byId('forgotRequest').hidden = true;
        byId('forgotSent').hidden = false;
        setResetStep(2);
        byId('forgotSentCopy').innerHTML = 'If an account is associated with <strong>' + escapeHtml(maskEmail(email)) + '</strong>, password-reset instructions will arrive shortly.';
      } else showAlert('error', authMessage(error));
    } finally { setBusy(button, false); }
  };

  function maskEmail(email) {
    var parts = email.split('@');
    var name = parts[0];
    return name.charAt(0) + '•••' + (name.length > 1 ? name.charAt(name.length - 1) : '') + '@' + parts[1];
  }

  async function handleResetLink() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('mode') !== 'resetPassword' || !params.get('oobCode')) return;
    resetCode = params.get('oobCode');
    var modal = byId('loginModal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('auth-page-open');
    setView('forgotForm');
    byId('forgotRequest').hidden = true;
    byId('forgotSent').hidden = true;
    byId('forgotNewPassword').hidden = false;
    setResetStep(3);
    try { await auth.verifyPasswordResetCode(resetCode); }
    catch (_) {
      resetCode = '';
      showAlert('error', 'This reset link is invalid or has expired. Request a new link.');
      byId('forgotNewPassword').hidden = true;
      byId('forgotRequest').hidden = false;
      setResetStep(1);
    }
  }

  window.updateRecoveredPassword = async function () {
    clearMessages();
    var password = byId('resetPassword').value;
    var confirmPassword = byId('resetConfirmPassword').value;
    var valid = true;
    if (password.length < 6) { fieldError('resetPassword', 'Use at least 6 characters.'); valid = false; }
    if (!confirmPassword || password !== confirmPassword) { fieldError('resetConfirmPassword', 'Passwords do not match.'); valid = false; }
    if (!resetCode) { showAlert('error', 'This reset link is invalid or has expired. Request a new link.'); valid = false; }
    if (!valid) return;
    var button = byId('resetUpdateBtn');
    setBusy(button, true, 'Updating password…');
    try {
      await auth.confirmPasswordReset(resetCode, password);
      byId('forgotForm').hidden = true;
      byId('authSuccessState').hidden = false;
      byId('authSuccessTitle').textContent = 'Password updated';
      byId('authSuccessCopy').textContent = 'You can now sign in with your new password.';
      var continueButton = byId('authSuccessState').querySelector('button');
      continueButton.textContent = 'Return to Login';
      continueButton.setAttribute('onclick', 'switchToLogin()');
      if (window.history && window.history.replaceState) window.history.replaceState({}, '', window.location.pathname + window.location.hash);
    } catch (_) { showAlert('error', 'This reset link is invalid or has expired. Request a new link.'); }
    finally { setBusy(button, false); }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
