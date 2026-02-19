import requests
from bs4 import BeautifulSoup

BASEURL ="https://books.toscrape.com/"

def scrape_books():
    res=requests.get(BASEURL)
    soup=BeautifulSoup(res.text,"html.parser")
    books=soup.select(".product_pod")
    books_list=[]

    for book in books:
        title=book.h3.a["title"]
        star=book.p["class"][1]
        price=book.select_one(".price_color").text
        img=BASEURL+book.img["src"]

        books_list.append(
            {
                "title":title,
                "star":star,
                "price":price,
                "img":img
            }
        )
    return books_list
