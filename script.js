document.getElementById('trelloForm').addEventListener('submit', function(e) {e.preventDefault();
    
    // Get values from the form
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;

    // Trello API credentials (replace with your actual API key, token, and list ID)
    const apiKey = '41ff78b948f71ee9005f566ffceab233'; // Replace with your Trello API key
    const apiToken = 'ATTAef6b6b605f61d4a94bfaf2879cd3fb482abd3ca357e24587f73454490b7dbfcbFC72E42B'; // Replace with your Trello token
    const listId = '67997574dbeb9aa9838e51cf'; // Replace with the ID of the Trello list

    const url = https://api.trello.com/1/cards?key=${apiKey}&token=${apiToken};

    const data = {
      name: taskTitle,
      desc: taskDescription,
      idList: listId,
    };

    // Make the API request to Trello to create the card
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Card created:', data);
      alert('Success! Your request was successfuly logged.');
      document.getElementById('trelloForm').reset(); // Reset the form after submission
    })
    .catch(error => {
      console.error('Error creating card:', error);
      alert('An error occurred. Please try again.');
    });
  });