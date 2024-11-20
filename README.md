This project was developed and submitted to the **International Track of the Presidential Hackathon 2024**, hosted by the Ministry of Digital Affairs in Taiwan.

A team comprising Dr. Huw Whitworth (from Cranfield University) and several PhD students from the Open University collaborated to co-create solutions for smart agriculture, aligning with this year’s theme, "Digital and Green."

An integrated approach to managing data across these diverse groups bridges the information gap, supporting both traditional and innovative farmers as they adapt to evolving agricultural landscapes. To this end, we have developed a holistic system that aligns with six of the 17 United Nations Sustainable Development Goals (SDGs), namely SDG2 (_Zero Hunger_), SDG3 (_Good Health and Well-Being_), SDG7 (_Affordable and Clean Energy_), SDG10 (_Reduced Inequalities_), SDG13 (_Climate Action_) and SDG15 (_Life on Land_).

The devloped application is called Digital EMpowerment for Efficient TERrain management (DEMETER). We aim to achieve three key objectives by integrating essential functions that support sustainable and smart farming through a seamless, user-friendly interface. Built using the Django Framework, the system provides six distinct functionalities within this web application:

### Main Aims
- To develop a comprehensive agricultural dashboard leveraging Agricultural IoT data, machine learning, and language models to enhance decision-making in sustainable agriculture.
- To promote sustainable agricultural practices and consumption patterns by providing actionable insights into crop suitability, yield prediction, and carbon footprint awareness.
- To empower local farmers and communities by fostering collaboration through a marketplace app that encourages the use of local, seasonal produce and promotes environmental sustainability. 

### Six Functions
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
        • Identifies the best crop to cultivate based on specific environmental and soil parameters by leveraging a LightGBM algorithm<br>
        • System inputs include Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Rainfall, and Soil PH<br>
        • Outputs a specific crop that is best suited for the environmental parameters
      </td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td>
        • Feasibility: Users are able to input their defined parameters to retrieve real-time recommendations, and this is also integrated into the Django framework.<br>
        • Innovation: The LightGBM algorithm is employed in the analysis to give out recommendations with good accuracy.<br>
        • Social Impact: An integrated agricultural dashboard is provided.<br>
        • Implementation and Verification: The models are pre-trained and verified with high accuracy to give out the best recommendations to the local farmers.
      </td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>Partner Cropping for Sustainable Agriculture</td>
      <td>
        • Supports farmers in selecting the best companion crops for a chosen primary crop.<br>
        • By recommending compatible crops, the system aids in optimizing crop yields, reducing pest populations naturally, and enhancing soil quality through sustainable agricultural practices.<br>
        • Integrates SQL query functionality within the crop recommendation dashboard.
      </td>
      <td>Feasibility, Innovation, Social Impact</td>
      <td>
        • Feasibility: Users can input their defined parameters to retrieve real-time recommendations, integrated into the Django framework.<br>
        • Innovation: This idea helps optimize crop yields to foster sustainable agriculture.<br>
        • Social Impact: Provides educational tools for farmers to grow efficiently with compatible crops, benefiting the community and reducing costs.
      </td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>Yield Prediction</td>
      <td>
        • Provides users with accessible, accurate, and adaptable crop yield predictions.<br>
        • Facilitates real-time yield forecasting, scenario planning, historical performance analysis, and data integration.<br>
        • Predictions are based on localized, regional, and crop-specific Random Forest models.
      </td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td>
        • Feasibility: Supports input of parameters for real-time recommendations within the Django framework.<br>
        • Innovation: Allows accessible predictions for cost optimization before farming.<br>
        • Social Impact: Helps new farmers balance profit and cost efficiently.
      </td>
      <td>
        During counseling, we adapted the solution to better match local-scale implementation. Models are trained regionally for accurate, localized recommendations.
      </td>
    </tr>
    <tr>
      <td>Community Market</td>
      <td>
        • Operates as a platform empowering local producers to create and manage community shops.<br>
        • Includes a “What’s In Season” feature to connect local ingredients with a community recipe database.<br>
        • Promotes seasonal, sustainable eating and supports local businesses.
      </td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td>
        • Feasibility: Accessible from the backend and frontend, enriching the existing database.<br>
        • Innovation: Connects demand and supply at the community scale.<br>
        • Social Impact: Promotes local industries and reduces transportation-related carbon footprints.
      </td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>PlowPal for Agriculture (Intelligent Chatbot)</td>
      <td>
        • PlowPal is an intelligent chatbot integrating academic research with real-world agricultural practices.<br>
        • Offers real-time, actionable advice across all stages of the farming process.<br>
        • Translates complex scientific insights into practical, on-the-ground solutions using an LLM-augmented RAG model.
      </td>
      <td>Feasibility, Implementation and Verification, Innovation, Social Impact</td>
      <td>
        • Feasibility: Supports real-time responses integrated into the Django framework.<br>
        • Innovation: LLM Augmented RAG model ensures accurate, real-time responses.<br>
        • Social Impact: Bridges the knowledge gap and empowers farmers with practical solutions.
      </td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>Carbon Footprint Library</td>
      <td>
        • Integrates carbon footprint data from global and local databases.<br>
        • Includes a search tool to look up CO2 emissions at each agricultural stage.<br>
        • Includes annual records of food GHG emissions across multiple countries, based on EU data.
      </td>
      <td>Feasibility, Innovation, Social Impact</td>
      <td>
        • Feasibility: Allows users to look up carbon footprint data easily.<br>
        • Innovation: Consolidates data from various databases to address gaps in agricultural footprint information.<br>
        • Social Impact: Educates local farmers on the impact of agriculture on carbon emissions.
      </td>
      <td>
        Simplified the dashboard for better usability by farmers, reducing dropdown menus and enhancing clarity.
      </td>
    </tr>
  </tbody>
</table>

