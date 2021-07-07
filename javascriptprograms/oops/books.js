class BookLibrary {

    getBooks() {
     books = {
            "the alkemist": { bookName: "the alchemist", auther: "paulo", prize: 200, total: 5 , sold:2},
            "two states": { bookName: "two states", auther: "chetan bagat", prize: 300,total: 10 , sold:3},
            "veenapoovu": { bookName: "veenapoovu", auther: "kumaranasaan", prize: 250,  total: 15, sold:6 },
            "veenapoovu": { bookName: "veenapoovu", auther: "kumaranasaan", prize: 250,  total: 15, sold:4 },
            "the destination": { bookName: "destination", auther: "william", prize: 500, total: 15 , sold:1},
            "girl friend": { bookName: "girl friend", auther: "chetan bagath", prize: 300,  total: 5 , sold:5}
        }
        return books

    }

    findBook(bkName) {
        let bookDetails = this.getBooks()
        if (bkName in bookDetails) {


            //return 1//yes
            if(bookDetails["bookName"][total]>bookDetails["bookName"][sold]){

            let available=bookDetails["bookName"][total]-bookDetails["bookName"][sold]

            console.log("available no of books",available);
            }
            else{
                console.log("not available");
            }

        }
        else {
            return 0//no

        }



    }


}

var obj = new BookLibrary()
var user = obj.findBook("veenapoovu")
var res = user == 1 ? "yes" : "no";
console.log(res)