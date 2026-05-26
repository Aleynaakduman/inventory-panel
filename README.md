# Envanter Takip Sistemi 


## 🚀 Kurulum ve Başlatma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayın:

### 1. Projeyi klonla
git clone https://github.com/kullanici-adiniz/envanter-takip.git
cd envanter-takip

### 2. Bağımlılıkları yükle
npm install

### 3. JSON Server’ı başlat
npx json-server --watch db.json --port 3001

### 4. Uygulamayı çalıştır
npm run dev

📌 Not:
Bu projede sahte API olarak json-server kullanılmıştır.
Ürün verileri db.json dosyasından gelir.

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** React, JavaScript, HTML5, CSS3  
- **UI Library:** Material UI (MUI), React Icons  
- **Build Tool:** Vite  
- **Mock API:** JSON Server

## 📂 Proje Klasör Yapısı

Bu projede, kodun okunabilirliğini, modülerliğini ve sürdürülebilirliğini artırmak amacıyla **Özellik Tabanlı (Feature-Driven / Domain-Driven)** bir klasör mimarisi tercih edilmiştir:

src/
├── assets/               # Resimler, logolar ve global fontlar gibi statik varlıklar.
├── features/             # Uygulamanın ana modülleri/özellikleri bu çatı altında toplanır.
│   └── Dashboard/        # Kontrol paneline (Envanter Paneli) ait özel alan.
│       └── components/   # Yalnızca Dashboard sayfasına özel UI bileşenleri ve stilleri.
│           ├── DashboardContent.css
│           ├── DashboardContent.jsx
│           └── DashboardTable.jsx
├── shared/
│   └── components/
│       ├── Navbar/
│       └── Sidebar/
├── App.css
├── App.jsx
├── index.css
└── main.jsx


## 📸 Ekran Görüntüleri
<img width="1856" height="919" alt="Ekran görüntüsü 2026-05-27 001333" src="https://github.com/user-attachments/assets/66bc5db6-e14c-4297-9833-9a2b43a9e7ac" />

<img width="1816" height="921" alt="Ekran görüntüsü 2026-05-27 001637" src="https://github.com/user-attachments/assets/185dd39f-1b36-44cf-b352-ef2e45d0c61b" 
/>

<img width="1839" height="931" alt="Ekran görüntüsü 2026-05-27 001652" src="https://github.com/user-attachments/assets/fe8abe20-e5d5-469f-a142-343287469f12" />



