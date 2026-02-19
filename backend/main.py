from fastapi import FastAPI
from screiping import scrape_books

app=FastAPI()

@app.get("/books")
def get_books():
        return scrape_books()