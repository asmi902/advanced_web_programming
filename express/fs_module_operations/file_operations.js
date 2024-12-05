const fs = require('fs');

// 1. Create or Write to a File
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
    
    // 2. Read the File
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File contents:', data);

        // 3. Append to the File
        fs.appendFile('example.txt', '\nAppended text!', (err) => {
            if (err) throw err;
            console.log('Text appended successfully!');

            // 4. Delete the File (After creating a copy)
            fs.copyFile('example.txt', 'new_example.txt', (err) => {
                if (err) throw err;
                console.log('File copied to new_example.txt');

                fs.unlink('new_example.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted successfully!');
                });
            });
        });
    });
});
