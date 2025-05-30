// queries to read documents from the collection books
db.books.find({ genre: "Fiction" })
db.books.find({ published_year: { $gt: 1950 } })
db.books.find({ author: "George Orwell" })
db.books.updateOne(
    { title: "1984" },
    { $set: { price: 10.99 } } 
)
db.books.deleteOne({ title: "Brave New World" })
// advanced queries
db.books.find({ in_stock: true, published_year: { $gt: 1950 } })
// uisng projection
db.books.find(
    {}, 
    { title: 1, author: 1, price: 1, _id: 0 } 
)
//sorting in ascending oreder
db.books.find().sort({ price: 1 })

db.books.find().sort({ title: 1 }).limit(5)
db.books.find().sort({ title: 1 }).skip(5).limit(5)
// aggregation pipelines
db.books.aggregate([
    {
        $group: {
            _id: "$author", 
            bookCount: { $sum: 1 } 
        }
    }
])

db.books.aggregate([
    {
        $group: {
            _id: "$genre", 
            averagePrice: { $avg: "$price" } 
        }
    },
    {
        $sort: { averagePrice: -1 } 
    }
])

db.books.aggregate([
    {
        $project: {
            // Calculate the decade: e.g., 1960 -> 1960, 1965 -> 1960
            decade: {
                $multiply: [
                    { $floor: { $divide: ["$published_year", 10] } }, // Divide by 10 and take the floor (e.g., 196.5 -> 196)
                    10 // Multiply by 10 to get the decade start (e.g., 196 * 10 = 1960)
                ]
            }
        }
    },
    {
        $group: {
            _id: "$decade", // Group documents by the newly created 'decade' field.
            bookCount: { $sum: 1 } // Count the number of books in each decade.
        }
    }
])
// creating an index on the title field
db.books.createIndex({ title: 1 });
// creating a compound index on Author and published year
db.books.createIndex({ author: 1, published_year: -1 });
// explaining the query using the title  index

db.books.find({ title: "The Great Gatsby" }).explain("executionStats");
// explainig the query using the Author and published year index
db.books.find({ author: "George Orwell", published_year: { $gt: 1940 } }).explain("executionStats");
    
    