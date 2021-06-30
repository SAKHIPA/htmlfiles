class BookLibrary {

    getBooks() {
        let books = {
            "the alkemist": { bookName: "the alchemist", auther: "paulo", prize: 200, avlQty: 5 },
            "two states": { bookName: "two states", auther: "chetan bagat", prize: 300, avlQty: 10 },
            "veenapoovu": { bookName: "veenapoovu", auther: "kumaranasaan", prize: 250, avlQty: 15 },
            "the destination": { bookName: "destination", auther: "william", prize: 500, avlQty: 15 },
            "girl friend": { bookName: "girl friend", auther: "chetan bagath", prize: 300, avlQty: 5 }
        }
        return books

    }

    findBook(bkName) {
        let bookDetails = this.getBooks()
        for (let bkName in bookDetails) {

            if (bkName == bookDetails["bookName"]) {
                //return 1//yes
                console.log("yes");
            }
            else {
                //  return 0//no
                console.log("no");
            }
        }
        //}else{
        //console.log("not in list");
    }


}

var obj = new BookLibrary()
obj.findBook("apoovu ")
// var res=bkName==1?"yes":"no";
// console.log(res)