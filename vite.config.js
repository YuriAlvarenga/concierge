import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssets:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Concierge Virtual",
    short_name:"Concierge",
    description:"Concierge para faciliar o dia a dia",
    icons:[{
      src: "/nightclubs/amaite-praia-brava.png",
      sizes: "512x512",
      type:"image/png",
      purpose:"any maskable"
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugIn)
  ]
})
