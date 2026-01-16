# Requirements Mapping

This document maps the user stories defined in Lab 1 to the actual pages and components implemented in Lab 2.

---

## User Stories → Pages → Components

| User Story                          | Page              | Component(s)            |
|-------------------------------------|-------------------|-------------------------|
| View breathing exercises            | Breathing Page    | `BreathingGuide.vue`    |
| Read wellness tips                  | Wellness Page     | `TipsList.vue`          |
| Get AI support                      | AI Support Page   | `AiChatBox.vue`         |
| Navigate between sections easily    | Navbar (Layout)   | `Navbar.vue`            |
| See footer information              | Footer (Layout)   | `Footer.vue`            |
| Access home introduction            | Home Page         | `Home.vue`              |

---

## Notes
- **Lab 2** focuses on project setup, routing, and placeholders.  
- The **AI Support page** (`AiSupport.vue`) currently serves as a placeholder; full AI integration will be implemented in **Lab 3**.  
- Each page is connected through Vue Router (`src/router/index.js`).  
- Layout components (`Navbar.vue`, `Footer.vue`) are shared across all pages.  
