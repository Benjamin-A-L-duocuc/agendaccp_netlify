// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "deploy";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "582f77ff-af6e-4fec-a333-84356734a35d",
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Contactos",
        path: "src/content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Lugar/Nombre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Descripci\xF3n",
            required: true
          },
          {
            type: "string",
            name: "phone",
            label: "Tel\xE9fono",
            required: true
          },
          {
            type: "string",
            name: "scheduleWeekdays",
            label: "Horario Lun-Vie",
            required: false,
            ui: {
              validate: (value) => {
                if (value && !/^\d{2}:\d{2}\s*[–-]\s*\d{2}:\d{2}$/.test(value)) {
                  return "Formato debe ser HH:MM \u2013 HH:MM (ej: 09:00 \u2013 18:00)";
                }
              }
            }
          },
          {
            type: "string",
            name: "scheduleSaturday",
            label: "Horario S\xE1b",
            required: false,
            ui: {
              validate: (value) => {
                if (value && !/^\d{2}:\d{2}\s*[–-]\s*\d{2}:\d{2}$/.test(value)) {
                  return "Formato debe ser HH:MM \u2013 HH:MM (ej: 09:00 \u2013 18:00)";
                }
              }
            }
          },
          {
            type: "string",
            name: "scheduleSunday",
            label: "Horario Dom",
            required: false,
            ui: {
              validate: (value) => {
                if (value && !/^\d{2}:\d{2}\s*[–-]\s*\d{2}:\d{2}$/.test(value)) {
                  return "Formato debe ser HH:MM \u2013 HH:MM (ej: 09:00 \u2013 18:00)";
                }
              }
            }
          },
          {
            type: "string",
            name: "email",
            label: "Correo electr\xF3nico",
            required: false
          },
          {
            type: "string",
            name: "whatsapp",
            label: "WhatsApp (n\xFAmero)",
            required: false
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
