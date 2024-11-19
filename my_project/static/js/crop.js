// Assume `selectedCrop` is passed from the server as a JavaScript variable
const data = document.currentScript.dataset; // Accessing dataset from the script tag
//const selectedCrop = data.result; // Replace 'result' with your actual data attribute name

// Filter the table on page load based on `selectedCrop`
//document.addEventListener('DOMContentLoaded', (event) => {
//  filterTable(selectedCrop); // Call the filter function
//  document.getElementById('companionTable').style.display = 'table'; // Show the table after filtering
//});
//
//function filterTable(crop) {
//  const rows = document.getElementById('companionTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
//  for (let i = 0; i < rows.length; i++) {
//    const cropCell = rows[i].getElementsByTagName('td')[0]; // Crop Name is in the first cell
//    if (cropCell) {
//      if (cropCell.textContent === crop || crop === '') {
//        rows[i].classList.remove('hidden'); // Show the row if it matches
//      } else {
//        rows[i].classList.add('hidden'); // Hide the row if it doesn’t match
//      }
//    }
//  }
//}


const keyword = data.result; 
// Filter the table on page load based on `keyword`
document.addEventListener('DOMContentLoaded', () => {
    if (keyword) {
      filterTable(keyword.toLowerCase());
      document.getElementById('companionTable').style.display = 'table'; // Show table after filtering
    }
  });

function filterTable(keyword) {
  const rows = document.getElementById('companionTable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    let rowContainsKeyword = false;
    
     // Check if any cell contains the keyword, excluding column 4
    for (let j = 0; j < cells.length; j++) {
       if (j === 4) continue; // Skip the middle column (index 4)

       const cellText = cells[j].textContent.toLowerCase();
       if (cellText.includes(keyword)) {
         rowContainsKeyword = true;
         break; // Stop searching within this row if a match is found
       }
     }


    if (rowContainsKeyword) {
      rows[i].classList.remove('hidden'); // Show the row if it matches
    } else {
      rows[i].classList.add('hidden'); // Hide the row if it doesn’t match
    }
  }
};
