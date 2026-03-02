from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from screiping import scrape_books
import uvicorn
app=FastAPI()

# CORS設定（フロントエンドからのアクセスを許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://localhost:5173"],  # Viteのデフォルトポート
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/books")
def get_books():
        return scrape_books()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)