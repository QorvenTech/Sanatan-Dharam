(function () {
  'use strict';

  var state = {
    preferredLanguage: 'both',
    textScale: 'default',
    showTransliteration: true,
    meaningLanguage: 'hi',
    lineSpacing: 'comfortable',
    rememberPreferences: true,
    documentData: {}
  };

  function byId(id) { return document.getElementById(id); }
  function esc(value) { return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]; }); }
  function providers(user) { return (user.providerData || []).map(function (entry) { return entry.providerId; }); }
  function usesPassword(user) { return providers(user).indexOf('password') !== -1; }
  function usesGoogle(user) { return providers(user).indexOf('google.com') !== -1; }

  function avatarMarkup(user, className) {
    var name = user.displayName || (user.email ? user.email.split('@')[0] : 'User');
    var inner = user.photoURL ? '<img src="' + esc(user.photoURL) + '" alt="' + esc(name) + '">' : esc(name.charAt(0).toUpperCase());
    return '<div class="account-avatar ' + (className || '') + '">' + inner + '</div>';
  }

  function optionButton(group, value, label) {
    return '<button type="button" data-pref-group="' + group + '" data-pref-value="' + value + '" class="' + (state[group] === value ? 'active' : '') + '">' + label + '</button>';
  }

  function toggleButton(key, label) {
    return '<button type="button" class="account-toggle ' + (state[key] ? 'active' : '') + '" data-account-toggle="' + key + '" aria-label="' + esc(label) + '" aria-pressed="' + (state[key] ? 'true' : 'false') + '"></button>';
  }

  function sidebar(user) {
    var name = user.displayName || (user.email ? user.email.split('@')[0] : 'Member');
    return '<aside class="account-sidebar">' + avatarMarkup(user) + '<h2 id="accountSidebarName">' + esc(name) + '</h2><p>' + esc(user.email || '') + '</p><p class="account-signed">✓ Signed in</p>' +
      '<nav class="account-menu"><button type="button" data-account-scroll="account-profile-card">♙ &nbsp; Profile</button><button type="button" data-account-scroll="account-reading-card">A &nbsp; Reading Preferences</button><button type="button" data-account-scroll="account-library-card">☁ &nbsp; Library &amp; Sync</button><button type="button" data-account-scroll="account-security-card">♢ &nbsp; Security</button><button type="button" data-account-scroll="account-privacy-card">♧ &nbsp; Privacy &amp; Data</button><button type="button" onclick="showFavorites()">← &nbsp; Back to My Library</button></nav></aside>';
  }

  function securityMarkup(user) {
    if (usesPassword(user)) {
      return '<div class="account-password-grid"><div class="account-field"><label for="accountCurrentPassword">Current Password</label><input id="accountCurrentPassword" type="password" autocomplete="current-password"></div><div class="account-field"><label for="accountNewPassword">New Password</label><input id="accountNewPassword" type="password" autocomplete="new-password"></div><div class="account-field"><label for="accountConfirmPassword">Confirm New Password</label><input id="accountConfirmPassword" type="password" autocomplete="new-password"></div><small>Use at least 6 characters. You will be securely re-authenticated before the change.</small><button type="button" class="account-primary" id="accountChangePasswordBtn" onclick="accountChangePassword()">Change Password</button></div>' +
        (usesGoogle(user) ? '<div class="account-provider" style="margin-top:12px"><b>G</b><div><strong>Google Account connected</strong><p>' + esc(user.email || '') + '</p></div></div>' : '');
    }
    return '<div class="account-provider"><b>G</b><div><strong>Google Account connected</strong><p>' + esc(user.email || '') + '</p><small>Password changes are managed by Google for this sign-in method.</small></div></div>';
  }

  function deletePasswordField(user) {
    return usesPassword(user) ? '<div class="account-field"><label for="accountDeletePassword">Confirm your current password</label><input id="accountDeletePassword" type="password" autocomplete="current-password"></div>' : '<p>You will be asked to confirm with Google before deletion.</p>';
  }

  function pageMarkup(user) {
    var name = user.displayName || (user.email ? user.email.split('@')[0] : 'Member');
    return '<nav class="account-breadcrumb" aria-label="Breadcrumb"><button type="button" onclick="showSection(\'home\')">Home</button><span>/</span><button type="button" onclick="showFavorites()">My Library</button><span>/</span><strong>Account &amp; Profile</strong></nav>' +
      '<header class="account-page-heading"><div><h1>Account &amp; Profile <span>/ खाता और प्रोफ़ाइल</span></h1><p>Manage your profile, content preferences, saved library and privacy controls.</p></div><button type="button" class="account-primary" id="accountSaveBtn" onclick="accountSaveChanges()">✦ &nbsp; Save Changes</button></header>' +
      '<div class="account-feedback" id="accountFeedback" role="status"></div>' +
      '<div class="account-layout">' + sidebar(user) + '<main class="account-content"><div class="account-grid">' +
        '<section class="account-card" id="account-profile-card"><h2>Profile</h2><div class="account-profile-row">' + avatarMarkup(user) + '<div class="account-fields"><div class="account-field"><label for="accountDisplayName">Display Name</label><input id="accountDisplayName" value="' + esc(name) + '" maxlength="70" autocomplete="name"></div><div class="account-field"><label for="accountEmail">Email Address</label><input id="accountEmail" value="' + esc(user.email || '') + '" readonly></div><div class="account-inline-note">' + (user.emailVerified ? '✓ Email verified' : 'Email not verified · <button type="button" class="auth-link" onclick="accountSendVerification()">Send verification email</button>') + '</div></div></div></section>' +
        '<section class="account-card"><h2>Preferred Content Language</h2><div class="account-segment">' + optionButton('preferredLanguage', 'hi', 'हिन्दी') + optionButton('preferredLanguage', 'en', 'English') + optionButton('preferredLanguage', 'both', '✓ Both') + '</div><p style="margin-top:10px">Used as your default where bilingual content supports it.</p></section>' +
        '<section class="account-card" id="account-reading-card"><h2>Reading Preferences</h2><div class="account-setting"><div><strong>Text size</strong><small>Default for supported readers</small></div><div class="account-segment">' + optionButton('textScale', 'small', 'A−') + optionButton('textScale', 'default', 'Default') + optionButton('textScale', 'large', 'A+') + '</div></div><div class="account-setting"><div><strong>Show transliteration</strong><small>When a reader provides it</small></div>' + toggleButton('showTransliteration', 'Show transliteration') + '</div><div class="account-setting"><div><strong>Default meaning language</strong></div><div class="account-segment two">' + optionButton('meaningLanguage', 'hi', 'Hindi') + optionButton('meaningLanguage', 'en', 'English') + '</div></div><div class="account-setting"><div><strong>Line spacing</strong></div><div class="account-segment">' + optionButton('lineSpacing', 'compact', 'Compact') + optionButton('lineSpacing', 'comfortable', 'Comfortable') + optionButton('lineSpacing', 'wide', 'Wide') + '</div></div></section>' +
        '<section class="account-card" id="account-library-card"><span class="account-sync-status">✓ Account sync active</span><h2>Library &amp; Account Sync</h2><div class="account-sync-list"><div class="account-sync-item"><span>☁</span><div><strong>Account-synced saves</strong><small>Your favorites are stored with this Firebase account.</small></div></div><div class="account-sync-item"><span>▣</span><div><strong>Reader activity on this device</strong><small>Some reading positions remain in this browser only; cross-device reading-progress sync is not currently offered.</small></div></div></div><button type="button" class="account-primary" style="width:100%" onclick="showFavorites()">Open My Library</button></section>' +
        '<section class="account-card" id="account-security-card"><h2>Security</h2>' + securityMarkup(user) + '</section>' +
        '<section class="account-card" id="account-privacy-card"><h2>Privacy &amp; Data</h2><div class="account-setting"><div><strong>Remember reading preferences</strong><small>Store your supported reader defaults with your account</small></div>' + toggleButton('rememberPreferences', 'Remember reading preferences') + '</div><div class="account-list"><button type="button" onclick="showFavorites()"><span>Manage saved resources<small>Review or remove your Firebase favorites</small></span><b>›</b></button><button type="button" onclick="accountClearLocalData()"><span>Clear local reader data<small>Remove supported reader preferences and progress from this browser</small></span><b>›</b></button><a href="privacy-policy.html"><span>Privacy Policy<small>Read how this website protects your privacy</small></span><b>›</b></a></div></section>' +
        '<section class="account-card wide"><div class="account-signout"><div><h2>Sign Out</h2><p>You can continue browsing all public knowledge after signing out.</p></div><button type="button" class="account-danger" onclick="accountSignOut()">Sign Out</button></div></section>' +
        '<section class="account-card wide danger-zone"><div class="account-signout"><div><h2>Danger Zone</h2><h3>Delete Account</h3><p>Permanently removes your account profile and account-synced saved resources. Public content remains available.</p></div><button type="button" class="account-danger" onclick="accountToggleDelete(true)">Delete Account</button></div><div class="account-delete-confirm" id="accountDeleteConfirm" hidden><h3>Delete your account?</h3><p>This cannot be undone.</p>' + deletePasswordField(user) + '<label><input id="accountDeleteAcknowledgement" type="checkbox">I understand that my profile and account-synced favorites will be permanently removed.</label><div class="account-delete-actions"><button type="button" class="account-outline" onclick="accountToggleDelete(false)">Cancel</button><button type="button" class="account-primary" id="accountDeleteBtn" onclick="accountDeletePermanently()">Permanently Delete</button></div></div></section>' +
      '</div></main></div>';
  }

  function applyDocumentData(data) {
    state.documentData = data || {};
    var preferences = state.documentData.preferences || {};
    state.preferredLanguage = state.documentData.preferredLanguage || readLocal('sanatan-preferred-language') || 'both';
    state.textScale = preferences.textScale || readLocal('sanatan-account-text-scale') || 'default';
    state.showTransliteration = preferences.showTransliteration !== undefined ? !!preferences.showTransliteration : readLocal('sanatan-account-transliteration') !== 'false';
    state.meaningLanguage = preferences.meaningLanguage || readLocal('sanatan-account-meaning-language') || 'hi';
    state.lineSpacing = preferences.lineSpacing || readLocal('sanatan-account-line-spacing') || 'comfortable';
    state.rememberPreferences = preferences.rememberPreferences !== false;
  }

  function readLocal(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
  function writeLocal(key, value) { try { localStorage.setItem(key, String(value)); } catch (_) {} }

  function bindPage() {
    document.querySelectorAll('#account-profile [data-pref-group]').forEach(function (button) {
      button.addEventListener('click', function () {
        var group = button.getAttribute('data-pref-group');
        state[group] = button.getAttribute('data-pref-value');
        document.querySelectorAll('#account-profile [data-pref-group="' + group + '"]').forEach(function (candidate) { candidate.classList.toggle('active', candidate === button); });
      });
    });
    document.querySelectorAll('#account-profile [data-account-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        var key = button.getAttribute('data-account-toggle');
        state[key] = !state[key];
        button.classList.toggle('active', state[key]);
        button.setAttribute('aria-pressed', state[key] ? 'true' : 'false');
      });
    });
    document.querySelectorAll('#account-profile [data-account-scroll]').forEach(function (button) {
      button.addEventListener('click', function () { var target = byId(button.getAttribute('data-account-scroll')); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    });
  }

  function feedback(type, message) {
    var element = byId('accountFeedback');
    if (!element) return;
    element.className = 'account-feedback visible ' + type;
    element.textContent = (type === 'success' ? '✓ ' : '! ') + message;
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function busy(button, isBusy, text) {
    if (!button) return;
    if (isBusy) { button.dataset.original = button.textContent; button.textContent = text; button.disabled = true; }
    else { button.textContent = button.dataset.original || button.textContent; button.disabled = false; }
  }

  window.showAccountProfile = async function () {
    var dropdown = byId('userDropdown');
    if (dropdown) dropdown.classList.remove('open');
    if (typeof currentUser === 'undefined' || !currentUser) { window.openModal(); return; }
    document.querySelectorAll('.section').forEach(function (section) { section.classList.remove('active'); });
    var textDisplay = byId('text-display'); if (textDisplay) textDisplay.style.display = 'none';
    var section = byId('account-profile');
    section.classList.add('active', 'account-experience');
    section.style.display = '';
    if (typeof currentSection !== 'undefined') currentSection = 'account-profile';
    section.innerHTML = '<div class="account-loading"><div><span></span><p>Opening your account settings…</p></div></div>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      var snapshot = await db.collection('users').doc(currentUser.uid).get();
      applyDocumentData(snapshot.exists ? snapshot.data() : {});
      section.innerHTML = pageMarkup(currentUser);
      bindPage();
    } catch (error) {
      applyDocumentData({});
      section.innerHTML = pageMarkup(currentUser);
      bindPage();
      feedback('error', 'Your saved preferences could not be loaded. You can still review the page and try again.');
      console.error('Account profile load failed:', error);
    }
  };

  window.accountSaveChanges = async function () {
    if (!currentUser) return window.openModal();
    var name = byId('accountDisplayName').value.trim();
    if (name.length < 2) return feedback('error', 'Enter a display name with at least 2 characters.');
    var button = byId('accountSaveBtn');
    busy(button, true, 'Saving…');
    try {
      await currentUser.updateProfile({ displayName: name });
      var preferencePayload = {
        textScale: state.textScale,
        showTransliteration: state.showTransliteration,
        meaningLanguage: state.meaningLanguage,
        lineSpacing: state.lineSpacing,
        rememberPreferences: state.rememberPreferences
      };
      await db.collection('users').doc(currentUser.uid).set({
        displayName: name,
        email: currentUser.email || '',
        preferredLanguage: state.preferredLanguage,
        preferences: preferencePayload,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      writeLocal('sanatan-preferred-language', state.preferredLanguage);
      writeLocal('sanatan-account-text-scale', state.textScale);
      writeLocal('sanatan-account-transliteration', state.showTransliteration);
      writeLocal('sanatan-account-meaning-language', state.meaningLanguage);
      writeLocal('sanatan-account-line-spacing', state.lineSpacing);
      writeLocal('sanatan-aarti-text-scale', state.textScale);
      writeLocal('sanatan-aarti-line-space', state.lineSpacing);
      if (state.preferredLanguage === 'hi' || state.preferredLanguage === 'en') {
        if (typeof currentLang !== 'undefined') currentLang = state.preferredLanguage;
        if (typeof applyLanguage === 'function') applyLanguage(state.preferredLanguage);
      }
      if (typeof updateHeaderUI === 'function') updateHeaderUI();
      var sidebarName = byId('accountSidebarName'); if (sidebarName) sidebarName.textContent = name;
      feedback('success', 'Changes saved successfully.');
    } catch (error) {
      console.error('Account profile save failed:', error);
      feedback('error', 'Changes could not be saved. Please try again.');
    } finally { busy(button, false); }
  };

  window.accountSendVerification = async function () {
    if (!currentUser || currentUser.emailVerified) return;
    try { await currentUser.sendEmailVerification(); feedback('success', 'Verification email sent. Check your inbox.'); }
    catch (error) { feedback('error', error.code === 'auth/too-many-requests' ? 'Please wait before requesting another verification email.' : 'Verification email could not be sent.'); }
  };

  window.accountChangePassword = async function () {
    if (!currentUser || !usesPassword(currentUser)) return;
    var currentPassword = byId('accountCurrentPassword').value;
    var password = byId('accountNewPassword').value;
    var confirmation = byId('accountConfirmPassword').value;
    if (!currentPassword) return feedback('error', 'Enter your current password.');
    if (password.length < 6) return feedback('error', 'Use a new password with at least 6 characters.');
    if (password !== confirmation) return feedback('error', 'New passwords do not match.');
    var button = byId('accountChangePasswordBtn'); busy(button, true, 'Changing password…');
    try {
      var credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPassword);
      await currentUser.reauthenticateWithCredential(credential);
      await currentUser.updatePassword(password);
      byId('accountCurrentPassword').value = ''; byId('accountNewPassword').value = ''; byId('accountConfirmPassword').value = '';
      feedback('success', 'Password changed successfully.');
    } catch (error) {
      feedback('error', (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') ? 'Current password is incorrect.' : 'Password could not be changed. Please sign in again and retry.');
    } finally { busy(button, false); }
  };

  window.accountClearLocalData = function () {
    if (!window.confirm('Remove supported reader preferences and reading positions stored in this browser? Your Firebase favorites will not be deleted.')) return;
    var prefixes = ['sanatan-', 'gita-', 'mantra-', 'aarti-', 'ritual-', 'deity-', 'paath-'];
    try {
      Object.keys(localStorage).forEach(function (key) { if (prefixes.some(function (prefix) { return key.indexOf(prefix) === 0; })) localStorage.removeItem(key); });
      feedback('success', 'Local reader data was cleared from this browser. Account-synced favorites were not changed.');
    } catch (_) { feedback('error', 'Local reader data could not be cleared in this browser.'); }
  };

  window.accountSignOut = async function () {
    try { await auth.signOut(); if (typeof showSection === 'function') showSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    catch (_) { feedback('error', 'Sign out failed. Please try again.'); }
  };

  window.accountToggleDelete = function (show) {
    var panel = byId('accountDeleteConfirm');
    if (!panel) return;
    panel.hidden = !show;
    if (show) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  async function reauthenticateForDelete(user) {
    if (usesPassword(user)) {
      var passwordInput = byId('accountDeletePassword');
      if (!passwordInput || !passwordInput.value) throw { code: 'account/password-required' };
      return user.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(user.email, passwordInput.value));
    }
    if (usesGoogle(user)) return user.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider());
    throw { code: 'account/unsupported-provider' };
  }

  async function removeFirestoreAccountData(user) {
    var favorites = await db.collection('users').doc(user.uid).collection('favorites').get();
    var batch = db.batch();
    var count = 0;
    var commits = [];
    favorites.forEach(function (documentSnapshot) {
      batch.delete(documentSnapshot.ref); count += 1;
      if (count === 400) { commits.push(batch.commit()); batch = db.batch(); count = 0; }
    });
    if (count) commits.push(batch.commit());
    await Promise.all(commits);
    await db.collection('users').doc(user.uid).delete().catch(function (error) { if (error.code !== 'not-found') throw error; });
  }

  window.accountDeletePermanently = async function () {
    if (!currentUser) return;
    if (!byId('accountDeleteAcknowledgement').checked) return feedback('error', 'Confirm that you understand the account deletion is permanent.');
    var button = byId('accountDeleteBtn'); busy(button, true, 'Deleting account…');
    var user = currentUser;
    try {
      await reauthenticateForDelete(user);
      await removeFirestoreAccountData(user);
      await user.delete();
      if (typeof showSection === 'function') showSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.alert('Your account and account-synced favorites have been deleted.');
    } catch (error) {
      console.error('Account deletion failed:', error);
      if (error.code === 'account/password-required') feedback('error', 'Enter your current password to confirm deletion.');
      else if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') feedback('error', 'Current password is incorrect.');
      else if (error.code === 'auth/popup-closed-by-user') feedback('error', 'Google confirmation was closed. Your account was not deleted.');
      else feedback('error', 'The account could not be deleted. Please sign in again and retry.');
    } finally { busy(button, false); }
  };

  if (typeof auth !== 'undefined') {
    auth.onAuthStateChanged(function (user) {
      var section = byId('account-profile');
      if (!user && section && section.classList.contains('active')) {
        if (typeof showSection === 'function') showSection('home');
      }
    });
  }
})();
