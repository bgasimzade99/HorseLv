# Asnates JSK - Email Integration

## ⚠️ Backend No Longer Needed

The contact form now uses **EmailJS directly from the frontend**. No backend server is required.

## How It Works

- **Frontend**: `src/App.jsx` sends emails directly via EmailJS API
- **EmailJS Service**: `service_0la0k52` (SMTP server)
- **Templates**:
  - Admin notification: `template_bwjlrhr`
  - Auto-reply: `template_nkrc6xo`

## EmailJS Configuration

- **Service ID**: `service_0la0k52`
- **Public Key**: `8ctINp-seMzcv49Re`
- **SMTP Server**: `mail.inbox.lv:587` (TLS)

## Setup

No setup needed! Everything is configured in the frontend.

## Deployment

Only the frontend needs to be deployed. The backend folder can be ignored or removed.
