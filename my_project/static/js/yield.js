/**Notes for myself 
 * Build a dict ({'Assam': 'Wheat', 'Karnataka': 'Wheat'})and define the dropdown function based on the index
 * Filter/toggle the cropname value based on the selection of the first one
 * 
*/
const parms = {
    state:[
    {   name:'Andhra Pradesh',
        crops:
            ['Arecanut', 'Arhar/Tur', 'Bajra', 'Banana', 'Cashewnut', 'Castor seed',     'Coconut ', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Ginger', 'Gram',  'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Mesta', 'Moong(Green    Gram)', 'Niger seed', 'Onion', 'Other  Rabi pulses', 'Other Kharif pulses',    'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sesamum', 'Small  millets', 'Sugarcane', 'Sunflower', 'Sweet potato', 'Tapioca', 'Tobacco',    'Urad', 'Wheat', 'Soyabean', 'other oilseeds', 'Garlic', 'Cowpea(Lobia)', 'Black   pepper', 'Sannhamp', 'Oilseeds total', 'Guar seed', 'Masoor']
        
    },
    {
        name: 'Arunachal Pradesh',
        crops:
            ['Arhar/Tur', 'Dry chillies', 'Ginger', 'Groundnut', 'Maize', 'Masoor', 'Moong(Green Gram)', 'Other  Rabi pulses', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sugarcane', 'Sunflower', 'Turmeric', 'Urad', 'Wheat', 'other oilseeds', 'Oilseeds total']
    },
    {
        name:'Assam',
        crops:
            ['Arecanut', 'Arhar/Tur', 'Castor seed', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Jute', 'Linseed', 'Maize', 'Mesta', 'Niger seed', 'Onion', 'Other  Rabi pulses', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Turmeric', 'Wheat', 'Banana', 'Masoor', 'Moong(Green Gram)', 'Peas & beans (Pulses)', 'Urad', 'Black pepper', 'Ginger']
    },
    {
        name:'Bihar',
        crops:
            ['Arhar/Tur', 'Bajra', 'Banana', 'Barley', 'Castor seed', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Ginger', 'Gram', 'Groundnut', 'Jowar', 'Jute', 'Linseed', 'Maize', 'Mesta', 'Niger seed', 'Onion', 'Other  Rabi pulses', 'Other Kharif pulses', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sannhamp', 'Sesamum', 'Small millets', 'Sugarcane', 'Sunflower', 'Sweet potato', 'Tobacco', 'Turmeric', 'Wheat', 'Urad', 'Horse-gram', 'Khesari', 'Masoor', 'Moong(Green Gram)', 'Peas & beans (Pulses)', 'Soyabean']
    },
    {
        name: 'Chhattisgarh',
        crops: 
            ['Arhar/Tur', 'Bajra', 'Barley', 'Castor seed', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Khesari', 'Linseed', 'Maize', 'Masoor', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Other  Rabi pulses', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sannhamp', 'Sesamum', 'Small millets', 'Soyabean', 'Sugarcane', 'Sunflower', 'Sweet potato', 'Tobacco', 'Turmeric', 'Urad', 'Wheat', 'Jute', 'Coconut ', 'Guar seed'], 'Delhi': ['Arhar/Tur', 'Bajra', 'Barley', 'Gram', 'Jowar', 'Maize', 'Other Kharif pulses', 'Potato', 'Rice', 'Sugarcane', 'Wheat', 'Cotton(lint)', 'Rapeseed &Mustard']
    },
    { 
        name: 'Goa',
        crops: 
            ['Arecanut', 'Banana', 'Black pepper', 'Cashewnut', 'Coconut ', 'Groundnut', 'Other  Rabi pulses', 'Other Kharif pulses', 'Ragi', 'Rice', 'Sugarcane', 'Sweet potato', 'other oilseeds'], 'Gujarat': ['Arhar/Tur', 'Bajra', 'Banana', 'Castor seed', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Gram', 'Groundnut', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Moth', 'Onion', 'Other  Rabi pulses', 'Other Kharif pulses', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sugarcane', 'Tobacco', 'Urad', 'Wheat', 'Oilseeds total', 'Other Cereals', 'Guar seed', 'Soyabean', 'other oilseeds']
    },
    {
        name:'Haryana',
        crops:
            ['Arhar/Tur', 'Bajra', 'Barley', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Jowar', 'Maize', 'Masoor', 'Moong(Green Gram)', 'Moth', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sannhamp', 'Sesamum', 'Sugarcane', 'Sunflower', 'Sweet potato', 'Urad', 'Wheat', 'Garlic', 'Ginger', 'Other Kharif pulses', 'Turmeric', 'Horse-gram', 'Banana', 'other oilseeds', 'Castor seed', 'Coriander', 'Other  Rabi pulses', 'Soyabean', 'Jute', 'Tobacco', 'Guar seed']
    },
    {
        name:'Himachal Pradesh',
        crops:
            ['Arhar/Tur', 'Bajra', 'Barley', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Linseed', 'Maize', 'Masoor', 'Moong(Green Gram)', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Tobacco', 'Turmeric', 'Urad', 'Wheat', 'Sugarcane', 'Jowar', 'Other Kharif pulses', 'Onion', 'Other  Rabi pulses', 'Sannhamp', 'Sweet potato', 'Moth', 'Ragi'], 'Jammu and Kashmir': ['Arhar/Tur', 'Barley', 'Garlic', 'Gram', 'Linseed', 'Masoor', 'Onion', 'Other  Rabi pulses', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Urad', 'Wheat', 'other oilseeds', 'Bajra', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Ginger', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Moth', 'Other Cereals', 'Other Kharif pulses', 'Rice', 'Sannhamp', 'Sesamum', 'Small millets', 'Sugarcane', 'Tobacco', 'Turmeric', 'Coriander', 'Ragi'], 'Jharkhand': ['Arhar/Tur', 'Gram', 'Maize', 'Masoor', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Wheat', 'Barley', 'Onion', 'Sugarcane', 'Peas & beans (Pulses)', 'Urad', 'Bajra', 'Castor seed', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Moong(Green Gram)', 'Niger seed', 'Other  Rabi pulses', 'Other Kharif pulses', 'Safflower', 'Sesamum', 'Soyabean', 'Sunflower'], 'Karnataka': ['Arecanut', 'Arhar/Tur', 'Bajra', 'Black pepper', 'Cardamom', 'Coriander', 'Dry chillies', 'Garlic', 'Ginger', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Ragi', 'Rice', 'Sugarcane', 'Turmeric', 'Wheat', 'Castor seed', 'Coconut ', 'Cotton(lint)', 'Gram', 'Linseed', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Safflower', 'Sesamum', 'Soyabean', 'Sunflower', 'Banana', 'Mesta', 'Other  Rabi pulses', 'Other Kharif pulses', 'Sannhamp', 'Small millets', 'Sweet potato', 'Tapioca', 'Tobacco', 'Urad', 'Cashewnut', 'Cowpea(Lobia)']
    },
    {    
        name:'Kerala',
        crops: 
            ['Arecanut', 'Black pepper', 'Cashewnut', 'Coconut ', 'Tapioca', 'Banana', 'Cardamom', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Ginger', 'Groundnut', 'Jowar', 'Ragi', 'Rice', 'Sesamum', 'Sugarcane', 'Sweet potato', 'Tobacco', 'Turmeric', 'other oilseeds', 'Small millets', 'Other Cereals', 'Potato', 'Arhar/Tur', 'Cowpea(Lobia)', 'Horse-gram', 'Maize', 'Moong(Green Gram)', 'Onion', 'Soyabean', 'Urad', 'Wheat', 'Other Kharif pulses', 'Gram', 'Other  Rabi pulses', 'Sunflower'],
    },
    {
        name:'Madhya Pradesh',
        crops: 
            ['Arhar/Tur', 'Bajra', 'Barley', 'Cotton(lint)', 'Groundnut', 'Jowar', 'Linseed', 'Maize', 'Rapeseed &Mustard', 'Sesamum', 'Small millets', 'Soyabean', 'Sunflower', 'Wheat', 'Gram', 'Rice', 'Sugarcane', 'Castor seed', 'Coriander', 'Dry chillies', 'Garlic', 'Ginger', 'Niger seed', 'Onion', 'Other  Rabi pulses', 'Other Kharif pulses', 'Potato', 'Ragi', 'Safflower', 'Sannhamp', 'Sweet potato', 'Turmeric', 'Urad', 'Banana', 'Tobacco', 'Cashewnut', 'Horse-gram', 'Masoor', 'Mesta', 'Moong(Green Gram)', 'Peas & beans (Pulses)', 'Jute', 'Khesari', 'Cowpea(Lobia)', 'Other Cereals'], 
     },
    {
        name:'Maharashtra',
        crops: 
            ['Arhar/Tur', 'Bajra', 'Cotton(lint)', 'Gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Other  Rabi pulses', 'Ragi', 'Rice', 'Sugarcane', 'Urad', 'Wheat', 'Castor seed', 'Groundnut', 'Linseed', 'Niger seed', 'Other Cereals', 'Other Kharif pulses', 'Rapeseed &Mustard', 'Safflower', 'Sesamum', 'Soyabean', 'Sunflower', 'Small millets', 'Banana', 'Onion', 'other oilseeds', 'Tobacco', 'Other Summer Pulses'], 
     },
    {
        name: 'Manipur',
        crops: 
            ['Arhar/Tur', 'Banana', 'Cashewnut', 'Dry chillies', 'Ginger', 'Maize', 'Onion', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Soyabean', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Turmeric', 'Cowpea(Lobia)', 'Gram', 'Groundnut', 'Masoor', 'Moong(Green Gram)', 'Other  Rabi pulses', 'Potato', 'Urad', 'Wheat', 'Cotton(lint)', 'Jute'], 
     },
    {
        name:'Meghalaya',
        crops: 
            ['Arecanut', 'Arhar/Tur', 'Banana', 'Castor seed', 'Cotton(lint)', 'Dry chillies', 'Ginger', 'Gram', 'Jute', 'Linseed', 'Maize', 'Mesta', 'Other  Rabi pulses', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sugarcane', 'Sweet potato', 'Tapioca', 'Tobacco', 'Turmeric', 'Wheat', 'Cashewnut', 'Black pepper', 'Coriander', 'Garlic', 'Masoor', 'Peas & beans (Pulses)', 'Cowpea(Lobia)', 'Onion'], 
    'Mizoram': 
        ['Arhar/Tur', 'Coconut ', 'Groundnut', 'Maize', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Soyabean', 'Sugarcane', 'Sunflower', 'Tapioca', 'Tobacco', 'Wheat', 'Cotton(lint)', 'Masoor', 'Other  Rabi pulses', 'Other Kharif pulses', 'Potato', 'Moong(Green Gram)', 'Urad', 'Gram', 'Cowpea(Lobia)', 'Onion', 'other oilseeds'], 'Nagaland': ['Arhar/Tur', 'Bajra', 'Castor seed', 'Cotton(lint)', 'Gram', 'Groundnut', 'Jowar', 'Jute', 'Linseed', 'Maize', 'Moong(Green Gram)', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Soyabean', 'Sugarcane', 'Sunflower', 'Barley', 'Niger seed', 'Other  Rabi pulses', 'Other Kharif pulses', 'Small millets', 'Wheat', 'Masoor', 'Cardamom', 'Ginger', 'Urad', 'Dry chillies', 'Tapioca', 'Turmeric', 'Mesta', 'Ragi', 'Horse-gram', 'Sweet potato', 'Cowpea(Lobia)', 'other oilseeds', 'Other Cereals'], 
     },
    {
        name:'Odisha',
        crops: 
            ['Arhar/Tur', 'Groundnut', 'Horse-gram', 'Jute', 'Maize', 'Potato', 'Ragi', 'Sesamum', 'Sugarcane', 'Urad', 'Wheat', 'Bajra', 'Castor seed', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Ginger', 'Gram', 'Jowar', 'Linseed', 'Masoor', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Onion', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sannhamp', 'Small millets', 'Soyabean', 'Sunflower', 'Sweet potato', 'Tobacco', 'Turmeric', 'Other  Rabi pulses', 'Other Kharif pulses', 'Cowpea(Lobia)', 'Peas & beans (Pulses)'], 'Puducherry': ['Arecanut', 'Bajra', 'Black pepper', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Groundnut', 'Onion', 'Ragi', 'Rice', 'Sesamum', 'Small millets', 'Sugarcane', 'Tapioca', 'Banana', 'Cashewnut', 'Coconut ', 'Ginger', 'Jowar', 'Moong(Green Gram)', 'Other  Rabi pulses', 'Rapeseed &Mustard', 'Urad', 'Sunflower', 'Sweet potato', 'Turmeric', 'Other Kharif pulses', 'Tobacco', 'Other Summer Pulses', 'Other Cereals'], 
     },
    {
        name:'Punjab',
        crops: 
            ['Arhar/Tur', 'Bajra', 'Barley', 'Cotton(lint)', 'Gram', 'Groundnut', 'Maize', 'Masoor', 'Moong(Green Gram)', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Sugarcane', 'Urad', 'Wheat', 'Linseed', 'Peas & beans (Pulses)', 'Moth', 'Other  Rabi pulses', 'Guar seed', 'Sunflower', 'Jowar', 'other oilseeds'],
        
     },
    {
        name:'Sikkim',
        crops: 
            ['Barley', 'Maize', 'Other  Rabi pulses', 'Rapeseed &Mustard', 'Rice', 'Small millets', 'Soyabean', 'Urad', 'Wheat', 'Other Cereals', 'Other Kharif pulses', 'other oilseeds', 'Potato'],
     },
    {
        name:'Tamil Nadu',
        crops: 
            ['Arecanut', 'Arhar/Tur', 'Bajra', 'Banana', 'Cashewnut', 'Castor seed', 'Coconut ', 'Coriander', 'Cotton(lint)', 'Dry chillies', 'Garlic', 'Ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong(Green Gram)', 'Onion', 'Other Kharif pulses', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Sugarcane', 'Sunflower', 'Sweet potato', 'Tapioca', 'Tobacco', 'Turmeric', 'Urad', 'Black pepper', 'Cardamom', 'Niger seed', 'Mesta', 'Sannhamp', 'Soyabean', 'Jute', 'Masoor', 'Other Cereals', 'Cowpea(Lobia)', 'Other  Rabi pulses', 'Guar seed'], 
    },
    {
        name:'Telangana',
        crops: 
            ['Arhar/Tur', 'Bajra', 'Banana', 'Cashewnut', 'Castor seed', 'Coconut ', 'Coriander', 'Cotton(lint)', 'Cowpea(Lobia)', 'Dry chillies', 'Ginger', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Linseed', 'Maize', 'Masoor', 'Mesta', 'Moong(Green Gram)', 'Onion', 'Other  Rabi pulses', 'Other Kharif pulses', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sesamum', 'Small millets', 'Soyabean', 'Sugarcane', 'Sunflower', 'Sweet potato', 'Tobacco', 'Turmeric', 'Urad', 'Wheat', 'other oilseeds', 'Garlic']
    },
    {
        name: 'Tripura',
        crops: 
            ['Arhar/Tur', 'Cotton(lint)', 'Gram', 'Groundnut', 'Jute', 'Maize', 'Masoor', 'Mesta', 'Moong(Green Gram)', 'Other  Rabi pulses', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Sugarcane', 'Urad', 'Wheat', 'Cowpea(Lobia)', 'Soyabean', 'Jowar', 'Linseed', 'Small millets', 'Khesari', 'other oilseeds', 'Potato'], 
    },
    {
       name:'Uttar Pradesh',
       crops:
            ['Arhar/Tur', 'Bajra', 'Barley', 'Castor seed', 'Gram', 'Groundnut', 'Jowar', 'Linseed', 'Maize', 'Masoor', 'Moong(Green Gram)', 'Moth', 'Onion', 'Peas & beans (Pulses)', 'Potato', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sugarcane', 'Sunflower', 'Urad', 'Wheat', 'Cotton(lint)', 'Jute', 'Ragi', 'Sannhamp', 'Tobacco', 'Turmeric', 'Banana', 'Coriander', 'Dry chillies', 'Garlic', 'Ginger', 'Guar seed', 'Other  Rabi pulses', 'Other Kharif pulses', 'Sweet potato'], 'Uttarakhand': ['Arhar/Tur', 'Bajra', 'Barley', 'Garlic', 'Gram', 'Groundnut', 'Horse-gram', 'Linseed', 'Maize', 'Masoor', 'Moong(Green Gram)', 'Moth', 'Onion', 'Other  Rabi pulses', 'Other Cereals', 'Other Kharif pulses', 'Peas & beans (Pulses)', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Sesamum', 'Small millets', 'Soyabean', 'Sugarcane', 'Sunflower', 'Tobacco', 'Turmeric', 'Urad', 'Wheat', 'other oilseeds', 'Sannhamp', 'Jowar', 'Dry chillies', 'Other Summer Pulses']
    },
    {
        name:'West Bengal',
        crops: 
            ['Arecanut', 'Arhar/Tur', 'Bajra', 'Barley', 'Cardamom', 'Castor seed', 'Coconut ', 'Cotton(lint)', 'Dry chillies', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Jute', 'Khesari', 'Linseed', 'Maize', 'Masoor', 'Mesta', 'Moong(Green Gram)', 'Niger seed', 'Other Kharif pulses', 'Potato', 'Ragi', 'Rapeseed &Mustard', 'Rice', 'Safflower', 'Sannhamp', 'Sesamum', 'Small millets', 'Soyabean', 'Sugarcane', 'Sunflower', 'Turmeric', 'Urad', 'Wheat', 'Ginger', 'Peas & beans (Pulses)', 'Tobacco', 'Garlic', 'Other  Rabi pulses', 'Moth']
    }]
}

const seasons = ['summer','rabi','autumn','kharif','winter','wholeyear']


const stateNames = [];
const allCrops = [];

// Iterating through each state to populate the lists
parms.state.forEach(state => {
    stateNames.push(state.name);           // Extract state name
    allCrops.push(...state.crops);         // Spread operator to extract crops
});


// Get the dropdown element by its ID
const season_dropdown = document.getElementById('seasonDropdown');

// Populate state dropdown
const stateSelect = document.getElementById('locationDropdown');

parms.state.forEach(state => {
    const option = document.createElement('option');
    option.value = state.name; // Use state name as the value
    option.textContent = state.name; // Display state name
    stateSelect.appendChild(option);
});

// Event listener for state selection
stateSelect.addEventListener('change', function() {
    const selectedState = this.value; // Get selected state
    const cropSelect = document.getElementById('cropDropdown');

    // Clear previous crop options
    cropSelect.innerHTML = '<option value="">--Select a Crop--</option>';
    cropSelect.disabled = true; // Disable crop selection initially

    // Find the selected state's crops
    const state = parms.state.find(s => s.name === selectedState);
    if (state) {
        // Enable the crop selection dropdown
        cropSelect.disabled = false;
        
        // Populate the crops based on the selected state
        state.crops.forEach(crop => {
            const option = document.createElement('option');
            option.value = crop; // Use crop name as the value
            option.textContent = crop; // Display crop name
            cropSelect.appendChild(option);
        });
    }
});


//Loop through the array of names
seasons.forEach(season => {
    // Create a new <option> element
    let option = document.createElement('option');
    // Set the value attribute
    option.value = season;
    // Set the text inside the option
    option.textContent = season;
    // Add the <option> to the dropdown
    season_dropdown.appendChild(option);
});


