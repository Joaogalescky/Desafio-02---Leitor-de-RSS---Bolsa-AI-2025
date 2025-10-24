const express = require('express');
const router = express.Router();
const { fetchRSS } = require('../services/rssService');

const RSS_URL = 'https://g1.globo.com/rss/g1/brasil/';

/**
 * @swagger
 * /api/atualizar:
 *   get:
 *     summary: Atualiza e retorna as últimas notícias do RSS do G1
 *     responses:
 *       200:
 *         description: Lista de notícias atualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Erro ao buscar RSS
 */

router.get('/api/atualizar', async (req, res) => {
  try {
    const data = await fetchRSS(RSS_URL);
    res.json({ message: 'Notícias atualizadas!', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar RSS' });
  }
});

module.exports = router;