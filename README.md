This project was developed and submitted to the **International Track of the Presidential Hackathon 2024**, hosted by the Ministry of Digital Affairs in Taiwan.

A team comprising Dr. Huw Whitworth (from Cranfield University) and several PhD students from the Open University collaborated to co-create solutions for smart agriculture, aligning with this year’s theme, "Digital and Green."

An integrated approach to managing data across these diverse groups bridges the information gap, supporting both traditional and innovative farmers as they adapt to evolving agricultural landscapes. To this end, we have developed a holistic system that aligns with six of the 17 United Nations Sustainable Development Goals (SDGs), namely SDG2 (_Zero Hunger_), SDG3 (_Good Health and Well-Being_), SDG7 (_Affordable and Clean Energy_), SDG10 (_Reduced Inequalities_), SDG13 (_Climate Action_) and SDG15 (_Life on Land_).

The devloped application is called Digital EMpowerment for Efficient TERrain management (DEMETER). We aim to achieve three key objectives by integrating essential functions that support sustainable and smart farming through a seamless, user-friendly interface. Built using the Django Framework, the system provides six distinct functionalities within this web application:

### Main Aims
- To develop a comprehensive agricultural dashboard leveraging Agricultural IoT data, machine learning, and language models to enhance decision-making in sustainable agriculture.
- To promote sustainable agricultural practices and consumption patterns by providing actionable insights into crop suitability, yield prediction, and carbon footprint awareness.
- To empower local farmers and communities by fostering collaboration through a marketplace app that encourages the use of local, seasonal produce and promotes environmental sustainability. 

### Six Functionalities
1. Crop Recommondation
2. Partner Cropping for Fertilizer Reduction
3. Yield Prediction
4. Community Market
5. Plowpal for Agriculture (Intelligent Chatbot)
6. Carbon Footprint Library

Users can refer to the Powerpoint slides for detailed introduction and demonstration.


-------------------------------------------------------------------------------------------------------------------------------------------------------
#### The breakdown functionalities matching the evalutation criteria are listed below:
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th>Name of the Functions</th>
      <th>Functionalities</th>
      <th>Categories</th>
      <th>Involved features matched the criteria</th>
      <th>Tasked improved and amended after the counselling meeting</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Crop Recommendations</td>
      <td>
        • Identifies the best crop to cultivate based on specific environmental and soil parameters by leveraging a LightGBM algorithm
        • System inputs include Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Rainfall, and Soil PH
        • Outputs a specific crop that is best suited for the environmental parameters
      </td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td>
        • Feasibility: Users are able to input their defined parameters to retrieve real-time recommendations, and this is also integrated into the Django framework.
        • Innovation: The LightGBM algorithm is employed in the analysis to give out recommendations with good accuracy.
        • Social Impact: An integrated agricultural dashboard is provided.
        • Implementation and Verification: The models are pre-trained and verified with high accuracy to give out the best recommendations to the local farmers.
      </td>
      <td>NaN</td>
    </tr>
    <!-- Repeat for each row in your data -->
  </tbody>
</table>
