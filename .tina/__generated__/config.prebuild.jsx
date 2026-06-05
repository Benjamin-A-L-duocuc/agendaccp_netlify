// .tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: null,
  token: null,
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
            required: false
          },
          {
            type: "string",
            name: "scheduleSaturday",
            label: "Horario S\xE1b",
            required: false
          },
          {
            type: "string",
            name: "scheduleSunday",
            label: "Horario Dom",
            required: false
          },
          {
            type: "string",
            name: "status",
            label: "Estado (ej: Disponible, Fuera de horario)",
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
