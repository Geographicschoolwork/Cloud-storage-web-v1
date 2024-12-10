// Function to handle file upload
function uploadFile() {
    let fileInput = document.getElementById('file-input');
    let file = fileInput.files[0];  // Get the first file selected
    
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    // Simulating the process of saving the file in local storage (or a database)
    saveFileToLocal(file);
}

// Save the file in local storage (client-side only)
function saveFileToLocal(file) {
    // Create a unique key for the file in localStorage (could be based on user login)
    const fileKey = 'user-file-' + new Date().getTime(); 

    // Create a file object to store in localStorage (as a base64 string)
    let reader = new FileReader();
    reader.onload = function (e) {
        // Save the file as a base64 string in localStorage
        localStorage.setItem(fileKey, e.target.result);
        
        // Display file details after saving
        document.getElementById('file-details').innerHTML = `
            <p>File Uploaded: ${file.name}</p>
            <p>File Type: ${file.type}</p>
            <p>File Size: ${file.size / 1024} KB</p>
        `;
    };
    reader.readAsDataURL(file);  // Convert the file to base64
}

// Optionally, you could display all uploaded files stored in localStorage
function displayUploadedFiles() {
    let uploadedFiles = [];
    for (let i = 0; i < localStorage.length; i++) {
        let fileKey = localStorage.key(i);
        let fileData = localStorage.getItem(fileKey);
        uploadedFiles.push({ key: fileKey, data: fileData });
    }

    // Display list of files (if needed)
    console.log(uploadedFiles);
}