const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.get("/poizon-price", async (req, res) => {
  const { model } = req.query;

  try {
    // 이 부분에 Poizon API 실제 URL 넣기
    const response = await axios.get("https://api.poizon.com/...", {
      headers: {
        Authorization: "Bearer YOUR_API_KEY"
      },
      params: { modelName: model }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "API 호출 실패", details: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
