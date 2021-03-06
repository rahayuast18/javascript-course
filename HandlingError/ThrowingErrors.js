{
    let json = '{ "name": "Yoda", "age": 20 }';
 
    try {
        let user = JSON.parse(json);
    
        console.log(user.name);
        console.log(user.age);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

// ----------------------------------------------------
{
    let json = '{ "age": 20 }';
 
    try {
        let user = JSON.parse(json);
     
        if (!user.name) {
            throw new SyntaxError("'name' is required.");
        }
     
        console.log(user.name); // undefined
        console.log(user.age);  // 20
    } catch (error) {
        console.log(`JSON Error: ${error.message}`);
    }
}

// ----------------------------------------------------
{
    try {
        let user2 = JSON.parse(json);
     
        if (!user2.name) {
            throw new SyntaxError("'name' is required.");
        }
     
        console.log(user2.name); // undefined
        console.log(user2.age);  // 20
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log(`JSON Error: ${error.message}`);
        } else if (error instanceof ReferenceError) {
            console.log(error.message);
        } else {
            console.log(error.stack);
        }
    }
}