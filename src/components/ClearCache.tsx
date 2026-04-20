"use client";

import { useEffect } from "react";

export default function ClearCache() {
  useEffect(() => {
    // Memastikan berjalan hanya di sisi client (browser)
    if (typeof window !== "undefined") {
      // 1. Hapus semua localStorage (state yang mungkin nyangkut)
      localStorage.clear();
      
      // 2. Hapus semua sessionStorage
      sessionStorage.clear();
      
      // 3. Kembalikan scroll ke paling atas supaya tidak glitch karena posisi scroll yang tersimpan
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
      
      console.log("Cache & Storage cleared on refresh.");
    }
  }, []); // Array kosong berarti hanya berjalan satu kali setiap kali halaman di-refresh/di-load

  return null; // Komponen ini tidak me-render UI apapun
}
