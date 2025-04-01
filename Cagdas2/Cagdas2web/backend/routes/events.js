const express = require('express');
const router = express.Router();
const Event = require('../models/Event'); // Event modelini dahil ediyoruz

// Etkinlikleri getirme route'u
router.get('/', async (req, res) => {
  try {
    const events = await Event.find(); // Etkinlikleri veritabanından çekiyoruz
    res.status(200).json(events); // Etkinlikleri frontend'e gönderiyoruz
  } catch (err) {
    console.error('Etkinlikler alınırken hata:', err);
    res.status(500).json({ message: 'Etkinlikler alınırken bir hata oluştu' });
  }
});

module.exports = router;