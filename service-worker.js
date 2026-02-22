self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("push", function(event) {
  const data = event.data ? event.data.text() : "Jangan lupa nabung hari ini!";
  event.waitUntil(
    self.registration.showNotification("💰 Tabungan Harian", {
      body: data,
      icon: "icon.png"
    })
  );
});