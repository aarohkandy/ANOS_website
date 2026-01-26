# ANOS Email Templates (Supabase Auth)

Paste these into **Authentication > Email Templates** in your Supabase Dashboard.

---

## 1. Confirm Signup
**Subject**: `Welcome to your Digital Space`

```html
<div style="background-color: #F5F5DC; padding: 40px; font-family: 'Helvetica', sans-serif; color: #333333; text-align: center;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid rgba(0,0,0,0.05);">
    <h2 style="font-weight: 300;">Confirm your signup</h2>
    <p style="color: #666; line-height: 1.6;">Follow this link to confirm your user at ANOS. Amy is waiting to help you.</p>
    <p><a href="{{ .ConfirmationURL }}" style="display: inline-block; padding: 14px 28px; background-color: #0047AB; color: #ffffff; text-decoration: none; border-radius: 99px; font-weight: 600; margin-top: 10px;">Confirm your mail</a></p>
  </div>
</div>
```

---

## 2. Invite User
**Subject**: `You've been invited to ANOS`

```html
<div style="background-color: #F5F5DC; padding: 40px; font-family: 'Helvetica', sans-serif; color: #333333; text-align: center;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
    <h2 style="font-weight: 300;">Accept your invitation</h2>
    <p style="color: #666;">You have been invited to join ANOS. Amy is ready to assist you in your new digital space.</p>
    <p><a href="{{ .InviteTokenURL }}" style="display: inline-block; padding: 14px 28px; background-color: #0047AB; color: #ffffff; text-decoration: none; border-radius: 99px; font-weight: 600; margin-top: 10px;">Confirm your mail</a></p>
  </div>
</div>
```

---

## 3. Magic Link
**Subject**: `Your sign-in link for ANOS`

```html
<div style="background-color: #F5F5DC; padding: 40px; font-family: 'Helvetica', sans-serif; color: #333333; text-align: center;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
    <h2 style="font-weight: 300;">Log in to ANOS</h2>
    <p style="color: #666;">Follow this link to securely sign in to your Digital Space. Amy is keeping things ready for you.</p>
    <p><a href="{{ .ConfirmationURL }}" style="display: inline-block; padding: 14px 28px; background-color: #0047AB; color: #ffffff; text-decoration: none; border-radius: 99px; font-weight: 600; margin-top: 10px;">Confirm your mail</a></p>
  </div>
</div>
```

---

## 4. Change Email Address
**Subject**: `Confirm your new email address`

```html
<div style="background-color: #F5F5DC; padding: 40px; font-family: 'Helvetica', sans-serif; color: #333333; text-align: center;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
    <h2 style="font-weight: 300;">Confirm your mail change</h2>
    <p style="color: #666;">Follow this link to verify your new email address. Amy needs to make sure it's really you.</p>
    <p><a href="{{ .ConfirmationURL }}" style="display: inline-block; padding: 14px 28px; background-color: #0047AB; color: #ffffff; text-decoration: none; border-radius: 99px; font-weight: 600; margin-top: 10px;">Confirm your mail</a></p>
  </div>
</div>
```

---

## 5. Reset Password
**Subject**: `Reset your password`

```html
<div style="background-color: #F5F5DC; padding: 40px; font-family: 'Helvetica', sans-serif; color: #333333; text-align: center;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
    <h2 style="font-weight: 300;">Reset your password</h2>
    <p style="color: #666;">Follow this link to choose a new password for your account. Amy is here to help you get back in.</p>
    <p><a href="{{ .ConfirmationURL }}" style="display: inline-block; padding: 14px 28px; background-color: #0047AB; color: #ffffff; text-decoration: none; border-radius: 99px; font-weight: 600; margin-top: 10px;">Confirm your mail</a></p>
  </div>
</div>
```

---

## 6. Reauthentication
**Subject**: `Confirm your identity`

```html
<div style="background-color: #F5F5DC; padding: 40px; font-family: 'Helvetica', sans-serif; color: #333333; text-align: center;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 16px; max-width: 500px; margin: 0 auto;">
    <h2 style="font-weight: 300;">Confirm your identity</h2>
    <p style="color: #666; margin-bottom: 20px;">For your security, enter the code below to confirm this sensitive action.</p>
    <div style="font-size: 32px; font-weight: 600; letter-spacing: 4px; padding: 20px; background: #FAF9F6; border-radius: 8px;">{{ .Token }}</div>
    <p style="font-size: 12px; color: #999; margin-top: 10px;">Amy says: keep this code private.</p>
  </div>
</div>
```
