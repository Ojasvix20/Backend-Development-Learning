# Steps for Authentication

## 1. Validation

Checks whether the input data is in the correct format or satisfies basic rules.

Examples:

- Does the email look like `example@xxx.com`?
- Does the contact number have exactly 10 digits?
- Is the password at least 8 characters long?
- Are all required fields filled?

---

## 2. Verification

Checks whether the provided information actually belongs to the user or is genuine.

Examples:

- Does `apple@gmail.com` really belong to this person? → Verified using an OTP sent to the email.
- Does this phone number belong to the user? → Verified using an SMS OTP.
- Has the user clicked the email verification link?

---

## 3. Authentication

Verifies the identity of the user by checking their credentials.

Examples:

- User logs in with email and password.
- User logs in using Google OAuth.
- User logs in using a fingerprint or Face ID.
- Server compares the entered password with the hashed password stored in the database.
- On successful authentication, the server issues a session or JWT token.

---

## 4. Authorization

Determines what an authenticated user is allowed to access or perform.

Examples:

- Can the user access the Admin Dashboard?
- Can the user edit or delete this post?
- Can the user view another user's profile?
- An admin can manage all users, while a normal user can only manage their own data.
