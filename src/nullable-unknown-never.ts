const searchName =(value:string | null) => {
    if (value === null){
        console.log("value is null")
    }
    else {
        console.log("value is not null")
    }

    }

    searchName("Alice")

    const  searchName2 = (value:unknown) => {
        if (typeof value === "string"){
            console.log("value is string")
        }
        else {
            console.log("value is not string")
        }
    }
    searchName2("Alice")
    searchName2(2)
